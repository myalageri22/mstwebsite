import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mathsciencetutors.example"),
  title: {
    default: "Math and Science Tutors | TMSCA Tutoring",
    template: "%s | Math and Science Tutors"
  },
  description:
    "High-impact tutoring for math and science, built for serious students. Personalized instruction, strategic practice, and measurable progress.",
  openGraph: {
    title: "Math and Science Tutors",
    description:
      "High-impact tutoring for math and science, built for serious students.",
    url: "https://www.mathsciencetutors.example",
    siteName: "Math and Science Tutors",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Math and Science Tutors",
    description:
      "High-impact tutoring for math and science, built for serious students."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-ink text-brand-text antialiased">{children}</body>
    </html>
  );
}
