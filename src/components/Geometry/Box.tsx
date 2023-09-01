'use client';

import React from 'react';
import { Geometry } from '..';
import { Canvas } from '@react-three/fiber';
import { BiReset } from 'react-icons/bi';

type ArgsObj = {
  width: number;
  height: number;
  depth: number;
  widthSegment: number;
  heightSegment: number;
  depthSegment: number;
};

const DefaultArgs = { width: 1, height: 1, depth: 1, widthSegment: 1, heightSegment: 1, depthSegment: 1 };

const NumberInput = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => (
  <div className="w-full p-2 flex space-x-2 items-center">
    <span className="font-bold w-full">{label}</span>
    <input
      type="number"
      min={1}
      max={10}
      step={1}
      value={value}
      onChange={onChange}
      className="w-full bg-zinc-900 p-1 px-2 border rounded-lg"
    />
  </div>
);

const Box = () => {
  const [args, setArgs] = React.useState<ArgsObj>(DefaultArgs);

  const { width, height, depth, widthSegment, heightSegment, depthSegment } = args;
  const argsKeys = Object.keys(args) as (keyof ArgsObj)[];

  return (
    <>
      <div className="h-96 relative">
        <button
          className="absolute right-0 bottom-4 z-50 text-2xl p-2 hover:bg-zinc-500/50 rounded-lg"
          onClick={() => setArgs(DefaultArgs)}>
          <BiReset />
        </button>
        <Canvas>
          <Geometry args={[width, height, depth, widthSegment, heightSegment, depthSegment]} />
        </Canvas>
      </div>

      <div className="flex space-x-8">
        <div className="w-2/5">
          {argsKeys.slice(0, 3).map(key => (
            <NumberInput
              key={key}
              label={key}
              value={args[key]}
              onChange={e => {
                setArgs({ ...args, [key]: Number(e.target.value) });
              }}
            />
          ))}
        </div>
        <div className="w-3/5">
          {argsKeys.slice(3).map(key => (
            <NumberInput
              key={key}
              label={key}
              value={args[key]}
              onChange={e => {
                setArgs({ ...args, [key]: Number(e.target.value) });
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Box;
