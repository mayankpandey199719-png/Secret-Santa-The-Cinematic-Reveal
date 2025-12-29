function startClues() {
  document.querySelector(".intro").style.display = "none";
  document.getElementById("clues").classList.remove("hidden");
}

function finalReveal() {
  document.getElementById("clues").style.display = "none";
  document.getElementById("reveal").classList.remove("hidden");
}
