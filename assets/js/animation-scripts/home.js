gsap.registerPlugin(ScrollTrigger);
isSm = window.matchMedia('only screen and (max-width: 767px)').matches;
isMd = window.matchMedia('only screen and (min-width: 768px) and (max-width: 1024px)').matches;
isLg = window.matchMedia('only screen and (min-width: 1025px) and (max-width: 1919px)').matches;

gsap.to(".text1-span", {
  scrollTrigger: ".text1-span",
  x: 0,
  duration: 1
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

if (!isSm) {
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
}

gsap.to('.cloud-up', {
  x: 150,
  ease: "expo",
  scrollTrigger: {
    trigger: ".cloud-up",
    scrub: 1,
    start: "top 80%",
    end: "bottom -50%"
  }
});

gsap.to('.cloud-container', {
  x: 100,
  ease: "expo",
  scrollTrigger: {
    trigger: ".cloud-container",
    scrub: 1,
    start: "top 80%",
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

const coinTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".coin",
    scrub: true
  }
});
coinTimeline.fromTo(".coin", { x: -200, opacity: 0.5 }, { x: 0, opacity: 1, duration: 2 });

const painTextTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".pain-text",
    scrub: true,
    start: "top 80%",
    end: "top 40%"
  }
});
painTextTimeline.fromTo(".pain-text", { opacity: 0, scale: 0.2 }, { scale: 1, opacity: 1 });

const paymentsHeaderTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#payments-header",
    scrub: true
  }
});
paymentsHeaderTimeline.fromTo("#payments-header", { x: isSm ? -200 : -100 }, { x: 0 });

const disbursementsHeaderTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#disbursements-header",
    scrub: true
  }
});
disbursementsHeaderTimeline.fromTo("#disbursements-header", { x: isSm ? 200 : 100 }, { x: 0 });

document.addEventListener("DOMContentLoaded", function() {

  const buttons = document.querySelectorAll(".animated-button");
  const mainTimeline = gsap.timeline();

  buttons.forEach((item, index) => {
    let tl = gsap.timeline();

    tl.to(item.children[1], 0.4, { attr: { width: 386 }, ease: Power4.easeInOut });
    tl.to(item.children[3], 0.4, { fill: "#000", ease: Linear.easeNone }, 0);
    tl.to(item.children[4], 0.4, { x: 14, ease: Power4.easeInOut }, 0);
    tl.to(item.children[5], 0.4, { x: 14, ease: Power4.easeInOut }, 0);
    tl.to(item.children[4], 0.4, { attr: { x2: 3 }, ease: Power4.easeInOut }, 0);
    tl.reversed(false);

    item.addEventListener("mouseenter", () => { tl.reversed(!tl.reversed()); });
    item.addEventListener("mouseleave", () => { tl.reversed(!tl.reversed()); });
  });

  const buttons2 = document.querySelectorAll(".animated-button-large");
  const mainTimeline2 = gsap.timeline();

  buttons2.forEach((item, index) => {
    let tl = gsap.timeline();

    tl.to(item.children[1], 0.4, { attr: { width: 480 }, ease: Power4.easeInOut });
    tl.to(item.children[3], 0.4, { fill: "#000", ease: Linear.easeNone }, 0);
    tl.to(item.children[4], 0.4, { x: 14, ease: Power4.easeInOut }, 0);
    tl.to(item.children[5], 0.4, { x: 14, ease: Power4.easeInOut }, 0);
    tl.to(item.children[4], 0.4, { attr: { x2: 3 }, ease: Power4.easeInOut }, 0);
    tl.reversed(false);

    item.addEventListener("mouseenter", () => { tl.reversed(!tl.reversed()); });
    item.addEventListener("mouseleave", () => { tl.reversed(!tl.reversed()); });
  });

});

gsap.to(".perfecting-image", {
  scrollTrigger: ".perfecting-image",
  x: 0,
  duration: 1
});

const animationTime = 0.3;
gsap.set("#perfecting", { autoAlpha: 1 });
const tl2 = gsap.timeline({ repeat: false, defaults: { ease: "none" } })
  .to("#pathP", { duration: animationTime, fill: "#E51A5E" })
  .to("#pathE1", { duration: animationTime, fill: "#E51A5E" })
  .to("#pathE2", { duration: animationTime, fill: "#E51A5E" })
  .to("#pathE3", { duration: animationTime, fill: "#E51A5E" })
  .to("#pathR", { duration: animationTime, fill: "#E51A5E" })
  .to("#pathF", { duration: animationTime, fill: "#E51A5E" })
  .to("#pathE21", { duration: animationTime, fill: "#E51A5E" })
  .to("#pathE22", { duration: animationTime, fill: "#E51A5E" })
  .to("#pathE23", { duration: animationTime, fill: "#E51A5E" })
  .to("#pathCT", { duration: animationTime, fill: "#E51A5E" })
  .to("#pathI", { duration: animationTime, fill: "#E51A5E" })
  .to("#pathN", { duration: animationTime, fill: "#E51A5E" })
  .to("#pathG", { duration: animationTime, fill: "#E51A5E" });
