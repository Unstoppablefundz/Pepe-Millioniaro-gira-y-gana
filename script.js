const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spinBtn');
const result = document.getElementById('result');
const gameSection = document.getElementById('game-section');
const formSection = document.getElementById('form-section');

let isSpinning = false;

spinBtn.addEventListener('click', () => {
  if (isSpinning) return;

  isSpinning = true;
  spinBtn.disabled = true;
  result.textContent = "Girando...";

  wheel.classList.add('spinning');

  setTimeout(() => {
    wheel.classList.remove('spinning');
    
    result.innerHTML = "¡Felicidades!<br>¡Ganaste $30,500!<br>Redirigiendo al formulario...";

    setTimeout(() => {
      gameSection.style.display = 'none';
      formSection.style.display = 'block';
      isSpinning = false;
      spinBtn.disabled = false;
    }, 1800);

  }, 4000);
});
