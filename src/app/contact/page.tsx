import styles from './page.module.css';

export default function ContactPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.content}>
        <h1 className={styles.title}>Let&apos;s Talk</h1>
        <p className={styles.subtitle}>
          Currently exploring new opportunities and collaborations in Python and Full-Stack Development.
        </p>
        
        <a href="mailto:contact@eshaansinghdeo.com" className={styles.mailtoBtn}>
          Say Hello
        </a>

        <div className={styles.socialLinks}>
          <a href="https://github.com/DevRexxxx" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
          <a href="https://www.linkedin.com/in/eshaan-singh-deo-ba669433a" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
        </div>
      </div>
    </div>
  );
}
