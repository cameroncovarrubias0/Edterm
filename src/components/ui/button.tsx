import * as React from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'outline' | 'success' | 'ghost';
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition cursor-pointer disabled:opacity-50 disabled:pointer-events-none';
    const styles: Record<Variant, string> = {
      primary: 'bg-brand-accent text-white hover:opacity-90',
      outline:
        'border border-brand-accent text-brand-accent hover:bg-brand-accent/10',
      success: 'bg-brand-success text-white hover:opacity-90',
      ghost: 'text-brand-accent hover:bg-brand-accent/10',
    };
    return (
      <button
        ref={ref}
        className={cn(base, styles[variant], className)}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
