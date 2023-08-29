'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const MenuItem = ({ href, label, onClick }: { href: string; label: string; onClick?: React.MouseEventHandler }) => {
  const pathname = usePathname();

  return (
    <li className={`hover:underline ${pathname === href ? 'underline' : ''}`}>
      <Link href={href} onClick={onClick}>
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
