const fv = document.querySelector(".js-fv");
const bgRight = document.querySelector(".js-bg-right");
const bgLeft = document.querySelector(".js-bg-left");
const logo = document.querySelector(".js-logo");
const menu = document.querySelector(".js-fv-img");
const title = document.querySelector(".js-title");

const tl = gsap.timeline();

tl.fromTo(
  fv,
  {
    height: "0%",
  },
  {
    height: "80%",
    duration: 1,
    ease: "power3.inOut",
  }
)
  .fromTo(
    fv,
    {
      width: "100%",
    },
    {
      width: "80%",
      duration: 1,
      ease: "power3.in",
    }
  )
  .fromTo(
    bgLeft,
    {
      y: "100%",
    },
    {
      y: "0%",
      duration: 1.5,
      ease: "power2.inOut",
    },
    "-=1"
  )
  .fromTo(
    bgRight,
    {
      y: "-100%",
    },
    {
      y: "0",
      duration: 1.5,
      ease: "power2.inOut",
    },
    "-=1.5"
  )
  .fromTo(
    logo,
    {
      opacity: 0,
      x: 30,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
    },
    "-=0.5"
  )
  .fromTo(
    title,
    {
      opacity: "0",
      x: "-30",
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
    },
    "-=0.5"
  );
