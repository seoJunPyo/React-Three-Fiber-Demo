import { SideMenu, SideMenuButton } from '@/components';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { BiLogoGithub } from 'react-icons/bi';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'R3F Demo',
  description: 'React Three Fiber Demo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="sticky top-0 flex justify-between p-4 text-3xl font-bold lg:border-b bg-zinc-900 z-50">
          <SideMenuButton />
          <h1>R3F Demo</h1>
          <Link href="https://github.com/seoJunPyo">
            <BiLogoGithub />
          </Link>
        </nav>
        <main className="container lg:flex lg:mt-12 mx-auto">
          <div className="hidden lg:block ">
            <SideMenu />
          </div>
          <div className="p-4 lg:py-0 lg:px-8 w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
