import './styles.css'

const toggleButton = document.getElementById("toggle-mode");
const toggleNeon = document.getElementById("toggle-neon");
const toggleRain = document.getElementById("toggle-rain");

toggleButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Day Mode";
    toggleNeon.disabled = false;
  } else {
    toggleButton.textContent = "Night Mode";
    toggleNeon.disabled = true;
  }
});

toggleNeon.addEventListener("click", function () {
  document.body.classList.toggle("dark-neon-mode");
  toggleNeon.textContent = document.body.classList.contains("dark-neon-mode") ? "Sleepy Mode" : "Neon Mode";
})

if (document.body.classList.contains("dark-mode")) {
  toggleButton.textContent = "Day Mode";
  toggleNeon.disabled = false;
} else {
  toggleButton.textContent = "Night Mode";
  toggleNeon.disabled = true;
}

toggleRain.addEventListener("click", function() {
  document.body.classList.toggle("rain-mode");
  toggleRain.textContent = document.body.classList.contains("rain-mode") ? "Stop Rain" : "Rainy Mode";
  if (document.body.classList.contains("rain-mode")) {
    startRain();
  } else {
    stopRain();
  }
});

function startRain() {
  stopRain();
  for (let i = 0; i < 250; i++) {
    const drop = document.createElement("div");
    drop.classList.add("drop");
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.animationDuration = `${Math.random() * 0.8 + 0.5}s`;
    document.body.appendChild(drop);
  }
}

function stopRain() {
  document.querySelectorAll(".drop").forEach(drop => drop.remove());
}