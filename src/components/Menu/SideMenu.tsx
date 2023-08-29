import React from 'react';
import { MenuItem } from '.';

const MenuList = [
  { href: '/', label: 'Render 3D Model in Web' },
  { href: '/transformation', label: 'Transformation' },
  { href: '/geometry', label: 'Geometry' },
  { href: '/material', label: 'Material' },
  { href: '/light', label: 'Light' },
];

const SideMenu = ({ handleClose }: { handleClose?: React.MouseEventHandler }) => {
  return (
    <ul className=" p-4 h-screen flex flex-col space-y-4 font-normal text-lg lg:px-8 lg:py-0 shrink-0 w-72">
      {MenuList.map(({ href, label }) => (
        <MenuItem key={href} href={href} label={label} onClick={handleClose} />
      ))}
    </ul>
  );
};

export default SideMenu;
