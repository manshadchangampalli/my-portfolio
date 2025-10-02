export const heroContainerOpacity = (animationProgress: number, gsap: typeof globalThis.gsap) => {
  gsap.set(".hero__content__container", {
    opacity: 1 - animationProgress * 10,
  });
};
