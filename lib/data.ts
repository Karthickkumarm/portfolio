import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import handwrittenDigitRecognitionImg from "@/public/handwritten-digit-recognition.png";
import manholeDetectionImg from "@/public/manhole-detection.png";
import railwayReservationImg from "@/public/railway-reservation.png";

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
    location: "Rocket India, Chennai",
    description:
      "I'm now a full-stack developer at Rocket India, working on modernizing the mortgage servicing platform using React and SpringBoot Core.",
    icon: React.createElement(FaReact),
    date: "May 2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "A Novel Method for Handwritten Digit Recognition System",
    description: "Developed a versatile model for handwritten digit recognition, processing 100+ images daily. Achieved a 97% performance improvement by incorporating additional layers and ReLU activation.",
    tags: ["Pytorch", "Jupyter Notebook"],
    githubUrl: "https://github.com/Karthickkumarm/Manhole-Detection-and-Monitoring-System", 
    demoUrl: "", // Replace with actual demo URL
    imageUrl: handwrittenDigitRecognitionImg,
  },
  {
    title: "Manhole Detection and Monitoring System",
    description: "Built an IoT manhole monitoring system with sensor arrays and location-based SMS alerts to prevent accidents. Increased process effectiveness by 90% for faster alerts and overflow prevention.",
    tags: ["Internet of Things", "C"],
    githubUrl: "https://github.com/Karthickkumarm/A-Novel-Method-for-Handwritten-Digit-Recognition-System", 
    demoUrl: "https://www.youtube.com/watch?v=tyaq_09Rm84", 
    imageUrl: manholeDetectionImg,
  },
   {
    title: "Railway Ticket Reservation System",
    description:
      "A comprehensive railway ticket reservation system built with Spring Boot and PostgreSQL, featuring user authentication, seat booking, and payment processing.",
    tags: ["Spring Boot", "PostgreSQL"],
    githubUrl: "https://github.com/Karthickkumarm/Java-programming-questions/blob/main/src/RailwayTicketRS.java", 
    demoUrl: "", // Replace with actual demo URL
    imageUrl: railwayReservationImg,
  },
] as const;

export const skillsData = [
  "Java8", "JavaScript", "Spring Boot", "Python",
"HTML", "CSS", "ReactJS", "MySQL", "MongoDB", "Redis", "Flask",
"Hibernate", "JDBC", "C", "JUnit",
"IntelliJ IDEA", "VSTS / Azure DevOps", "Postman", "Swagger (Open API)", "Git/GitHub", "SonarQube", "JIRA", "Spring Tool Suite (STS)", "VS Code",
"Data Structures and Algorithms",
"Agile Methodology", "OOP",
"SDLC",
"System Design", "Data Science"
] as const;