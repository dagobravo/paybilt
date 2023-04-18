gsap.registerPlugin(ScrollTrigger);

gsap.to(".perfecting-image", {
  scrollTrigger: ".perfecting-image",
  x: 0,
  duration: 1
});

gsap.to(".text1-span", {
  scrollTrigger: ".text1-span",
  x: 0,
  duration: 1
});

gsap.fromTo(".particles", { x: -100 }, { x: 0, duration: 2 });
gsap.to(".particles", {
  x: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".particles",
    scrub: 1,
    start: "top center",
    end: "bottom -30%"
  }
});

gsap.fromTo(".girl", { x: 100 }, { x: 0, duration: 2.5 });
gsap.to(".girl", {
  x: -150,
  scrollTrigger: {
    trigger: ".girl",
    scrub: 1,
    start: "top center",
    end: "bottom -30%"
  }
});

gsap.to('.tennis-shoes-image', {
  x: 0,
  ease: "expo",
  scrollTrigger: {
    trigger: ".tennis-shoes-image",
    scrub: 1,
    start: "top 60%",
    end: "bottom -30%",
  }
});

gsap.to('#perks-text', {
  x: 0,
  opacity: 1,
  ease: "expo",
  duration: 2,
  scrollTrigger: {
    trigger: "#perks-text",
    scrub: 1,
    start: "top 60%",
    end: "bottom -30%"
  }
});

gsap.to('#perks-text2', {
  x: 0,
  opacity: 1,
  ease: "expo",
  scrollTrigger: {
    trigger: "#perks-text2",
    scrub: 1,
    start: "top 60%",
    end: "bottom -30%"
  }
});

gsap.to('.amount-image', {
  scale: 1,
  ease: "expo",
  scrollTrigger: {
    trigger: ".amount-image",
    scrub: 1,
    start: "top 80%",
    end: "bottom -30%"
  }
});

gsap.to('.overnight', {
  scale: 1,
  ease: "expo",
  scrollTrigger: {
    trigger: ".overnight",
    scrub: 1,
    start: "top 80%",
    end: "bottom -30%"
  }
});

gsap.to("#skate-image", {
  opacity: 1,
  ease: "expo",
  x: 0,
  scrollTrigger: {
    trigger: "#skate-image",
    scrub: 1,
    start: "top center"
  }
});