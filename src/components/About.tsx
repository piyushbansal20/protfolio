"use client";

import { motion } from "framer-motion";
import { ABOUT_TERMINAL, METRICS } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-32 max-w-7xl mx-auto px-6">
      <h2 className="text-sm tracking-[0.3em] text-[#555] mb-12 font-[family-name:var(--font-heading)]">
        ABOUT
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column — Terminal */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl overflow-hidden"
        >
          {/* Title bar */}
          <div className="h-8 bg-[#0A0A0A] border-b border-[#1A1A1A] flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-[#333]" />
            <div className="w-3 h-3 rounded-full bg-[#333]" />
            <div className="w-3 h-3 rounded-full bg-[#333]" />
          </div>

          {/* Content */}
          <div className="p-6 font-[family-name:var(--font-mono)]">
            {ABOUT_TERMINAL.map((item, i) => (
              <div key={i}>
                <p className="text-[#555] text-sm">
                  &gt; {item.command}
                </p>
                <p className="text-white text-sm mt-1 mb-4 whitespace-pre-line">
                  {item.response}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column — Metric Cards */}
        <div className="grid grid-cols-2 gap-4">
          {METRICS.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl p-6 hover:border-[#333] transition shadow-[0_0_15px_rgba(255,255,255,0.03)]"
            >
              <p className="text-2xl font-bold text-white font-[family-name:var(--font-heading)]">
                {metric.value}
              </p>
              <p className="text-sm text-[#999] mt-2">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
