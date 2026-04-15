"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";

export default function Skills() {
  return (
    <section id="skills" className="py-32 max-w-5xl mx-auto px-6">
      <p className="text-sm tracking-[0.3em] text-[#555] mb-12 font-[family-name:var(--font-heading)] text-center">
        SKILLS
      </p>

      {/* GTM & Marketing */}
      <div>
        <p className="text-xs tracking-[0.2em] text-[#555] mb-4 uppercase font-[family-name:var(--font-heading)] text-center">
          GTM &amp; Marketing
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {SKILLS.gtm.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="px-4 py-2 border border-[#1A1A1A] rounded-full text-sm text-white bg-transparent hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Tools & Platforms */}
      <div className="mt-10">
        <p className="text-xs tracking-[0.2em] text-[#555] mb-4 uppercase font-[family-name:var(--font-heading)] text-center">
          Tools &amp; Platforms
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {SKILLS.tools.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="px-4 py-2 border border-[#1A1A1A] rounded-full text-sm text-white bg-transparent hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
