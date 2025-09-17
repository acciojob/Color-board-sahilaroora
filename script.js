//your JS code here. If required.
const container = document.getElementById('board');
const SQUARES = 800;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseenter', () => {
    setColor(square);
    setTimeout(() => removeColor(square), 1000); // remove after 1s
  });

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
}

function getRandomColor() {
  const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
  return colors[Math.floor(Math.random() * colors.length)];
}
