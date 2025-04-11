// components/CursorBlurEffect.tsx
"use client"; // Isso é necessário porque usamos hooks (Next.js 13+)

import { useEffect, useState } from 'react';

export default function CursorBlurEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`
        fixed inset-0 
        pointer-events-none 
        z-50 
        transition-opacity duration-300 
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
      style={{
        maskImage: 'radial-gradient(circle at center, white 0%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(circle at center, white 0%, transparent 80%)',
        background: 'rgba(18, 18, 18, 0.7)', // Cor do fundo (#121212) com transparência
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        transform: `translate(calc(${position.x}px - 50vw), calc(${position.y}px - 50vh))`,
        boxShadow: '0 0 60px 30px rgba(255, 255, 255, 0.1)',
      }}
    />
  );
}