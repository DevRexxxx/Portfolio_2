"use client";

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import styles from './Statistics.module.css';

interface StatItemProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

function StatItem({ end, label, suffix = "", duration = 2000 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutExpo)
      const easePercentage = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(easePercentage * end));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <div className={styles.statItem} ref={ref}>
      <div className={styles.statNumberWrapper}>
        <span className={styles.statNumber}>{count}</span>
        <span className={styles.statSuffix}>{suffix}</span>
      </div>
      <p className={styles.statLabel}>{label}</p>
    </div>
  );
}

export default function Statistics() {
  return (
    <div className={styles.statsContainer}>
      <StatItem end={2} suffix="x" label="Hackathon Finalist" />
      <StatItem end={8} suffix="+" label="GitHub Repositories" />
      <StatItem end={10} suffix="K+" label="Lines of Code" />
      <StatItem end={10} suffix="+" label="Technologies" />
    </div>
  );
}
