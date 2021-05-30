const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function initCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function init() {
  initCanvasSize();

  const control = new Control({
    canvas,
    ctx,
  });
  control.init();
}

window.addEventListener("load", () => {
  init();
});
