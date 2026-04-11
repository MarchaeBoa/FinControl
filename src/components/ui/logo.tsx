import * as React from "react"
import { cn } from "@/lib/utils"

interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl",
} as const

const Logo = React.forwardRef<HTMLSpanElement, LogoProps>(
  ({ className, size = "md", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "font-display font-extrabold tracking-tight select-none",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <span className="text-white">Fin</span>
        <span className="text-accent">Control</span>
      </span>
    )
  }
)
Logo.displayName = "Logo"

export { Logo }
export type { LogoProps }
