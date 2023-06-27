const hero = document.querySelector(".js-hero");
const heroImg = document.querySelector(".js-hero-img");
const slide = document.querySelector(".js-slide");
const logo = document.querySelector(".js-logo");
const title = document.querySelector(".js-title");

const tl = gsap.timeline();

tl.fromTo(
  hero,
  1,
  {
    height: "0",
  },
  { height: "100%" }
);
