import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Math and Science Tutors to get started with personalized math and science tutoring.",
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
            description="Tell us your goals and we will recommend the best next step for your student."
            eyebrow="Contact"
            title="Start the conversation"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
            <Card>
              <ContactForm />
            </Card>
            <Card>
              <h2 className="text-xl font-semibold">Business Contact Info</h2>
              <ul className="mt-4 space-y-3 text-sm text-brand-muted">
                <li>
                  <span className="font-medium text-brand-text">Email:</span> hello@tmsatutoring.com
                </li>
                <li>
                  <span className="font-medium text-brand-text">Phone:</span> (555) 123-4567
                </li>
                <li>
                  <span className="font-medium text-brand-text">Location:</span> Austin, TX (Online + In-Person)
                </li>
                <li>
                  <span className="font-medium text-brand-text">Hours:</span> Mon-Fri, 4:00 PM - 8:00 PM
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
