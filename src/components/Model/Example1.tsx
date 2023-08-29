'use client';

import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const rotateMesh = (
  mesh: Mesh,
  delta: number,
  options: { x?: boolean; y?: boolean; z?: boolean } = { x: false, y: false, z: false }
) => {
  const { x, y, z } = mesh.rotation;
  mesh.rotation.set(options.x ? x + delta : 0, options.y ? y + delta : 0, options.z ? z + delta : 0);
};

const Example1 = () => {
  const boxRef = React.useRef<Mesh>(null);
  const torusRef = React.useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!boxRef.current || !torusRef.current) return;

    rotateMesh(boxRef.current, delta, { x: true, y: true });
    rotateMesh(torusRef.current, delta, { x: true, y: true });
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[1, 1, 1]} />

      <mesh ref={boxRef} position={[-3, 0, 0]} scale={[2, 2, 2]}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>

      <mesh ref={torusRef} position={[3, 0, 0]} scale={[1, 1, 1]}>
        <torusGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};

export default Example1;
