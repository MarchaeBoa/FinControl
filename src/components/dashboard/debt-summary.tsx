"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { formatCurrency } from "@/lib/utils"
import type { Debt } from "@/types"

const debts: Debt[] = [
  {
    id: "1",
    name: "Cartao Nubank",
    totalAmount: 8000,
    paidAmount: 4200,
    monthlyPayment: 450,
    dueDate: "15 Abr",
    installments: { paid: 7, total: 12 },
  },
  {
    id: "2",
    name: "Emprestimo Pessoal",
    totalAmount: 25000,
    paidAmount: 12000,
    monthlyPayment: 890,
    dueDate: "20 Abr",
    installments: { paid: 14, total: 36 },
  },
  {
    id: "3",
    name: "Financiamento",
    totalAmount: 120000,
    paidAmount: 45000,
    monthlyPayment: 1800,
    dueDate: "10 Mai",
    installments: { paid: 25, total: 60 },
  },
]

function getBarColor(percentage: number) {
  if (percentage >= 60) return "green" as const
  if (percentage >= 40) return "warning" as const
  return "danger" as const
}

export function DebtSummary() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Resumo de Dividas</CardTitle>
          <Link
            href="/dashboard/dividas"
            className="flex items-center gap-1 text-xs font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Ver detalhes
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-5">
          {debts.map((debt) => {
            const percentage = Math.round(
              (debt.paidAmount / debt.totalAmount) * 100
            )
            const barColor = getBarColor(percentage)

            return (
              <div key={debt.id} className="flex flex-col gap-2.5">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm font-medium text-fc-text">
                      {debt.name}
                    </span>
                    <Badge variant={barColor === "green" ? "green" : barColor === "warning" ? "orange" : "red"}>
                      {debt.installments.paid}/{debt.installments.total}
                    </Badge>
                  </div>
                  <span className="text-xs text-muted">
                    Venc. {debt.dueDate}
                  </span>
                </div>

                {/* Progress bar */}
                <Progress
                  value={percentage}
                  barColor={barColor}
                  showLabel
                />

                {/* Amount row */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted">
                    Pago: {formatCurrency(debt.paidAmount)}
                  </span>
                  <span className="font-medium text-fc-text">
                    Total: {formatCurrency(debt.totalAmount)}
                  </span>
                </div>
              </div>
            )
          })}

          {/* Total monthly payment */}
          <div className="mt-2 flex items-center justify-between rounded-xl border border-border bg-surface-2 px-4 py-3">
            <span className="text-sm text-muted">Parcela mensal total</span>
            <span className="font-display text-sm font-bold text-warning">
              {formatCurrency(
                debts.reduce((sum, d) => sum + d.monthlyPayment, 0)
              )}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
