import './styles.css'

const toggleButton = document.getElementById("toggle-mode");
const toggleNeon = document.getElementById("toggle-neon");
const toggleRain = document.getElementById("toggle-rain");
const toggleSnow = document.getElementById("toggle-snow")

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
  if (document.body.classList.contains("snow-mode")) {
    stopSnow();
    toggleSnow.textContent = "Snowy Mode";
    document.body.classList.remove("snow-mode");
  }

  document.body.classList.toggle("rain-mode");
  toggleRain.textContent = document.body.classList.contains("rain-mode") ? "Stop Rain" : "Rainy Mode";
  if (document.body.classList.contains("rain-mode")) {
    startRain();
    startClouds();
  } else {
    stopRain();
    stopClouds();
  }
});

toggleSnow.addEventListener("click", function() {
  if (document.body.classList.contains("rain-mode")) {
    stopRain();
    toggleRain.textContent = "Rainy Mode";
    document.body.classList.remove("rain-mode");
  }
  document.body.classList.toggle("snow-mode");
  toggleSnow.textContent = document.body.classList.contains("snow-mode") ? "Stop Snow" : "Snowy Mode";
  if (document.body.classList.contains("snow-mode")) {
    startSnow();
    startClouds();
  } else {
    stopSnow();
    stopClouds();
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

function startSnow() {
  stopSnow();
  for (let i = 0; i < 200; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.width = `${Math.random() * 5 + 2}px`;
    snowflake.style.height = snowflake.style.width;
    snowflake.style.animationDuration = `${Math.random() * 5 + 3}s`;
    snowflake.style.animationDelay = `${Math.random() * 3}s`;
    document.body.appendChild(snowflake);
  }
}

function stopSnow() {
  document.querySelectorAll(".snowflake").forEach(snowflake => snowflake.remove());
}

// Cloud Generation Function
function startClouds() {
  if (document.querySelectorAll(".cloud").length > 0) return;
  stopClouds();
  for (let i = 0; i < 10; i++) {
    const cloud = document.createElement("div");
    cloud.classList.add("cloud");

    cloud.style.width = `${Math.random() * 200 + 100}px`;
    cloud.style.height = `${Math.random() * 80 + 40}px`;
    cloud.style.top = `${Math.random() * 10}vh`;
    cloud.style.left = `${Math.random() * 100}vw`;
    cloud.style.display = "block";

    document.body.appendChild(cloud);
  }
}

// Function to Clear Clouds
function stopClouds() {
  document.querySelectorAll(".cloud").forEach(cloud => cloud.remove());
}