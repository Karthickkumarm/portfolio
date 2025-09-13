"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';


const segments = [
  { text: "Hello, I'm ", className: "" },
  { text: "Karthick", className: "font-bold" },
  { text: ". I'm a ", className: "" },
  { text: "Software Developer", className: "font-bold" },
  { text: " with ", className: "" },
  { text: "2+ years", className: "font-bold" },
  { text: " of experience. I enjoy building ", className: "" },
  { text: "sites & applications ", className: "italic" },
  { text: "with a passion for building cool stuff that works like a charm.", className: "" },
];

export default function Intro() {
  const {ref} = useSectionInView('Home',0.5);
  const {setActiveSection,
    setTimeOfLastClick} = useActiveSectionContext();
  

  const [typed, setTyped] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    let j = 0;
    let current = '';
    const typeNext = () => {
      if (i >= segments.length) {
        setIsTyping(false); // Typing finished
        return;
      }
      if (j < segments[i].text.length) {
        current += segments[i].text[j];
        setTyped(prev => [
          ...prev.slice(0, i),
          current,
          ...Array(Math.max(segments.length - i - 1, 0)).fill(''),
        ]);
        j++;
        setTimeout(typeNext, 20);
      } else {
        setTyped(prev => [
          ...prev.slice(0, i),
          current,
          ...Array(Math.max(segments.length - i - 1, 0)).fill(''),
        ]);
        i++;
        j = 0;
        current = '';
        setTimeout(typeNext, 100);
      }
    };
    setTyped(Array(segments.length).fill(''));
    setIsTyping(true); // Reset typing state on mount
    typeNext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section ref={ref} 
  id="home" className="mb-28 w-full text-center sm:mb-0 scroll-mt-[100rem]">
        <div className="flex items-center justify-center">
            <div className="relative ">
                <motion.div initial={{scale:0,opacity:0}}
                animate={{opacity:1,scale:1}}
                transition={{
                    type:"tween",
                    duration:0.2,
                }}
                >
                <Image src="https://drive.google.com/uc?export=view&id=1VBquq9to9st9Mb7MeFrR2o1JUHcuEASU"
                 alt="Karthickkumar M" width="192" height="192" quality="95"  priority={true}
                 className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-x1"/>
                </motion.div>
                 <motion.span className="absolute bottom-0 right-0 text-4xl"
                 initial={{scale:0,opacity:0}}
                 animate={{opacity:1,scale:1}}
                 transition={{
                     type:"spring",
                     delay:0.1,
                     stiffness:125,
                     duration:0.7,
                 }}>
                    👋
                 </motion.span>
            </div>
        </div>

        <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {segments.map((seg, idx) => (
          <span key={idx} className={seg.className}>
            {typed[idx]}
          </span>
        ))}
        {isTyping && <span className="animate-blink">|</span>}
        
      </motion.h1>

      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
      >
      <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
           outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
           onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
           }}
          
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full 
          outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full 
          focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/karthickkumar-m-6887641b3/"
          target="_blank"
        >
            <BsLinkedin />
        </a>
        
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] 
          hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Karthickkumarm"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>

    </section>
  )
}

// Add this to your global CSS or Tailwind config for blinking cursor
// .animate-blink { animation: blink 1s steps(2, start) infinite; }
// @keyframes blink { to { visibility: hidden; } }
