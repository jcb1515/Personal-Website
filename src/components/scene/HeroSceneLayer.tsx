"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import { SignalFallback } from "@/components/scene/SignalFallback";

const HeroScene = dynamic(() => import("@/components/scene/HeroScene"), {
  ssr: false,
  loading: () => <SignalFallback />,
});

export function HeroSceneLayer(): ReactElement {
  const [isInteractive, setIsInteractive] = useState<boolean>(false);
  const [isBooting, setIsBooting] = useState<boolean>(true);

  useEffect(() => {
    const desktopScene = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
    );
    if (desktopScene.matches) {
      setIsInteractive(true);
    }
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsBooting(false), 1400);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isInteractive) {
      return;
    }

    const handlePointerMove = (event: PointerEvent): void => {
      if (event.clientX >= window.innerWidth * 0.5) {
        setIsInteractive(true);
      }
    };
    const handlePointerDown = (): void => setIsInteractive(true);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isInteractive]);

  const activateScene = (): void => setIsInteractive(true);

  return (
    <div
      className="absolute inset-0 touch-pan-y"
      onPointerMove={activateScene}
      onPointerDown={activateScene}
      onFocusCapture={activateScene}
    >
      {isInteractive ? <HeroScene /> : <SignalFallback />}
      <div className={`scene-boot-label ${isBooting ? "scene-boot-label-visible" : ""}`} aria-hidden="true">
        <span>Interactive signal field</span>
        <strong>Loading 3D environment</strong>
      </div>
    </div>
  );
}
