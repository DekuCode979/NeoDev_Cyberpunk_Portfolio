// Fade-in global
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Scroll reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal, .project-card");
  for (let r of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = r.getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      r.classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Animación de botones en el menú
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    link.style.boxShadow = "0 0 15px rgba(0,255,255,0.7)";
    setTimeout(() => {
      link.style.boxShadow = "none";
    }, 500);
  });
});

// Animación de barras de Skills (0/5)
document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill-level");
  skills.forEach(skill => {
    const level = parseFloat(skill.getAttribute("data-level")); // valor 0-5
    const percentage = (level / 5) * 100; // convertir a %
    skill.style.width = "0%"; // inicia en 0
    setTimeout(() => {
      skill.style.transition = "width 1.5s ease";
      skill.style.width = percentage + "%";
    }, 300);
  });
});

// Modal Contact con beep retro y slide-up
function openContactModal() {
  const modal = document.getElementById("contact-modal");
  modal.style.display = "flex";
  modal.querySelector(".modal-content").classList.add("slide-up");
  const beep = document.getElementById("beep-sound");
  if (beep) {
    beep.currentTime = 0;
    beep.play();
  }
}

function closeContactModal() {
  const modal = document.getElementById("contact-modal");
  modal.style.display = "none";
  modal.querySelector(".modal-content").classList.remove("slide-up");
}

function submitContact() {
  alert("Gracias por tu mensaje. Pronto me pondré en contacto contigo.");
  closeContactModal();
}

// Modal Projects con beep retro
function openModal(message) {
  document.getElementById("modal-message").innerText = message;
  document.getElementById("project-modal").style.display = "flex";
  const beep = document.getElementById("beep-sound");
  if (beep) {
    beep.currentTime = 0;
    beep.play();
  }
}

function closeModal() {
  document.getElementById("project-modal").style.display = "none";
}
