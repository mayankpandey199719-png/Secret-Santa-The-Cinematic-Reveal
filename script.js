console.log("script.js loaded");

function showScene(id) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (!target) return;

  target.classList.add("active");

  if (id === "scene1") startCountdown();
}

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

function fakeReveal() {
  showScene("fake");
}

function realReveal() {
  showScene("reveal");
}
