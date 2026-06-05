"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-20 w-full">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline
        lineColor={theme === "light" ? "#ede9fe" : "rgba(139, 92, 246, 0.2)"}
      >
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border:
                  theme === "light"
                    ? "1px solid #ede9fe"
                    : "1px solid rgba(139, 92, 246, 0.15)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #d1d5db"
                    : "0.4rem solid rgba(255, 255, 255, 0.2)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "#f5f3ff" : "#1e1b4b",
                color:
                  theme === "light" ? "#7c3aed" : "#a78bfa",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-violet-600 dark:text-violet-400">{item.title}</h3>
              <p className="font-normal !mt-0 text-gray-500 dark:text-white/60">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}