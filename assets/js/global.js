
function toggleMenu() {
  const menu = document.getElementById('menu-trigger');
  const offCanvas = document.getElementById('off-canvas');
  const offCanvasOverlay = document.getElementById('off-canvas-overlay');
  const classes = menu.classList;
  if (classes.contains('active')) {
    menu.classList.remove('active');
    offCanvas.classList.remove('active');
    offCanvasOverlay.classList.remove('active');
  } else {
    menu.classList.add('active');
    offCanvas.classList.add('active');
    offCanvasOverlay.classList.add('active');
  }
}
