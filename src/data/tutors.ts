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
      "Mrinal is a current 10th grader at Tompkins High School and has a strong background in Math and Science competitions, with multiple awards at the regional and state level. He is passionate about biology. Additionally, Mrinal has a very keen interest in Biomedical Engineering and hopes to become a physician-scientist someday and work in the field of radiology alongside biotechnology with also AI. He has many hobbies, such as playing tennis, cricket, and love mobile games and also love to do STEM competitions with of course a focus in Biology. He has also conducted research in using AI in Bioprinting and hopes to publish a paper soon.",
    image: "/tutors/mrinal.png",
    badges: ["2nd Place Science at State (2024)", "Multiple Regional Level Awards in Science", "1st Place Team at State (2024)", "One of the Highest Score (231) in General Science", "2x Science Olympiad Medal", "Vice-President of MST Club at CRJH", "1st Place, Clements Java Programming", "6th Place, Seven Lakes Java Programming", "6th Highest Biology Score in UIL Districts"] 
  },
  
  {
    id: "aarav-sinha",
    name: "Aarav Sinha",
    subjects: "Lead General Science Tutor",
    shortBio: "Hands-on science tutor focused on concept clarity and exam performance.",
    fullBio:
      "Aarav is a sophomore at Tompkins High School who one day aspires to be a computational neuroscientist doing groundbreaking research in academia. He has a strong background in science competitions from TMSCA Science in middle school, where he's won over 50 medals in 3 year, all the way through Science Olympiad in high school, where he's competed as part of the Tompkins SciOly A Team and placed top 10 at MIT, top 5 at state, and won regional competitions. Outside of science competitions, Aarav conducts computational neuoscience research and has published papers in the field.",
    image: "/tutors/aarav.png",
    badges: ["1st Place TMSCA Science at State", "Top 3 in 2 events at Texas State Science Olympiad", "Over 15 lifetime scioly medals, $500 prize money won)", "Placed Top 5 in Science in every TMSCA comp attended", "1st Place Team at State (2024)", "Tompkins HS Class of 2027-2028 Rank 5"]
  },
  
  
  {
    id: "jack-cheng",
    name: "Jack Cheng",
    subjects: "Lead General Math Tutor",
    shortBio: "General tutor focused on helping students master dense content quickly.",
    fullBio:
      "Jack is the current sophomore Salutatorian at Tompkins High School and has a strong background in academic competitions and biotechnological research, with multiple awards in TMSCA, Science Olympiad, Scholastic Art and Writing, and AMC at various levels. On the side he is also proficent in Chinese, a professional table tennis player and art enthusiast.",
    image: "/tutors/Jack.jpeg",
    badges: ["3x Science Olympiad Invitational Medals", "Tompkins HS Class of 2027-2028 Current Salutatorian", "2021 AMC8 Achievement & Honor Roll", "2x TMSCA General Math State Medals", "TMSCA General Science State Medal", "4th Place Math Team at State (2024)", "Scholastic Critical Essay Silver Key on Biotechnology", "Years of Tutoring Experience"]
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
