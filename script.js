const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spinBtn');
const result = document.getElementById('result');
const gameSection = document.getElementById('game-section');
const formSection = document.getElementById('form-section');
const prizeMessage = document.getElementById('prizeMessage');
const hiddenPrize = document.getElementById('hiddenPrize');

let isSpinning = false;

// Generate random prize between $20,900 and $50,000
function getRandomPrize() {
  const min = 20900;
  const max = 50000;
  const amount = Math.floor(Math.random() * (max - min + 1)) + min;
  return amount.toLocaleString('en-US'); // e.g. 20900 → "20,900"
}

spinBtn.addEventListener('click', () => {
  if (isSpinning) return;

  isSpinning = true;
  spinBtn.disabled = true;
  result.textContent = "Girando...";

  wheel.classList.add('spinning');

  setTimeout(() => {
    wheel.classList.remove('spinning');

    // Generate random prize for this spin
    const prizeAmount = getRandomPrize();
    const message = `¡FELICIDADES! GANASTE \[ {prizeAmount} 🎉<br>Redirigiendo al formulario...`;

    result.innerHTML = message;

    // Update form with the random prize
    if (prizeMessage) {
      prizeMessage.innerHTML = `¡GANASTE \]{prizeAmount}!<br>Completa los 3 campos para reclamar tu premio.`;
    }
    if (hiddenPrize) {
      hiddenPrize.value = `Ganaste $${prizeAmount}`;
    }

    setTimeout(() => {
      gameSection.style.display = 'none';
      formSection.style.display = 'block';
      isSpinning = false;
      spinBtn.disabled = false;
    }, 1800);

  }, 4000); // spin duration
});
