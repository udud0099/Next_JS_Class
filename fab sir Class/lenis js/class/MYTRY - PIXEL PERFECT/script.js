// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.to("#downArr", { y: 15, duration: 1, repeat: -1, yoyo: true });

gsap.to("#standing ", {
  top: 0,
  scrollTrigger: {
    // if we want to use PIN we always target parrent not a child
    trigger: "standing ",
    scroller: "body",
    // this for only make to make animation more better
    markers: true,
    start: "top 0%",
    // end just like a duration >> duration's disadvantage is it don't think about user animation base only time >> but it can control scrool time >> top:-50% is fast and top:-200% is slow. because top:-50% mean haf of the screen and top:-300 mean 3 times (3X) screen >> we have 3X screen scroll time big and 50% screen scrool time fast
    // end: "top -100%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});

gsap.to("#mountains ", {
  top: 100,
  scrollTrigger: {
    // if we want to use PIN we always target parrent not a child
    trigger: "mountains ",
    scroller: "body",
    // this for only make to make animation more better
    markers: true,
    start: "top 0%",
    // end just like a duration >> duration's disadvantage is it don't think about user animation base only time >> but it can control scrool time >> top:-50% is fast and top:-200% is slow. because top:-50% mean haf of the screen and top:-300 mean 3 times (3X) screen >> we have 3X screen scroll time big and 50% screen scrool time fast
    // end: "top -100%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});

gsap.to("#sky ", {
  top: 50,
  scrollTrigger: {
    // if we want to use PIN we always target parrent not a child
    trigger: "sky ",
    scroller: "body",
    // this for only make to make animation more better
    markers: true,
    start: "top 0%",
    // end just like a duration >> duration's disadvantage is it don't think about user animation base only time >> but it can control scrool time >> top:-50% is fast and top:-200% is slow. because top:-50% mean haf of the screen and top:-300 mean 3 times (3X) screen >> we have 3X screen scroll time big and 50% screen scrool time fast
    // end: "top -100%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});

gsap.to("#mycontent ", {
  top: -350,
  opacity: 0,
  scrollTrigger: {
    // if we want to use PIN we always target parrent not a child
    trigger: "mycontent ",
    scroller: "body",
    // this for only make to make animation more better
    markers: true,
    start: "top 20%",
    // end just like a duration >> duration's disadvantage is it don't think about user animation base only time >> but it can control scrool time >> top:-50% is fast and top:-200% is slow. because top:-50% mean haf of the screen and top:-300 mean 3 times (3X) screen >> we have 3X screen scroll time big and 50% screen scrool time fast
    // end: "top -100%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});
