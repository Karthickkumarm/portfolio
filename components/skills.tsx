"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

export default function Skills() {
    const {ref} = useSectionInView("Skills");
  return (
    <section ref={ref} className='w-full scroll-mt-28' id='skills'>
        <SectionHeading>My Skills</SectionHeading>
        <ul className="flex flex-wrap gap-2 text-lg justify-center text-gray-800">
            {
                skillsData.map((skill,index) => (
                    <motion.li key={index}
                    className="bg-white dark:bg-white/10 dark:text-white/80 text-gray-800
                    border border-violet-200 dark:border-violet-500/20
                    hover:border-violet-400 dark:hover:border-violet-400
                    hover:shadow-[0_0_12px_rgba(139,92,246,0.15)]
                    rounded-full px-5 py-2.5 text-base
                    transition-all duration-200 cursor-default"
                    variants={fadeInAnimationVariants}
                    initial="initial" whileInView="animate" viewport={{
                        once:true,
                    }}
                    custom={index}>{skill}</motion.li>
                ))
            }
        </ul>
    </section>
  )
}
