"use client"

import Link from "next/link"
import {
  CheckCircle,
  Sparkles,
  BarChart3,
  Target,
  FileSpreadsheet,
  Headphones,
  ArrowRight,
} from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"

const unlockedFeatures = [
  { icon: <BarChart3 className="h-4 w-4" />, label: "Relatórios avançados" },
  { icon: <Target className="h-4 w-4" />, label: "Metas financeiras ilimitadas" },
  { icon: <FileSpreadsheet className="h-4 w-4" />, label: "Exportação Excel e PDF" },
  { icon: <Headphones className="h-4 w-4" />, label: "Suporte prioritário" },
  { icon: <Sparkles className="h-4 w-4" />, label: "Inteligência financeira IA" },
]

export default function SuccessPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-bg px-4 py-12 overflow-hidden">
      {/* Confetti-like decorative elements (CSS only) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top-left cluster */}
        <div className="absolute top-[10%] left-[15%] h-3 w-3 rotate-45 rounded-sm bg-accent/30 animate-float" />
        <div className="absolute top-[8%] left-[22%] h-2 w-2 rounded-full bg-accent2/40 animate-float-slow" />
        <div className="absolute top-[14%] left-[10%] h-2.5 w-1 rotate-12 rounded-full bg-accent3/30 animate-float-reverse" />

        {/* Top-right cluster */}
        <div className="absolute top-[12%] right-[18%] h-2 w-2 rotate-12 rounded-sm bg-accent2/30 animate-float-reverse" />
        <div className="absolute top-[6%] right-[12%] h-3 w-1 rotate-45 rounded-full bg-accent/40 animate-float-slow" />
        <div className="absolute top-[16%] right-[25%] h-2 w-2 rounded-full bg-accent3/35 animate-float" />

        {/* Mid-left */}
        <div className="absolute top-[30%] left-[8%] h-2 w-2 rounded-full bg-accent/25 animate-float-slow" />
        <div className="absolute top-[40%] left-[5%] h-1.5 w-3 -rotate-12 rounded-full bg-accent2/30 animate-float" />

        {/* Mid-right */}
        <div className="absolute top-[35%] right-[6%] h-2.5 w-2.5 rotate-45 rounded-sm bg-accent/20 animate-float-reverse" />
        <div className="absolute top-[45%] right-[10%] h-2 w-1 rotate-30 rounded-full bg-accent3/25 animate-float-slow" />

        {/* Bottom scattered */}
        <div className="absolute bottom-[20%] left-[20%] h-2 w-2 rotate-45 rounded-sm bg-accent2/25 animate-float" />
        <div className="absolute bottom-[15%] right-[20%] h-3 w-1.5 -rotate-12 rounded-full bg-accent/30 animate-float-reverse" />
        <div className="absolute bottom-[25%] left-[30%] h-1.5 w-1.5 rounded-full bg-accent3/30 animate-float-slow" />
        <div className="absolute bottom-[10%] right-[30%] h-2 w-2 rotate-12 rounded-sm bg-accent2/20 animate-float" />

        {/* Large glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-accent2/5 blur-3xl" />
      </div>

      <div className="relative z-10 flex w-full max-w-[500px] flex-col items-center text-center">
        {/* Animated check icon */}
        <div className="animate-scale-in mb-8">
          <div className="relative">
            {/* Outer ring glow */}
            <div className="absolute inset-0 h-24 w-24 rounded-full bg-accent/20 blur-xl animate-glow-pulse" />
            {/* Icon container */}
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-accent/10 border-2 border-accent/30">
              <CheckCircle className="h-12 w-12 text-accent" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-display text-3xl font-bold text-fc-text sm:text-4xl animate-fade-up">
          Assinatura Confirmada!
        </h1>

        <p className="mt-4 text-base text-muted max-w-sm animate-fade-up-delay-1">
          Seu plano Pro está ativo. Aproveite todos os recursos premium.
        </p>

        {/* Action buttons */}
        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center animate-fade-up-delay-2">
          <Button asChild size="lg" variant="primary">
            <Link href="/dashboard" className="gap-2">
              Ir para o Dashboard
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/dashboard/configuracoes">Ver meu plano</Link>
          </Button>
        </div>

        {/* Features unlocked */}
        <div className="mt-12 w-full animate-fade-up-delay-3">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
            <div className="flex items-center justify-center gap-2 mb-5">
              <Sparkles className="h-5 w-5 text-accent" />
              <h2 className="font-display text-base font-semibold text-fc-text">
                Recursos desbloqueados
              </h2>
            </div>
            <ul className="space-y-3">
              {unlockedFeatures.map((feature) => (
                <li
                  key={feature.label}
                  className="flex items-center gap-3 text-sm text-fc-text"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    {feature.icon}
                  </div>
                  {feature.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Logo at bottom */}
        <div className="mt-12 animate-fade-up-delay-4">
          <Link href="/" className="inline-block opacity-60 hover:opacity-100 transition-opacity">
            <Logo size="sm" />
          </Link>
          <p className="mt-2 text-xs text-muted">
            Obrigado por confiar no FinControl
          </p>
        </div>
      </div>
    </div>
  )
}
