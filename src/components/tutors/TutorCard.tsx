"use client";

import Image from "next/image";
import { useState } from "react";
import { Card } from "@/components/ui/Card";
import type { Tutor } from "@/data/tutors";

type TutorCardProps = {
  tutor: Tutor;
};

export function TutorCard({ tutor }: TutorCardProps) {
  const [imageSrc, setImageSrc] = useState(tutor.image || "/tutors/default.svg");

  return (
    <Card className="h-full">
      <div className="space-y-4">
        <Image
          alt={`Portrait of ${tutor.name}`}
          className="h-56 w-full rounded-2xl border border-white/10 object-cover"
          height={360}
          onError={() => setImageSrc("/tutors/default.svg")}
          src={imageSrc}
          width={420}
        />
        <div>
          <h2 className="font-serif text-2xl font-semibold text-brand-text">{tutor.name}</h2>
          <p className="mt-1 text-sm font-medium text-brand-blue">{tutor.subjects}</p>
          <p className="mt-3 text-sm text-brand-muted">{tutor.shortBio}</p>
        </div>

        {tutor.badges?.length ? (
          <ul className="flex flex-wrap gap-2">
            {tutor.badges.map((badge) => (
              <li
                className="rounded-full border border-brand-lime/40 bg-brand-lime/10 px-2.5 py-1 text-xs font-semibold tracking-wide text-brand-lime"
                key={badge}
              >
                {badge}
              </li>
            ))}
          </ul>
        ) : null}

        <details className="group rounded-xl border border-white/10 bg-brand-ink/50 p-3">
          <summary className="focus-ring cursor-pointer list-none text-sm font-semibold text-brand-text">
            <span className="inline-flex items-center gap-2">
              View bio
              <span className="transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-3 text-sm text-brand-muted">{tutor.fullBio}</p>
        </details>
      </div>
    </Card>
  );
}
