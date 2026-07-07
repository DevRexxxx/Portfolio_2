"use client";

import { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  loop?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export default function Typewriter({
  words,
  loop = true,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      if (currentText.length === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        if (!loop && currentWordIndex === words.length - 1) return;
        timeout = setTimeout(() => {}, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (currentText.length === currentWord.length) {
        timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, loop, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span style={{ display: 'inline-block', position: 'relative' }}>
      {currentText}
      <span
        style={{
          borderRight: '2px solid var(--color-accent)',
          animation: 'blink 0.7s step-end infinite',
          marginLeft: '2px',
        }}
      >
        &nbsp;
      </span>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: var(--color-accent); }
        }
      `}} />
    </span>
  );
}
