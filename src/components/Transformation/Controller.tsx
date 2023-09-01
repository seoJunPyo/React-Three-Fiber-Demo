'use client';

import React from 'react';
const Axis = ['x', 'y', 'z'] as const;
type AxisState = { x: number; y: number; z: number };

const Controller = ({
  inputOption,
  state,
  setState,
}: {
  inputOption: {
    min: number;
    max: number;
    step: number;
  };
  state: AxisState;
  setState: React.Dispatch<React.SetStateAction<AxisState>>;
}) => {
  return (
    <div className="flex justify-evenly space-x-8">
      {Axis.map(axis => (
        <div key={axis} className="w-full p-2 flex space-x-4 items-center">
          <span className="font-bold">{axis.toUpperCase()}</span>
          <input
            type="number"
            className="w-full bg-zinc-900 p-1 px-2 border rounded-lg"
            {...inputOption}
            value={state[axis]}
            onChange={e => setState({ ...state, [axis]: Number(e.target.value) })}
          />
        </div>
      ))}
    </div>
  );
};

export default Controller;
