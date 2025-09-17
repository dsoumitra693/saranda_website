"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../../utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark" | "light";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = ({ 
  children, 
  className, 
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  ...props 
}: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shrink-0 w-fit";
  
  const variants = {
    primary: "bg-primary-lime text-primary-dark hover:bg-[#9ab352] shadow-[0_4px_6px_-1px_rgba(154,179,82,0.3)] hover:shadow-[0_10px_15px_-3px_rgba(154,179,82,0.4)] active:shadow-[0_1px_2px_-1px_rgba(154,179,82,0.2)]",
    secondary: "bg-secondary-forest text-secondary-cream hover:bg-[#2d4f44] shadow-[0_4px_6px_-1px_rgba(45,79,68,0.3)] hover:shadow-[0_10px_15px_-3px_rgba(45,79,68,0.4)] active:shadow-[0_1px_2px_-1px_rgba(45,79,68,0.2)]",
    outline: "bg-background-primary text-text-primary border-2 border-border-primary hover:bg-text-primary hover:text-background-primary shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2)] active:shadow-[0_1px_2px_-1px_rgba(0,0,0,0.05)]",
    ghost: "bg-transparent text-text-primary hover:bg-text-primary hover:text-background-primary shadow-none hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] active:shadow-none",
    dark: "bg-primary-dark text-primary-light-lime hover:bg-primary-deep shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.5)] active:shadow-[0_1px_2px_-1px_rgba(0,0,0,0.3)]",
    light: "bg-background-primary text-text-primary hover:bg-background-secondary shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] active:shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
  };
  
  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4"
  };

  return (
    <div className="inline-block">
      <button 
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="flex items-center justify-center">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="flex items-center justify-center">{icon}</span>
        )}
      </button>
    </div>
  );
};
