export const heroContainerOpacity = (animationProgress: number, gsap: typeof globalThis.gsap) => {
  gsap.set(".hero__content__container", {
    opacity: 1 - animationProgress * 10,
  });
};

export const heroProfileBar = (animationProgress: number, gsap: typeof globalThis.gsap) => {
  console.log({ animationProgress });
  gsap.set(".hero_profile_bar", {
    opacity: animationProgress * 10,
  });
};
