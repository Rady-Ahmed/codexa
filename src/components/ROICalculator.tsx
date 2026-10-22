import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const dict = {
  ar: {
    eyebrow: "اكتشف القيمة",
    title: "حاسبة العائد على الاستثمار (ROI)",
    subtitle: "احسب حجم الأموال والوقت المهدر سنوياً بسبب غياب الأتمتة واعتمادك على أنظمة تقليدية.",
    employees: "عدد الموظفين",
    salary: "متوسط الراتب الشهري للموظف (دولار)",
    wastedHours: "ساعات العمل اليدوي الضائعة أسبوعياً",
    monthlyLoss: "الخسارة الشهرية المقدرة",
    annualLoss: "التوفير السنوي المتوقع بعد الأتمتة",
    disclaimer: "هذه الحسابات تقديرية وتعتمد على تحويل ساعات العمل المهدرة في المهام اليدوية إلى قيمة مالية.",
    usd: "$"
  },
  en: {
    eyebrow: "Discover Value",
    title: "ROI Calculator",
    subtitle: "Calculate the time and money wasted annually due to lack of automation and outdated systems.",
    employees: "Number of Employees",
    salary: "Average Monthly Salary (USD)",
    wastedHours: "Wasted Manual Hours / Week",
    monthlyLoss: "Estimated Monthly Loss",
    annualLoss: "Expected Annual Savings",
    disclaimer: "These calculations are estimates based on converting wasted manual hours into financial value.",
    usd: "$"
  }
};

export default function ROICalculator() {
  const { lang } = useLang();
  const t = dict[lang];

  const [employees, setEmployees] = useState(10);
  const [salary, setSalary] = useState(1000);
  const [wastedHours, setWastedHours] = useState(10);

  // Calculation Logic
  // Weekly wasted hours per employee * 4 weeks = Monthly wasted hours per employee
  // Hourly wage = Monthly Salary / 160 (assuming 40hr work week)
  // Monthly loss = (Wasted hours * 4) * (Salary / 160) * Employees
  
  const hourlyWage = salary / 160;
  const monthlyWastedHoursPerEmployee = wastedHours * 4;
  const monthlyLoss = Math.round(monthlyWastedHoursPerEmployee * hourlyWage * employees);
  const annualSavings = monthlyLoss * 12;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat(lang === 'ar' ? 'ar-EG' : 'en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="mx-auto max-w-5xl px-5 py-24">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <Reveal delay={0.2} className="mt-16">
        <div className="grid gap-12 lg:grid-cols-2 rounded-3xl border border-(--color-border) bg-white/[0.015] p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden">
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-(--color-indigo)/10 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-(--color-cyan)/10 blur-[80px] pointer-events-none" />

          {/* Inputs Section */}
          <div className="relative z-10 flex flex-col justify-center gap-8 border-b lg:border-b-0 lg:border-e border-(--color-border) pb-10 lg:pb-0 lg:pe-10 rtl:lg:border-e-0 rtl:lg:border-s rtl:lg:ps-10">
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-(--color-ink)">{t.employees}</label>
                <span className="text-(--color-cyan) font-bold">{employees}</span>
              </div>
              <input 
                type="range" min="1" max="100" 
                value={employees} onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-(--color-cyan)"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-(--color-ink)">{t.salary}</label>
                <span className="text-(--color-cyan) font-bold">{formatCurrency(salary)}</span>
              </div>
              <input 
                type="range" min="500" max="5000" step="100"
                value={salary} onChange={(e) => setSalary(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-(--color-cyan)"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-(--color-ink)">{t.wastedHours}</label>
                <span className="text-(--color-cyan) font-bold">{wastedHours}</span>
              </div>
              <input 
                type="range" min="1" max="40" 
                value={wastedHours} onChange={(e) => setWastedHours(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-(--color-cyan)"
              />
            </div>

          </div>

          {/* Results Section */}
          <div className="relative z-10 flex flex-col justify-center gap-8">
            <div className="rounded-2xl bg-white/5 p-6 border border-white/5">
              <h3 className="text-sm font-medium text-(--color-muted) mb-2">{t.monthlyLoss}</h3>
              <motion.div 
                key={monthlyLoss}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-red-400"
              >
                {formatCurrency(monthlyLoss)}
              </motion.div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-(--color-indigo)/20 to-(--color-cyan)/20 p-6 border border-(--color-cyan)/30 shadow-[0_0_30px_rgba(34,211,238,0.15)] relative overflow-hidden">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
              
              <h3 className="text-sm font-medium text-(--color-cyan) mb-2">{t.annualLoss}</h3>
              <motion.div 
                key={annualSavings}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="text-5xl sm:text-6xl font-black text-(--color-ink) tracking-tight drop-shadow-sm"
              >
                {formatCurrency(annualSavings)}
              </motion.div>
            </div>

            <p className="text-xs text-(--color-muted-2) text-center italic mt-2">
              {t.disclaimer}
            </p>
          </div>

        </div>
      </Reveal>
    </section>
  );
}
