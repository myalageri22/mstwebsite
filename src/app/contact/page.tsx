import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Math and Science Tutors to get started with personalized Math and Science tutoring.",
  openGraph: {
    title: "Contact | Math and Science Tutors",
    description: "Reach out to enroll in tutoring or ask questions about the 6-week program.",
    url: "/contact"
  }
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            description="For all questions and enrollment details, email us directly."
            eyebrow="Contact"
            title="Email us directly"
          />
          <div className="mt-10 max-w-4xl">
            <Card className="py-12 text-center sm:py-16">
              <p className="text-sm uppercase tracking-[0.16em] text-brand-lime">Official Contact Email</p>
              <a
                className="focus-ring mt-4 inline-block rounded-xl px-2 font-serif text-3xl font-bold text-brand-text transition hover:text-brand-lime sm:text-5xl"
                href="mailto:msttutorsofficial@gmail.com"
              >
                msttutorsofficial@gmail.com
              </a>
            </Card>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
