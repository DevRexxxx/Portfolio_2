import { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';
import { galleryItems } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Gallery | Portfolio',
  description: 'Behind the scenes, work in progress, and snapshots of the creative process.',
};

export default function GalleryPage() {
  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.header}>
        <h1 className={styles.title}>Gallery</h1>
        <p className={styles.subtitle}>
          Behind the scenes, work in progress, and snapshots of the creative process.
        </p>
      </header>

      <div className={styles.masonry}>
        {galleryItems.map((item, index) => (
          <div key={item.id} className={styles.galleryItem} style={{ position: 'relative' }}>
            <Image src={item.image} alt={item.caption} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className={styles.image} style={{ objectFit: 'cover' }} priority={index === 0} />
            <div className={styles.overlay}>
              <span className={`meta-label ${styles.itemTag}`}>{item.tag}</span>
              <span className={styles.itemCaption}>{item.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
