"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          ESHAAN
        </Link>
        <button 
          className={styles.mobileToggle} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}></span>
        </button>
        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
          <Link href="/work" className={styles.navLink} onClick={closeMenu}>Work</Link>
          <Link href="/gallery" className={styles.navLink} onClick={closeMenu}>Gallery</Link>
          <Link href="https://github.com/DevRexxxx" target="_blank" rel="noopener noreferrer" className={styles.navLink} onClick={closeMenu}>GitHub</Link>
          <Link href="https://www.linkedin.com/in/eshaan-singh-deo-ba669433a" target="_blank" rel="noopener noreferrer" className={styles.navLink} onClick={closeMenu}>LinkedIn</Link>
          <a href="/resume.pdf" download="Eshaan_Singh_Deo_Resume.pdf" className={styles.navLink} onClick={closeMenu} style={{ color: 'var(--color-accent)' }}>Resume <span style={{ fontSize: '1.1em', verticalAlign: 'middle' }}>⬇</span></a>
        </nav>
      </div>
    </header>
  );
}
