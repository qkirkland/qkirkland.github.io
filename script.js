// Project card expand/collapse
function toggleCard(card) {
    card.classList.toggle('active');
  }
  
  // Dark mode toggle
  const toggleBtn = document.getElementById('toggle-dark');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
  });
  // Load theme preference
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
  }
  
  // Matrix background animation
  const canvas = document.getElementById('matrix-bg');
  const ctx = canvas.getContext('2d');
  let w = window.innerWidth;
  let h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
  const cols = Math.floor(w / 20) + 1;
  const ypos = Array(cols).fill(0);
  
  function matrix() {
    ctx.fillStyle = '#10182022';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#00ffe7';
    ctx.font = '18pt monospace';
    ypos.forEach((y, ind) => {
      const text = String.fromCharCode(0x30A0 + Math.random() * 96);
      ctx.fillText(text, ind * 20, y);
      if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
      else ypos[ind] = y + 20;
    });
  }
  setInterval(matrix, 60);
  window.addEventListener('resize', () => {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  });