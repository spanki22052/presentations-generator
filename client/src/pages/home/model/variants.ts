import { Variants } from 'framer-motion';
import { ANIMATION_TIMING, ANIMATION_EASING } from './constants';

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMING.slow,
      ease: ANIMATION_EASING.easeOut,
    },
  },
};

export const subtitleVariants: Variants = {
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
      delay: 0.2,
    },
  },
};

export const featureCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: ANIMATION_TIMING.normal,
      ease: ANIMATION_EASING.easeOut,
    },
  },
};

export const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_TIMING.normal,
      ease: ANIMATION_EASING.easeOut,
      delay: 0.4,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: ANIMATION_TIMING.fast,
      ease: ANIMATION_EASING.easeOut,
    },
  },
  tap: {
    scale: 0.98,
  },
};

export const featureCardHoverVariants = {
  hover: {
    y: -8,
    transition: {
      duration: ANIMATION_TIMING.fast,
      ease: ANIMATION_EASING.easeOut,
    },
  },
};

