"use client"

import { Sparkles, ArrowRight } from "lucide-react"
import { Topbar } from "@/components/layout/topbar"
import { KPICard } from "@/components/dashboard/kpi-card"
import {
  RevenueExpenseChart,
  ExpenseDonutChart,
} from "@/components/dashboard/chart-card"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { DebtSummary } from "@/components/dashboard/debt-summary"

const kpis = [
  {
    title: "Saldo Total",
    value: "R$12.840",
    change: 12.5,
    changeLabel: "vs. mes anterior",
    icon: "Wallet",
    color: "green" as const,
  },
  {
    title: "Gastos do Mes",
    value: "R$3.420",
    change: -8.2,
    changeLabel: "vs. mes anterior",
    icon: "TrendingDown",
    color: "red" as const,
  },
  {
    title: "Dividas Ativas",
    value: "R$61.200",
    change: -3,
    changeLabel: "este mes",
    icon: "CreditCard",
    color: "orange" as const,
  },
  {
    title: "Meta de Economia",
    value: "68%",
    change: 5.2,
    changeLabel: "vs. mes anterior",
    icon: "Target",
    color: "purple" as const,
  },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-6 lg:p-8">
      {/* Top bar */}
      <Topbar
        title="Dashboard"
        subtitle="Bem-vindo de volta, Marcos \u{1F44B}"
      />

      {/* Upgrade banner */}
      <div className="relative overflow-hidden rounded-[14px] border border-accent/20 bg-gradient-to-r from-accent/10 via-accent2/10 to-accent/5 p-5 sm:p-6">
        {/* Decorative glow blobs */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-accent2/10 blur-3xl" />

        <div className="relative z-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15">
              <Sparkles className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-fc-text">
                Upgrade para o Plano Pro
              </h3>
              <p className="text-xs text-muted">
                Desbloqueie relatorios avancados, metas ilimitadas e mais.
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-all duration-200 hover:bg-accent-hover hover:shadow-glow-accent">
            Fazer upgrade
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* KPI grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi, i) => (
          <div
            key={kpi.title}
            className="animate-fade-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <KPICard {...kpi} />
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
        <RevenueExpenseChart />
        <ExpenseDonutChart />
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <RecentTransactions />
        <DebtSummary />
      </div>
    </div>
  )
}
