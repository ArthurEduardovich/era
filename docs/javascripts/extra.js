document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.createElement('div');
    progressBar.className = 'md-progress-bar';
    document.body.appendChild(progressBar);
  
    window.addEventListener('scroll', function() {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.md-content img');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    images.forEach(img => observer.observe(img));
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('.highlight');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    codeBlocks.forEach(block => observer.observe(block));
  });
  