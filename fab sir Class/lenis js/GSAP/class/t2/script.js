gsap.from("#page1 #box", {
  scale: 0,
  duration: 2,
  rotate: 360,
});

gsap.from("#page2 #box", {
  scale: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 ",
    scroller: "body",
    // this for only make to make animation more better
    markers: true,
    start: "top 60%",
    end: "top 30%",
    // it make animation smooth and now our animation work only first time go top to bottom this help us play animation top to bottom and bottom to top just like yoyo
    // scrub:true
    scrub: 2,
  },
});

gsap.from("#page3 #box", {
  scale: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: "#page3 #box",
});

gsap.to("#page4 h1", {
  transform: "translateX(-100%)",
  scrollTrigger: {
    // if we want to use PIN we always target parrent not a child
    trigger: "#page4 ",
    scroller: "body",
    // this for only make to make animation more better
    markers: true,
    start: "top 0%",
    // end just like a duration >> duration's disadvantage is it don't think about user animation base only time >> but it can control scrool time >> top:-50% is fast and top:-200% is slow. because top:-50% mean haf of the screen and top:-300 mean 3 times (3X) screen >> we have 3X screen scroll time big and 50% screen scrool time fast
    // end: "top -100%",
    end: "top -350%",
    scrub: 2,
    pin: true,
  },
});

gsap.from("#page5 h1", {
  transform: "translateX(-100%)",
  scrollTrigger: {
    trigger: "#page5 ",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "bottom -310%",
    scrub: 2,
    pin: true,
  },
});
