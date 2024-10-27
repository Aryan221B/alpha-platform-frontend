export const menuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.07,
      delayChildren: 0.2
    }
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

export const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  },
  closed: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3
    }
  }
};

