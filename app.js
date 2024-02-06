// Function to update the Clock in TaskBar
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.querySelector('#clock span').textContent = `${hours}:${minutes}`;
}

updateClock();
setInterval(updateClock, 30000); // updates the clock immediately and every 30 seconds

// Selection box logic
let isSelecting = false;
let startX, startY, endX, endY;
const desktop = document.getElementById('desktop');
const selectionBox = document.getElementById('selection-box');

desktop.addEventListener('mousedown', function(e) {
  isSelecting = true;
  startX = e.clientX;
  startY = e.clientY;
  // Initialize the selection box styles
  selectionBox.style.left = `${startX}px`;
  selectionBox.style.top = `${startY}px`;
  selectionBox.style.width = '0';
  selectionBox.style.height = '0';
  selectionBox.style.visibility = 'visible';
});

desktop.addEventListener('mousemove', function(e) {
  if (isSelecting) {
    endX = e.clientX;
    endY = e.clientY;
    // Update the selection box styles
    selectionBox.style.width = `${Math.abs(endX - startX)}px`;
    selectionBox.style.height = `${Math.abs(endY - startY)}px`;
    selectionBox.style.left = `${Math.min(startX, endX)}px`;
    selectionBox.style.top = `${Math.min(startY, endY)}px`;
  }
});

desktop.addEventListener('mouseup', function() {
  if (isSelecting) {
    isSelecting = false;
    selectionBox.style.visibility = 'hidden';
  }
});

// Basic Hyperlink functions for some buttons

const telegramIcon = document.getElementById('telegram-icon');
telegramIcon.addEventListener('click', function() {
  window.open('https://telegram.org/', '_blank');
});

const twitterIcon = document.getElementById('twitter-icon');
twitterIcon.addEventListener('click', function() {
  window.open('https://twitter.com/finisusdoteth/', '_blank');
});

// Creating a Internet explorer Window lookalike for buy page

document.getElementById('buy-page').addEventListener('click', function() {
  document.getElementById('ie-window').style.display = 'block';
  document.getElementById('ie-content').src="https://jup.ag/";
});

document.getElementById('ie-close').addEventListener('click', function() {
  document.getElementById('ie-window').style.display = 'none';
});

