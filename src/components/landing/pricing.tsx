import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface Plan {
  name: string
  price: number
  description: string
  features: string[]
  featured?: boolean
  cta: string
}

const plans: Plan[] = [
  {
    name: "Gratuito",
    price: 0,
    description: "Perfeito para comecar",
    features: [
      "Ate 3 categorias de gastos",
      "Dashboard basico",
      "2 metas financeiras",
      "Historico de 30 dias",
      "Controle de 1 divida",
    ],
    cta: "Comecar gratis",
  },
  {
    name: "Pro",
    price: 29,
    description: "Para quem quer resultados reais",
    featured: true,
    features: [
      "Categorias ilimitadas",
      "Dashboard completo com IA",
      "Metas ilimitadas",
      "Historico completo",
      "Dividas ilimitadas",
      "Alertas e lembretes",
      "Relatorios em PDF",
    ],
    cta: "Assinar Pro",
  },
  {
    name: "Familia",
    price: 59,
    description: "Para toda a familia",
    features: [
      "Tudo do Pro",
      "Ate 5 perfis",
      "Orcamento familiar",
      "Metas compartilhadas",
      "Relatorios consolidados",
      "Prioridade no suporte",
    ],
    cta: "Assinar Familia",
  },
]

export function Pricing() {
  return (
    <section id="precos" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-15">
        {/* Section header */}
        <span className="inline-block text-xs font-semibold tracking-[2px] uppercase text-accent mb-4">
          PRECOS
        </span>
        <h2 className="font-display text-[clamp(32px,5vw,52px)] font-extrabold leading-tight mb-5">
          Invista no seu futuro financeiro
        </h2>
        <p className="text-lg text-muted max-w-[500px] leading-relaxed">
          Planos transparentes, sem surpresas. Cancele quando quiser.
        </p>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 md:p-10 transition-all duration-300 overflow-hidden hover:-translate-y-1 ${
                plan.featured
                  ? "bg-gradient-to-br from-accent/5 to-surface border border-accent shadow-glow"
                  : "bg-surface border border-border"
              }`}
            >
              {/* Popular badge */}
              {plan.featured && (
                <span className="absolute top-5 right-5 bg-accent text-bg text-[11px] font-bold px-2.5 py-1 rounded-full">
                  Mais Popular
                </span>
              )}

              {/* Plan name */}
              <div className="text-[13px] font-semibold uppercase tracking-[1px] text-muted mb-3">
                {plan.name}
              </div>

              {/* Price */}
              <div className="font-display text-5xl font-extrabold mb-1">
                R${" "}
                <span>{plan.price}</span>
                <span className="text-base font-normal text-muted">/mes</span>
              </div>

              {/* Description */}
              <div className="text-sm text-muted mb-8">{plan.description}</div>

              {/* Feature list */}
              <ul className="mb-8 space-y-0">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 py-2 text-sm border-b border-border last:border-0"
                  >
                    <Check className="w-4 h-4 text-accent shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.featured ? "primary" : "secondary"}
                size="lg"
                asChild
                className="w-full justify-center"
              >
                <Link href="/cadastro">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
