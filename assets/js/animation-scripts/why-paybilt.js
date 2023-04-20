gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".paybilt-image", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 2 });
const paybiltImageTimeline = gsap.timeline({ scrollTrigger: {
  trigger: ".paybilt-image",
  scrub: true,
  start: "top 0"
} });
paybiltImageTimeline.fromTo(".paybilt-image", { scale: 1, opacity: 1 }, { scale: 0.5, opacity: 0, duration: 3 });

gsap.fromTo(".guy-image", { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 2 });
const guyImageTimeline = gsap.timeline({ scrollTrigger: {
  trigger: ".guy-image",
  scrub: true,
  start: "top 0"
}});
guyImageTimeline.fromTo(".guy-image", { x: 0, opacity: 1 }, { x: 200, opacity: 0, duration: 2 });

const headersTimeline = gsap.timeline();
headersTimeline.fromTo(".header1", { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
headersTimeline.fromTo(".header2", { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
headersTimeline.fromTo(".header3", { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });

const pricingHeaderTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".pricing-header",
    scrub: true
  }
});
pricingHeaderTimeline.fromTo(".pricing-header", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 2 });

const paybiltForYou = gsap.timeline({
  scrollTrigger: {
    trigger: ".paybilt-for-you",
    scrub: true
  }
});
pricingHeaderTimeline.fromTo(".paybilt-for-you",
  {
    scale: 0,
    opacity: 0,
  },
  {
    scale: 1,
    opacity: 1,
    duration: 2
  }
);