"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import type { ReactElement } from "react";

interface AnimatedWaveformProps {
  amplitude: number;
  color: string;
  depth: number;
  isReducedMotion: boolean;
  opacity: number;
  phase: number;
  speed: number;
}

const pointCount = 260;

export function AnimatedWaveform({
  amplitude,
  color,
  depth,
  isReducedMotion,
  opacity,
  phase,
  speed,
}: AnimatedWaveformProps): ReactElement {
  const line = useMemo<THREE.Line>(() => createWaveform(color, opacity), [color, opacity]);

  useEffect(() => {
    return () => {
      line.geometry.dispose();
      (line.material as THREE.Material).dispose();
    };
  }, [line]);

  useFrame((state) => {
    if (isReducedMotion) {
      return;
    }

    const positions = line.geometry.getAttribute("position") as THREE.BufferAttribute;
    const elapsed = state.clock.elapsedTime * speed + phase;

    for (let index = 0; index < pointCount; index += 1) {
      const x = -8 + (index / (pointCount - 1)) * 16;
      const envelope = 0.28 + Math.exp(-Math.abs(x - 2.2) * 0.42);
      const carrier = Math.sin(x * 3.8 - elapsed * 2.2);
      const harmonic = Math.sin(x * 11.4 + elapsed * 1.3) * 0.34;
      const pulse = Math.sin(x * 1.45 - elapsed) * 0.2;
      positions.setY(index, (carrier + harmonic + pulse) * amplitude * envelope);
    }

    positions.needsUpdate = true;
  });

  return <primitive object={line} position={[0, 0.15, depth]} />;
}

function createWaveform(color: string, opacity: number): THREE.Line {
  const positions = new Float32Array(pointCount * 3);

  for (let index = 0; index < pointCount; index += 1) {
    positions[index * 3] = -8 + (index / (pointCount - 1)) * 16;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const material = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity,
  });
  return new THREE.Line(geometry, material);
}
