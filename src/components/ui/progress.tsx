"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const progressVariants = cva("h-full rounded-full transition-all duration-500 ease-out", {
  variants: {
    barColor: {
      green: "bg-gradient-to-r from-accent/80 to-accent",
      purple: "bg-gradient-to-r from-accent2/80 to-accent2",
      orange: "bg-gradient-to-r from-accent3/80 to-accent3",
      danger: "bg-gradient-to-r from-danger/80 to-danger",
      warning: "bg-gradient-to-r from-warning/80 to-warning",
    },
  },
  defaultVariants: {
    barColor: "green",
  },
})

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  showLabel?: boolean
  label?: string
}

const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, barColor, showLabel, label, ...props }, ref) => {
  const percentage = value ?? 0

  return (
    <div className="flex flex-col gap-1.5">
      {(showLabel || label) && (
        <div className="flex items-center justify-between text-xs">
          {label && <span className="text-muted">{label}</span>}
          {showLabel && (
            <span className="text-fc-text font-medium">{Math.round(percentage)}%</span>
          )}
        </div>
      )}
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full bg-surface-2",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(progressVariants({ barColor }))}
          style={{ width: `${percentage}%` }}
        />
      </ProgressPrimitive.Root>
    </div>
  )
})
Progress.displayName = "Progress"

export { Progress }
export type { ProgressProps }
