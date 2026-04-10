"use client"

import {
  Wallet,
  TrendingDown,
  CreditCard,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { KPIData } from "@/types"

const iconMap: Record<string, LucideIcon> = {
  Wallet,
  TrendingDown,
  CreditCard,
  Target,
}

const colorStyles: Record<
  KPIData["color"],
  { bg: string; text: string; glow: string }
> = {
  green: {
    bg: "bg-accent/10",
    text: "text-accent",
    glow: "group-hover:shadow-[0_0_24px_rgba(0,229,160,0.12)]",
  },
  red: {
    bg: "bg-danger/10",
    text: "text-danger",
    glow: "group-hover:shadow-[0_0_24px_rgba(255,68,68,0.12)]",
  },
  purple: {
    bg: "bg-accent2/10",
    text: "text-accent2",
    glow: "group-hover:shadow-[0_0_24px_rgba(124,92,252,0.12)]",
  },
  orange: {
    bg: "bg-accent3/10",
    text: "text-accent3",
    glow: "group-hover:shadow-[0_0_24px_rgba(255,107,53,0.12)]",
  },
}

interface KPICardProps {
  title: string
  value: string
  change: number
  changeLabel: string
  icon: string
  color: KPIData["color"]
}

export function KPICard({
  title,
  value,
  change,
  changeLabel,
  icon,
  color,
}: KPICardProps) {
  const Icon = iconMap[icon] ?? Wallet
  const styles = colorStyles[color]
  const isPositive = change >= 0

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[14px] border border-border bg-surface p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow",
        styles.glow
      )}
    >
      {/* Subtle gradient overlay on hover */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          color === "green" &&
            "bg-gradient-to-br from-accent/5 via-transparent to-transparent",
          color === "red" &&
            "bg-gradient-to-br from-danger/5 via-transparent to-transparent",
          color === "purple" &&
            "bg-gradient-to-br from-accent2/5 via-transparent to-transparent",
          color === "orange" &&
            "bg-gradient-to-br from-accent3/5 via-transparent to-transparent"
        )}
      />

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex flex-col gap-3">
          <span className="text-sm text-muted">{title}</span>
          <span className="font-display text-2xl font-extrabold tracking-tight text-fc-text">
            {value}
          </span>
          <div className="flex items-center gap-1.5">
            {isPositive ? (
              <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
            ) : (
              <ArrowDownRight className="h-3.5 w-3.5 text-danger" />
            )}
            <span
              className={cn(
                "text-xs font-medium",
                isPositive ? "text-accent" : "text-danger"
              )}
            >
              {isPositive ? "+" : ""}
              {change}%
            </span>
            <span className="text-xs text-muted">{changeLabel}</span>
          </div>
        </div>

        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl",
            styles.bg
          )}
        >
          <Icon className={cn("h-5 w-5", styles.text)} />
        </div>
      </div>
    </div>
  )
}
