console.log("script.js loaded");

// Navigation
function showScene(id) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (!target) return;

  target.classList.add("active");

  if (id === "scene1") startCountdown();
  if (id === "scene2") typeWriter("scene2-text", "My name begins with May, but I stay all year...");
  if (id === "scene3") typeWriter("scene3-text", "A storyteller by tradition, carried through generations.");
}

// Countdown Scene 1
function startCountdown() {
  let count = 5;
  const el = document.getElementById("countdown");
  if (!el) return;

  el.textContent = count;
  const timer = setInterval(() => {
    count--;
    el.textContent = count;
    if (count <= 0) clearInterval(timer);
  }, 1000);
}

// Typewriter effect
function typeWriter(elementId, text, delay = 100) {
  const el = document.getElementById(elementId);
  if (!el) return;

  el.textContent = "";
  let i = 0;
  const timer = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(timer);
  }, delay);
}

// Fake reveal
function fakeReveal() {
  showScene("fake");
}

// Real reveal with music
function realReveal() {
  showScene("reveal");

  const music = document.getElementById("music");
  if (!music) return;

  music.volume = 0;
  music.play();

  let v = 0;
  const fade = setInterval(() => {
    v += 0.05;
    music.volume = Math.min(v, 1);
    if (v >= 1) clearInterval(fade);
  }, 200);
}
