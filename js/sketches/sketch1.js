// PLACEHOLDER — replace with your own p5 project.
// Instance mode: use p.createCanvas, p.background, etc. `frame` is the box it sits in.
window.sketches = window.sketches || {};
window.sketches.sketch1 = function (p, frame) {
  let stars = [];

  p.setup = function () {
    p.createCanvas(frame.clientWidth, frame.clientHeight);
    for (let i = 0; i < 120; i++) {
      stars.push({ x: p.random(p.width), y: p.random(p.height), r: p.random(1, 4), t: p.random(p.TWO_PI) });
    }
  };

  p.draw = function () {
    p.background(28, 42, 64);
    p.noStroke();
    for (const s of stars) {
      s.t += 0.03;
      p.fill(246, 241, 227, 120 + 120 * p.sin(s.t));
      p.circle(s.x, s.y, s.r);
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(frame.clientWidth, frame.clientHeight);
  };
};
