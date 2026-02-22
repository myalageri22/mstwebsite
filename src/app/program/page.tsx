import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { programData } from "@/data/program";

export const metadata: Metadata = {
  title: "Program",
  description:
    "Explore the 6-week TMSCA tutoring program, including pricing, weekly structure, and what is included.",
  openGraph: {
    title: "Program | Math and Science Tutors",
    description: "6-week program with live sessions, guided practice, and progress tracking.",
    url: "/program"
  }
};



const whyChooseUs = [
  {
    title: "Competition-Focused Coaching",
    description:
      "Our sessions are built around TMSCA-style problems, time strategy, and score-maximizing methods."
  },
  {
    title: "Small Group Attention",
    description:
      "Students get direct feedback and lots of time to ask specific questions each session."
  },
  {
    title: "Learn from the Best",
    description:
      "Learn from high schoolers who have been through the process and know how to actually win these type of competitions."
  },
  {
    title: "Competitive Pricing",
    description:
      "Our prices are significantly cheaper than other programs by over 50%!"
  }
];

const offeredPrograms = [
  {
    title: "General Science",
    description:
      "Taught by Mrinal and Aarav"
  },
  {
    title: "General Math",
    description:
      "Taught by Jack and Eric"
  }
];



export default function ProgramPage() {
  return (
    <SiteLayout>
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.25fr,0.75fr]">
            <Card className="bg-gradient-to-br from-brand-blue/20 via-brand-ink/60 to-brand-lime/10">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-lime">Signature Offer</p>
              <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">{programData.title}</h1>
              <p className="mt-3 max-w-2xl text-brand-muted">{programData.subtitle}</p>
              <div className="mt-8 inline-flex items-end gap-2 rounded-2xl border border-brand-lime/50 bg-brand-lime/10 px-5 py-3">
                <span className="font-serif text-5xl font-semibold text-brand-lime">{programData.price}</span>
                <span className="pb-1 text-sm text-brand-muted">total for all 6 weeks</span>
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Contact to Enroll
                </Button>
              </div>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold text-brand-text">Schedule (Editable)</h2>
              <ul className="mt-4 space-y-2 text-sm text-brand-muted">
                <li>
                  <span className="font-medium text-brand-text">Days:</span> {programData.schedule.days}
                </li>
                <li>
                  <span className="font-medium text-brand-text">Time:</span> {programData.schedule.time}
                </li>
                <li>
                  <span className="font-medium text-brand-text">Format:</span> {programData.schedule.format}
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            description="We currently offer two focused tracks so students can choose the best fit."
            eyebrow="Programs Offered"
            title="Two programs we offer"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {offeredPrograms.map((program) => (
              <Card key={program.title}>
                <h3 className="text-xl font-semibold text-brand-text">{program.title}</h3>
                <p className="mt-2 text-sm text-brand-muted">{program.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-brand-ink/45 py-20">
        <Container>
          <SectionHeading
            description="Everything students get throughout the program."
            eyebrow="Included"
            title="What is included"
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {programData.included.map((item) => (
              <li
                className="rounded-xl border border-white/10 bg-[var(--panel)] px-4 py-3 text-sm text-brand-muted"
                key={item}
              >
                <span className="mr-2 text-brand-lime">•</span>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            description="Students choose us because the program is practical, focused, and built for results."
            eyebrow="Why Choose Us"
            title="Why you should choose us?"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {whyChooseUs.map((item) => (
              <Card key={item.title}>
                <h3 className="text-lg font-semibold text-brand-text">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-muted">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
