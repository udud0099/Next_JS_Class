let path = "M 10 70 Q 250 70 480 70";
let finalPath = "M 10 70 Q 250 70 480 70";

let string = document.getElementById("string");

// function(dets) - it give mouse event - it tell mouse movement move etc
string.addEventListener("mousemove", function (dets) {
  // console.log("ok", dets.x);
  path = `M 10 70 Q ${dets.x} ${dets.y} 480 70`;
  gsap.to("svg path", {
    attr: {
      d: path,
    },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function (dets) {
  gsap.to("svg path", {
    attr: {
      d: finalPath,
    },
    duration: 1.1,
    ease: "elastic.out(2,0.3)",
  });
});
