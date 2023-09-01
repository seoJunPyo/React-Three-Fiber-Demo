'use client';

import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Cube } from '..';
import Controller from './Controller';

const Position = () => {
  const [pos, setPos] = React.useState<AxisState>({ x: 0, y: 0, z: 0 });

  return (
    <>
      <div className="h-96">
        <Canvas>
          <Cube position={[pos.x, pos.y, pos.z]} withHelper />
        </Canvas>
      </div>
      <Controller
        inputOption={{
          min: -5,
          max: 5,
          step: 0.5,
        }}
        state={pos}
        setState={setPos}
      />
    </>
  );
};

export default Position;
