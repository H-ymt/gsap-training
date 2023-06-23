gsap.fromTo(
  ".js-target",
  {
    autoAlpha: 0,
  },
  {
    autoAlpha: 1,
    x: 800,
    duration: 3,
    borderRadius: 0,
    scrollTrigger: {
      trigger: ".js-trigger",
      start: "top center",
    },
  }
);

gsap.to(".js-target02", {
  x: 70,
  scrollTrigger: {
    trigger: ".js-trigger02",
    start: "top center",
  },

  stagger: {
    from: "start", //どの順番でアニメーションしていくか指定
    amount: 1,
  },
});

// それぞれ交差するタイミングでアニメーションさせる
gsap.set(".js-target03", { opacity: 0, y: 100 });

ScrollTrigger.batch(".js-target03", {
  onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0 }),
  start: "top 50%",
  once: true,
  markers: true,
});

// 時間差でアニメーションさせる
ScrollTrigger.batch(".js-target04", {
  onEnter: (batch) =>
    gsap.to(batch, {
      ease: "clastic.inOut",
      autoAlpha: 1,
      stagger: 0.1,
    }),
});

// スクロール量に応じてアニメーションさせる
gsap.to(".js-target05", {
  x: 800,
  scrollTrigger: {
    trigger: ".js-trigger05",
    start: "top center",
    end: "bottom center",
    scrub: 0.5, // 0.5秒間余韻で動く
    markers: true,
  },
});

// スクロール量に応じてアニメーションさせる2