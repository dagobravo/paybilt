gsap.registerPlugin(ScrollTrigger);

isSm = window.matchMedia('only screen and (max-width: 767px)').matches;
isMd = window.matchMedia('only screen and (min-width: 768px) and (max-width: 1024px)').matches;

const text1Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#how-it-text"
  }
});
text1Timeline.fromTo('#how-it-text', { x: -100 }, { x: 0, duration: 1 });

const text2Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#how-it-text2"
  }
});
text2Timeline.fromTo('#how-it-text2', { x: -100 }, { x: 0, duration: 1 });

const moneyBagTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".money-bag-image",
    scrub: true
  }
});
moneyBagTimeline.fromTo(".money-bag-image", { x: 200, opacity: 0.5 }, { x: 0, opacity: 1, duration: 2 });

const section4Container1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section4-container1",
    scrub: true
  }
});
section4Container1.fromTo("#section4-container1", { scale: 0.5, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 2 });

const section5Container1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section5-container1", scrub: true
  }
});
section5Container1.fromTo("#section5-container1", { scale: 0.5, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 2 });

const paperAirplaneImage = gsap.timeline({ scrollTrigger: { trigger: "#paper-airplane-image", scrub: true } });
paperAirplaneImage.fromTo("#paper-airplane-image", { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 2 });

const watchTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".watch-image",
    scrub: true
  }
});
watchTimeline.fromTo(".watch-image", { x: 100 }, { x: 0, duration: 1 });

gsap.to(".built-image", {
  scale: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".built-image",
    scrub: 1,
    start: "top 80%",
    end: "bottom -30%"
  }
});

const cassetteTimeline = gsap.timeline({ scrollTrigger: { trigger: ".cassette-image", scrub: true } });
cassetteTimeline.fromTo(".cassette-image", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 });
