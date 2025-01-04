// app.js
let compassRotation = 0;
let windIndex = 0;
const winds = ['东', '南', '西', '北'];

// Map to hold the colors of the directions
const directionColors = {
  1: "lightgray",
  2: "lightgray",
  3: "lightgray",
  4: "lightgray",
};

const directions = ["东/1", "北/4", "西/3", "南/2"]; // Order of directions
let currentOffset = 0; // Tracks rotation offset

// Function to update the compass display
function updateCompass() {
  const compass = document.querySelectorAll(".direction");
  compass.forEach((direction, index) => {
    // Determine the new direction based on rotation
    const newDirection = directions[(index + currentOffset) % 4];
    direction.textContent = newDirection;
    direction.style.backgroundColor = directionColors[newDirection];
  });
}

// Handle direction click to toggle color
document.querySelectorAll(".direction").forEach((direction) => {
  direction.addEventListener("click", () => {

  	//reset all color
  	

    const currentDirection = direction.textContent;
    // Toggle between lightgray and orange
    const newColor =
      directionColors[currentDirection] === "orange";
    directionColors[currentDirection] = newColor;
    direction.style.backgroundColor = newColor;
  });
});

// Rotate the compass counterclockwise
document.getElementById("rotate-button").addEventListener("click", () => {
  currentOffset = (currentOffset + 1) % 4; // Counterclockwise rotation
  updateCompass();
});

// Initialize the compass
updateCompass();






// Toggle active state on direction click
document.querySelectorAll('.direction').forEach(direction => {
  direction.addEventListener('click', () => {
    direction.classList.toggle('active');
  });
});

// Cycle round wind
document.getElementById('cycle-wind-button').addEventListener('click', () => {
  windIndex = (windIndex + 1) % winds.length;
  document.getElementById('current-wind').textContent = winds[windIndex];
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(() => {
    console.log('Service Worker Registered');
  });
}