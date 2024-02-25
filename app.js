/*
* Selection box logic
*/
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
/******************************/
/*
* Basic functionality for some Desktop Icons
*/
const telegramIcon = document.getElementById('telegram-icon');
telegramIcon.addEventListener('click', function() {
  window.open('https://telegram.org/', '_blank');
});
const twitterIcon = document.getElementById('twitter-icon');
twitterIcon.addEventListener('click', function() {
  window.open('https://twitter.com/finisusdoteth/', '_blank');
});
const networkIcon = document.getElementById('network-icon');
const audio = new Audio('./metadata/dialup.mp3');
networkIcon.addEventListener('click', () => {
  if (!audio.paused) {
    audio.currentTime = 0;
  }
  audio.volume = 1.0;
  audio.play();
});
/******************************/
/*
* Creating a Internet explorer Window lookalike for buy page
*/
// 
document.getElementById('buy-page').addEventListener('click', function() {
  document.getElementById('ie-window').style.display = 'block';
  document.getElementById('ie-content').src="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R&fixed=in";
});

document.getElementById('ie-close').addEventListener('click', function() {
  document.getElementById('ie-window').style.display = 'none';
});
/******************************/
/*
Internet Explorer Toolbar
*/
document.addEventListener('DOMContentLoaded', (event) => {
  const toolbarHoverImages = {
    'ie-home': './metadata/toolbar/color-icons/home.png',
    'ie-favorites': './metadata/toolbar/color-icons/favorites.png',
    'ie-print': './metadata/toolbar/color-icons/print.png',
  };
  function setImageSource(buttonId, src) {
    const button = document.getElementById(buttonId);
    const img = button.querySelector('img');
    img.src = src;
  }
  Object.keys(toolbarHoverImages).forEach(buttonId => {
    const button = document.getElementById(buttonId);
    const img = button.querySelector('img');
    const originalSrc = img.src;

    button.addEventListener('mouseenter', () => setImageSource(buttonId, toolbarHoverImages[buttonId]));
    button.addEventListener('mouseleave', () => setImageSource(buttonId, originalSrc));
  });
});
/******************************/
/*
Info Page    
*/
document.getElementById('info-page').addEventListener('click', function() {
  document.getElementById('info-window').style.display = 'block';
});
document.getElementById('info-close').addEventListener('click', function() {
  document.getElementById('info-window').style.display = 'none';
});
/******************************/
/*
Recycle Bin    
*/
document.getElementById('bin-page').addEventListener('click', function() {
  document.getElementById('bin-window').style.display = 'block';
});
document.getElementById('bin-close').addEventListener('click', function() {
  document.getElementById('bin-window').style.display = 'none';
});
/******************************/
/*
* Minesweeper
*/
document.getElementById('minesweeper-icon').addEventListener('click', function() {
  document.getElementById('minesweeper-window').style.display = 'block';
});
document.getElementById('minesweeper-close').addEventListener('click', function() {
  document.getElementById('minesweeper-window').style.display = 'none';
});
document.getElementById('minesweeper-menu-game').addEventListener('click', function() {
  const dropdown = document.getElementById('minesweeper-menu-game-dropdown');
  dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});
// Click outside to close the dropdown
window.addEventListener('click', function(event) {
  if (!event.target.matches('#minesweeper-menu-game')) {
    const dropdown = document.getElementById('minesweeper-menu-game-dropdown');
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
    }
  }
});

// Connect dropdown menu buttons with the game's insetting buttons
document.querySelectorAll('.game-setting').forEach(button => {
  button.addEventListener('click', function() {
    const setting =  this.getAttribute('data-setting');
    const iframeWindow = document.querySelector('#minesweeper-wrapper iframe').contentWindow;
    iframeWindow.postMessage({ setting: setting }, '*');
  });
});

// Add an event listener for the dropdown "New" button
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.game-setting[data-setting="new"]').addEventListener('click', function() {
    // Post a message to the Minesweeper iframe
    const iframe = document.querySelector('#minesweeper-wrapper iframe');
    if (iframe) {
      iframe.contentWindow.postMessage({ action: 'startNewGame' }, '*'); // Adjust the target origin as necessary
    }
  });
});


/******************************/
/*
Task Bar
*/
// Sound-Toggle
document.addEventListener('DOMContentLoaded', () => {
  const soundToggle = document.getElementById('sound-toggle');
  const soundToggleImg = document.getElementById('sound-toggle-img');
  const mutedIconPath = './metadata/win98icons/loudspeaker_muted.ico';
  const unmutedIconPath = './metadata/win98icons/loudspeaker_rays.ico';
  let isMuted = false;
  soundToggle.addEventListener('click', () => {
    isMuted = !isMuted;
    audio.muted = isMuted;
    soundToggleImg.src = isMuted ? mutedIconPath : unmutedIconPath;
  });
});
// Function to update the Clock in TaskBar
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.querySelector('#clock span').textContent = `${hours}:${minutes}`;
}
updateClock();
setInterval(updateClock, 30000); // updates the clock immediately and every 30 seconds
/******************************/
