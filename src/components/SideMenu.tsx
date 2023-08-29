import Link from 'next/link';
import React from 'react';

const MenuList = [
  { href: '/', label: 'Render 3D Model in Web' },
  { href: '/', label: 'Transformation' },
  { href: '/', label: 'Geometry' },
  { href: '/', label: 'Material' },
  { href: '/', label: 'Light' },
];

const MenuItem = ({ href, label }: { href: string; label: string }) => (
  <li className="hover:underline">
    <Link href={href}>{label}</Link>
  </li>
);

const SideMenu = () => {
  return (
    <ul className=" p-4 h-screen flex flex-col space-y-4 font-normal text-lg md:px-8 md:py-0 shrink-0 w-72">
      {MenuList.map(({ href, label }) => (
        <MenuItem key={href} href={href} label={label} />
      ))}
    </ul>
  );
};

export default SideMenu;
