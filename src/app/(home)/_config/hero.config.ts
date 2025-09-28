// Animation configuration for hero section
export const heroAnimations = {
  /**
   * Controls the initial screen opacity based on scroll progress
   * @param progress - Scroll progress (0-1)
   * @param gsap - GSAP instance for animations
   */
  initialPageOpacity: (progress: number, gsap: typeof globalThis.gsap) => {
    if (progress <= 0.2) {
      const opacity = 0.5 - progress * 2.5;
      gsap.set(".initial-screen", {
        backgroundColor: `rgba(0, 0, 0, ${opacity})`,
      });
    } else {
      gsap.set(".initial-screen", {
        backgroundColor: "transparent",
      });
    }
  },

  initialTextTranslation: (progress: number, gsap: typeof globalThis.gsap) => {
    const translateZ = -progress * 1000; // Increased multiplier for more noticeable effect

    if (progress <= 0.18) {
      gsap.set(".initial-screen-text", {
        transform: `perspective(500px) translate(0%, -50%) translateZ(${translateZ}px)`, // Fixed: use px instead of % and proper perspective
        opacity: 1,
      });
    } else {
      gsap.set(".initial-screen-text", {
        transform: `perspective(500px) translate(0%, 0%) translateZ(0px)`,
        opacity: 0,
      });
    }
  },
};
