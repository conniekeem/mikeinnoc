// PLACEHOLDER — replace with your own p5 project.
window.sketches = window.sketches || {};
window.sketches.sketch2 = function (p, frame) {
  p.setup = function () {
    p.createCanvas(frame.clientWidth, frame.clientHeight);
    p.noFill();
  };

  p.draw = function () {
    p.background(246, 241, 227);
    p.stroke(28, 42, 64);
    p.translate(p.width / 2, p.height / 2);
    for (let i = 0; i < 14; i++) {
      const r = 20 + i * 22 + 8 * p.sin(p.frameCount * 0.03 + i * 0.5);
      p.strokeWeight(1 + i * 0.1);
      p.circle(0, 0, r * 2);
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(frame.clientWidth, frame.clientHeight);
  };
};
