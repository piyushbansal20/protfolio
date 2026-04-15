"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { RESULTS } from "@/lib/constants";

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Results() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section id="results" className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Title */}
        <p
          className="mb-12 text-center text-sm tracking-[0.3em] text-[#555]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          IMPACT
        </p>

        {/* Card with background grid */}
        <div className="relative">
          {/* Grid dots background */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(circle, #333 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Main card */}
          <div
            ref={containerRef}
            className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-8 md:p-12"
          >
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {RESULTS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -5 }}
                >
                  {/* Number */}
                  <p
                    className="text-4xl font-bold text-white md:text-5xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    <AnimatedCounter
                      target={stat.number}
                      suffix={stat.suffix}
                      inView={isInView}
                    />
                  </p>

                  {/* Decorative line */}
                  <div className="mt-3 mb-2 h-px w-12 bg-[#333]" />

                  {/* Label */}
                  <p className="text-sm text-[#999]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
