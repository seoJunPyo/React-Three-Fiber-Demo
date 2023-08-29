'use client';

import React from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const useRotation = ({
  xRotation,
  yRotation,
  zRotation,
}: {
  xRotation?: boolean;
  yRotation?: boolean;
  zRotation?: boolean;
}) => {
  const meshRef = React.useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    const { x, y, z } = meshRef.current.rotation;
    meshRef.current.rotation.set(xRotation ? x + delta : 0, yRotation ? y + delta : 0, zRotation ? z + delta : 0);
  });

  return meshRef;
};

export default useRotation;
