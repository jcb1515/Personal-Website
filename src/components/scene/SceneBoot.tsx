"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { ReactElement } from "react";
import type { Group } from "three";

interface SceneBootProps {
  isReducedMotion: boolean;
}

export function SceneBoot({ isReducedMotion }: SceneBootProps): ReactElement {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (group.current === null || isReducedMotion) {
      return;
    }
    group.current.rotation.x += delta * 0.34;
    group.current.rotation.y += delta * 0.58;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 2.4) * 0.08;
    group.current.scale.setScalar(pulse);
  });

  return (
    <group ref={group} position={[0, 0.1, 1.2]}>
      <mesh>
        <icosahedronGeometry args={[0.56, 1]} />
        <meshBasicMaterial color="#f21a1a" wireframe transparent opacity={0.82} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.92, 0.012, 8, 72]} />
        <meshBasicMaterial color="#747880" transparent opacity={0.7} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[1.12, 0.008, 8, 72]} />
        <meshBasicMaterial color="#d50909" transparent opacity={0.48} />
      </mesh>
    </group>
  );
}
