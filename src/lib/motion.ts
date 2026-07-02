import type { Transition } from "framer-motion";

const engineeredEase: readonly [number, number, number, number] = [0.22, 1, 0.36, 1];

export function createEntryTransition(delay: number): Transition {
  return {
    duration: 0.36,
    ease: engineeredEase,
    delay,
  };
}

export function createPageTransition(): Transition {
  return {
    duration: 0.22,
    ease: engineeredEase,
  };
}
