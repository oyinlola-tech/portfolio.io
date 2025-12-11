// tiny "surprise" animation for fun
document.querySelectorAll('.card').forEach((c,i) => {
  c.style.transitionDelay = (i%6)*25 + 'ms';
});

// keyboard shortcut: press "t" to jump to topics
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 't') {
    location.href = '#topics';
  }
});