"use client";

import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/constants";

const contactItems = [
  {
    label: "Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
  },
  {
    label: "LinkedIn",
    value: PERSONAL.linkedin,
    href: PERSONAL.linkedin,
  },
  {
    label: "Phone",
    value: PERSONAL.phone,
    href: `tel:${PERSONAL.phone}`,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-16">
        Let&apos;s Build Something.
      </h2>

      <div className="flex flex-col gap-4 items-center">
        {contactItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.label === "LinkedIn" ? "_blank" : undefined}
            rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex items-center gap-4 w-full max-w-md p-4 border border-[#1A1A1A] rounded-xl text-left hover:border-[#333] transition-all duration-300"
          >
            <div className="flex-1">
              <p className="text-xs text-[#555] uppercase tracking-wider">
                {item.label}
              </p>
              <p className="text-white text-sm mt-1">{item.value}</p>
            </div>
            <span className="text-[#333] group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
              →
            </span>
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-32 pb-8 text-center">
        <p className="text-xs text-[#555]">Designed by Aditya Jha</p>
        <p className="text-xs text-[#555]">{new Date().getFullYear()}</p>
      </div>
    </section>
  );
}
