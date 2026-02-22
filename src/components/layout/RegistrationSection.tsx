import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { registrationFormUrl } from "@/data/site";
import { cn } from "@/lib/utils";

type RegistrationSectionProps = {
  className?: string;
};

export function RegistrationSection({ className }: RegistrationSectionProps) {
  return (
    <section className={cn("py-20", className)}>
      <Container>
        <SectionHeading
          description="Secure your spot in the next tutoring cycle using our official Google Form."
          eyebrow="Registration"
          title="Register for the program"
        />
        <Card className="mt-8 flex flex-col gap-4 bg-gradient-to-br from-brand-blue/15 via-brand-ink/70 to-brand-lime/10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-brand-muted">
            Complete the registration form and we will send your next-step details by email.
          </p>
          <Button href={registrationFormUrl} rel="noopener noreferrer" target="_blank" variant="primary">
            Open Registration Form
          </Button>
        </Card>
      </Container>
    </section>
  );
}

