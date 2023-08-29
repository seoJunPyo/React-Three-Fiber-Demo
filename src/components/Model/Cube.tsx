'use client';

import React from 'react';
import { Mesh } from 'three';
import * as THREE from 'three';

const degArrayToRadArray = (rotation: [number, number, number]) =>
  rotation.map(axis => THREE.MathUtils.degToRad(axis)) as [number, number, number];

const Cube = ({
  position,
  scale,
  rotation,
}: {
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
}) => {
  const boxRef = React.useRef<Mesh>(null);

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[1, 1, 1]} />

      <mesh ref={boxRef} position={position} scale={scale} rotation={degArrayToRadArray(rotation)}>
        <boxGeometry />
        <meshStandardMaterial />
        <axesHelper />
      </mesh>
    </>
  );
};

export default Cube;
