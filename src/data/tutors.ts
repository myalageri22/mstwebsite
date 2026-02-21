export type Tutor = {
  id: string;
  name: string;
  subjects: string;
  shortBio: string;
  fullBio: string;
  image: string;
  badges?: string[];
};

export const tutors: Tutor[] = [
  {
    id: "mrinal-yalageri",
    name: "Mrinal Yalageri",
    subjects: "Lead General Science Tutor",
    shortBio: "Biology student with a strong science competition background",
    fullBio:
      "Mrinal is a current 10th grader at Tompkins High School and has a strong background in math and science competitions, with multiple awards at the regional and state level. He is passionate about biology and hopes to pursue a career in biomedical engineering.",
    image: "/tutors/ava.svg",
    badges: ["2nd Place Science at State (2024)", "Multiple Regional Level Awards in Science", "1st Place Team at State (2024)"] 
  },
  {
    id: "aarav-sinha",
    name: "Aarav Sinha",
    subjects: "Lead General Science Tutor",
    shortBio: "Hands-on STEM tutor focused on concept clarity and exam performance.",
    fullBio:
      "Ethan breaks down difficult science topics into clear, visual steps and keeps students accountable with short weekly challenge sets. His sessions emphasize problem-solving habits that transfer across subjects.",
    image: "/tutors/ethan.svg",
    badges: ["AP Physics", "AP Chemistry"]
  },
  {
    id: "jack-cheng",
    name: "Jack Cheng",
    subjects: "Lead General Math Tutor",
    shortBio: "General tutor focused on helping students master dense content quickly.",
    fullBio:
      "Jack is a current 10th grader at Tompkins High School and has a strong background in academic competitions, with mutiple awards at various levels. On the side he is also a professional table tennis player.",
    image: "/tutors/maya.svg",
    badges: ["3x Science Olympiad Invitational Medals", "Tompkins HS Class of 2027-2028 Current Salutatorian", "2021 AMC8 Achievement & Honor Roll", "3x TMSCA State Medals", "4th Place Team at State (2024)"]
  },
  {
    id: "eric-lin",
    name: "Eric Lin",
    subjects: "Lead General Math Tutor",
    shortBio: "Data-driven math tutor with a practical, confidence-building style.",
    fullBio:
      "Noah tracks student progress with weekly diagnostics and custom drills so each session targets the highest-impact gaps. He works with students aiming for top ACT Math scores and strong semester grades.",
    image: "/tutors/noah.svg",
    badges: ["AP Stats", "ACT Math"]
  }
];
