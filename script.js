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
  result.textContent = "Spinning... 🎰 Hold on!";

  // Add spinning class
  wheel.classList.add('spinning');

  // Spin for 4 seconds → then reveal prize & go to form
  setTimeout(() => {
    wheel.classList.remove('spinning');
    
    // Show prize message
    result.innerHTML = "CONGRATULATIONS YOU WON 🎁 $30,500!<br>Redirecting to claim form...";

    // Wait 2 more seconds → then show form
    setTimeout(() => {
      gameSection.style.display = 'none';
      formSection.style.display = 'block';
      isSpinning = false;
      spinBtn.disabled = false; // in case someone wants to go back
    }, 2000);

  }, 4000); // spin duration 4 seconds
});
