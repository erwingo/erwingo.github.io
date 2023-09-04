import ThemeSwitcherButton from '@/components/ThemeSwitcherButton';
import { ThemeContextProvider } from '@/contexts/ThemeContext';
import Link from 'next/link';
import React from 'react';

const menuItems = [
  { title: 'Home', href: '/' },
  { title: 'About', id: 'about', href: '/' },
  { title: 'Projects', id: 'projects', href: '/' },
  { title: 'Skills', id: 'skills', href: '/' },
  { title: 'Experience', id: 'experience', href: '/' },
];

export default function Header() {
  return (
    <ul className="fixed left-0 right-0 z-50 flex flex-wrap justify-center gap-2 bg-white/80 p-2 text-sm shadow-lg shadow-black/10 backdrop-blur-md dark:bg-black/80 md:left-1/2 md:right-auto md:top-6 md:-translate-x-1/2 md:flex-nowrap md:rounded-full">
      {menuItems.map(({ title, id, href }) => (
        <li key={title}>
          <Link
            href={`${href}${id ? `#${id}` : ''}`}
            className="block rounded-full px-4 py-2 text-gray-600 hover:text-gray-950 dark:text-white/60 dark:hover:text-white"
          >
            {title}
          </Link>
        </li>
      ))}
      <li key="theme-switcher-button" className="self-center leading-none">
        <ThemeContextProvider>
          <ThemeSwitcherButton />
        </ThemeContextProvider>
      </li>
    </ul>
  );
}
