import { Variants } from 'framer-motion';
import { ANIMATION_TIMING, ANIMATION_EASING } from './constants';

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const leftPanelVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_TIMING.normal,
      ease: ANIMATION_EASING.easeOut,
    },
  },
};

export const rightPanelVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_TIMING.normal,
      ease: ANIMATION_EASING.easeOut,
    },
  },
};

export const logoVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMING.fast,
      ease: ANIMATION_EASING.easeOut,
      delay: 0.2,
    },
  },
};

export const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMING.normal,
      ease: ANIMATION_EASING.easeOut,
      delay: 0.2,
    },
  },
};

export const socialButtonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMING.fast,
      ease: ANIMATION_EASING.easeOut,
      delay: 0.3,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: ANIMATION_TIMING.fast,
      ease: ANIMATION_EASING.easeOut,
    },
  },
  tap: {
    scale: 0.98,
  },
};

export const formVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMING.normal,
      ease: ANIMATION_EASING.easeOut,
      delay: 0.4,
      staggerChildren: 0.05,
    },
  },
};

export const inputVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMING.fast,
      ease: ANIMATION_EASING.easeOut,
    },
  },
};

export const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_TIMING.normal,
      ease: ANIMATION_EASING.easeOut,
      delay: 0.5,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: ANIMATION_TIMING.fast,
      ease: ANIMATION_EASING.easeOut,
    },
  },
  tap: {
    scale: 0.98,
  },
};

export const linkVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_TIMING.normal,
      ease: ANIMATION_EASING.easeOut,
      delay: 0.6,
    },
  },
};

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMING.normal,
      ease: ANIMATION_EASING.easeOut,
      delay: 0.3,
    },
  },
};
