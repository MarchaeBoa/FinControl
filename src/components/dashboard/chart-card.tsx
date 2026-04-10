"use client"

import { type ReactNode } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ChartCardProps {
  title: string
  children?: ReactNode
  className?: string
}

export function ChartCard({ title, children, className }: ChartCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <select className="rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-xs text-muted outline-none transition-colors hover:text-fc-text focus:border-accent/40">
            <option>Últimos 6 meses</option>
            <option>Último ano</option>
            <option>Este mês</option>
          </select>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

/* ---- Bar Chart: Receita vs Despesas ---- */

const barData = [
  { month: "Out", income: 7200, expense: 4100 },
  { month: "Nov", income: 8500, expense: 3900 },
  { month: "Dez", income: 9100, expense: 5200 },
  { month: "Jan", income: 8000, expense: 3600 },
  { month: "Fev", income: 8500, expense: 4400 },
  { month: "Mar", income: 9700, expense: 3420 },
]

const maxBarValue = Math.max(
  ...barData.flatMap((d) => [d.income, d.expense])
)

export function RevenueExpenseChart() {
  return (
    <ChartCard title="Receita vs Despesas">
      {/* Legend */}
      <div className="mb-6 flex items-center gap-5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="text-xs text-muted">Receita</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-danger" />
          <span className="text-xs text-muted">Despesas</span>
        </div>
      </div>

      {/* Bar chart via CSS */}
      <div className="flex items-end justify-between gap-3" style={{ height: 180 }}>
        {barData.map((d) => (
          <div key={d.month} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex w-full items-end justify-center gap-1" style={{ height: 150 }}>
              {/* Income bar */}
              <div
                className="w-3.5 rounded-t-md bg-gradient-to-t from-accent/70 to-accent transition-all duration-500"
                style={{ height: `${(d.income / maxBarValue) * 100}%` }}
              />
              {/* Expense bar */}
              <div
                className="w-3.5 rounded-t-md bg-gradient-to-t from-danger/70 to-danger transition-all duration-500"
                style={{ height: `${(d.expense / maxBarValue) * 100}%` }}
              />
            </div>
            <span className="text-[11px] text-muted">{d.month}</span>
          </div>
        ))}
      </div>
    </ChartCard>
  )
}

/* ---- Donut Chart: Expense Breakdown ---- */

const donutData = [
  { label: "Moradia", value: 35, color: "#7c5cfc" },
  { label: "Alimentacao", value: 22, color: "#00e5a0" },
  { label: "Transporte", value: 15, color: "#ff6b35" },
  { label: "Lazer", value: 12, color: "#ffb830" },
  { label: "Outros", value: 16, color: "#6b6b80" },
]

function buildConicGradient(
  data: typeof donutData
): string {
  let acc = 0
  const segments = data.map((d) => {
    const start = acc
    acc += d.value
    return `${d.color} ${start}% ${acc}%`
  })
  return `conic-gradient(${segments.join(", ")})`
}

export function ExpenseDonutChart() {
  return (
    <ChartCard title="Gastos por Categoria">
      <div className="flex flex-col items-center gap-6">
        {/* SVG donut */}
        <div className="relative h-40 w-40">
          <div
            className="h-full w-full rounded-full"
            style={{
              background: buildConicGradient(donutData),
              mask: "radial-gradient(circle at center, transparent 52%, black 53%)",
              WebkitMask:
                "radial-gradient(circle at center, transparent 52%, black 53%)",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-xl font-bold text-fc-text">
              R$3.420
            </span>
            <span className="text-[11px] text-muted">Total gasto</span>
          </div>
        </div>

        {/* Legend */}
        <div className="grid w-full grid-cols-2 gap-x-6 gap-y-2">
          {donutData.map((d) => (
            <div key={d.label} className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: d.color }}
              />
              <span className="text-xs text-muted">{d.label}</span>
              <span className="ml-auto text-xs font-medium text-fc-text">
                {d.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </ChartCard>
  )
}
