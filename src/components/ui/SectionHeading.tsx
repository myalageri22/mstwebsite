import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  className?: string;
};

export function SectionHeading({ title, description, eyebrow, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-lime">{eyebrow}</p> : null}
      <h2 className="font-serif text-3xl font-semibold leading-tight text-brand-text sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base text-brand-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}
