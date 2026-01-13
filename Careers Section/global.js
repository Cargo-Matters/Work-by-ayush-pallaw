/* =====================================
   INTERSECTION OBSERVER (BEST PRACTICE)
===================================== */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 150);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

/* =====================================
   WHY JOIN SECTION ANIMATION
===================================== */

document.querySelectorAll(".benefit-card").forEach(card => {
  card.classList.add("animate");
  observer.observe(card);
});

/* =====================================
   CURRENT OPENINGS – 5 CARDS (ONE BY ONE)
===================================== */

document.querySelectorAll(".job-card").forEach((card, i) => {
  card.classList.add("animate");
  observer.observe(card);
});

/* =====================================
   APPLY FORM ANIMATION
===================================== */

const applySection = document.querySelector(".apply-section");
applySection.classList.add("animate");
observer.observe(applySection);

/* =====================================
   SUBMIT BUTTON FEEDBACK
===================================== */

const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", () => {
  submitBtn.style.backgroundColor = "#000";
  submitBtn.style.color = "#fff";
});

/* =====================================
   CONTACT US HOVER (JS CONTROLLED)
===================================== */

document.querySelectorAll(".nav-item").forEach(item => {
  if (item.innerText.includes("Contact")) {
    item.addEventListener("mouseenter", () => {
      item.style.color = "#ffffff";
    });
    item.addEventListener("mouseleave", () => {
      item.style.color = "rgba(255,255,255,0.85)";
    });
  }
});
