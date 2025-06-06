import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { button } from '@/styles/atoms/button.css';
import type { RecipeVariants } from '@vanilla-extract/recipes';

type ButtonVariants = RecipeVariants<typeof button>;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    className?: string;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseClass = button({ variant, size });
    const combinedClassName = className
      ? `${baseClass} ${className}`
      : baseClass;

    return (
      <button className={combinedClassName} ref={ref} {...props} />
    );
  }
);

Button.displayName = 'Button';

export default Button;
