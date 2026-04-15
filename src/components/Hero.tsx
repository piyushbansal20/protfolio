"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

const Icosahedron = dynamic(
  () => import("@/components/three/Icosahedron"),
  { ssr: false }
);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const rightY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const fullSubtitle = "GTM Specialist";
  const [displayed, setDisplayed] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(fullSubtitle.slice(0, i));
      if (i >= fullSubtitle.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 w-full">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-white font-[family-name:var(--font-heading)]">
              ADITYA JHA
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-[#999] mt-4">
              {displayed}
              <span
                className={`inline-block ml-0.5 ${
                  cursorVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                |
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-lg text-[#555] max-w-md mt-4">
              From market research to closed deals — I build the bridge.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-row mt-8 gap-4"
          >
            <a
              href="#about"
              className="border border-white px-6 py-3 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-[#333] px-6 py-3 text-[#999] hover:border-white hover:text-white transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Right Column */}
        <motion.div
          style={{ y: rightY }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="w-full h-[500px] relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
            <Icosahedron />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-4 h-4 border-b-2 border-r-2 border-white rotate-45 opacity-50" />
      </motion.div>
    </section>
  );
}
