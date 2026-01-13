// Simple horizontal scroll for the sub-nav if needed
document.addEventListener('DOMContentLoaded', () => {
  const scrollContainer = document.querySelector('.subnav-scroll');
  const btnLeft = document.querySelector('.scroll-btn.left');
  const btnRight = document.querySelector('.scroll-btn.right');

  if(scrollContainer && btnLeft && btnRight) {
    btnLeft.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });

    btnRight.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });
  }
});



document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     INTERSECTION OBSERVER
  =============================== */
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // performance boost
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -60px 0px"
    }
  );

  revealElements.forEach(el => observer.observe(el));

  /* ===============================
     STAGGER LOGIC
  =============================== */
  document.querySelectorAll(".reveal-stagger").forEach((el, index) => {
    el.style.setProperty("--delay", `${index * 120}ms`);
  });

  /* ===============================
     PARALLAX EFFECT (OPTIONAL)
  =============================== */
  const parallaxItems = document.querySelectorAll(".parallax");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    parallaxItems.forEach(item => {
      const speed = item.dataset.speed || 0.2;
      item.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });

});


