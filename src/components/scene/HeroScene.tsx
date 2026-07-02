"use client";

import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei/core/AdaptiveDpr";
import { useReducedMotion } from "framer-motion";
import type { ReactElement } from "react";
import { SignalField } from "@/components/scene/SignalField";
import { SceneBoot } from "@/components/scene/SceneBoot";

export default function HeroScene(): ReactElement {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <Canvas
      aria-hidden="true"
      style={{ touchAction: "pan-y" }}
      camera={{ position: [0, 0.25, 9], fov: 42, near: 0.1, far: 100 }}
      dpr={[1, 1.5]}
      frameloop={shouldReduceMotion ? "demand" : "always"}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
      <color attach="background" args={["#050505"]} />
      <fog attach="fog" args={["#050505", 8, 18]} />
      <SignalField isReducedMotion={shouldReduceMotion} />
      <SceneBoot isReducedMotion={shouldReduceMotion} />
      <AdaptiveDpr pixelated />
    </Canvas>
  );
}
