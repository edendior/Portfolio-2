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

