'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Cube } from '..';

const Axis = ['x', 'y', 'z'] as const;

const Example2 = () => {
  const [position, setPosition] = React.useState<{ x: number; y: number; z: number }>({ x: 0, y: 0, z: 0 });
  const [scale, setScale] = React.useState<{ x: number; y: number; z: number }>({ x: 2.5, y: 2.5, z: 2.5 });
  const [rotation, setRotation] = React.useState<{ x: number; y: number; z: number }>({ x: 0, y: 0, z: 0 });

  return (
    <>
      <div className="md:flex h-48 md:h-96 items-center md:space-x-8">
        <div className="md:w-2/3 h-full">
          <Canvas>
            <Cube
              position={[position.x, position.y, position.z]}
              scale={[scale.x, scale.y, scale.z]}
              rotation={[rotation.x, rotation.y, rotation.z]}
            />
          </Canvas>
        </div>

        <div className="flex flex-col space-y-4 items-center">
          <div className="w-full">
            <p className="font-bold ">Position</p>
            {Axis.map(axis => (
              <div key={axis} className="flex items-center space-x-2">
                <span>{axis}</span>
                <input
                  className="w-full"
                  type="range"
                  min={-3}
                  max={3}
                  step={0.5}
                  value={position[axis]}
                  onChange={e => {
                    setPosition({ ...position, [axis]: Number(e.target.value) });
                  }}
                />
                <span>{position[axis]}</span>
              </div>
            ))}
          </div>

          <div className="w-full">
            <p className="font-bold">Scale</p>
            {Axis.map(axis => (
              <div key={axis} className="flex items-center space-x-2">
                <span>{axis}</span>
                <input
                  className="w-full"
                  type="range"
                  min={1}
                  max={5}
                  step={0.5}
                  value={scale[axis]}
                  onChange={e => {
                    setScale({ ...scale, [axis]: Number(e.target.value) });
                  }}
                />
                <span>{scale[axis]}</span>
              </div>
            ))}
          </div>

          <div className="w-full">
            <p className="font-bold">Rotation</p>
            {Axis.map(axis => (
              <div key={axis} className="flex items-center space-x-2">
                <span>{axis}</span>
                <input
                  className="w-full"
                  type="range"
                  min={0}
                  max={360}
                  step={15}
                  value={rotation[axis]}
                  onChange={e => {
                    setRotation({ ...rotation, [axis]: Number(e.target.value) });
                  }}
                />
                <span>{rotation[axis]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Example2;
