"use client";
import React, { useState } from 'react';
import SectionHeading from './section-heading';
import Project from './project';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';

export default function Projects() {
  const {ref} = useSectionInView('Projects',0.5);
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[number] | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref as unknown as React.RefObject<HTMLElement>,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-400, 400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [400, -400]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 relative overflow-hidden">
        <motion.div
            className="absolute -z-10 top-1/4 -left-72 w-96 h-96 bg-purple-200 rounded-full blur-3xl dark:bg-purple-900/50"
            style={{ y: y1 }}
        />
        <motion.div
            className="absolute -z-10 top-1/2 -right-72 w-96 h-96 bg-blue-200 rounded-full blur-3xl dark:bg-blue-900/50"
            style={{ y: y2 }}
        />
        <SectionHeading>Projects</SectionHeading>
        <div className='w-full'>
            {
                projectsData.map((project,index)=>(
                <React.Fragment key={index}>
                <Project {...project} onProjectClick={() => setSelectedProject(project)} />
                </React.Fragment>   
                ))
            }
        </div>

        <AnimatePresence>
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center p-4"
                    onClick={() => setSelectedProject(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 50 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 sm:p-8">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h3>
                                <button onClick={() => setSelectedProject(null)} className="p-1 rounded-full text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                    <AiOutlineClose size={24} />
                                </button>
                            </div>

                            <Image src={selectedProject.imageUrl} alt={selectedProject.title} width={640} height={360} className="rounded-lg shadow-md mb-6 w-full object-cover" />

                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>

                            <ul className="flex flex-wrap gap-2 mb-8">
                                {selectedProject.tags.map((tag, index) => (
                                    <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 text-sm font-medium text-gray-800 dark:text-gray-200 rounded-full" key={index}>{tag}</li>
                                ))}
                            </ul>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                {selectedProject.githubUrl && (
                                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 w-full sm:w-auto justify-center"><FaGithub /> View Source</a>
                                )}
                                {selectedProject.demoUrl && (
                                    <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition w-full sm:w-auto justify-center"><CgWebsite /> Live Demo</a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    </section>
  )
}
