document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     PAGE LOAD ANIMATION
  =============================== */
  const animatedSections = document.querySelectorAll("section");

  animatedSections.forEach(section => {
    section.classList.add("fade-up");
  });

  setTimeout(() => {
    animatedSections.forEach(section => {
      section.classList.add("show");
    });
  }, 200);

  /* ===============================
     PARTNER CARD IMAGE BLUR
  =============================== */
  const partnerCards = document.querySelectorAll(".partner-card");

  partnerCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("hovered");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("hovered");
    });
  });

  /* ===============================
     WHY PARTNER WITH US (RED HOVER)
  =============================== */
  const featureCards = document.querySelectorAll(".feature-card");

  featureCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("hovered");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("hovered");
    });
  });

  /* ===============================
     SUBMIT BUTTON INTERACTION
  =============================== */
  const submitBtn = document.querySelector(".submit-btn");

  if (submitBtn) {
    submitBtn.addEventListener("mouseenter", () => {
      submitBtn.classList.add("hovered");
    });

    submitBtn.addEventListener("mouseleave", () => {
      submitBtn.classList.remove("hovered");
    });

    submitBtn.addEventListener("mousedown", () => {
      submitBtn.classList.add("clicked");
    });

    submitBtn.addEventListener("mouseup", () => {
      submitBtn.classList.remove("clicked");
    });
  }

});
