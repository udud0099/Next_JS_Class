let main = document.getElementById("main");

let cursor = document.getElementById("cursor");
let image = document.getElementById("image");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x - 20,
    y: dets.y - 20,
    duration: 0.5,
    ease: "bounce.out",
  });
});

image.addEventListener("mouseenter", function (dets) {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    x: dets.x - 20,
    y: dets.y - 20,
    duration: 0.5,
    ease: "bounce.out",
    scale: 3,
  });
});
image.addEventListener("mouseleave", function (dets) {
  cursor.innerHTML = "";

  gsap.to(cursor, {
    x: dets.x - 20,
    y: dets.y - 20,
    duration: 0.5,
    ease: "bounce.out",
    scale: 1,
  });
});
