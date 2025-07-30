let menu = document.querySelector("#nav i ");
let cross = document.querySelector("#full i ");

// let tl = gsap.timeline({paused:true})
let tl = gsap.timeline();

tl.to("#full", {
  right: "0",
  duration: 0.8,
});

tl.from("#full h4", {
  x: 100,
  duration: 1,
  stagger: 0.4,
  opacity: 0,
});

tl.from(
  "#full i",
  {
    opacity: 0,
  }
  // this is skip the time according timelie it shoud be paly after all anv tag. but , "-=2" play this befor 2 sec
  // ,  "-=2"
);

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});
cross.addEventListener("click", function () {
  tl.reverse();
});
