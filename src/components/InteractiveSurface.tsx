"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { MouseEvent, ReactElement, ReactNode } from "react";

interface InteractiveSurfaceProps {
  children: ReactNode;
  className: string;
}

export function InteractiveSurface({ children, className }: InteractiveSurfaceProps): ReactElement {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const rotateX = useSpring(useMotionValue(0), { stiffness: 240, damping: 26 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 240, damping: 26 });
  const pointerX = useMotionValue("50%");
  const pointerY = useMotionValue("50%");

  const handlePointerMove = (event: MouseEvent<HTMLElement>): void => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    pointerX.set(`${x * 100}%`);
    pointerY.set(`${y * 100}%`);
    if (!shouldReduceMotion) {
      rotateY.set((x - 0.5) * 7);
      rotateX.set((y - 0.5) * -7);
    }
  };

  const resetTilt = (): void => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handlePointerMove}
      onMouseLeave={resetTilt}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className={`interactive-surface group/surface ${className}`}
    >
      {children}
      <motion.span className="pointer-line pointer-line-x" style={{ left: pointerX }} />
      <motion.span className="pointer-line pointer-line-y" style={{ top: pointerY }} />
      <span className="surface-corner surface-corner-tl" />
      <span className="surface-corner surface-corner-br" />
    </motion.div>
  );
}
