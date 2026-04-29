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
                    className="bg-white rounded-lg p-8 m-4 max-w-2xl w-full dark:bg-gray-900 relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={() => setSelectedProject(null)} className="absolute top-3 right-5 text-2xl font-bold text-gray-500 hover:text-gray-800 dark:hover:text-white">&times;</button>
                    <h3 className="text-2xl font-semibold mb-4">{selectedProject.title}</h3>
                    <div className="flex items-center gap-4 mt-4">
                        {selectedProject.githubUrl && (
                            <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="group bg-white px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 text-sm font-medium">View Source</a>
                        )}
                        {selectedProject.demoUrl && (
                            <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="group bg-gray-900 text-white px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition text-sm font-medium">Live Demo</a>
                        )}
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}
