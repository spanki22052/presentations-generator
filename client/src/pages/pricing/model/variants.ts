import { Variants } from 'framer-motion';
import { ANIMATION_TIMING, ANIMATION_EASING } from './constants';

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const heroTitleVariants: Variants = {
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

export const heroSubtitleVariants: Variants = {
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

export const toggleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_TIMING.normal,
      ease: ANIMATION_EASING.easeOut,
      delay: 0.3,
    },
  },
};

export const pricingCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: ANIMATION_TIMING.normal,
      ease: ANIMATION_EASING.easeOut,
      delay: 0.4 + index * 0.1,
    },
  }),
};

export const pricingCardHoverVariants = {
  hover: {
    y: -4,
    transition: {
      duration: ANIMATION_TIMING.fast,
      ease: ANIMATION_EASING.easeOut,
    },
  },
};

export const sectionTitleVariants: Variants = {
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
    },
  },
};

export const faqCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMING.normal,
      ease: ANIMATION_EASING.easeOut,
      delay: index * 0.1,
    },
  }),
};

