"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import type { ReactElement } from "react";
import type { Group } from "three";

const routeIndexes: Readonly<Record<string, number>> = {
  "/about": 1,
  "/education": 2,
  "/experience": 3,
  "/projects": 4,
  "/skills": 5,
  "/activities": 6,
  "/contact": 7,
};

interface AmbientGeometryProps {
  instanceIndex: number;
  position: [number, number, number];
  routeIndex: number;
  scale: number;
}

function AmbientGeometry({ instanceIndex, position, routeIndex, scale }: AmbientGeometryProps): ReactElement {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (group.current === null) {
      return;
    }
    group.current.rotation.y += delta * (0.025 + routeIndex * 0.004 + instanceIndex * 0.008);
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.12 + instanceIndex) * 0.12;
  });

  return (
    <group
      ref={group}
      position={position}
      rotation={[0.35 + routeIndex * 0.04, routeIndex * 0.32 + instanceIndex, 0]}
      scale={scale}
    >
      <mesh>
        <torusKnotGeometry args={[2.25, 0.34, 180, 18, 2 + (routeIndex % 3), 3]} />
        <meshBasicMaterial color="#8b1111" wireframe transparent opacity={instanceIndex === 0 ? 0.22 : 0.14} />
      </mesh>
      {[3.15, 3.8, 4.45].map((radius, index) => (
        <mesh key={radius} rotation={[Math.PI / 2 + index * 0.28, index * 0.36, 0]}>
          <torusGeometry args={[radius, 0.012, 6, 128]} />
          <meshBasicMaterial color={index === 1 ? "#f21a1a" : "#55585e"} transparent opacity={instanceIndex === 0 ? 0.25 : 0.14} />
        </mesh>
      ))}
      <points>
        <sphereGeometry args={[5.2, 18, 12]} />
        <pointsMaterial color="#a8abb2" size={0.025} transparent opacity={instanceIndex === 0 ? 0.18 : 0.1} />
      </points>
    </group>
  );
}

export function PageAmbientScene(): ReactElement | null {
  const pathname = usePathname();
  const routeIndex = routeIndexes[pathname];

  if (routeIndex === undefined) {
    return null;
  }

  return (
    <div className="page-ambient-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 10], fov: 44 }} dpr={[1, 1.35]} gl={{ alpha: true, antialias: true }}>
        <AmbientGeometry instanceIndex={0} position={[3.8, -0.2, -2.5]} routeIndex={routeIndex} scale={1.25} />
        <AmbientGeometry instanceIndex={1} position={[-4.4, 2.9, -6]} routeIndex={routeIndex} scale={0.72} />
        <AmbientGeometry instanceIndex={2} position={[-2.6, -4.3, -7]} routeIndex={routeIndex} scale={0.9} />
      </Canvas>
    </div>
  );
}
