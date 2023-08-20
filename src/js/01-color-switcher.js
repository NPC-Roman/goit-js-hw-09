const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

startButton.addEventListener('click', () => {
  intervalId = setInterval(changeBackgroundColor, 1000); // Зміна кольору кожну секунду
});

stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
});
