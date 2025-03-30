const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Particle object
function createParticle() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    speedY: Math.random() * 0.5 + 0.2,
    opacity: Math.random() * 0.3 + 0.2
  };
}

// Start with 100 particle
let particleCount = 300;

// If the screen width is under 768px (mobile/tablet)
if (window.innerWidth < 768) {
  particleCount = 100; // less particles
}

for (let i = 0; i < particleCount; i++) {
  particles.push(createParticle());
}


function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";

  particles.forEach(p => {
    ctx.beginPath();
    ctx.globalAlpha = p.opacity;
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();

    p.y += p.speedY;
    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawParticles);
}


function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
  
    let neko = window.nekoPosition ? window.nekoPosition() : null;
  
    particles.forEach(p => {
      // Push the particle if it is close to the cat
      if (neko) {
        const dx = p.x - neko.x;
        const dy = p.y - neko.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
  
        if (dist < 80) {
          p.x += dx / dist * 1.5; // pushes away
          p.y += dy / dist * 1.5;
        }
      }
  
      ctx.beginPath();
      ctx.globalAlpha = p.opacity;
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
  
      p.y += p.speedY;
      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }
    });
  
    requestAnimationFrame(drawParticles);
  }
  

drawParticles();

