import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  target?: string;
  rel?: string;
};

const baseStyles =
  "focus-ring inline-flex items-center justify-center rounded-xl border font-semibold transition duration-300 disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles = {
  primary:
    "border-transparent bg-brand-blue text-white shadow-soft hover:-translate-y-0.5 hover:bg-brand-blueDark",
  secondary:
    "border-brand-lime/70 bg-brand-lime/10 text-brand-text hover:-translate-y-0.5 hover:bg-brand-lime/20",
  ghost:
    "border-brand-blue/40 bg-transparent text-brand-text hover:bg-brand-blue/10"
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base"
};

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  disabled,
  onClick,
  target,
  rel
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    const isExternal = href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          className={classes}
          href={href}
          rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
          target={target}
        >
          {children}
        </a>
      );
    }

    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
