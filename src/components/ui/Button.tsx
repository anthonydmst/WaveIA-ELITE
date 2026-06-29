import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { useHaptics } from "@/hooks/use-haptics"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-card hover:shadow-card-hover transition-[color,background-color,box-shadow,transform] transform hover:-translate-y-0.5",
        outline:
          "border border-input bg-background hover:bg-secondary hover:text-secondary-foreground",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glass:
          "bg-glass-bg border border-glass-border text-foreground hover:bg-glass-bg-hover hover:border-glass-border shadow-md hover:shadow-lg transition-[color,background-color,box-shadow,transform] transform hover:-translate-y-0.5",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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
  ({ className, variant, size, asChild = false, onClick, ...props }, ref) => {
    const { trigger } = useHaptics()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Trigger light haptic for primary/outline/glass interactions
      if (variant === "default" || variant === "outline" || variant === "glass" || !variant) {
        trigger("light")
      }
      onClick?.(e)
    }

    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={handleClick}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
