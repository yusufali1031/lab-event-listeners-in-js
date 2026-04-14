// Handle Button Clicks

function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

// Capture Keyboard Input

function displayKeyPress(event) {
  const keyDisplay = document.getElementById("keyPressDisplay");
  keyDisplay.textContent = `Key pressed: ${event.key}`;
}

// Process Text Input

function displayUserInput() {
  const input = document.getElementById("textInput").value;
  const display = document.getElementById("textInputDisplay");
  display.textContent = `You typed: ${input}`;
}

// Attach Event Listeners
function setupEventListeners() {
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  document.addEventListener('keydown', displayKeyPress)

  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}