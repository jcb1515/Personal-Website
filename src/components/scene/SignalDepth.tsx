"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import type { ReactElement } from "react";

interface SignalDepthProps {
  isReducedMotion: boolean;
}

export function SignalDepth({ isReducedMotion }: SignalDepthProps): ReactElement {
  return (
    <>
      <SignalCore isReducedMotion={isReducedMotion} />
      <PulseNodes isReducedMotion={isReducedMotion} />
      <TraceLattice isReducedMotion={isReducedMotion} />
    </>
  );
}

function SignalCore({ isReducedMotion }: SignalDepthProps): ReactElement {
  const coreRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (isReducedMotion || coreRef.current === null) {
      return;
    }

    coreRef.current.rotation.x += delta * 0.08;
    coreRef.current.rotation.y += delta * 0.16;
    coreRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 1.4) * 0.035);
  });

  return (
    <group ref={coreRef} position={[2.2, 0.15, -0.55]}>
      <mesh>
        <icosahedronGeometry args={[1.05, 2]} />
        <meshBasicMaterial color="#d50909" wireframe transparent opacity={0.32} />
      </mesh>
      <mesh scale={0.64}>
        <octahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#f3f4f6" wireframe transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

function PulseNodes({ isReducedMotion }: SignalDepthProps): ReactElement {
  const groupRef = useRef<THREE.Group>(null);
  const nodes = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => {
        const angle = (index / 18) * Math.PI * 2;
        const radius = 1.65 + (index % 3) * 0.32;
        return {
          id: `pulse-node-${index + 1}`,
          position: [
            2.2 + Math.cos(angle) * radius,
            0.15 + Math.sin(angle) * radius * 0.72,
            -0.1 - (index % 4) * 0.42,
          ] as [number, number, number],
        };
      }),
    [],
  );

  useFrame((state, delta) => {
    if (isReducedMotion || groupRef.current === null) {
      return;
    }

    groupRef.current.rotation.z += delta * 0.025;
    groupRef.current.children.forEach((child, index) => {
      const pulse = 0.75 + Math.sin(state.clock.elapsedTime * 2.2 + index * 0.7) * 0.28;
      child.scale.setScalar(pulse);
    });
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, index) => (
        <mesh key={node.id} position={node.position}>
          <sphereGeometry args={[index % 5 === 0 ? 0.065 : 0.035, 8, 8]} />
          <meshBasicMaterial
            color={index % 5 === 0 ? "#f21a1a" : "#9aa1aa"}
            transparent
            opacity={index % 5 === 0 ? 0.9 : 0.55}
          />
        </mesh>
      ))}
    </group>
  );
}

function TraceLattice({ isReducedMotion }: SignalDepthProps): ReactElement {
  const traceRef = useRef<THREE.LineSegments>(null);
  const traces = useMemo<THREE.LineSegments>(() => createTraceLattice(), []);

  useEffect(() => {
    return () => {
      traces.geometry.dispose();
      (traces.material as THREE.Material).dispose();
    };
  }, [traces]);

  useFrame((state) => {
    if (isReducedMotion || traceRef.current === null) {
      return;
    }

    traceRef.current.position.z = -2.2 + Math.sin(state.clock.elapsedTime * 0.35) * 0.22;
    traceRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.22) * 0.025;
  });

  return <primitive ref={traceRef} object={traces} />;
}

function createTraceLattice(): THREE.LineSegments {
  const points: THREE.Vector3[] = [];

  for (let index = 0; index < 18; index += 1) {
    const y = -2.8 + index * 0.34;
    const startX = -5.8 + (index % 4) * 0.55;
    const bendX = -1.1 + (index % 5) * 0.65;
    const endY = y + (index % 2 === 0 ? 0.42 : -0.42);
    points.push(new THREE.Vector3(startX, y, -2.2), new THREE.Vector3(bendX, y, -2.2));
    points.push(new THREE.Vector3(bendX, y, -2.2), new THREE.Vector3(bendX, endY, -2.2));
    points.push(new THREE.Vector3(bendX, endY, -2.2), new THREE.Vector3(5.8, endY, -2.2));
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({
    color: "#343941",
    transparent: true,
    opacity: 0.28,
  });
  return new THREE.LineSegments(geometry, material);
}
