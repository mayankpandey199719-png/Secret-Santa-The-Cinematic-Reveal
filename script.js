function showScene(sceneId) {
  document.querySelectorAll(".screen").forEach(scene => {
    scene.classList.remove("active");
  });

  document.getElementById(sceneId).classList.add("active");

  if (sceneId === "scene1") {
    startCountdown();
  }
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
  showScene("fake");
}

function realReveal() {
  showScene("reveal");
  document.getElementById("music").play();
}
