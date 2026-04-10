import Link from "next/link"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "12k+", label: "Usuarios ativos" },
  { value: "R$2M+", label: "Economizados" },
  { value: "4.9\u2605", label: "Avaliacao media" },
]

const miniCards = [
  { label: "Saldo Total", value: "R$ 8.420", color: "text-accent" },
  { label: "Gastos do Mes", value: "R$ 3.240", color: "text-danger" },
  { label: "Dividas", value: "R$ 12.500", color: "text-accent3" },
  { label: "Meta de Economia", value: "68%", color: "text-accent2" },
]

const barHeights = [40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 md:px-10 md:pt-32 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/12 blur-[80px] pointer-events-none animate-float" />
      <div className="absolute bottom-0 right-[-100px] w-[400px] h-[400px] rounded-full bg-accent2/10 blur-[80px] pointer-events-none animate-float-reverse" />
      <div className="absolute bottom-[100px] left-[-50px] w-[300px] h-[300px] rounded-full bg-accent3/8 blur-[80px] pointer-events-none animate-float-slow" />

      {/* Badge */}
      <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-[13px] text-accent mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
        Novo: Analise de IA integrada &mdash; planejamento automatico
      </div>

      {/* Heading */}
      <h1 className="animate-fade-up-delay-1 font-display font-extrabold text-[clamp(44px,7vw,88px)] leading-[1.0] mb-6">
        Seu dinheiro,
        <br />
        <span className="text-accent">finalmente no controle</span>
      </h1>

      {/* Subtitle */}
      <p className="animate-fade-up-delay-2 text-[clamp(16px,2vw,20px)] text-muted max-w-[600px] leading-relaxed mb-12">
        Controle dividas, gastos e metas financeiras em um unico lugar.
        Entenda para onde vai cada centavo e conquiste sua liberdade financeira.
      </p>

      {/* CTA buttons */}
      <div className="animate-fade-up-delay-3 flex flex-wrap gap-4 justify-center mb-16">
        <Button variant="primary" size="lg" asChild>
          <Link href="/cadastro">Comecar gratuitamente</Link>
        </Button>
        <Button variant="ghost" size="lg" asChild className="border border-border bg-white/5 hover:bg-white/10">
          <Link href="/dashboard">Ver demonstracao</Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="animate-fade-up-delay-4 flex flex-wrap gap-12 justify-center">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <span className="block font-display text-[32px] font-extrabold text-fc-text">
              {stat.value}
            </span>
            <span className="text-[13px] text-muted">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Dashboard preview */}
      <div className="w-full max-w-[1100px] mt-20 px-4 animate-fade-up-delay-4">
        <div className="relative bg-surface rounded-2xl border border-border p-6 shadow-card shadow-glow">
          {/* Gradient overlay on border */}
          <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />

          {/* Window dots */}
          <div className="relative flex gap-1.5 mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28ca41]" />
          </div>

          {/* Mini dashboard cards */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {miniCards.map((card) => (
              <div
                key={card.label}
                className="bg-surface-2 rounded-[10px] p-4 border border-border"
              >
                <div className="text-[11px] text-muted mb-1.5">{card.label}</div>
                <div className={`font-display text-xl font-bold ${card.color}`}>
                  {card.value}
                </div>
              </div>
            ))}
          </div>

          {/* Mini bar chart */}
          <div className="relative bg-surface-2 rounded-[10px] h-[100px] border border-border flex items-end gap-1.5 p-3 overflow-hidden">
            {barHeights.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-accent to-accent/30"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
