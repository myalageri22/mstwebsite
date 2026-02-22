import type { Metadata } from "next";
import { RegistrationSection } from "@/components/layout/RegistrationSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { registrationFormUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Math and Science Tutors offers high-impact tutoring for the competition TMSCA!",
  openGraph: {
    title: "Math and Science Tutors",
    description:
      "High-impact tutoring for Math and Science built for serious students.",
    url: "/"
  }
};

const features = [
  {
    title: "Targeted Instruction",
    description:
      "Every student gets focused support from their respective tutors with weekly lessons on how to ace and actually win in these prestigous competitions."
  },
  {
    title: "Exam Preparation Materials",
    description:
      "We provide a whole test bank of TMSCA practice materials and personalized-created notes to help you prepare for the competition."
  },
  {
    title: "Proven Strategies",
    description:
      "We provide tricks and tips that can boost your score in Math and Science competitions"
  }
];

const steps = [
  {
    title: "Check out our program details",
    description: "Decide which program is right for you. We offer two programs: general science and general math tutoring for TMSCA!"
  },
  {
    title: "Register and pay the fee",
    description: "After you register and pay the fee, you will receive an email with instructions on how to join the zoom sessions and access the materials."
  },
  {
    title: "Join the first meeting of the program and get ready to learn",
    description: "We will cover the basics of the competition and provide an overview of the material provided."
  }
];

const faqs = [
  {
    question: "Who is this tutoring best for?",
    answer: "Students in grades 4-8 who want to excel in Math and Science competitions like TMSCA."
  },
  {
    question: "Is tutoring in-person or online?",
    answer: "The program runs online via zoom."
  },
  {
    question: "How much does the program cost?",
    answer: "The 6-week program is $150 and includes 6 sessions total, TMSCA test packets, and specific advice to excel!."
  },
  {
    question: "Do you offer one-on-one tutoring?",
    answer: "As of right now, we don't currently offer one-on-one tutoring, but we may in the future if there is enough demand. The group tutoring sessions will include MAX of 8 kids."
  },

];

export default function HomePage() {
  return (
    <SiteLayout>
      <section className="bg-grid border-b border-white/10 py-20 sm:py-28">
        <Container>
          <div className="animate-fade-up max-w-3xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-brand-lime/40 bg-brand-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-lime">
              TMSCA Tutoring
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-6xl">
              Math and Science Tutors
            </h1>
            <p className="mt-5 text-lg text-brand-muted sm:text-xl">
              High-impact tutoring for Math and Science—built for serious students.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/program" variant="primary">
                View Program
              </Button>
              <Button href="/tutors" variant="secondary">
                Meet the Tutors
              </Button>
              <Button href={registrationFormUrl} rel="noopener noreferrer" target="_blank" variant="ghost">
                Register Now
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            description="Mainly for TMSCA for General Science and Math"
            eyebrow="What We Offer:"
            title="Tutoring for Math and Science competitions"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <Card key={item.title}>
                <h3 className="text-lg font-semibold text-brand-text">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-muted">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-brand-ink/45 py-20">
        <Container>
          <SectionHeading
            description="Simple, structured, and results-focused from the first session."
            eyebrow="Next Steps:"
            title="How to register?"
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <Card className="relative" key={step.title}>
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-lime">Step {index + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-brand-muted">{step.description}</p>
              </Card>
            ))}
          </ol>
        </Container>
      </section>

      <RegistrationSection className="border-b border-white/10 bg-brand-ink/35" />

      <section className="border-y border-white/10 bg-brand-ink/45 py-20">
        <Container>
          <SectionHeading
            //description="Quick answers before you enroll."
            eyebrow="FAQ"
            title="Common questions"
          />
          <div className="mt-8 space-y-3">
            {faqs.map((item) => (
              <details className="rounded-xl border border-white/10 bg-[var(--panel)] px-5 py-4" key={item.question}>
                <summary className="focus-ring cursor-pointer list-none font-medium">{item.question}</summary>
                <p className="mt-3 text-sm text-brand-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
