'use client';

import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Cube } from '..';
import Controller from './Controller';

const Scale = () => {
  const [scale, setScale] = React.useState<AxisState>({ x: 1, y: 1, z: 1 });

  return (
    <>
      <div className="h-96">
        <Canvas>
          <Cube scale={[scale.x, scale.y, scale.z]} withHelper />
        </Canvas>
      </div>
      <Controller
        inputOption={{
          min: -5,
          max: 5,
          step: 0.5,
        }}
        state={scale}
        setState={setScale}
      />
    </>
  );
};

export default Scale;
