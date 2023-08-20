const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

startButton.addEventListener('click', () => {
  if (!intervalId) {
    startButton.disabled = true;
    intervalId = setInterval(changeBackgroundColor, 666);
  }
});

stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = 0;
  startButton.disabled = false;
});
