"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/lib/constants";

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 max-w-5xl mx-auto px-6">
      <p className="text-sm tracking-[0.3em] text-[#555] mb-12 font-[family-name:var(--font-heading)] text-center">
        CERTIFICATIONS
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] backdrop-blur-sm border border-[#1A1A1A] rounded-xl p-6 hover:border-[#333] hover:scale-[1.02] transition-all duration-300"
          >
            {/* Simple certificate icon */}
            <div className="w-6 h-6 border-2 border-[#333] rounded-sm relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-[1px] bg-[#333]" />
            </div>

            <p className="text-white font-medium mt-4 text-sm">{cert.title}</p>
            {cert.year && (
              <p className="text-[#555] text-xs mt-1">{cert.year}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
