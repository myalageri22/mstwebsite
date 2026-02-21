import Link from "next/link";
import { Container } from "@/components/ui/Container";

const links = [
  { href: "/", label: "Home" },
  { href: "/tutors", label: "Tutors" },
  { href: "/program", label: "Program" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-brand-ink/90 py-12">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="font-serif text-2xl font-semibold">Math &amp; Science Tutors</h2>
            <p className="mt-3 max-w-xs text-sm text-brand-muted">
              Premium tutoring for high-performing students in middle school and high school.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-lime">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              {links.map((link) => (
                <li key={link.href}>
                  <Link className="focus-ring rounded transition hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-lime">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              <li>Email: msttutorsofficial@gmail.com</li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-brand-muted">
          © {new Date().getFullYear()} Math and Science Tutors. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
