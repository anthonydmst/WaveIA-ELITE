"use client";

import React from "react";
import { m } from "framer-motion";
import { fadeIn } from "@/lib/animation-variants";

interface SectionDecorProps {
  glowOpacity?: number;
  gridOpacity?: number;
  glowSize?: string;
  hasGrid?: boolean;
}

export function SectionDecor({
  glowOpacity = 0.12,
  gridOpacity = 0.04,
  glowSize = "900px",
  hasGrid = true,
}: SectionDecorProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Blueprint Grid */}
      {hasGrid && (
        <m.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, ${gridOpacity}) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, ${gridOpacity}) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
      )}

      {/* Ocean Glow Center Blob */}
      <m.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute -top-[100px] left-1/2 -translate-x-1/2 rounded-full blur-3xl pointer-events-none"
        style={{
          width: glowSize,
          height: `calc(${glowSize} * 0.66)`,
          background: `radial-gradient(ellipse, rgba(14, 165, 233, ${glowOpacity}) 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}
