const bg = document.querySelector(".js-bg");
const tl = gsap.timeline();

tl.to(bg, {
  borderRadius: "0",
  bottom: "0",
  height: "100vh",
  width: "100vw",
  ease: "none",
  scrollTrigger: {
    trigger: "body",
    start: "top center",
    end: "bottom+=300px center",
    scrub: true,
  },
});
