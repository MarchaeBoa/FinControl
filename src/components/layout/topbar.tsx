"use client"

import { useState } from "react"
import { Bell, Search } from "lucide-react"
import { cn } from "@/lib/utils"

interface TopbarProps {
  title: string
  subtitle?: string
}

const periods = ["Semana", "Mês", "Ano"] as const
type Period = (typeof periods)[number]

export function Topbar({ title, subtitle }: TopbarProps) {
  const [activePeriod, setActivePeriod] = useState<Period>("Mês")

  return (
    <header className="flex items-center justify-between py-6">
      {/* Left side: Page title */}
      <div>
        <h1 className="font-display text-2xl font-extrabold text-fc-text">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-0.5 text-sm text-muted">{subtitle}</p>
        )}
      </div>

      {/* Right side: Controls */}
      <div className="flex items-center gap-3">
        {/* Period selector */}
        <div className="flex items-center rounded-xl bg-surface-2 p-1">
          {periods.map((period) => (
            <button
              key={period}
              type="button"
              onClick={() => setActivePeriod(period)}
              className={cn(
                "rounded-lg px-4 py-1.5 text-xs font-semibold transition-colors duration-150",
                activePeriod === period
                  ? "bg-surface text-fc-text shadow-sm"
                  : "text-muted hover:text-fc-text"
              )}
            >
              {period}
            </button>
          ))}
        </div>

        {/* Notification bell */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-colors duration-150 hover:bg-surface-2 hover:text-fc-text"
        >
          <Bell className="h-[18px] w-[18px]" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
        </button>

        {/* Search */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-colors duration-150 hover:bg-surface-2 hover:text-fc-text"
        >
          <Search className="h-[18px] w-[18px]" />
        </button>
      </div>
    </header>
  )
}
