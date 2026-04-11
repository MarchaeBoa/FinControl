"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  ArrowLeftRight,
  ClipboardList,
  CreditCard,
  Target,
  BarChart3,
  Settings,
  LogOut,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"

interface NavItem {
  label: string
  href: string
  icon: React.ElementType
  badge?: string
}

interface NavSection {
  title: string
  items: NavItem[]
}

const navSections: NavSection[] = [
  {
    title: "PRINCIPAL",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      {
        label: "Transações",
        href: "/dashboard/transacoes",
        icon: ArrowLeftRight,
        badge: "12",
      },
      { label: "Orçamento", href: "/dashboard/orcamento", icon: ClipboardList },
    ],
  },
  {
    title: "FINANCEIRO",
    items: [
      { label: "Dívidas", href: "/dashboard/dividas", icon: CreditCard },
      { label: "Metas", href: "/dashboard/metas", icon: Target },
      { label: "Relatórios", href: "/dashboard/relatorios", icon: BarChart3 },
    ],
  },
  {
    title: "CONTA",
    items: [
      {
        label: "Configurações",
        href: "/dashboard/configuracoes",
        icon: Settings,
      },
    ],
  },
]

function isActiveRoute(pathname: string, href: string): boolean {
  if (href === "/dashboard") {
    return pathname === "/dashboard"
  }
  return pathname.startsWith(href)
}

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-[260px] flex-col bg-surface border-r border-border">
      {/* Logo */}
      <div className="flex items-center px-6 py-5 border-b border-border">
        <Logo size="md" />
      </div>

      {/* User section */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent2 text-sm font-bold text-bg">
          MC
        </div>
        <div className="flex flex-col overflow-hidden">
          <span className="truncate text-sm font-semibold text-fc-text">
            Marcos Costa
          </span>
          <span className="inline-flex w-fit items-center rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
            Plano Pro
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navSections.map((section) => (
          <div key={section.title}>
            <span className="px-3 text-[11px] font-semibold tracking-wider text-muted">
              {section.title}
            </span>
            <ul className="mt-2 space-y-1">
              {section.items.map((item) => {
                const active = isActiveRoute(pathname, item.href)
                const Icon = item.icon

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-150",
                        active
                          ? "bg-accent/10 text-accent"
                          : "text-muted hover:bg-surface-2 hover:text-fc-text"
                      )}
                    >
                      {/* Active left border bar */}
                      {active && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-[3px] rounded-r-full bg-accent" />
                      )}

                      <Icon className="h-[18px] w-[18px] shrink-0" />
                      <span className="flex-1 truncate">{item.label}</span>

                      {item.badge && (
                        <span
                          className={cn(
                            "flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-bold",
                            active
                              ? "bg-accent/20 text-accent"
                              : "bg-surface-2 text-muted group-hover:bg-accent/10 group-hover:text-accent"
                          )}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Upgrade banner */}
      <div className="mx-3 mb-3 rounded-xl bg-gradient-to-br from-accent2/20 to-accent/20 p-4 border border-accent/10">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-xs font-bold text-fc-text">
            Upgrade para Pro
          </span>
        </div>
        <p className="text-[11px] text-muted mb-3">
          Desbloqueie relatórios avançados e metas ilimitadas.
        </p>
        <Button variant="primary" size="sm" className="w-full text-xs">
          Fazer upgrade
        </Button>
      </div>

      {/* Logout */}
      <div className="px-3 pb-4">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition-colors duration-150 hover:bg-surface-2 hover:text-danger"
        >
          <LogOut className="h-[18px] w-[18px]" />
          <span>Sair</span>
        </button>
      </div>
    </aside>
  )
}
