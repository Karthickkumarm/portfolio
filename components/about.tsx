"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import {
  HiOutlineCode,
  HiOutlineLightBulb,
  HiOutlineAcademicCap,
} from "react-icons/hi";
import { SiSpring, SiReact, SiPython } from "react-icons/si";
import { FaJava, FaRocket } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";

const stats = [
  { value: "3+", label: "Years Experience", icon: BsBriefcaseFill },
  { value: "98%", label: "Accuracy Boost @ IBM", icon: HiOutlineLightBulb },
  { value: "40%", label: "Security Risk Reduced", icon: HiOutlineCode },
  { value: "SDE II", label: "Current Role", icon: FaRocket },
];

const techStack = [
  { icon: FaJava, label: "Java", color: "text-orange-500" },
  { icon: SiSpring, label: "Spring Boot", color: "text-green-500" },
  { icon: SiReact, label: "React", color: "text-cyan-400" },
  { icon: SiPython, label: "Python", color: "text-yellow-400" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      id="about"
      ref={ref}
      className="w-full scroll-mt-28"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <SectionHeading>About me</SectionHeading>

      {/* ── BENTO GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 auto-rows-auto px-4 sm:px-6">

        {/* ── LEFT: Bio card (spans 3 cols) ── */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-3 relative rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg p-7"
        >
          {/* Decorative gradient blob */}
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-violet-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-violet-400/15 rounded-full blur-2xl pointer-events-none" />

          {/* Greeting badge */}
          <span className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 text-xs font-semibold uppercase tracking-wider border border-violet-200 dark:border-violet-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            Currently at Rocket India
          </span>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-snug">
            Hey there! I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
              Karthickkumar
            </span>{" "}
            — a full-stack engineer who loves shipping products that{" "}
            <span className="italic">feel</span> as good as they perform.
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 leading-7 mb-4">
            My journey in tech started with a{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              B.Tech in Information Technology
            </span>{" "}
            from Sri Sairam Institute of Technology. Since then, I've worked
            across IBM and Rocket India — crafting high-level UIs, building
            scalable RESTful APIs, and solving real-world engineering challenges
            end-to-end.
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">
            At IBM, I delivered a{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              98% accuracy improvement
            </span>{" "}
            in a pricing prediction tool and reduced security vulnerabilities by
            40% using SonarQube &amp; Mend. Now at Rocket India, I'm
            modernising the mortgage servicing platform with React &amp; Spring
            Boot. When I'm not writing code, I'm brainstorming ideas or keeping
            up with the latest tech trends.
          </p>

          {/* Tech pills */}
          <div className="mt-6 flex flex-wrap gap-3">
            {techStack.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300"
              >
                <Icon className={`${color} text-base`} />
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT: Stat cards (spans 2 cols, 2×2 grid) ── */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="relative group rounded-2xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md p-4 flex flex-col justify-between overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-violet-500/5 group-hover:via-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-2xl" />

              <div className="w-8 h-8 rounded-xl bg-violet-100 dark:bg-violet-500/15 flex items-center justify-center mb-3">
                <Icon className="text-violet-600 dark:text-violet-400 text-base" />
              </div>

              <div>
                <p className="text-2xl font-extrabold text-gray-900 dark:text-white leading-none">
                  {value}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-snug">
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM: Quote / philosophy banner ── */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-violet-200/50 dark:border-violet-500/20 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 p-6 flex items-center gap-5 shadow-xl shadow-violet-500/20"
        >
          {/* Subtle noise texture overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

          <HiOutlineAcademicCap className="text-white/80 text-5xl flex-shrink-0" />
          <div>
            <p className="text-white font-bold text-lg leading-snug">
              "I don't just write code — I build experiences."
            </p>
            <p className="text-white/70 text-sm mt-1">
              B.Tech · Information Technology · Sri Sairam Institute of Technology
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
