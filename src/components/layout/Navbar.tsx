"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

const links = [
  { href: "/", label: "Home" },
  { href: "/tutors", label: "Tutors" },
  { href: "/program", label: "Program" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-ink/85 backdrop-blur-md">
      <Container>
        <div className="flex min-h-20 items-center justify-between">
          <Link className="focus-ring flex items-center gap-3 rounded-lg" href="/" onClick={() => setOpen(false)}>
            <Image alt="Math and Science Tutors logo" className="h-11 w-11 rounded-full border border-white/10" height={44} src="/logo.svg" width={44} />
            <div>
              <p className="font-serif text-lg font-semibold leading-none">Math &amp; Science Tutors</p>
              <p className="mt-0.5 text-xs tracking-wide text-brand-muted">TMSCA Tutoring</p>
            </div>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  className={cn(
                    "focus-ring rounded-lg px-3 py-2 text-sm font-medium transition",
                    active ? "bg-brand-blue/20 text-white" : "text-brand-muted hover:bg-white/5 hover:text-white"
                  )}
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label="Toggle menu"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-brand-text transition hover:border-brand-blue/50 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            type="button"
          >
            <span className="relative block h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-5 bg-current transition-all duration-300",
                  open && "translate-y-[7px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-all duration-300",
                  open ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-all duration-300",
                  open && "-translate-y-[7px] -rotate-45"
                )}
              />
            </span>
          </button>
        </div>

        <div
          className={cn(
            "overflow-hidden transition-all duration-300 md:hidden",
            open ? "max-h-80 pb-4 opacity-100" : "max-h-0 opacity-0"
          )}
          id="mobile-menu"
        >
          <nav aria-label="Mobile" className="space-y-1 rounded-xl border border-white/10 bg-white/5 p-2">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  className={cn(
                    "focus-ring block rounded-lg px-3 py-2 text-sm font-medium transition",
                    active ? "bg-brand-blue/20 text-white" : "text-brand-muted hover:bg-white/10 hover:text-white"
                  )}
                  href={link.href}
                  key={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
}
