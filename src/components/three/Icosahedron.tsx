"use client";

import { Suspense, useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(100 * 3);
    for (let i = 0; i < 100; i++) {
      // Random point in a sphere of radius 3
      const r = 3 * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      ref.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        color="#ffffff"
        size={0.02}
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { pointer } = useThree();

  useFrame(() => {
    if (!meshRef.current) return;

    // Auto-rotate
    meshRef.current.rotation.y += 0.003;
    meshRef.current.rotation.x += 0.001;

    // Subtle mouse-reactive tilt via lerp
    const targetX = pointer.y * 0.3;
    const targetY = pointer.x * 0.3;
    meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.02;
    meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.02;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      <Particles />
    </>
  );
}

function WebGLFallback() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="relative w-64 h-64">
        {/* Static wireframe-style fallback using CSS */}
        <div className="absolute inset-0 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute inset-4 border border-white/[0.07] rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
        <div className="absolute inset-8 border border-white/[0.05] rounded-full animate-spin" style={{ animationDuration: '25s' }} />
        <div className="absolute inset-0 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '18s', transform: 'rotateX(60deg)' }} />
        <div className="absolute inset-0 border border-white/[0.07] rounded-full animate-spin" style={{ animationDuration: '22s', transform: 'rotateY(60deg)', animationDirection: 'reverse' }} />
      </div>
    </div>
  );
}

export default function Icosahedron() {
  const [webglAvailable, setWebglAvailable] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setWebglAvailable(false);
    } catch {
      setWebglAvailable(false);
    }
  }, []);

  if (!webglAvailable) return <WebGLFallback />;

  return (
    <div className="h-full w-full">
      <Suspense fallback={<div className="h-full w-full" />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{ background: "transparent" }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
