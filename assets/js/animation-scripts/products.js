gsap.registerPlugin(ScrollTrigger);

const textTimeline = gsap.timeline();
textTimeline.fromTo(".header-text", { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
textTimeline.fromTo(".content-text", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });

gsap.fromTo(".pexels-image", { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 2 });

const leadingImageTimeline = gsap.timeline({ scrollTrigger: { trigger: ".leading-image", scrub: true, start: "top 0" } });
leadingImageTimeline.fromTo(".leading-image", { scale: 1, opacity: 1 }, { scale: 0, opacity: 0, duration: 2 });

const pexelsImageTimeline = gsap.timeline({scrollTrigger: {trigger: ".pexels-image", scrub: true, start: "top 0"}});
pexelsImageTimeline.fromTo(".pexels-image", { x: 0, opacity: 1 }, { x: 200, opacity: 0, duration: 2 });