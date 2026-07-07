import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { workItems } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Selected Work | Portfolio',
  description: 'A showcase of recent projects, applications, and digital experiments.',
};

export default function WorkPage() {
  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.header}>
        <h1 className={styles.title}>Selected Work</h1>
        <p className={styles.subtitle}>
          A showcase of recent projects, applications, and digital experiments.
        </p>
      </header>

      <div className={styles.grid}>
        {workItems.map((item, index) => (
          <div key={item.id} className={styles.workCard}>
            <div className={styles.imageWrapper} style={{ position: 'relative' }}>
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.image} style={{ objectFit: 'cover' }} priority={index < 2} />
            </div>
            <div className={styles.meta}>
              <span className={`meta-label ${styles.tag}`}>{item.tags?.join(' • ')}</span>
            </div>
            <h2 className={styles.workTitle}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
            <div className={styles.cardLinks}>
              {item.githubLink && (
                <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className={styles.cardLinkBtn}>
                  GitHub
                </a>
              )}
              {item.deploymentLink && (
                <a href={item.deploymentLink} target="_blank" rel="noopener noreferrer" className={styles.cardLinkBtn}>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
