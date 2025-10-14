"use client";

export const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  ...props
}) => {
  const baseStyles = "px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shrink-0 w-fit";

  const variants = {
    primary: "bg-secondary text-neutral-dark hover:bg-[oklch(0.88_0.17_102.87)] shadow-[0_4px_6px_-1px_oklch(0.9069_0.1869_102.87_/_0.3)] hover:shadow-[0_10px_15px_-3px_oklch(0.9069_0.1869_102.87_/_0.4)] active:shadow-[0_1px_2px_-1px_oklch(0.9069_0.1869_102.87_/_0.2)]",
    secondary: "bg-primary text-neutral-light hover:bg-[oklch(0.35_0.06_151.15)] shadow-[0_4px_6px_-1px_oklch(0.4002_0.06_151.15_/_0.3)] hover:shadow-[0_10px_15px_-3px_oklch(0.4002_0.06_151.15_/_0.4)] active:shadow-[0_1px_2px_-1px_oklch(0.4002_0.06_151.15_/_0.2)]",
    outline: "bg-neutral-light text-neutral-dark border-2 border-neutral-dark hover:bg-neutral-dark hover:text-neutral-light shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2)] active:shadow-[0_1px_2px_-1px_rgba(0,0,0,0.05)]",
    ghost: "bg-transparent text-neutral-dark hover:bg-neutral-dark hover:text-neutral-light shadow-none hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] active:shadow-none",
    dark: "bg-neutral-dark text-secondary hover:bg-[oklch(0.23_0.026_140.39)] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.5)] active:shadow-[0_1px_2px_-1px_rgba(0,0,0,0.3)]",
    light: "bg-neutral-light text-neutral-dark hover:bg-[oklch(0.96_0_0)] shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] active:shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
  };

  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  return (
    <div className="inline-block">
      <button
        className={`
          ${baseStyles}
          ${variants[variant]}
          ${sizes[size]}
          ${className}`
        }
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
