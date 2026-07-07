"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./InteractiveAvatar.module.css";

export default function InteractiveAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)" });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    const centerX = width / 2;
    const centerY = height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15; // Max 15 degrees
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
    });
  };

  return (
    <div 
      className={styles.container} 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        drag
        dragConstraints={containerRef}
        dragElastic={0.2}
        whileDrag={{ scale: 1.1, cursor: "grabbing" }}
        style={{ width: '100%', height: '100%', position: 'relative', zIndex: 10, cursor: 'grab' }}
      >
        <div className={styles.avatarWrapper} style={style}>
          <Image 
            src="/images/avatar-black-hoodie.png"
            alt="3D Avatar"
            width={500}
            height={666}
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
            priority
            draggable={false}
            className={styles.avatarImage}
          />
        </div>
      </motion.div>
    </div>
  );
}
