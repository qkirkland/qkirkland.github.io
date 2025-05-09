// Make project cards open their GitHub repo on click
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function(e) {
      // Prevent following the link if clicking on a child <a>
      if (e.target.tagName.toLowerCase() === 'a') return;
      const url = card.getAttribute('data-link');
      if (url) window.open(url, '_blank');
    });
    // Optional: open on Enter/Space key for accessibility
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        const url = card.getAttribute('data-link');
        if (url) window.open(url, '_blank');
      }
    });
  });
  
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