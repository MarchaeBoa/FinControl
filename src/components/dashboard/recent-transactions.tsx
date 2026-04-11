"use client"

import Link from "next/link"
import {
  DollarSign,
  Home,
  ShoppingCart,
  Briefcase,
  Music,
  ArrowUpRight,
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { cn, formatCurrency } from "@/lib/utils"
import type { Transaction } from "@/types"
import type { LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  DollarSign,
  Home,
  ShoppingCart,
  Briefcase,
  Music,
}

const transactions: Transaction[] = [
  {
    id: "1",
    name: "Salario",
    category: "Renda",
    amount: 8500,
    type: "income",
    date: "01 Abr 2026",
    icon: "DollarSign",
  },
  {
    id: "2",
    name: "Aluguel",
    category: "Moradia",
    amount: 2200,
    type: "expense",
    date: "05 Abr 2026",
    icon: "Home",
  },
  {
    id: "3",
    name: "Mercado",
    category: "Alimentacao",
    amount: 680,
    type: "expense",
    date: "07 Abr 2026",
    icon: "ShoppingCart",
  },
  {
    id: "4",
    name: "Freelance",
    category: "Renda Extra",
    amount: 1200,
    type: "income",
    date: "08 Abr 2026",
    icon: "Briefcase",
  },
  {
    id: "5",
    name: "Spotify",
    category: "Assinaturas",
    amount: 34.9,
    type: "expense",
    date: "10 Abr 2026",
    icon: "Music",
  },
]

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Ultimas Transacoes</CardTitle>
          <Link
            href="/dashboard/transacoes"
            className="flex items-center gap-1 text-xs font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Ver todas
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          {transactions.map((tx) => {
            const Icon = iconMap[tx.icon] ?? DollarSign
            const isIncome = tx.type === "income"

            return (
              <div
                key={tx.id}
                className="flex items-center gap-4 rounded-xl px-2 py-3 transition-colors hover:bg-surface-2"
              >
                {/* Icon */}
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                    isIncome ? "bg-accent/10" : "bg-danger/10"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4.5 w-4.5",
                      isIncome ? "text-accent" : "text-danger"
                    )}
                  />
                </div>

                {/* Name + category */}
                <div className="flex flex-1 flex-col">
                  <span className="text-sm font-medium text-fc-text">
                    {tx.name}
                  </span>
                  <span className="text-xs text-muted">{tx.category}</span>
                </div>

                {/* Date */}
                <span className="hidden text-xs text-muted sm:block">
                  {tx.date}
                </span>

                {/* Amount */}
                <span
                  className={cn(
                    "font-display text-sm font-bold tabular-nums",
                    isIncome ? "text-accent" : "text-danger"
                  )}
                >
                  {isIncome ? "+" : "-"}
                  {formatCurrency(tx.amount)}
                </span>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
