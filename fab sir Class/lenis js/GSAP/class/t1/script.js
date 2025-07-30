// to mean start to end -- it gost default animation to our custom animation
gsap.to("#box1", {
  x: 1200,
  duration: 2,
  delay: 1,
});

// from mean end to start -- it apply all style first and it come our animation to defult animation
gsap.from("#box2", {
  x: 1200,
  y: 100,
  duration: 2,
  delay: 1,
  rotate: 180,
  backgroundColor: "blue",
  borderRadius: "40%",
  stagger: 0.6,
  //   repeat 1 mean == default 1 + repeat 2 = 3 repeat
  //   repeat -1 mean infinite itme loop
  repeat: 2,
  //   yoyo mean make animation smooth. go and repeat -- just like yoyo toy
  yoyo: true,
});

let tl = gsap.timeline();

tl.from("h1", {
  y: -30,
  opacity: 0,
  duration: 2,
});
tl.from("h2", {
  y: -30,
  opacity: 0,
  duration: 2,
  stagger: 0.3,
});
tl.from("h3", {
  y: -30,
  x: -100,
  scale: 5,
  opacity: 0,
  duration: 2,
});
