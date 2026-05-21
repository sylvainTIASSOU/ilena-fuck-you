'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const shouldEnableCursor = window.matchMedia('(pointer: fine)').matches;
    setIsEnabled(shouldEnableCursor);

    if (!shouldEnableCursor) {
      document.body.classList.add('default-cursor');
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.body.classList.remove('default-cursor');

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.add('default-cursor');
    };
  }, []);

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      {/* Floating Finger Emoji */}
      <motion.div
        className="custom-cursor-hud"
        animate={{
          x: mousePosition.x - 22,
          y: mousePosition.y - 22,
          scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
          rotate: isHovering ? 15 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 550,
          damping: 26,
          mass: 0.4,
        }}
      >
        🖕
      </motion.div>

      {/* Cybernetic HUD Target Crosshair */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          scale: isClicking ? 0.75 : isHovering ? 1.6 : 1,
          opacity: isClicking ? 0.6 : 0.9,
          rotate: isClicking ? 90 : isHovering ? 45 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 350,
          damping: 22,
        }}
      >
        {/* Glowing Circle */}
        <div className="absolute -left-5 -top-5 h-10 w-10 rounded-full border border-[#00f0ff] shadow-[0_0_8px_rgba(0,240,255,0.4)] bg-[#00f0ff]/5" />
        
        {/* HUD Tick Lines */}
        <div className="absolute -left-6 top-0 h-[1px] w-2 bg-[#00f0ff]" />
        <div className="absolute left-4 top-0 h-[1px] w-2 bg-[#00f0ff]" />
        <div className="absolute top-4 left-0 h-2 w-[1px] bg-[#00f0ff]" />
        <div className="absolute -top-6 left-0 h-2 w-[1px] bg-[#00f0ff]" />
        
        {/* Core Dot */}
        <div className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-[#d946ef] shadow-[0_0_6px_rgba(217,70,239,0.8)]" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
