import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        green:
          "bg-accent/10 text-accent border border-accent/20",
        red:
          "bg-danger/10 text-danger border border-danger/20",
        purple:
          "bg-accent2/10 text-accent2 border border-accent2/20",
        orange:
          "bg-accent3/10 text-accent3 border border-accent3/20",
        warning:
          "bg-warning/10 text-warning border border-warning/20",
        muted:
          "bg-surface-2 text-muted border border-border",
      },
    },
    defaultVariants: {
      variant: "green",
    },
  }
)

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, className }))}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }
export type { BadgeProps }
