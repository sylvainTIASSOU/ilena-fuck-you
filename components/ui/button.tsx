'use client';

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group font-mono",
  {
    variants: {
      variant: {
        default:
          "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30",
        cyber:
          "bg-gradient-to-r from-[#00f0ff] to-[#d946ef] text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(217,70,239,0.75)] hover:scale-[1.02] active:scale-[0.98] transition-all",
        "cyber-cyan":
          "bg-cyan-500/10 text-[#00f0ff] border border-[#00f0ff]/30 shadow-[inset_0_0_8px_rgba(0,240,255,0.1)] hover:bg-[#00f0ff]/20 hover:border-[#00f0ff]/60 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:scale-[1.01]",
        "cyber-pink":
          "bg-pink-500/10 text-[#d946ef] border border-[#d946ef]/30 shadow-[inset_0_0_8px_rgba(217,70,239,0.1)] hover:bg-[#d946ef]/20 hover:border-[#d946ef]/60 hover:shadow-[0_0_15px_rgba(217,70,239,0.3)] hover:scale-[1.01]",
        "cyber-outline":
          "bg-transparent text-white border border-white/10 hover:bg-white/5 hover:border-white/30",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
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
