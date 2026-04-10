"use client"

import {
  Utensils,
  Car,
  Gamepad2,
  Home,
  Heart,
  BookOpen,
  Wallet,
  TrendingDown,
  CircleDollarSign,
} from "lucide-react"
import { Topbar } from "@/components/layout/topbar"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn, formatCurrency } from "@/lib/utils"

interface BudgetItem {
  id: string
  name: string
  icon: React.ElementType
  budget: number
  spent: number
}

const budgetCategories: BudgetItem[] = [
  { id: "1", name: "Alimentacao", icon: Utensils, budget: 800, spent: 620 },
  { id: "2", name: "Transporte", icon: Car, budget: 400, spent: 380 },
  { id: "3", name: "Lazer", icon: Gamepad2, budget: 300, spent: 345 },
  { id: "4", name: "Moradia", icon: Home, budget: 2500, spent: 2200 },
  { id: "5", name: "Saude", icon: Heart, budget: 200, spent: 80 },
  { id: "6", name: "Educacao", icon: BookOpen, budget: 150, spent: 150 },
]

function getStatus(spent: number, budget: number) {
  const pct = (spent / budget) * 100
  if (pct > 100) return { color: "danger" as const, label: "Acima do limite", textColor: "text-danger" }
  if (pct >= 90) return { color: "warning" as const, label: "Quase no limite", textColor: "text-warning" }
  return { color: "green" as const, label: "Dentro do orcamento", textColor: "text-accent" }
}

export default function OrcamentoPage() {
  const totalBudget = budgetCategories.reduce((s, c) => s + c.budget, 0)
  const totalSpent = budgetCategories.reduce((s, c) => s + c.spent, 0)
  const available = totalBudget - totalSpent

  const summaryCards = [
    {
      title: "Total Orcado",
      value: formatCurrency(totalBudget),
      icon: Wallet,
      color: "text-accent2",
      bg: "bg-accent2/10",
    },
    {
      title: "Total Gasto",
      value: formatCurrency(totalSpent),
      icon: TrendingDown,
      color: "text-danger",
      bg: "bg-danger/10",
    },
    {
      title: "Disponivel",
      value: formatCurrency(available),
      icon: CircleDollarSign,
      color: available >= 0 ? "text-accent" : "text-danger",
      bg: available >= 0 ? "bg-accent/10" : "bg-danger/10",
    },
  ]

  return (
    <div className="flex flex-col gap-6 p-6 lg:p-8">
      <Topbar
        title="Orcamento"
        subtitle="Controle seus limites de gastos por categoria"
      />

      {/* Summary cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {summaryCards.map((card, i) => {
          const Icon = card.icon
          return (
            <Card
              key={card.title}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <CardContent className="flex items-center gap-4 p-5">
                <div
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-xl",
                    card.bg
                  )}
                >
                  <Icon className={cn("h-5 w-5", card.color)} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted">{card.title}</span>
                  <span className="font-display text-xl font-bold text-fc-text">
                    {card.value}
                  </span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Budget categories grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {budgetCategories.map((cat, i) => {
          const Icon = cat.icon
          const pct = Math.min((cat.spent / cat.budget) * 100, 100)
          const overPct = (cat.spent / cat.budget) * 100
          const status = getStatus(cat.spent, cat.budget)

          return (
            <Card
              key={cat.id}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <CardContent className="flex flex-col gap-4 p-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-xl",
                        status.color === "green" && "bg-accent/10",
                        status.color === "warning" && "bg-warning/10",
                        status.color === "danger" && "bg-danger/10"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-5 w-5",
                          status.color === "green" && "text-accent",
                          status.color === "warning" && "text-warning",
                          status.color === "danger" && "text-danger"
                        )}
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold text-fc-text">
                        {cat.name}
                      </h3>
                      <span className="text-xs text-muted">
                        {status.label}
                      </span>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "text-xs font-semibold",
                      status.textColor
                    )}
                  >
                    {Math.round(overPct)}%
                  </span>
                </div>

                {/* Progress */}
                <Progress
                  value={pct}
                  barColor={status.color}
                />

                {/* Amounts */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted">
                    Gasto:{" "}
                    <span className="font-medium text-fc-text">
                      {formatCurrency(cat.spent)}
                    </span>
                  </span>
                  <span className="text-muted">
                    Limite:{" "}
                    <span className="font-medium text-fc-text">
                      {formatCurrency(cat.budget)}
                    </span>
                  </span>
                </div>

                {/* Remaining */}
                {cat.spent <= cat.budget ? (
                  <div className="rounded-lg bg-accent/5 px-3 py-2 text-center text-xs text-accent">
                    Ainda disponivel:{" "}
                    <span className="font-semibold">
                      {formatCurrency(cat.budget - cat.spent)}
                    </span>
                  </div>
                ) : (
                  <div className="rounded-lg bg-danger/5 px-3 py-2 text-center text-xs text-danger">
                    Excedido em:{" "}
                    <span className="font-semibold">
                      {formatCurrency(cat.spent - cat.budget)}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
