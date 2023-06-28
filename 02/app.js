const bg = document.querySelector(".js-bg");
const tl = gsap.timeline();

tl.to(bg, {
  borderRadius: "0",
  height: "100vh",
  width: "100vw",
  ease: "none",
  scrollTrigger: {
    trigger: bg,
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});
