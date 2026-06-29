import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-brand-gold text-brand-blue hover:bg-brand-gold-light active:bg-brand-gold-dark',
        outline:
          'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue',
        ghost: 'text-brand-gold hover:bg-brand-gold/10',
        secondary:
          'bg-white text-brand-blue hover:bg-brand-light-gray border border-brand-light-gray',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
        nav: 'bg-transparent text-white hover:text-brand-gold',
      },
      size: {
        default: 'h-11 px-6 py-2.5',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-14 px-8 text-base',
        xl: 'h-16 px-10 text-lg',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
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
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
