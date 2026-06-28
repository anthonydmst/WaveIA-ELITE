import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { useHaptics } from "@/hooks/use-haptics"


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "outline" | "ghost" | "link" | "glass"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, onClick, ...props }, ref) => {
    const { trigger } = useHaptics()
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Trigger light haptic for primary/outline/glass interactions
      if (variant === "default" || variant === "outline" || variant === "glass") {
        trigger("light")
      }
      onClick?.(e)
    }

    const Comp = asChild ? Slot : "button"
    
    // Base styles
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    // Variant styles
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-card hover:shadow-card-hover transition-[color,background-color,box-shadow,transform] transform hover:-translate-y-0.5",
      outline: "border border-input bg-background hover:bg-secondary hover:text-secondary-foreground",
      ghost: "hover:bg-secondary hover:text-secondary-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      glass: "bg-card/60 backdrop-blur-md border border-white/10 text-foreground hover:bg-card/80 hover:border-white/20 shadow-md hover:shadow-lg transition-[color,background-color,box-shadow,transform] transform hover:-translate-y-0.5"
    }
    
    // Size styles
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    }

    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        onClick={handleClick}
        {...props}
      />

    )
  }
)
Button.displayName = "Button"

export { Button }
