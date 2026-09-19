import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'view'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the trailing ring
  const ringX = useSpring(mouseX, { stiffness: 450, damping: 28 });
  const ringY = useSpring(mouseY, { stiffness: 450, damping: 28 });

  useEffect(() => {
    // Check touch device or reduced motion
    const checkTouch = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768;
    };
    const checkReducedMotion = () => {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    };

    setIsTouchDevice(checkTouch());
    setReducedMotion(checkReducedMotion());

    if (checkTouch() || checkReducedMotion()) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isViewCard = target.closest('[data-cursor="view"]');
      const isInteractive = target.closest('a, button, [role="button"], input, select, textarea, [data-cursor="hover"]');

      if (isViewCard) {
        setCursorType('view');
      } else if (isInteractive) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || reducedMotion || !isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden" aria-hidden="true">
      {/* Central Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: cursorType === 'view' ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Trailing Ring / View Badge */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border transition-colors duration-200"
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          width: cursorType === 'view' ? 56 : cursorType === 'hover' ? 36 : 22,
          height: cursorType === 'view' ? 56 : cursorType === 'hover' ? 36 : 22,
          backgroundColor: cursorType === 'view' ? 'rgba(14, 165, 233, 0.9)' : 'transparent',
          borderColor: cursorType === 'view' ? 'transparent' : cursorType === 'hover' ? 'rgba(14, 165, 233, 0.7)' : 'rgba(148, 163, 184, 0.4)',
          borderWidth: cursorType === 'view' ? 0 : 1.5,
          backdropFilter: cursorType === 'view' ? 'blur(4px)' : 'none',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {cursorType === 'view' && (
          <span className="text-[11px] font-semibold text-white uppercase tracking-wider select-none">
            View
          </span>
        )}
      </motion.div>
    </div>
  );
};
