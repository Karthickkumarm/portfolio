"use client";
import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

type Project = (typeof projectsData)[number];

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="group relative flex-shrink-0 w-[340px] sm:w-[380px] h-[420px] mx-3 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Glow border */}
      <div className="absolute -inset-[1.5px] rounded-3xl bg-gradient-to-br from-violet-500/50 via-indigo-400/30 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[3px]" />

      {/* Card body */}
      <div
        className="relative h-full rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-violet-500/20 flex flex-col"
        style={
          isHovered
            ? {
                background: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139,92,246,0.08), transparent 65%)`,
              }
            : {}
        }
      >
        {/* Image */}
        <div className="relative w-full h-52 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            quality={90}
            sizes="380px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

          {/* Floating buttons on image */}
          <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full hover:bg-violet-600 transition-colors font-medium"
              >
                <FaGithub size={12} />
                Code
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 bg-violet-600/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full hover:bg-violet-500 transition-colors font-medium"
              >
                <FaExternalLinkAlt size={10} />
                Demo
              </a>
            )}
          </div>
        </div>

        {/* Text content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug line-clamp-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4">
            {project.description}
          </p>

          {/* Tags — pushed to bottom */}
          <div className="mt-auto" />
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[0.65rem] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-1 text-xs text-gray-400 group-hover:text-violet-500 transition-colors">
            <span>View details</span>
            <svg
              className="w-3 h-3 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Duplicate cards for seamless infinite loop
  const doubled = [...projectsData, ...projectsData];

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 relative w-full overflow-hidden"
    >
      {/* Background glow blob */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-300/20 dark:bg-violet-900/20 rounded-full blur-3xl pointer-events-none" />

      <SectionHeading>My Projects</SectionHeading>

      {/* Subtitle */}
      <motion.p
        className="text-center text-gray-500 dark:text-gray-400 text-sm mb-10 -mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Hover to pause · Click a card for details
      </motion.p>

      {/* Marquee */}
      <motion.div
        className="marquee-fade w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="marquee-track py-4">
          {doubled.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </motion.div>

      {/* Counter */}
      <motion.div
        className="flex items-center justify-center gap-3 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {projectsData.map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-violet-400/50 dark:bg-violet-500/50"
          />
        ))}
      </motion.div>

      {/* ── MODAL ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/65 backdrop-blur-lg" />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
              className="relative z-10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/30 dark:border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gradient top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500" />

              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              >
                <AiOutlineClose size={18} />
              </button>

              {/* Image — explicit width/height so it renders inside overflow-y-auto */}
              <div className="relative w-full overflow-hidden rounded-t-3xl">
                <Image
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  width={640}
                  height={260}
                  className="w-full object-cover"
                  quality={90}
                  style={{ display: "block", maxHeight: "220px", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-snug">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-7">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-500/25"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-sm font-medium"
                    >
                      <FaGithub size={16} />
                      View Source
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-500 hover:to-indigo-500 transition-all text-sm font-medium shadow-lg shadow-violet-500/25"
                    >
                      <CgWebsite size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
