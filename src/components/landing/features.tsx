import {
  CreditCard,
  LayoutDashboard,
  Target,
  ClipboardList,
  Bell,
  Brain,
} from "lucide-react"

const features = [
  {
    icon: CreditCard,
    title: "Controle de Dividas",
    description:
      "Cadastre e acompanhe todas as suas dividas com simulacao de pagamento, juros e cronograma de quitacao.",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Inteligente",
    description:
      "Visualize seu fluxo financeiro em tempo real com graficos interativos e insights automaticos.",
    iconBg: "bg-accent2/10",
    iconColor: "text-accent2",
  },
  {
    icon: Target,
    title: "Metas Financeiras",
    description:
      "Defina objetivos e acompanhe seu progresso com sugestoes personalizadas de economia.",
    iconBg: "bg-accent3/10",
    iconColor: "text-accent3",
  },
  {
    icon: ClipboardList,
    title: "Orcamento por Categoria",
    description:
      "Crie limites de gastos por categoria e receba alertas antes de estourar o orcamento.",
    iconBg: "bg-warning/10",
    iconColor: "text-warning",
  },
  {
    icon: Bell,
    title: "Alertas e Lembretes",
    description:
      "Nunca perca um vencimento. Alertas inteligentes para contas, parcelas e metas.",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Brain,
    title: "Analise com IA",
    description:
      "Receba sugestoes personalizadas baseadas no seu perfil de gastos para economizar mais.",
    iconBg: "bg-accent2/10",
    iconColor: "text-accent2",
  },
]

export function Features() {
  return (
    <section
      id="recursos"
      className="py-24 bg-gradient-to-b from-bg to-surface"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-15">
        {/* Section header */}
        <span className="inline-block text-xs font-semibold tracking-[2px] uppercase text-accent mb-4">
          RECURSOS
        </span>
        <h2 className="font-display text-[clamp(32px,5vw,52px)] font-extrabold leading-tight mb-5">
          Tudo que voce precisa para
          <br className="hidden md:block" /> organizar sua vida financeira
        </h2>
        <p className="text-lg text-muted max-w-[500px] leading-relaxed">
          Do controle de dividas ao planejamento de metas &mdash; uma plataforma
          completa.
        </p>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-surface border border-border rounded-2xl p-8 transition-all duration-300 overflow-hidden hover:border-accent/20 hover:-translate-y-1"
            >
              {/* Top gradient line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${feature.iconBg}`}
              >
                <feature.icon className={`w-[22px] h-[22px] ${feature.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold mb-2.5">
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
