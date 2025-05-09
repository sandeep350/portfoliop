// utils/motion.ts

export function slideInFromLeft(delay: number = 0) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.6,
        ease: 'easeOut',
        type: 'spring',
      },
    },
  };
}

export function slideInFromRight(delay: number = 0) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.6,
        ease: 'easeOut',
        type: 'spring',
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.6,
      ease: 'easeOut',
      type: 'spring',
    },
  },
};
