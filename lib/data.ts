import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Internship",
    location: "IBM CIO India Private Limited, Bengaluru",
    description:
      "Delivered a 98.06% improvement in predictive algorithm accuracy for the IBM e-Pricing Tool through advanced data preprocessing and hyperparameter tuning. ",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2023 - Jul 2023",
  },
  {
    title: "Software Developer",
    location: "IBM CIO India Private Limited, Bengaluru",
    description:
      "Specializing as a Full-Stack Developer for the General Ledger User Interface, with a focus on High-Level Design for the WD5 Support Dashboard and Consolidation Journals.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2023 - Apr 2025",
  },
  {
    title: "Software Development Engineer II",
    location: "Mr.Cooper Group, Chennai",
    description:
      "I'm now a full-stack developer at Mr.Cooper Group, working on modernizing the mortgage servicing platform using React and SpringBoot Core.",
    icon: React.createElement(FaReact),
    date: "May 2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Java8", "JavaScript", "Spring Boot", "Python",
"HTML", "CSS", "ReactJS", "MySQL", "Flask",
"Hibernate", "JDBC", "C","Data Structures and Algorithms",
"Agile Methodology", "OOPS",
"Software Development Life Cycle",
"System Design", "Data Science"
] as const;