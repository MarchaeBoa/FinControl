"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-bg hover:bg-accent-hover shadow-glow-accent hover:shadow-glow-lg active:scale-[0.98]",
        secondary:
          "border border-border bg-transparent text-fc-text hover:bg-surface-2 hover:border-accent/30 hover:text-accent active:scale-[0.98]",
        danger:
          "bg-danger/10 text-danger border border-danger/20 hover:bg-danger/20 hover:border-danger/40 hover:shadow-[0_0_24px_rgba(255,68,68,0.3)] active:scale-[0.98]",
        ghost:
          "text-muted hover:text-fc-text hover:bg-surface-2",
        link:
          "text-accent underline-offset-4 hover:underline hover:text-accent-hover p-0 h-auto",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-lg",
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-7 text-base rounded-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
export type { ButtonProps }
