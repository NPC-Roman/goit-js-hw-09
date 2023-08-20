/*
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}*/

const Notiflix = require('notiflix'); // CommonJS import
import Notiflix from 'notiflix'; // ES6 import

document.addEventListener('DOMContentLoaded', () => {
  // Останній код з попередньої відповіді

  form.addEventListener('submit', async event => {
    event.preventDefault();

    const delayInput = form.querySelector('[name="delay"]');
    const stepInput = form.querySelector('[name="step"]');
    const amountInput = form.querySelector('[name="amount"]');

    const delay = parseInt(delayInput.value);
    const step = parseInt(stepInput.value);
    const amount = parseInt(amountInput.value);

    for (let i = 1; i <= amount; i++) {
      createPromise(i, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });

      delay += step;
    }
  });

  // Останній код з попередньої відповіді
});
