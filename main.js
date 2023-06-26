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
  x: 1000,
  scrollTrigger: {
    trigger: ".js-trigger05",
    start: "top center",
    end: "bottom center",
    scrub: 0.5, // 0.5秒間余韻で動く
    markers: true,
  },
});

// スクロール量に応じてアニメーションさせる2
gsap.to(".js-target06", {
  x: 1200,
  scrollTrigger: {
    trigger: ".js-trigger06",
    start: "top center",
    end: "bottom center",
    scrub: 0.5, // 0.5秒間余韻で動く
    markers: true,
  },
  stagger: {
    form: "start",
    amount: 0.3,
  },
});

// 特定の位置で要素を固定してアニメーションさせる
gsap.to(".js-target07", {
  x: 1000,
  scrollTrigger: {
    trigger: ".js-trigger07",
    start: "center center",
    end: "+=1000",
    pin: true, //トリガー要素を固定
    scrub: 1,
    markers: true,
  },
  stagger: {
    from: "end",
    amount: 0.1,
  },
});

// 特定の位置でクラス名を追加・削除する
ScrollTrigger.create({
  trigger: ".js-trigger08",
  start: "top center",
  end: "bottom center",
  toggleClass: {
    targets: ".js-target08",
    className: "is-active",
  },
});
