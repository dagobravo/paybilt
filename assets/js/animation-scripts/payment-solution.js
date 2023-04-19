gsap.registerPlugin(ScrollTrigger);

const loadTimeline = gsap.timeline({ scrollTrigger: "#how-it-text" });
loadTimeline.fromTo('#how-it-text', { x: -100 }, { x: 0, duration: 1 });

const moneyBagTimeline = gsap.timeline({ scrollTrigger: ".money-bag-image" });
moneyBagTimeline.fromTo(".money-bag-image", { x: 200, opacity: 0.5 }, { x: 0, opacity: 1, duration: 2 });

const section4Container1 = gsap.timeline({ scrollTrigger: "#section4-container1" });
moneyBagTimeline.fromTo("#section4-container1", { scale: 0.5, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 2 });

const paperAirplaneImage = gsap.timeline({ scrollTrigger: "#paper-airplane-image" });
moneyBagTimeline.fromTo("#paper-airplane-image", { x: -200, opacity: 0.5 }, { x: 0, opacity: 1, duration: 2 });


// gsap.fromTo("#how-it-text", { x: -100 }, { x: 0, duration: 1 });
// gsap.to("#how-it-text", {
//   x: 0,
//   duration: 2,
//   scrollTrigger: {
//     trigger: "#how-it-text",
//     scrub: 1,
//     start: "top center",
//     end: "bottom -30%"
//   }
// });

// gsap.fromTo("#how-it-text2", { x: -100 }, { x: 0, duration: 1 });
// gsap.to("#how-it-text2", {
//   x: 0,
//   duration: 2,
//   scrollTrigger: {
//     trigger: "#how-it-text2",
//     scrub: 1,
//     start: "top center",
//     end: "bottom -30%"
//   }
// });

gsap.fromTo(".watch-image", { x: 100 }, { x: 0, duration: 1 });
gsap.to(".watch-image", {
  x: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".watch-image",
    scrub: 1,
    start: "top center",
    end: "bottom -30%"
  }
});

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




// gsap.registerPlugin(ScrollTrigger);

// const trigger = document.querySelector('.trigger')
// const square = document.querySelector('.square')

// // Separate Timelines...
// let inTl = gsap.timeline()
// inTl.to(square, {opacity: 1, duration: 3})

// let outTl = gsap.to(square, {
//   opacity: .3, 
//   duration: 3,
//   immediateRender: false,
//   overwrite: 'auto',
//   scrollTrigger: {
//     id: 'trigger',
//     trigger: trigger,
//     start: 'top top',
//     end: 'bottom top+=100px',
//     markers: true,
//     pin: true,
//     scrub: true,
//   }
// })