import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LangProvider } from "../context/LangContext";
import ContactPage from "./ContactPage";

function renderPage() {
  return render(
    <MemoryRouter initialEntries={["/contact"]}>
      <LangProvider>
        <ContactPage />
      </LangProvider>
    </MemoryRouter>
  );
}

describe("ContactPage form", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => Promise.resolve({ ok: true } as Response))
    );
  });

  it("marks name, email, and message as required", () => {
    renderPage();
    expect(screen.getByLabelText(/الاسم/)).toBeRequired();
    expect(screen.getByLabelText(/البريد الإلكتروني/)).toBeRequired();
    expect(screen.getByLabelText(/تفاصيل المشروع/)).toBeRequired();
  });

  it("submits successfully and shows a success message", async () => {
    renderPage();
    fireEvent.change(screen.getByLabelText(/الاسم/), { target: { value: "Rady" } });
    fireEvent.change(screen.getByLabelText(/البريد الإلكتروني/), {
      target: { value: "rady@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/تفاصيل المشروع/), {
      target: { value: "Need a website" },
    });
    fireEvent.click(screen.getByRole("button", { name: /إرسال/ }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        "/api/contact",
        expect.objectContaining({ method: "POST" })
      );
    });
  });

  it("silently short-circuits when the honeypot field is filled (bot)", async () => {
    const { container } = renderPage();
    const honeypot = container.querySelector<HTMLInputElement>('input[name="company_website"]')!;
    fireEvent.change(honeypot, { target: { value: "http://spam.example" } });

    fireEvent.change(screen.getByLabelText(/الاسم/), { target: { value: "Bot" } });
    fireEvent.change(screen.getByLabelText(/البريد الإلكتروني/), {
      target: { value: "bot@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/تفاصيل المشروع/), { target: { value: "spam" } });
    fireEvent.click(screen.getByRole("button", { name: /إرسال/ }));

    await waitFor(() => {
      expect(fetch).not.toHaveBeenCalled();
    });
  });
});
