import _ from './utils.js';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors1 = ['#EF3D59', '#E17A47', '#EFC958', '#4AB19D', '#344E5C'];

const colors2 = ['#468966', '#FFF0A5', '#FFB03B', '#B64926', '#8E2800'];

const colors3 = ['#949021', '#5EB5E0', '#E0DC47', '#E03143', '#942833'];

const colors4 = ['#D41E21', '#FF751A', '#FECB04', '#04A46A', '#3498DB'];

const colors5 = ['#468966', '#FFF0A5', '#FFB03B', '#B64926', '#8E2800'];

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Particle
function Particle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  const draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  };

  const update = () => {
    this.draw();
  };
}

// Particle generation
let array;
function init() {
  array = [];

  for (let i = 0; i < 400; i++) {
    // array.push(new Particle(x, y, radius, color))
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = 'italic 30px Calibri';
  ctx.fillText('Canvas Boilerplate', mouse.x, mouse.y);
  // array.forEach(item => {
  //  item.update()
  // })
}

init();
animate();
