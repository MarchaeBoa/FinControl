"use client"

import { useState } from "react"
import {
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  PieChart,
  Download,
  FileText,
  BarChart3,
  Wallet,
  TrendingDown,
  Sparkles,
} from "lucide-react"
import { Topbar } from "@/components/layout/topbar"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn, formatCurrency } from "@/lib/utils"

type Period = "1m" | "3m" | "1y"

const periodLabels: Record<Period, string> = {
  "1m": "Ultimo mes",
  "3m": "Ultimos 3 meses",
  "1y": "Ultimo ano",
}

const periodData: Record<
  Period,
  { income: number; expense: number; economy: number; economyPct: number }
> = {
  "1m": { income: 12320, expense: 8450, economy: 3870, economyPct: 31.4 },
  "3m": { income: 36800, expense: 26200, economy: 10600, economyPct: 28.8 },
  "1y": { income: 148500, expense: 102300, economy: 46200, economyPct: 31.1 },
}

const monthlyData = [
  { month: "Nov", income: 11800, expense: 9200 },
  { month: "Dez", income: 13400, expense: 11300 },
  { month: "Jan", income: 11500, expense: 8100 },
  { month: "Fev", income: 12100, expense: 8800 },
  { month: "Mar", income: 12800, expense: 9600 },
  { month: "Abr", income: 12320, expense: 8450 },
]

const categoryBreakdown = [
  { name: "Moradia", value: 2200, pct: 26, color: "bg-accent2" },
  { name: "Alimentacao", value: 1450, pct: 17, color: "bg-accent3" },
  { name: "Transporte", value: 890, pct: 11, color: "bg-warning" },
  { name: "Saude", value: 680, pct: 8, color: "bg-accent" },
  { name: "Lazer", value: 520, pct: 6, color: "bg-danger" },
  { name: "Outros", value: 2710, pct: 32, color: "bg-muted" },
]

export default function RelatoriosPage() {
  const [period, setPeriod] = useState<Period>("1m")
  const data = periodData[period]

  const summaryCards = [
    {
      title: "Receita Total",
      value: formatCurrency(data.income),
      icon: Wallet,
      change: 12.5,
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      title: "Despesa Total",
      value: formatCurrency(data.expense),
      icon: TrendingDown,
      change: -8.2,
      color: "text-danger",
      bg: "bg-danger/10",
    },
    {
      title: "Economia",
      value: formatCurrency(data.economy),
      icon: Sparkles,
      change: data.economyPct,
      color: "text-accent2",
      bg: "bg-accent2/10",
    },
  ]

  return (
    <div className="flex flex-col gap-6 p-6 lg:p-8">
      <Topbar
        title="Relatorios"
        subtitle="Analise detalhada das suas financas"
      />

      {/* Controls */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Period selector */}
        <div className="flex items-center gap-1 rounded-xl border border-border bg-surface-2 p-1">
          {(Object.entries(periodLabels) as [Period, string][]).map(
            ([key, label]) => (
              <button
                key={key}
                onClick={() => setPeriod(key)}
                className={cn(
                  "rounded-lg px-4 py-2 text-xs font-medium transition-all",
                  period === key
                    ? "bg-surface text-fc-text shadow-card"
                    : "text-muted hover:text-fc-text"
                )}
              >
                {label}
              </button>
            )
          )}
        </div>

        {/* Export buttons */}
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm">
            <FileText className="h-3.5 w-3.5" />
            Exportar PDF
          </Button>
          <Button variant="secondary" size="sm">
            <Download className="h-3.5 w-3.5" />
            Exportar CSV
          </Button>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {summaryCards.map((card, i) => {
          const Icon = card.icon
          const isPositive = card.change >= 0
          return (
            <Card
              key={card.title}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <CardContent className="flex flex-col gap-3 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">{card.title}</span>
                  <div
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-xl",
                      card.bg
                    )}
                  >
                    <Icon className={cn("h-4 w-4", card.color)} />
                  </div>
                </div>
                <span className="font-display text-2xl font-bold text-fc-text">
                  {card.value}
                </span>
                <div className="flex items-center gap-1.5">
                  {isPositive ? (
                    <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
                  ) : (
                    <ArrowDownRight className="h-3.5 w-3.5 text-danger" />
                  )}
                  <span
                    className={cn(
                      "text-xs font-medium",
                      isPositive ? "text-accent" : "text-danger"
                    )}
                  >
                    {isPositive ? "+" : ""}
                    {card.change}%
                  </span>
                  <span className="text-xs text-muted">vs. periodo anterior</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Chart areas */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
        {/* Bar chart placeholder - Evolucao Mensal */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-accent2" />
              <CardTitle>Evolucao Mensal</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {monthlyData.map((m) => {
                const maxVal = Math.max(
                  ...monthlyData.map((d) => Math.max(d.income, d.expense))
                )
                return (
                  <div key={m.month} className="flex items-center gap-3">
                    <span className="w-8 text-xs font-medium text-muted">
                      {m.month}
                    </span>
                    <div className="flex flex-1 flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <div
                          className="h-3 rounded-full bg-gradient-to-r from-accent/80 to-accent transition-all duration-500"
                          style={{
                            width: `${(m.income / maxVal) * 100}%`,
                          }}
                        />
                        <span className="text-[10px] text-muted">
                          {formatCurrency(m.income)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className="h-3 rounded-full bg-gradient-to-r from-danger/80 to-danger transition-all duration-500"
                          style={{
                            width: `${(m.expense / maxVal) * 100}%`,
                          }}
                        />
                        <span className="text-[10px] text-muted">
                          {formatCurrency(m.expense)}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
              {/* Legend */}
              <div className="mt-2 flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="text-xs text-muted">Receitas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-danger" />
                  <span className="text-xs text-muted">Despesas</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Donut chart placeholder - Distribuicao por Categoria */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-accent3" />
              <CardTitle>Distribuicao por Categoria</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {/* Donut placeholder */}
              <div className="relative mx-auto flex h-40 w-40 items-center justify-center">
                <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                  {(() => {
                    let offset = 0
                    const colors = [
                      "#7C5CFC",
                      "#FF6B35",
                      "#FFB800",
                      "#00E5A0",
                      "#FF4444",
                      "#6B7280",
                    ]
                    return categoryBreakdown.map((cat, idx) => {
                      const strokeDash = (cat.pct / 100) * 251.2
                      const gap = 251.2 - strokeDash
                      const el = (
                        <circle
                          key={cat.name}
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke={colors[idx]}
                          strokeWidth="12"
                          strokeDasharray={`${strokeDash} ${gap}`}
                          strokeDashoffset={-offset}
                          className="transition-all duration-700"
                        />
                      )
                      offset += strokeDash
                      return el
                    })
                  })()}
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="font-display text-lg font-bold text-fc-text">
                    {formatCurrency(data.expense)}
                  </span>
                  <span className="text-[10px] text-muted">Total</span>
                </div>
              </div>

              {/* Category list */}
              <div className="flex flex-col gap-2">
                {categoryBreakdown.map((cat) => (
                  <div
                    key={cat.name}
                    className="flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={cn("h-2.5 w-2.5 rounded-full", cat.color)}
                      />
                      <span className="text-muted">{cat.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-fc-text">
                        {formatCurrency(cat.value)}
                      </span>
                      <span className="text-muted">{cat.pct}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
