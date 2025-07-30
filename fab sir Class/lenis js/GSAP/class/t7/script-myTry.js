function checkk() {
  let round = 100;
  window.addEventListener("wheel", function (dets) {
    // console.log("f", dets.deltaY);
    if (dets.deltaY === round) {
      console.log("same");
      return;
    } else {
      round = dets.deltaY;
      console.log("diff", round);
      actiononWheel(round < 0 ? -180 : 0);
      actiononWheelmar(round < 0 ? "translateX(100%)" : "translateX(-100%)");
    }
  });
  // console.log("test");
}

checkk();

function actiononWheel(e) {
  gsap.to("#page2 #move img", {
    rotate: e,
    duration: 1,
  });
}

function actiononWheelmar(e = "translateX(100%)") {
  gsap.from(".marque", {
    transform: e,
    duration: 2,
    repeat: -1,
    ease: "none",
  });
}
actiononWheelmar();
