import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { useRef, useMemo, useState } from 'react';
import * as THREE from 'three';

function NetworkNode({ position, color, scale = 1 }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh
        ref={meshRef}
        position={position}
        scale={hovered ? scale * 1.3 : scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <octahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial
          color={hovered ? '#8b5cf6' : color}
          emissive={hovered ? '#8b5cf6' : color}
          emissiveIntensity={hovered ? 0.8 : 0.3}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

function ConnectionLines({ nodes }) {
  const lineRef = useRef();

  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.material.opacity = 0.15 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  const connections = useMemo(() => {
    const points = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = new THREE.Vector3(...nodes[i]).distanceTo(new THREE.Vector3(...nodes[j]));
        if (dist < 4) {
          points.push(new THREE.Vector3(...nodes[i]));
          points.push(new THREE.Vector3(...nodes[j]));
        }
      }
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [nodes]);

  return (
    <lineSegments ref={lineRef} geometry={connections}>
      <lineBasicMaterial color="#3b82f6" transparent opacity={0.15} />
    </lineSegments>
  );
}

function FloatingParticles({ count = 80 }) {
  const particlesRef = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#3b82f6" size={0.03} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function CentralOrb() {
  const orbRef = useRef();
  const glowRef = useRef();

  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      orbRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <group>
      <mesh ref={orbRef}>
        <icosahedronGeometry args={[0.6, 1]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.2}
          transparent
          opacity={0.08}
        />
      </mesh>
    </group>
  );
}

function Scene() {
  const groupRef = useRef();

  const nodePositions = useMemo(() => [
    [-2.5, 1.5, -1],
    [2.8, 1.2, -0.5],
    [-1.8, -1.5, 0.5],
    [2.2, -1.8, -1],
    [-3, 0, 0.5],
    [3.2, 0.3, 0],
    [0, 2.5, -1.5],
    [0, -2.2, -0.5],
    [-1, 0.8, 1.5],
    [1.5, -0.5, 1],
  ], []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.15;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.08) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <CentralOrb />
      {nodePositions.map((pos, i) => (
        <NetworkNode
          key={i}
          position={pos}
          color={i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4'}
          scale={0.6 + Math.random() * 0.4}
        />
      ))}
      <ConnectionLines nodes={[[0, 0, 0], ...nodePositions]} />
      <FloatingParticles />
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#3b82f6" />
        <pointLight position={[-5, -3, 3]} intensity={0.3} color="#8b5cf6" />
        <Stars radius={50} depth={30} count={800} factor={2} saturation={0} fade speed={0.5} />
        <Scene />
      </Canvas>
    </div>
  );
}
