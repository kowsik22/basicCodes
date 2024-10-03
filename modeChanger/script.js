let modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("change", toggleMode);

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}
