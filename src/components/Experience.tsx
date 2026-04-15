"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Title */}
        <p
          className="mb-16 text-center text-sm tracking-[0.3em] text-[#555]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          EXPERIENCE
        </p>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            className="absolute top-0 h-full w-px bg-[#1A1A1A] left-4 md:left-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />

          {/* Experience Items */}
          {EXPERIENCE.map((exp, index) => {
            const isLeft = index % 2 === 1;

            return (
              <div
                key={`${exp.company}-${index}`}
                className="relative mb-16 flex"
              >
                {/* Timeline Node */}
                <motion.div
                  className="absolute top-6 z-10 h-4 w-4 rounded-full border-2 border-[#333] bg-black left-4 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2"
                  initial={{ borderColor: "#333", boxShadow: "none" }}
                  whileInView={{
                    borderColor: "#fff",
                    boxShadow: "0 0 10px rgba(255,255,255,0.3)",
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />

                {/* Card */}
                <motion.div
                  className={`
                    ml-10 w-full
                    md:ml-0 md:w-[calc(50%-2rem)]
                    ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}
                  `}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <div className="rounded-xl border border-[#1A1A1A] bg-[#0A0A0A] p-6">
                    {/* Header */}
                    <h3
                      className="text-lg font-bold text-white"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {exp.company}
                    </h3>
                    <p
                      className="mt-1 text-sm text-[#999]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {exp.role}
                    </p>
                    <p
                      className="mt-1 text-xs text-[#555]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {exp.period} &middot; {exp.location}
                    </p>

                    {/* Bullets */}
                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((bullet, bIndex) => (
                        <li
                          key={bIndex}
                          className="flex gap-2 text-sm text-[#999]"
                        >
                          <span className="mt-[2px] shrink-0 text-[#555]">
                            &mdash;
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
