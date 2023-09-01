'use client';

import { OrbitControls } from '@react-three/drei';
import React from 'react';

const scale = [1, 1, 1] as const;

const Geometry = ({ args }: { args: BoxArgs }) => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight position={[1, 1, 1]} />

      <mesh scale={scale}>
        <boxGeometry args={args} />
        <meshStandardMaterial />
        <axesHelper scale={[3, 3, 3]} />
      </mesh>

      <mesh scale={scale}>
        <boxGeometry args={args} />
        <meshStandardMaterial emissive="yellow" wireframe />
      </mesh>
    </>
  );
};

export default Geometry;
