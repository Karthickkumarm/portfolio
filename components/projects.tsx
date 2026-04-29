"use client";
import React, { useState } from 'react'
import SectionHeading from './section-heading'
import Project from './project'
import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const {ref} = useSectionInView('Projects',0.5);
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[number] | null>(null);

  return (
    <section ref={ref}
    id="projects" className="scroll-mt-28 mb-28">
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

        {selectedProject && (
            <div
                className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center"
                onClick={() => setSelectedProject(null)}
            >
                <div
                    className="bg-white rounded-xl p-10 m-4 max-w-2xl w-full dark:bg-gray-900 relative shadow-2xl border border-gray-200 dark:border-gray-700"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-3xl font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">&times;</button>
                    <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">{selectedProject.title}</h3>
                    <div className="flex items-center justify-center gap-4 mt-8">
                        {selectedProject.githubUrl && (
                            <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="group bg-white px-6 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition cursor-pointer border border-gray-300 dark:bg-white/10 text-base font-medium text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white">View Source</a>
                        )}
                        {selectedProject.demoUrl && (
                            <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="group bg-gray-900 text-white px-6 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-800 active:scale-100 transition text-base font-medium">Live Demo</a>
                        )}
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}
