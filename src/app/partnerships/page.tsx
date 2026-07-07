import styles from './page.module.css';

export default function PartnershipsPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.content}>
        <span className={styles.badge}>Coming Soon</span>
        <h1 className={styles.title}>Partnerships</h1>
        <p className={styles.subtitle}>
          This section is currently under development. Check back soon to see collaborations
          with forward-thinking brands and organizations.
        </p>
      </div>
    </div>
  );
}
