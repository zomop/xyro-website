// Navbar Blur Effect

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.5)";
  } else {
    navbar.style.background = "transparent";
  }

});


// Typing Effect

const text = "Exploring Future Technology";

const typingText = document.querySelector(".hero-content h1");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let index = 0;

function typeText() {

  if (index < text.length) {

    typingText.textContent += text.charAt(index);

    index++;

    setTimeout(typeText, 80);

  }

}

if (prefersReducedMotion) {
  typingText.textContent = text;
} else {
  typingText.textContent = "";
  typeText();
}


// Reveal Animation

const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {

  const triggerBottom = window.innerHeight * 0.8;

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {

      card.style.opacity = "1";

      card.style.transform = "translateY(0)";

    }

  });

});


// Initial Hidden State

if (!prefersReducedMotion) {
  cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(50px)";

    card.style.transition = "0.6s";

  });
}
