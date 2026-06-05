"use client";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number] & {
  onProjectClick: () => void;
  index: number;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  demoUrl,
  onProjectClick,
  index,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient border glow on hover */}
      <div className="absolute -inset-[1.5px] rounded-3xl bg-gradient-to-br from-violet-500/50 via-indigo-500/30 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[3px]" />

      {/* Card */}
      <div
        className="relative rounded-3xl overflow-hidden cursor-pointer border border-white/20 dark:border-white/10 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-xl dark:shadow-black/40 transition-all duration-400 group-hover:shadow-2xl group-hover:shadow-violet-500/15 group-hover:-translate-y-2"
        onClick={onProjectClick}
        style={
          isHovered
            ? {
                background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139,92,246,0.09), transparent 65%)`,
              }
            : {}
        }
      >
        {/* Image section */}
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-108"
            quality={92}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Index badge */}
          <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white text-xs font-bold border border-white/20">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Floating action buttons */}
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 bg-black/70 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full hover:bg-violet-600 transition-colors font-medium"
              >
                <FaGithub size={13} />
                <span>Code</span>
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 bg-violet-600/90 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full hover:bg-violet-500 transition-colors font-medium"
              >
                <FaExternalLinkAlt size={10} />
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2.5 leading-snug line-clamp-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 mb-5">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-[0.68rem] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* "View more" hint */}
          <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">
            <span>Click to view details</span>
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}