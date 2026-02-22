import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TutorCard } from "@/components/tutors/TutorCard";
import { tutors } from "@/data/tutors";

export const metadata: Metadata = {
  title: "Tutors",
  description:
    "Meet the Math and Science Tutors team and explore each tutor's subject strengths and teaching style.",
  openGraph: {
    title: "Tutors | Math and Science Tutors",
    description: "Meet our tutors and find the best fit for your Math and Science goals.",
    url: "/tutors"
  }
};

export default function TutorsPage() {
  return (
    <SiteLayout>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            description="Experienced Tutors who have won prestigous TMSCA awards and passionate about teaching"
            eyebrow="Our Team"
            title="Meet the tutors"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {tutors.map((tutor) => (
              <TutorCard key={tutor.id} tutor={tutor} />
            ))}
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
