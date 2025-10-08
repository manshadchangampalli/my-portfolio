export const heroContainerOpacity = (animationProgress: number, gsap: typeof globalThis.gsap) => {
  gsap.set(".hero__content__container", {
    opacity: 1 - animationProgress * 10,
    force3D: true, // Force GPU acceleration
  });
};

export const heroProfileBar = (animationProgress: number, gsap: typeof globalThis.gsap) => {
  // Calculate opacity transition from 0.75 to 0.8 for iOS compatibility
  let opacity = 0;
  if (animationProgress >= 0.75) {
    if (animationProgress >= 0.8) {
      opacity = 1;
    } else {
      // Smooth opacity transition from 0.75 to 0.8
      const opacityProgress = (animationProgress - 0.75) / (0.8 - 0.75);
      opacity = opacityProgress;
    }
  }

  // Calculate translateZ animation from 0.8 onwards
  let translateZ = 800;
  if (animationProgress >= 0.8) {
    const normalizedProgress = (animationProgress - 0.8) / (1 - 0.8);
    translateZ = 800 - normalizedProgress * 800;
  }

  // Use direct DOM manipulation for iOS Chrome compatibility
  const profileBar = document.querySelector(".hero_profile_bar") as HTMLElement;
  if (profileBar) {
    // Set opacity directly for better iOS support
    profileBar.style.opacity = opacity.toString();
    profileBar.style.transform = `perspective(1000px) translateZ(${translateZ}px)`;
    profileBar.style.willChange = "opacity, transform";
    profileBar.style.backfaceVisibility = "hidden";
    profileBar.style.transformStyle = "preserve-3d";
  }
};
