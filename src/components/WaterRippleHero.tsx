"use client";

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the library to avoid SSR issues with window/canvas
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WaterWave = dynamic(
  () => import('react-water-wave') as any,
  { ssr: false }
) as any;

interface WaterRippleHeroProps {
  imageUrl: string;
}

export default function WaterRippleHero({ imageUrl }: WaterRippleHeroProps) {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
      <WaterWave
        imageUrl={imageUrl}
        dropRadius={25}
        perturbance={0.03}
        resolution={512}
        style={{ width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {() => (
          <div style={{ 
            width: '100%', 
            height: '100%', 
            background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.95) 0%, rgba(13, 17, 23, 0.98) 100%)' 
          }} />
        )}
      </WaterWave>
    </div>
  );
}
