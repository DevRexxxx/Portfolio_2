import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.column}>
          <Link href="/" className={styles.logo}>
            ESHAAN
          </Link>
          <p className={styles.copyright}>© {new Date().getFullYear()} Eshaan Singh Deo. All rights reserved.</p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>Sitemap</h3>
          <Link href="/work" className={styles.link}>Work</Link>
          <Link href="/gallery" className={styles.link}>Gallery</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>Socials</h3>
          <a href="https://github.com/DevRexxxx" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
          <a href="https://www.linkedin.com/in/eshaan-singh-deo-ba669433a" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
          <a href="https://www.geeksforgeeks.org/user/eshaansinghdeo/" target="_blank" rel="noopener noreferrer" className={styles.link}>GeeksforGeeks</a>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>Contact</h3>
          <a href="mailto:contact@eshaansinghdeo.com" className={styles.link}>contact@eshaansinghdeo.com</a>
        </div>
      </div>
    </footer>
  );
}
