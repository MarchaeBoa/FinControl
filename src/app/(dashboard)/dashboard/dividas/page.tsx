"use client"

import {
  CreditCard,
  Landmark,
  Car,
  Plus,
  Wallet,
  CheckCircle2,
  Clock,
  CalendarDays,
} from "lucide-react"
import { Topbar } from "@/components/layout/topbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn, formatCurrency } from "@/lib/utils"

interface Debt {
  id: string
  name: string
  icon: React.ElementType
  totalAmount: number
  paidAmount: number
  monthlyPayment: number
  installmentsPaid: number
  installmentsTotal: number
  nextDueDate: string
  color: "purple" | "green" | "orange"
}

const debts: Debt[] = [
  {
    id: "1",
    name: "Cartao Nubank",
    icon: CreditCard,
    totalAmount: 12800,
    paidAmount: 5600,
    monthlyPayment: 890,
    installmentsPaid: 8,
    installmentsTotal: 18,
    nextDueDate: "2026-04-15",
    color: "purple",
  },
  {
    id: "2",
    name: "Emprestimo Pessoal",
    icon: Landmark,
    totalAmount: 25000,
    paidAmount: 10400,
    monthlyPayment: 1250,
    installmentsPaid: 10,
    installmentsTotal: 24,
    nextDueDate: "2026-04-20",
    color: "green",
  },
  {
    id: "3",
    name: "Financiamento Auto",
    icon: Car,
    totalAmount: 48000,
    paidAmount: 24000,
    monthlyPayment: 1680,
    installmentsPaid: 24,
    installmentsTotal: 48,
    nextDueDate: "2026-04-25",
    color: "orange",
  },
]

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00")
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

export default function DividasPage() {
  const totalDebt = debts.reduce((s, d) => s + (d.totalAmount - d.paidAmount), 0)
  const paidThisMonth = debts.reduce((s, d) => s + d.monthlyPayment, 0)
  const totalInstallmentsLeft = debts.reduce(
    (s, d) => s + (d.installmentsTotal - d.installmentsPaid),
    0
  )

  const kpis = [
    {
      title: "Total em Dividas",
      value: formatCurrency(totalDebt),
      icon: Wallet,
      color: "text-danger",
      bg: "bg-danger/10",
    },
    {
      title: "Pago Este Mes",
      value: formatCurrency(paidThisMonth),
      icon: CheckCircle2,
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      title: "Parcelas Restantes",
      value: String(totalInstallmentsLeft),
      icon: Clock,
      color: "text-accent3",
      bg: "bg-accent3/10",
    },
  ]

  return (
    <div className="flex flex-col gap-6 p-6 lg:p-8">
      <Topbar title="Dividas" subtitle="Acompanhe e quite suas dividas" />

      {/* KPI row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon
          return (
            <Card
              key={kpi.title}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <CardContent className="flex items-center gap-4 p-5">
                <div
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-xl",
                    kpi.bg
                  )}
                >
                  <Icon className={cn("h-5 w-5", kpi.color)} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted">{kpi.title}</span>
                  <span className="font-display text-xl font-bold text-fc-text">
                    {kpi.value}
                  </span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Add button */}
      <div className="flex justify-end">
        <Button variant="primary" size="md">
          <Plus className="h-4 w-4" />
          Adicionar Divida
        </Button>
      </div>

      {/* Debt cards */}
      <div className="flex flex-col gap-4">
        {debts.map((debt, i) => {
          const Icon = debt.icon
          const pct = (debt.paidAmount / debt.totalAmount) * 100
          const remaining = debt.totalAmount - debt.paidAmount

          const barColor =
            pct >= 70
              ? ("green" as const)
              : pct >= 40
                ? ("orange" as const)
                : ("danger" as const)

          return (
            <Card
              key={debt.id}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <CardContent className="flex flex-col gap-5 p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl",
                        debt.color === "purple" && "bg-accent2/10",
                        debt.color === "green" && "bg-accent/10",
                        debt.color === "orange" && "bg-accent3/10"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-6 w-6",
                          debt.color === "purple" && "text-accent2",
                          debt.color === "green" && "text-accent",
                          debt.color === "orange" && "text-accent3"
                        )}
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-fc-text">
                        {debt.name}
                      </h3>
                      <span className="text-xs text-muted">
                        Parcela mensal: {formatCurrency(debt.monthlyPayment)}
                      </span>
                    </div>
                  </div>
                  <Badge
                    variant={
                      pct >= 70 ? "green" : pct >= 40 ? "orange" : "red"
                    }
                  >
                    {Math.round(pct)}% pago
                  </Badge>
                </div>

                {/* Progress bar */}
                <Progress
                  value={pct}
                  barColor={barColor}
                  showLabel
                  label={`${formatCurrency(debt.paidAmount)} de ${formatCurrency(debt.totalAmount)}`}
                />

                {/* Details row */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="flex flex-col gap-1 rounded-lg bg-surface-2 px-3 py-2">
                    <span className="text-xs text-muted">Total</span>
                    <span className="text-sm font-semibold text-fc-text">
                      {formatCurrency(debt.totalAmount)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 rounded-lg bg-surface-2 px-3 py-2">
                    <span className="text-xs text-muted">Pago</span>
                    <span className="text-sm font-semibold text-accent">
                      {formatCurrency(debt.paidAmount)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 rounded-lg bg-surface-2 px-3 py-2">
                    <span className="text-xs text-muted">Restante</span>
                    <span className="text-sm font-semibold text-danger">
                      {formatCurrency(remaining)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 rounded-lg bg-surface-2 px-3 py-2">
                    <span className="text-xs text-muted">Parcelas</span>
                    <span className="text-sm font-semibold text-fc-text">
                      {debt.installmentsPaid} de {debt.installmentsTotal}
                    </span>
                  </div>
                </div>

                {/* Next due date */}
                <div className="flex items-center gap-2 text-xs text-muted">
                  <CalendarDays className="h-3.5 w-3.5" />
                  <span>
                    Proximo vencimento:{" "}
                    <span className="font-medium text-fc-text">
                      {formatDate(debt.nextDueDate)}
                    </span>
                  </span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
