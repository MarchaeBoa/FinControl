"use client"

import {
  Shield,
  Plane,
  Car,
  Laptop,
  Plus,
  Target,
  CalendarDays,
  TrendingUp,
} from "lucide-react"
import { Topbar } from "@/components/layout/topbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn, formatCurrency } from "@/lib/utils"

interface Goal {
  id: string
  name: string
  icon: React.ElementType
  currentAmount: number
  targetAmount: number
  deadline: string
  monthlyContribution: number
  color: "green" | "purple" | "orange" | "danger"
}

const goals: Goal[] = [
  {
    id: "1",
    name: "Reserva de Emergencia",
    icon: Shield,
    currentAmount: 8400,
    targetAmount: 15000,
    deadline: "2025-12-31",
    monthlyContribution: 825,
    color: "purple",
  },
  {
    id: "2",
    name: "Viagem Europa",
    icon: Plane,
    currentAmount: 4200,
    targetAmount: 12000,
    deadline: "2026-06-30",
    monthlyContribution: 557,
    color: "green",
  },
  {
    id: "3",
    name: "Carro Novo",
    icon: Car,
    currentAmount: 15000,
    targetAmount: 45000,
    deadline: "2026-12-31",
    monthlyContribution: 3333,
    color: "orange",
  },
  {
    id: "4",
    name: "MacBook Pro",
    icon: Laptop,
    currentAmount: 6800,
    targetAmount: 9000,
    deadline: "2025-03-31",
    monthlyContribution: 440,
    color: "green",
  },
]

function formatDeadline(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00")
  return date.toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  })
}

function getMonthsRemaining(deadline: string): number {
  const now = new Date()
  const target = new Date(deadline + "T12:00:00")
  const diff =
    (target.getFullYear() - now.getFullYear()) * 12 +
    (target.getMonth() - now.getMonth())
  return Math.max(diff, 0)
}

export default function MetasPage() {
  return (
    <div className="flex flex-col gap-6 p-6 lg:p-8">
      <Topbar
        title="Metas"
        subtitle="Defina e acompanhe seus objetivos financeiros"
      />

      {/* Header with button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent2/10">
            <Target className="h-5 w-5 text-accent2" />
          </div>
          <div>
            <span className="text-sm font-medium text-fc-text">
              {goals.length} metas ativas
            </span>
            <p className="text-xs text-muted">
              Continue assim, voce esta no caminho certo!
            </p>
          </div>
        </div>
        <Button variant="primary" size="md">
          <Plus className="h-4 w-4" />
          Nova Meta
        </Button>
      </div>

      {/* Goal cards grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {goals.map((goal, i) => {
          const Icon = goal.icon
          const pct = (goal.currentAmount / goal.targetAmount) * 100
          const monthsLeft = getMonthsRemaining(goal.deadline)
          const remaining = goal.targetAmount - goal.currentAmount
          const suggestedMonthly =
            monthsLeft > 0 ? remaining / monthsLeft : remaining

          const barColor =
            pct >= 75
              ? ("green" as const)
              : pct >= 40
                ? ("purple" as const)
                : ("orange" as const)

          return (
            <Card
              key={goal.id}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <CardContent className="flex flex-col gap-5 p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-xl",
                        goal.color === "green" && "bg-accent/10",
                        goal.color === "purple" && "bg-accent2/10",
                        goal.color === "orange" && "bg-accent3/10",
                        goal.color === "danger" && "bg-danger/10"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-5 w-5",
                          goal.color === "green" && "text-accent",
                          goal.color === "purple" && "text-accent2",
                          goal.color === "orange" && "text-accent3",
                          goal.color === "danger" && "text-danger"
                        )}
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-fc-text">
                        {goal.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-muted">
                        <CalendarDays className="h-3 w-3" />
                        <span>{formatDeadline(goal.deadline)}</span>
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={
                      pct >= 75 ? "green" : pct >= 40 ? "purple" : "orange"
                    }
                  >
                    {Math.round(pct)}%
                  </Badge>
                </div>

                {/* Amounts */}
                <div className="flex items-end justify-between">
                  <div>
                    <span className="font-display text-2xl font-bold text-fc-text">
                      {formatCurrency(goal.currentAmount)}
                    </span>
                    <span className="ml-1 text-sm text-muted">
                      / {formatCurrency(goal.targetAmount)}
                    </span>
                  </div>
                  {monthsLeft > 0 && (
                    <span className="text-xs text-muted">
                      {monthsLeft} {monthsLeft === 1 ? "mes" : "meses"}{" "}
                      restantes
                    </span>
                  )}
                </div>

                {/* Progress */}
                <Progress value={Math.min(pct, 100)} barColor={barColor} />

                {/* Monthly contribution suggestion */}
                <div className="flex items-center gap-2 rounded-lg bg-surface-2 px-4 py-3">
                  <TrendingUp className="h-4 w-4 text-accent2" />
                  <div className="flex flex-col">
                    <span className="text-xs text-muted">
                      Contribuicao mensal sugerida
                    </span>
                    <span className="text-sm font-semibold text-fc-text">
                      {formatCurrency(suggestedMonthly)}
                      <span className="ml-1 text-xs font-normal text-muted">
                        /mes
                      </span>
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
