document.addEventListener('DOMContentLoaded', () => {

  /* ===============================
     SCROLL REVEAL ANIMATION
  ================================ */
  const revealElements = document.querySelectorAll(
    '.hero-content, .hero-visual, .stat-item, .story-image-container, .story-block, .info-card, .mission-card, .value-card, .footer-brand, .footer-col'
  );

  revealElements.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${index * 0.08}s`;
          entry.target.classList.add('show');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach(el => revealObserver.observe(el));

  /* ===============================
     STATS COUNT-UP ANIMATION
  ================================ */
  const counters = document.querySelectorAll('.stat-number');

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const text = counter.innerText;
          const target = parseFloat(text.replace(/[^0-9.]/g, ''));
          const hasPlus = text.includes('+');
          const hasPercent = text.includes('%');

          let start = 0;
          const duration = 1500;
          const startTime = performance.now();

          function update(time) {
            const progress = Math.min((time - startTime) / duration, 1);
            const value = Math.floor(progress * target);

            counter.innerText =
              value +
              (hasPercent ? '%' : '') +
              (hasPlus ? '+' : '');

            if (progress < 1) requestAnimationFrame(update);
          }

          requestAnimationFrame(update);
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(counter => counterObserver.observe(counter));

});
