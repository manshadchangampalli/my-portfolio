export const heroContainerOpacity = (animationProgress: number, gsap: typeof globalThis.gsap) => {
  gsap.set(".hero__content__container", {
    opacity: 1 - animationProgress * 10,
  });
};

export const heroProfileBar = (animationProgress: number, gsap: typeof globalThis.gsap) => {
  if (animationProgress >= 0.9) {
    // normalize animation progress to [0, 1] in the range 0.85 -> 1
    const normalizedProgress = (animationProgress - 0.9) / (1 - 0.9); // 0 -> 1

    // map normalized progress (0 -> 1) to translateZ (100 -> 0)
    const translateZ = 120 - normalizedProgress * 120;

    gsap.set(".hero_profile_bar", {
      opacity: 1,
      transform: `perspective(500px) translateZ(${translateZ}px)`,
    });
  } else {
    gsap.set(".hero_profile_bar", {
      opacity: 0,
    });
  }
};
