//your JS code here. If required.
function updateClock() {
  const timerElement = document.getElementById('timer');
  const now = new Date();
  const formattedTime = now.toLocaleString(); // Shows both date and time
  timerElement.textContent = formattedTime;
}

// Initial call
updateClock();

// Update every second
setInterval(updateClock, 1000);
