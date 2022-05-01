
const canvas = document.getElementById('main-canvas');
const [width, height] = [window.innerWidth, window.innerHeight];
const ctx = canvas.getContext('2d');
const CURSOR_X = 8;
const CURSOR_Y = 8;
let LINE_WIDTH = 3;
let LINE_STYLE = 'round';
let LINE_COLOR = '#f00';
const scale = 1;
ctx.canvas.width = width * scale;
ctx.canvas.height = height * scale;
let isMouseDown = false;

const eventHandlers = {
  onMouseDown: (e) => {
    ctx.beginPath();
    ctx.moveTo(e.pageX - CURSOR_X, e.pageY - CURSOR_Y);
    isMouseDown = true;
  },
  onMouseMove: (e) => {
    if (isMouseDown) {
      let events = e.getCoalescedEvents();
      ctx.lineWidth = LINE_WIDTH;
      ctx.lineCap = LINE_STYLE;
      ctx.strokeStyle = LINE_COLOR;
      for(let e of events) {
        ctx.lineTo(e.pageX - CURSOR_X, e.pageY - CURSOR_Y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.pageX - CURSOR_X, e.pageY - CURSOR_Y);
      }
    }
  },
  onMouseUp: () => isMouseDown = false
}

window.addEventListener('pointerdown', eventHandlers.onMouseDown);
window.addEventListener('pointermove', eventHandlers.onMouseMove);
window.addEventListener('pointerup', eventHandlers.onMouseUp);