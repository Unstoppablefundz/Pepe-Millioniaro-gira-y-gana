// This finds the wheel and the button in the page
const wheel = document.querySelector('.wheel');
const spinButton = document.getElementById('spin');
const result = document.getElementById('result');

let isSpinning = false;

// When someone clicks the button
spinButton.addEventListener('click', () => {
  
  if (isSpinning) return;           // prevent clicking many times

  isSpinning = true;
  result.textContent = "Spinning... 🎰";

  // Add the spinning class → starts animation
  wheel.classList.add('spinning');

  // After 4 seconds → stop and show result
  setTimeout(() => {
    wheel.classList.remove('spinning');
    result.textContent = "You won... something! 🎉 (random prize coming soon)";
    isSpinning = false;
  }, 4000);   // 4000 ms = 4 seconds

});
