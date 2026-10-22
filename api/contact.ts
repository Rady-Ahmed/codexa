import type { VercelRequest, VercelResponse } from "@vercel/node";

interface ContactPayload {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

// Best-effort in-memory rate limiter. Serverless functions are stateless
// across cold starts and don't share memory across concurrent instances,
// so this only throttles a single warm instance — it stops naive repeat
// submissions and basic scripted abuse, not a determined attacker.
// For real production-scale protection, swap this for Upstash Redis
// (or Vercel KV) keyed by IP with the same window/limit logic.
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);
  return timestamps.length > MAX_REQUESTS;
}

function getClientIp(req: VercelRequest): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") return forwarded.split(",")[0].trim();
  return req.socket?.remoteAddress ?? "unknown";
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Too many requests, try again later" });
  }

  const { name, email, projectType, message } = (req.body ?? {}) as ContactPayload;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  // Forward the lead. Two options, both optional and env-gated:
  // 1) NOTIFY_WEBHOOK_URL — Slack/Discord incoming webhook
  // 2) RESEND_API_KEY + NOTIFY_EMAIL_TO — transactional email via Resend
  const webhookUrl = process.env.NOTIFY_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmailTo = process.env.NOTIFY_EMAIL_TO;

  const summary = `New Codexa lead\nName: ${name}\nEmail: ${email}\nType: ${projectType ?? "-"}\nMessage: ${message}`;

  try {
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: summary }),
      });
    }
    if (resendKey && notifyEmailTo) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Codexa <onboarding@resend.dev>",
          to: notifyEmailTo,
          subject: `New lead — ${name}`,
          text: summary,
        }),
      });
    }
    if (!webhookUrl && !resendKey) {
      console.log("New contact submission:", { name, email, projectType, message });
    }
  } catch (err) {
    console.error("Failed to forward lead", err);
  }

  return res.status(200).json({ ok: true });
}
