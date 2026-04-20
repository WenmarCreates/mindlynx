import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh } from "three";

function FloatingOrb({
  position,
  color,
  scale = 1,
  speed = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15 * speed;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
  });
  return (
    <Float speed={speed * 1.4} rotationIntensity={0.6} floatIntensity={1.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          distort={0.45}
          speed={1.6}
          roughness={0.2}
          metalness={0.6}
          opacity={0.85}
          transparent
        />
      </mesh>
    </Float>
  );
}

export default function HeroParticles() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%", pointerEvents: "none" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.1} color="#7DD3E0" />
        <pointLight position={[-5, -3, -2]} intensity={0.8} color="#5B4FCF" />
        <FloatingOrb position={[-2.8, 1.4, -1]} color="#5B4FCF" scale={0.9} speed={0.8} />
        <FloatingOrb position={[3.2, -0.8, -2]} color="#3FB6C9" scale={1.3} speed={1.2} />
        <FloatingOrb position={[1.5, 2.2, -3]} color="#7DD3E0" scale={0.7} speed={1.5} />
        <FloatingOrb position={[-2.2, -1.8, -2.5]} color="#2D2A8C" scale={1.0} speed={0.9} />
      </Suspense>
    </Canvas>
  );
}
