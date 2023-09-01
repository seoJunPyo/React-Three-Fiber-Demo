'use client';

import React from 'react';
import { Mesh } from 'three';
import * as THREE from 'three';

const degArrayToRadArray = (rotation: [number, number, number]) =>
  rotation.map(axis => THREE.MathUtils.degToRad(axis)) as [number, number, number];

const Cube = ({
  position = [0, 0, 0],
  scale = [2, 2, 2],
  rotation = [0, 0, 0],
}: {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
  withHelper?: boolean;
}) => {
  const boxRef = React.useRef<Mesh>(null);

  return (
    <>
      <mesh rotation={degArrayToRadArray([45, 45, 0])}>
        <ambientLight intensity={0.1} />
        <axesHelper scale={10} />
        <directionalLight position={[1, 1, 1]} />

        <mesh ref={boxRef} position={position} scale={scale} rotation={degArrayToRadArray(rotation)}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </mesh>
    </>
  );
};

export default Cube;
