"use client"

import { useState } from "react"
import {
  Search,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  ShoppingCart,
  Home,
  Briefcase,
  Heart,
  Gamepad2,
  GraduationCap,
  Car,
  Utensils,
  Zap,
} from "lucide-react"
import { Topbar } from "@/components/layout/topbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { cn, formatCurrency } from "@/lib/utils"

type TransactionType = "all" | "income" | "expense"

interface Transaction {
  id: string
  date: string
  description: string
  category: string
  categoryColor: "green" | "red" | "purple" | "orange" | "warning" | "muted"
  amount: number
  type: "income" | "expense"
  icon: React.ElementType
}

const transactions: Transaction[] = [
  {
    id: "1",
    date: "2026-04-10",
    description: "Salario mensal",
    category: "Salario",
    categoryColor: "green",
    amount: 8500,
    type: "income",
    icon: Briefcase,
  },
  {
    id: "2",
    date: "2026-04-09",
    description: "Supermercado Extra",
    category: "Alimentacao",
    categoryColor: "orange",
    amount: 347.82,
    type: "expense",
    icon: ShoppingCart,
  },
  {
    id: "3",
    date: "2026-04-08",
    description: "Aluguel apartamento",
    category: "Moradia",
    categoryColor: "purple",
    amount: 2200,
    type: "expense",
    icon: Home,
  },
  {
    id: "4",
    date: "2026-04-07",
    description: "Freelance projeto web",
    category: "Freelance",
    categoryColor: "green",
    amount: 3200,
    type: "income",
    icon: Zap,
  },
  {
    id: "5",
    date: "2026-04-06",
    description: "Uber e 99",
    category: "Transporte",
    categoryColor: "warning",
    amount: 89.5,
    type: "expense",
    icon: Car,
  },
  {
    id: "6",
    date: "2026-04-05",
    description: "Restaurante Outback",
    category: "Alimentacao",
    categoryColor: "orange",
    amount: 178.9,
    type: "expense",
    icon: Utensils,
  },
  {
    id: "7",
    date: "2026-04-04",
    description: "Plano de saude",
    category: "Saude",
    categoryColor: "red",
    amount: 450,
    type: "expense",
    icon: Heart,
  },
  {
    id: "8",
    date: "2026-04-03",
    description: "Curso Udemy",
    category: "Educacao",
    categoryColor: "purple",
    amount: 27.9,
    type: "expense",
    icon: GraduationCap,
  },
  {
    id: "9",
    date: "2026-04-02",
    description: "Assinatura PlayStation Plus",
    category: "Lazer",
    categoryColor: "muted",
    amount: 44.9,
    type: "expense",
    icon: Gamepad2,
  },
  {
    id: "10",
    date: "2026-04-01",
    description: "Rendimento investimentos",
    category: "Investimentos",
    categoryColor: "green",
    amount: 620,
    type: "income",
    icon: ArrowUpRight,
  },
]

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00")
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
  })
}

export default function TransacoesPage() {
  const [search, setSearch] = useState("")
  const [typeFilter, setTypeFilter] = useState<TransactionType>("all")

  const filtered = transactions.filter((t) => {
    const matchesSearch =
      t.description.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase())
    const matchesType =
      typeFilter === "all" ? true : t.type === typeFilter
    return matchesSearch && matchesType
  })

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0)
  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0)

  return (
    <div className="flex flex-col gap-6 p-6 lg:p-8">
      <Topbar
        title="Transacoes"
        subtitle="Gerencie todas as suas movimentacoes"
      />

      {/* Summary strip */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2">
          <ArrowUpRight className="h-4 w-4 text-accent" />
          <span className="text-sm text-muted">Receitas:</span>
          <span className="text-sm font-semibold text-accent">
            {formatCurrency(totalIncome)}
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2">
          <ArrowDownRight className="h-4 w-4 text-danger" />
          <span className="text-sm text-muted">Despesas:</span>
          <span className="text-sm font-semibold text-danger">
            {formatCurrency(totalExpense)}
          </span>
        </div>
      </div>

      {/* Filter bar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative max-w-xs flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <Input
              placeholder="Buscar transacao..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-1 rounded-xl border border-border bg-surface-2 p-1">
            {(
              [
                { label: "Todas", value: "all" },
                { label: "Receitas", value: "income" },
                { label: "Despesas", value: "expense" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.value}
                onClick={() => setTypeFilter(opt.value)}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs font-medium transition-all",
                  typeFilter === opt.value
                    ? "bg-surface text-fc-text shadow-card"
                    : "text-muted hover:text-fc-text"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-3 py-2 text-sm text-muted">
            <Calendar className="h-4 w-4" />
            <span>01 Abr - 10 Abr 2026</span>
          </div>
        </div>

        <Button variant="primary" size="md">
          <Plus className="h-4 w-4" />
          Nova Transacao
        </Button>
      </div>

      {/* Transactions list */}
      <Card>
        <CardContent className="p-0">
          <div className="divide-y divide-border">
            {filtered.map((tx, i) => {
              const Icon = tx.icon
              return (
                <div
                  key={tx.id}
                  className={cn(
                    "flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-surface-2",
                    "animate-fade-up"
                  )}
                  style={{ animationDelay: `${i * 0.03}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-xl",
                        tx.type === "income"
                          ? "bg-accent/10"
                          : "bg-danger/10"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-4 w-4",
                          tx.type === "income"
                            ? "text-accent"
                            : "text-danger"
                        )}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-fc-text">
                        {tx.description}
                      </span>
                      <span className="text-xs text-muted">
                        {formatDate(tx.date)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Badge variant={tx.categoryColor}>
                      {tx.category}
                    </Badge>
                    <span
                      className={cn(
                        "min-w-[100px] text-right text-sm font-semibold",
                        tx.type === "income"
                          ? "text-accent"
                          : "text-danger"
                      )}
                    >
                      {tx.type === "income" ? "+" : "-"}{" "}
                      {formatCurrency(tx.amount)}
                    </span>
                  </div>
                </div>
              )
            })}

            {filtered.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-2 py-12">
                <Search className="h-8 w-8 text-muted" />
                <p className="text-sm text-muted">
                  Nenhuma transacao encontrada
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
