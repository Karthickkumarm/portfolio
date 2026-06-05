"use client";
import React, { useRef, useState } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

function FloatingInput({
  name,
  type = "text",
  label,
  maxLength,
  required,
  multiline = false,
}: {
  name: string;
  type?: string;
  label: string;
  maxLength: number;
  required?: boolean;
  multiline?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const sharedProps = {
    name,
    required,
    maxLength,
    onFocus: () => setFocused(true),
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFocused(false);
      setHasValue(e.target.value.length > 0);
    },
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setHasValue(e.target.value.length > 0),
    className: `
      w-full bg-transparent text-sm text-gray-900 dark:text-white
      outline-none pt-5 pb-2 px-4
      placeholder-transparent
    `,
  };

  const active = focused || hasValue;

  return (
    <div className="relative">
      {/* Animated border */}
      <div
        className={`
          relative rounded-xl border transition-all duration-300
          ${focused
            ? "border-violet-500 shadow-[0_0_0_3px_rgba(139,92,246,0.15)]"
            : "border-gray-200 dark:border-gray-700"
          }
          bg-white dark:bg-gray-900/60
          ${multiline ? "h-40" : "h-14"}
        `}
      >
        {/* Floating label */}
        <label
          className={`
            absolute left-4 pointer-events-none font-medium transition-all duration-200
            ${active
              ? "top-2 text-[0.68rem] text-violet-500"
              : "top-1/2 -translate-y-1/2 text-sm text-gray-400 dark:text-gray-500"
            }
          `}
          style={multiline && !active ? { top: "1rem", transform: "none" } : {}}
        >
          {label}
        </label>

        {/* Input or textarea */}
        {multiline ? (
          <textarea
            {...(sharedProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            className={`${sharedProps.className} resize-none h-full`}
          />
        ) : (
          <input
            {...(sharedProps as React.InputHTMLAttributes<HTMLInputElement>)}
            type={type}
          />
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full scroll-mt-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <div className="max-w-xl mx-auto px-4 sm:px-6">
        {/* Subtle headline */}
        <motion.p
          className="text-center text-gray-500 dark:text-gray-400 text-sm mb-8 -mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Or reach me directly at{" "}
          <a
            href="mailto:karthickkumarmoorthys@gmail.com"
            className="text-violet-600 dark:text-violet-400 font-medium hover:underline"
          >
            karthickkumarmoorthys@gmail.com
          </a>
        </motion.p>

        {/* Form card */}
        <motion.div
          className="relative rounded-3xl border border-gray-100 dark:border-white/10 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md shadow-xl shadow-gray-200/60 dark:shadow-black/30 p-7 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
        >
           {/* Glow blob */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-violet-400/10 dark:bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-violet-400/10 dark:bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

          <form
            ref={formRef}
            className="flex flex-col gap-4"
            action={async (formData: FormData) => {
              const { error } = await sendEmail(formData);
              if (error) { toast.error(error); return; }
              toast.success("Sent! I'll get back to you soon 🚀");
              formRef.current?.reset();
            }}
          >
            <FloatingInput
              name="senderEmail"
              type="email"
              label="Your email address"
              maxLength={500}
              required
            />
            <FloatingInput
              name="message"
              label="Your message"
              maxLength={5000}
              required
              multiline
            />
            <SubmitBtn />
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
