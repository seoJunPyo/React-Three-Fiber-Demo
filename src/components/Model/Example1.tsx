'use client';

import React from 'react';
import useRotation from '@/hooks/useRotation';

const Example1 = () => {
  const boxRef = useRotation({ xRotation: true, yRotation: true });
  const torusRef = useRotation({ xRotation: true, yRotation: true });

  return (
    <>
      <ambientLight intensity={0.1} />
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
