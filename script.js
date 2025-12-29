let currentScene = 0;

function goToScene(scene) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  currentScene = scene;

  const ids = ["start", "scene1", "scene2", "scene3"];
  document.getElementById(ids[scene]).classList.add("active");

  if (scene === 1) startCountdown();
}

function startCountdown() {
  let count = 5;
  const el = document.getElementById("countdown");
  el.textContent = count;

  const timer = setInterval(() => {
    count--;
    el.textContent = count;
    if (count === 0) clearInterval(timer);
  }, 1000);
}

function fakeReveal() {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("fake").classList.add("active");
}

function realReveal() {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("reveal").classList.add("active");

  const music = document.getElementById("music");
  music.play();
}
