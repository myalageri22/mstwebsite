import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-xl2 border border-white/10 bg-[var(--panel)] p-6 shadow-card backdrop-blur-sm transition duration-300 hover:border-brand-blue/45 hover:-translate-y-0.5",
        className
      )}
    >
      {children}
    </article>
  );
}
