import type { Variants } from "framer-motion";

export default function animationVariants() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const leftVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const rightVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return { containerVariants, leftVariants, rightVariants };
}