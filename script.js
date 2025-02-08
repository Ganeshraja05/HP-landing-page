// --- GSAP Hero Animations ---
gsap.registerPlugin(ScrollTrigger);
gsap.to(".hero-title", {
  opacity: 1,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out"
});
gsap.to(".hero-subtitle", {
  opacity: 1,
  duration: 1.5,
  delay: 1,
  ease: "power4.out"
});
gsap.to(".hero-buttons", {
  opacity: 1,
  duration: 1.5,
  delay: 1.5,
  ease: "power4.out"
});

// Animate Feature Cards on Scroll
gsap.utils.toArray(".feature-card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: { trigger: card, start: "top 80%" },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: index * 0.2
  });
});

// Animate Pricing Cards on Scroll
gsap.utils.toArray(".pricing-card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: { trigger: card, start: "top 80%" },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: index * 0.2
  });
});

// Animate Testimonials on Scroll
gsap.utils.toArray(".testimonial-card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: { trigger: card, start: "top 90%" },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: index * 0.3
  });
});

// Animate "Why Choose HP" Cards on Scroll
gsap.utils.toArray(".choose-card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: { trigger: card, start: "top 90%" },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: index * 0.3
  });
});

// Animate Newsletter and Contact Sections on Scroll
gsap.to(".newsletter, .contact", {
  scrollTrigger: { trigger: ".newsletter, .contact", start: "top 85%" },
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power4.out"
});

// --- Cursor Trail Effect ---
const trailer = document.createElement("div");
trailer.style.cssText = `
  position: fixed;
  width: 20px;
  height: 20px;
  background: rgba(0, 255, 136, 0.2);
  border-radius: 50%;
  pointer-events: none;
  mix-blend-mode: screen;
  z-index: 9999;
  transition: transform 0.3s ease;
`;
document.body.appendChild(trailer);
document.addEventListener("mousemove", (e) => {
  trailer.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});

// --- Hamburger Menu Toggle (Mobile) ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links ul');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
}

// --- Back-to-Top Button ---
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- Testimonials Carousel Functionality ---
const carousel = document.getElementById('testimonialCarousel');
if (carousel) {
  const items = carousel.querySelectorAll('.carousel-item');
  const indicators = carousel.querySelectorAll('.carousel-indicators li');
  const prevControl = carousel.querySelector('.carousel-control-prev');
  const nextControl = carousel.querySelector('.carousel-control-next');
  let currentSlide = 0;
  const totalSlides = items.length;
  let carouselInterval = setInterval(nextSlide, 5000);

  function showSlide(index) {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    let nextIndex = (currentSlide + 1) % totalSlides;
    showSlide(nextIndex);
  }

  function prevSlide() {
    let prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(prevIndex);
  }

  nextControl.addEventListener('click', () => {
    clearInterval(carouselInterval);
    nextSlide();
    carouselInterval = setInterval(nextSlide, 5000);
  });
  prevControl.addEventListener('click', () => {
    clearInterval(carouselInterval);
    prevSlide();
    carouselInterval = setInterval(nextSlide, 5000);
  });
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      clearInterval(carouselInterval);
      showSlide(index);
      carouselInterval = setInterval(nextSlide, 5000);
    });
  });
}
