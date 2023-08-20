/*
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}*/
import Notiflix from 'notiflix';
const Notiflix = require('notiflix');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

document.querySelector('.form').addEventListener('submit', function (e) {
  e.preventDefault();

  const delayInput = parseInt(e.target.elements.delay.value);
  const stepInput = parseInt(e.target.elements.step.value);
  const amountInput = parseInt(e.target.elements.amount.value);

  for (let i = 0; i < amountInput; i++) {
    const currentDelay = delayInput + i * stepInput;
    createPromise(i + 1, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.Success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.Failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});
