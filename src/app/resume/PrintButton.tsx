'use client';

import styles from './page.module.css';

export default function PrintButton() {
  return (
    <button 
      className={styles.printButton} 
      onClick={() => window.print()}
      type="button"
    >
      Save as PDF / Print
    </button>
  );
}
