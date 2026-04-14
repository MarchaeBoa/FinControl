"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Lock,
  Shield,
  CreditCard,
  Sparkles,
  CheckCircle,
  Star,
  Zap,
  Users,
} from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn, formatCurrency } from "@/lib/utils"

type PlanKey = "pro" | "familia"

interface Plan {
  name: string
  price: number
  icon: React.ReactNode
  badge?: string
  features: string[]
}

const plans: Record<PlanKey, Plan> = {
  pro: {
    name: "Pro",
    price: 29,
    icon: <Zap className="h-5 w-5" />,
    badge: "Mais popular",
    features: [
      "Transações ilimitadas",
      "Relatórios avançados",
      "Metas financeiras",
      "Exportar para Excel e PDF",
      "Suporte prioritário",
    ],
  },
  familia: {
    name: "Família",
    price: 59,
    icon: <Users className="h-5 w-5" />,
    features: [
      "Tudo do plano Pro",
      "Até 5 membros da família",
      "Orçamento compartilhado",
      "Controle individual por membro",
      "Relatórios familiares",
      "Consultor financeiro IA",
    ],
  },
}

export default function CheckoutPage() {
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>("pro")
  const plan = plans[selectedPlan]

  const subtotal = plan.price
  const discount = selectedPlan === "pro" ? 0 : 0
  const total = subtotal - discount

  return (
    <div className="min-h-screen bg-bg">
      {/* Background accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent2/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-10 animate-fade-up">
          <Link href="/" className="inline-block">
            <Logo size="lg" />
          </Link>
        </div>

        {/* Heading */}
        <div className="mb-8 animate-fade-up-delay-1">
          <h1 className="font-display text-3xl font-bold text-fc-text sm:text-4xl">
            Finalizar Assinatura
          </h1>
          <p className="mt-2 text-muted">
            Escolha seu plano e comece a controlar suas finanças hoje.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left column - Form */}
          <div className="lg:col-span-3 space-y-8 animate-fade-up-delay-2">
            {/* Plan selection */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-fc-text font-display">
                Escolha o plano
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {(Object.entries(plans) as [PlanKey, Plan][]).map(
                  ([key, p]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedPlan(key)}
                      className={cn(
                        "relative rounded-2xl border p-5 text-left transition-all duration-200 cursor-pointer",
                        selectedPlan === key
                          ? "border-accent bg-accent/5 shadow-glow"
                          : "border-border bg-surface hover:border-border/80 hover:bg-surface-2"
                      )}
                    >
                      {p.badge && (
                        <span className="absolute -top-2.5 right-4 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-bg">
                          <Star className="h-3 w-3" />
                          {p.badge}
                        </span>
                      )}

                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={cn(
                            "flex h-10 w-10 items-center justify-center rounded-xl",
                            selectedPlan === key
                              ? "bg-accent/20 text-accent"
                              : "bg-surface-2 text-muted"
                          )}
                        >
                          {p.icon}
                        </div>
                        <div>
                          <p className="font-display font-semibold text-fc-text">
                            {p.name}
                          </p>
                          <p className="text-sm text-muted">
                            {formatCurrency(p.price)}
                            <span className="text-xs">/mês</span>
                          </p>
                        </div>
                      </div>

                      {/* Radio indicator */}
                      <div
                        className={cn(
                          "absolute top-5 right-5 h-5 w-5 rounded-full border-2 transition-all",
                          selectedPlan === key
                            ? "border-accent bg-accent"
                            : "border-border"
                        )}
                      >
                        {selectedPlan === key && (
                          <CheckCircle className="h-full w-full text-bg" />
                        )}
                      </div>
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Payment form */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-fc-text font-display flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-accent" />
                Dados do pagamento
              </h2>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                {/* Card number */}
                <div className="space-y-2">
                  <label
                    htmlFor="card-number"
                    className="block text-sm font-medium text-fc-text"
                  >
                    Número do cartão
                  </label>
                  <Input
                    id="card-number"
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    maxLength={19}
                    className="h-12"
                  />
                </div>

                {/* Expiry + CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="expiry"
                      className="block text-sm font-medium text-fc-text"
                    >
                      Validade
                    </label>
                    <Input
                      id="expiry"
                      type="text"
                      placeholder="MM/AA"
                      maxLength={5}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="cvv"
                      className="block text-sm font-medium text-fc-text"
                    >
                      CVV
                    </label>
                    <Input
                      id="cvv"
                      type="text"
                      placeholder="123"
                      maxLength={4}
                      className="h-12"
                    />
                  </div>
                </div>

                {/* Cardholder name */}
                <div className="space-y-2">
                  <label
                    htmlFor="cardholder"
                    className="block text-sm font-medium text-fc-text"
                  >
                    Nome no cartão
                  </label>
                  <Input
                    id="cardholder"
                    type="text"
                    placeholder="Nome como está no cartão"
                    className="h-12"
                  />
                </div>

                {/* Submit */}
                <Link href="/success">
                  <Button type="button" size="lg" className="w-full mt-2">
                    <Sparkles className="h-5 w-5" />
                    Assinar Agora
                  </Button>
                </Link>
              </form>
            </div>
          </div>

          {/* Right column - Order summary */}
          <div className="lg:col-span-2 animate-fade-up-delay-3">
            <div className="lg:sticky lg:top-8 space-y-6">
              <Card className="hover:translate-y-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Resumo do pedido
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Selected plan */}
                  <div className="flex items-center justify-between rounded-xl bg-surface-2 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                        {plan.icon}
                      </div>
                      <div>
                        <p className="font-display font-semibold text-fc-text">
                          Plano {plan.name}
                        </p>
                        <p className="text-sm text-muted">Cobrança mensal</p>
                      </div>
                    </div>
                    <p className="font-display font-bold text-fc-text">
                      {formatCurrency(plan.price)}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-muted uppercase tracking-wider">
                      Incluído
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 text-sm text-fc-text"
                        >
                          <CheckCircle className="h-4 w-4 shrink-0 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border" />

                  {/* Totals */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">Subtotal</span>
                      <span className="text-fc-text">
                        {formatCurrency(subtotal)}
                      </span>
                    </div>
                    {discount > 0 && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-accent">Desconto</span>
                        <span className="text-accent">
                          -{formatCurrency(discount)}
                        </span>
                      </div>
                    )}
                    <div className="border-t border-border pt-2 flex items-center justify-between">
                      <span className="font-display font-semibold text-fc-text">
                        Total
                      </span>
                      <span className="font-display text-xl font-bold text-accent">
                        {formatCurrency(total)}
                        <span className="text-sm font-normal text-muted">
                          /mês
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Secure badge */}
                  <div className="flex items-center justify-center gap-2 rounded-xl bg-accent/5 border border-accent/10 p-3">
                    <Lock className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-accent">
                      Pagamento 100% seguro
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-6 text-muted">
                <div className="flex items-center gap-1.5 text-xs">
                  <Shield className="h-4 w-4" />
                  <span>SSL 256-bit</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <Lock className="h-4 w-4" />
                  <span>Dados criptografados</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-border pt-8 text-xs text-muted animate-fade-up-delay-4">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-accent/60" />
            <span>Garantia de 7 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-accent/60" />
            <span>Cancele quando quiser</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-accent/60" />
            <span>Visa, Mastercard, Elo, PIX</span>
          </div>
        </div>
      </div>
    </div>
  )
}
