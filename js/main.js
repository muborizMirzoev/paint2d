const color = document.querySelector('input[type=color]');
const clearBtn = document.querySelector('.clear');
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

context.strokeStyle = '#000000';
context.lineCap = 'round';
context.lineJoin = 'round';
context.lineWidth = 12;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function renderLine(e) {
  if (!isDrawing) return

  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function changeColor() {
  context.strokeStyle = color.value
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height)
}

canvas.addEventListener('mousemove', renderLine)
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
color.addEventListener('change', changeColor);
clearBtn.addEventListener('click', clearCanvas);

console.log(canvas, context);
