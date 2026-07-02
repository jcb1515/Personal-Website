"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import type { ReactElement } from "react";
import { AnimatedWaveform } from "@/components/scene/AnimatedWaveform";
import { SignalDepth } from "@/components/scene/SignalDepth";
import { FieldRings, SignalAxis, createPointCloud } from "@/components/scene/SignalPrimitives";

interface SignalFieldProps {
  isReducedMotion: boolean;
}

export function SignalField({ isReducedMotion }: SignalFieldProps): ReactElement {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (isReducedMotion || groupRef.current === null) {
      return;
    }

    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      state.pointer.x * 0.13,
      3,
      delta,
    );
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      -state.pointer.y * 0.075,
      3,
      delta,
    );
    groupRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.28) * 0.12;
  });

  return (
    <group ref={groupRef} position={[1.7, 0, 0]}>
      <gridHelper
        args={[30, 34, "#26292f", "#111317"]}
        position={[0, -3.4, -2]}
        rotation={[0, 0, 0]}
      />
      <AnimatedWaveform
        amplitude={0.2}
        color="#f3f4f6"
        depth={0}
        isReducedMotion={isReducedMotion}
        opacity={0.82}
        phase={0}
        speed={1}
      />
      <AnimatedWaveform
        amplitude={0.34}
        color="#d50909"
        depth={-0.75}
        isReducedMotion={isReducedMotion}
        opacity={0.34}
        phase={1.8}
        speed={0.72}
      />
      <AnimatedWaveform
        amplitude={0.12}
        color="#77808c"
        depth={0.65}
        isReducedMotion={isReducedMotion}
        opacity={0.38}
        phase={3.4}
        speed={1.25}
      />
      <FieldRings isReducedMotion={isReducedMotion} />
      <SignalDepth isReducedMotion={isReducedMotion} />
      <SignalAxis />
      <points position={[0, 0, -1.5]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[createPointCloud(), 3]} />
        </bufferGeometry>
        <pointsMaterial color="#7e8793" size={0.025} transparent opacity={0.42} />
      </points>
    </group>
  );
}
