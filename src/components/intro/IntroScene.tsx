"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { ReactElement } from "react";
import type { Group } from "three";

interface IntroGeometryProps {
  reducedMotion: boolean;
}

function IntroGeometry({ reducedMotion }: IntroGeometryProps): ReactElement {
  const assembly = useRef<Group>(null);
  const satellite = useRef<Group>(null);

  useFrame((state, delta) => {
    if (reducedMotion) {
      return;
    }
    const elapsed = state.clock.elapsedTime;
    if (assembly.current !== null) {
      assembly.current.rotation.x += delta * 0.2;
      assembly.current.rotation.y += delta * 0.46;
      const scale = Math.min(1, 0.12 + elapsed * 0.34);
      assembly.current.scale.setScalar(scale);
    }
    if (satellite.current !== null) {
      satellite.current.rotation.z -= delta * 0.28;
      satellite.current.position.x = Math.sin(elapsed * 0.42) * 1.3;
    }
    state.camera.position.z = 8.6 - Math.min(elapsed, 6) * 0.22;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <group ref={assembly} scale={0.12}>
        <mesh>
          <icosahedronGeometry args={[1.45, 2]} />
          <meshBasicMaterial color="#f21a1a" wireframe transparent opacity={0.92} />
        </mesh>
        {[2.1, 2.75, 3.4].map((radius, index) => (
          <mesh key={radius} rotation={[Math.PI / 2 + index * 0.46, index * 0.52, 0]}>
            <torusGeometry args={[radius, index === 1 ? 0.022 : 0.012, 8, 144]} />
            <meshBasicMaterial
              color={index === 1 ? "#f21a1a" : "#747880"}
              transparent
              opacity={index === 1 ? 0.8 : 0.52}
            />
          </mesh>
        ))}
      </group>
      <group ref={satellite} position={[0, 0, -1.5]}>
        <mesh rotation={[0.3, 0.8, 0]}>
          <torusKnotGeometry args={[3.7, 0.08, 220, 12, 2, 5]} />
          <meshBasicMaterial color="#8b1111" wireframe transparent opacity={0.35} />
        </mesh>
      </group>
      <points>
        <sphereGeometry args={[6.8, 30, 18]} />
        <pointsMaterial color="#a8abb2" size={0.025} transparent opacity={0.34} />
      </points>
    </>
  );
}

export function IntroScene({ reducedMotion }: IntroGeometryProps): ReactElement {
  return (
    <Canvas
      aria-hidden="true"
      camera={{ position: [0, 0, 8.6], fov: 46, near: 0.1, far: 100 }}
      dpr={[1, 1.5]}
      frameloop={reducedMotion ? "demand" : "always"}
      gl={{ alpha: false, antialias: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#050505"]} />
      <fog attach="fog" args={["#050505", 8, 18]} />
      <IntroGeometry reducedMotion={reducedMotion} />
    </Canvas>
  );
}
