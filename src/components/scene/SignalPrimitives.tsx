"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import type { ReactElement } from "react";

interface FieldRingsProps {
  isReducedMotion: boolean;
}

export function FieldRings({ isReducedMotion }: FieldRingsProps): ReactElement {
  const groupRef = useRef<THREE.Group>(null);
  const rings = Array.from({ length: 13 }, (_, index) => ({
    id: `signal-ring-${index + 1}`,
    index,
  }));

  useFrame((state, delta) => {
    if (isReducedMotion || groupRef.current === null) {
      return;
    }

    groupRef.current.rotation.z += delta * 0.06;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
  });

  return (
    <group ref={groupRef} position={[2.2, 0.15, -0.35]} rotation={[0, Math.PI / 2, 0]}>
      {rings.map(({ id, index }) => (
        <mesh
          key={id}
          position={[0, 0, (index - 6) * 0.15]}
          scale={[1 + index * 0.035, 1 + index * 0.035, 1]}
        >
          <torusGeometry args={[1.35, 0.008, 5, 96]} />
          <meshBasicMaterial
            color={index === 6 ? "#d50909" : "#5f6670"}
            transparent
            opacity={index === 6 ? 0.78 : 0.25}
          />
        </mesh>
      ))}
    </group>
  );
}

export function SignalAxis(): ReactElement {
  const axis = useMemo<THREE.Line>(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(2.2, -3.2, 0.2),
      new THREE.Vector3(2.2, 3.2, 0.2),
    ]);
    const material = new THREE.LineDashedMaterial({
      color: "#f21a1a",
      dashSize: 0.1,
      gapSize: 0.08,
      transparent: true,
      opacity: 0.72,
    });
    const result = new THREE.Line(geometry, material);
    result.computeLineDistances();
    return result;
  }, []);

  useEffect(() => {
    return () => {
      axis.geometry.dispose();
      (axis.material as THREE.Material).dispose();
    };
  }, [axis]);

  return <primitive object={axis} />;
}

export function createPointCloud(): Float32Array {
  const positions = new Float32Array(240 * 3);

  for (let index = 0; index < 240; index += 1) {
    const offset = index * 3;
    positions[offset] = (Math.random() - 0.5) * 16;
    positions[offset + 1] = (Math.random() - 0.5) * 8;
    positions[offset + 2] = (Math.random() - 0.5) * 6;
  }

  return positions;
}
