const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let interval = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

startButton.addEventListener('click', () => {
  if (interval !== null) {
    startButton.disabled = true;
    interval = setInterval(changeBackgroundColor, 700);
  }
});

stopButton.addEventListener('click', () => {
  clearInterval(interval);
  interval = 0;
  startButton.disabled = false;
});
