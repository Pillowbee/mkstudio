'use client';

import { usePathname } from 'next/navigation';

import FilmButton from '@/components/FilmButton/FilmButton';
import SerialButton from '@/components/SerialButton/SerialButton';

import styles from './NavBar.module.css';

const NavLinks = [
  { id: 1, name: <SerialButton />, path: '/' },
  { id: 2, name: <FilmButton />, path: '/movies' },
];

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <nav className={styles.navbar}>
      {NavLinks.map((link) => {
        return link.name;
      })}
    </nav>
  );
};

export default Navbar;
