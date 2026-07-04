import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  children,
  href,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-white text-black hover:bg-white/85",
    secondary: "bg-black text-white hover:bg-black/80",
    outline: "border border-white/30 text-white hover:bg-white/10",
    ghost: "text-white hover:bg-white/10",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes =
    `inline-flex items-center justify-center rounded-full font-semibold transition hover:-translate-y-1 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}