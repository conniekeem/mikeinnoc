// PLACEHOLDER — replace with your own p5 project.
window.sketches = window.sketches || {};
window.sketches.sketch3 = function (p, frame) {
  p.setup = function () {
    p.createCanvas(frame.clientWidth, frame.clientHeight);
    p.background(28, 42, 64);
  };

  // drag the mouse to paint
  p.draw = function () {
    p.background(28, 42, 64, 12);
    if (p.mouseIsPressed) {
      p.noStroke();
      p.fill(233, 212, 138, 180);
      p.circle(p.mouseX, p.mouseY, 24);
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(frame.clientWidth, frame.clientHeight);
    p.background(28, 42, 64);
  };
};
