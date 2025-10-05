export const heroContainerOpacity = (animationProgress: number, gsap: typeof globalThis.gsap) => {
  gsap.set(".hero__content__container", {
    opacity: 1 - animationProgress * 10,
    force3D: true, // Force GPU acceleration
  });
};

export const heroProfileBar = (animationProgress: number, gsap: typeof globalThis.gsap) => {
  if (animationProgress >= 0.8) {
    const normalizedProgress = (animationProgress - 0.8) / (1 - 0.8);
    const translateZ = 800 - normalizedProgress * 800;

    gsap.set(".hero_profile_bar", {
      opacity: 1,
      transform: `perspective(1000px) translateZ(${translateZ}px)`,
      force3D: true, // Force GPU acceleration
    });
  } else {
    gsap.set(".hero_profile_bar", {
      opacity: 0,
      force3D: true,
    });
  }
};
