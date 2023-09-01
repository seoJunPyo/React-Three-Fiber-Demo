'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Cube } from '..';
import Controller from './Controller';

const Rotation = () => {
  const [rotation, setRotation] = React.useState<AxisState>({ x: 0, y: 0, z: 0 });

  return (
    <>
      <div className="h-96">
        <Canvas>
          <Cube rotation={[rotation.x, rotation.y, rotation.z]} withHelper />
        </Canvas>
      </div>
      <Controller
        inputOption={{
          min: -360,
          max: 360,
          step: 15,
        }}
        state={rotation}
        setState={setRotation}
      />
    </>
  );
};

export default Rotation;
