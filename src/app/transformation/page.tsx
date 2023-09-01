import { Position } from '@/components';
import Rotation from '@/components/Transformation/Rotation';
import Scale from '@/components/Transformation/Scale';
import React from 'react';

const Divider = () => <div className="w-full h-px border-t border-zinc-700" />;

const page = () => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-8">Transformation</h2>
      <div className="flex flex-col space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Position</h3>
          <Position />
        </div>

        <Divider />

        <div>
          <h3 className="text-2xl font-bold mb-4">Scale</h3>
          <Scale />
        </div>

        <Divider />

        <div>
          <h3 className="text-2xl font-bold mb-4">Rotation</h3>
          <Rotation />
        </div>
      </div>
    </>
  );
};

export default page;
