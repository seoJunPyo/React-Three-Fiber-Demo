'use client';

import React from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { SideMenu } from '.';

const SideMenuButton = () => {
  const [opened, setOpened] = React.useState(false);

  return (
    <>
      <button className="lg:hidden" onClick={() => setOpened(!opened)}>
        {opened ? <BiX /> : <BiMenu />}
      </button>

      <div
        className={`fixed top-16 left-0 h-screen w-full p-4 bg-zinc-900 z-50 transition-all ${
          opened ? '' : '-translate-x-full'
        } `}>
        <SideMenu handleClose={() => setOpened(false)} />
      </div>
    </>
  );
};

export default SideMenuButton;
