function breakText() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;

  let splittext = h1Text.split("");
  let hafVal = splittext.length / 2;

  let clutter = "";
  splittext.forEach(function (e, idx) {
    clutter += `<span class="${idx < hafVal ? "a" : "b"}">${e}</span>`;
  });

  h1.innerHTML = clutter;
  console.log(clutter);
}

breakText();

gsap.from("h1 .a", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  // stagger:-.3
  stagger: 0.3,
});
gsap.from("h1 .b", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  // stagger:-.3
  stagger: -0.3,
});
