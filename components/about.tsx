"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const {ref} = useSectionInView('About');

  return (
    <motion.section
      className="mb-28 w-full text-center leading-8 sm:mb-40 scroll-mt-28 px-4 sm:px-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        Hey there! I'm a{" "}
        <span className="font-medium">Software Development Engineer II</span>at Mr. Cooper, and I'm all about building things that not only work flawlessly, but also feel great to use. My journey in tech began with a{" "}
        <span className="font-medium">Bachelor of Technology</span>{" "} in 
        <span className="font-medium"> Information Technology</span>{" "} from
        <span className="font-medium"> Sri Sairam Institute of Technology</span>{" "}
        , and I've been on a mission ever since to turn complex problems into elegant solutions.
      </p>
As an SDE II, I dive deep into the world of full-stack development. I'm passionate about crafting high-level user interfaces and building robust, scalable APIs. My previous work experience at
<span className="font-medium"> IBM CIO India Private Limited</span>{" "} as a Software Developer helped me fine-tune my skills in everything from building RESTful APIs using Spring Boot3 to managing journal entries. 
During my time there, I also detected and resolved vulnerabilities in applications using Mend and SonarQube, which reduced security risks by 40%.
When I'm not writing code, I'm often brainstorming new project ideas or staying on top of the latest tech trends. Let's connect and build something awesome together!
      <p className="mb-3">

        </p>
    </motion.section>
  )
}
