//auto typing feature
new Typed(".typing", {
  strings: ["Connie Kim!", "an Artist!", "a Designer!", "a Coder!"],
  typeSpeed: 120,
  backSpeed: 70,
  backDelay: 1400,
  loop: true
});

// subtle parallax on the hero background + header style past the hero
const parallax = document.querySelector(".parallax");
const topbar = document.querySelector(".topbar");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", function () {
  parallax.style.transform = "translateY(" + window.scrollY * 0.15 + "px)";
  topbar.classList.toggle("scrolled", window.scrollY > hero.offsetHeight - 80);
});

/* ------------------------------------------------------------------------- */
// p5 sketches: each starts the first time its section scrolls into view
// and pauses while off screen so only one runs at a time

const running = new Map();

const observer = new IntersectionObserver(function (entries) {
  for (const entry of entries) {
    const frame = entry.target;
    let instance = running.get(frame);

    if (entry.isIntersecting) {
      if (!instance) {
        const sketch = window.sketches[frame.dataset.sketch];
        if (!sketch) continue;
        instance = new p5(function (p) { sketch(p, frame); }, frame);
        running.set(frame, instance);
      } else {
        instance.loop();
      }
    } else if (instance) {
      instance.noLoop();
    }
  }
}, { threshold: 0.3 });

document.querySelectorAll(".sketchFrame").forEach(function (frame) {
  observer.observe(frame);
});
