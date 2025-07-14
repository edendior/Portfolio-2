const tapPrompt = document.getElementById('tapPrompt');
const popup = document.getElementById('popupMessage');
const tapOverlay = document.getElementById('tapOverlay');

let isTapMode = false;

tapPrompt.addEventListener('click', () => {
    isTapMode = !isTapMode;
    document.body.classList.toggle('tap-cursor', isTapMode);
    tapOverlay.style.display = isTapMode ? 'block' : 'none';
});

tapOverlay.addEventListener('click', () => {
    if (!isTapMode) return;

    popup.style.display = 'block';

    setTimeout(() => {
        popup.style.display = 'none';
        isTapMode = false;
        document.body.classList.remove('tap-cursor');
        tapOverlay.style.display = 'none';
    }, 2000);
});

// pull down menu
const nav = document.querySelector('nav');
const menuPrompt = document.getElementById('menuPrompt');
const navLinks = nav.querySelectorAll('a');

menuPrompt.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuPrompt.style.display = isOpen ? 'none' : 'block';
});

function isMobile() {
  return window.innerWidth <= 768;
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');

    // Only show prompt again if we're on mobile
    if (isMobile()) {
      menuPrompt.style.display = 'block';
    }
  });
});
window.addEventListener('resize', () => {
  if (isMobile()) {
    if (!nav.classList.contains('open')) {
      menuPrompt.style.display = 'block';
    }
  } else {
    menuPrompt.style.display = 'none';
    nav.classList.remove('open');
  }
});



