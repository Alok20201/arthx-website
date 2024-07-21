// Select elements for parallax and animations
const listBg = document.querySelectorAll('.bg');
const listTab = document.querySelectorAll('.tab');
const titleBanner = document.querySelector('.banner h1');

// Scroll event listener for custom animations and parallax effect
window.addEventListener("scroll", () => {
    let top = window.scrollY;

    // Parallax effect for background elements
    listBg.forEach((bg, index) => {
        if (index !== 0 && index !== 8) {
            bg.style.transform = `translateY(${top * index / 2}px)`;
        } else if (index === 0) {
            bg.style.transform = `translateY(${top / 3}px)`;
        }
    });

    // Title banner animation based on scroll
    titleBanner.style.transform = `translateY(${top * 2}px)`; // Adjust multiplier as needed

    // Toggle 'active' class on tabs based on scroll position
    listTab.forEach(tab => {
        if (tab.offsetTop - top < 550) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
});

// Initialize ScrollReveal with common options
const sr = ScrollReveal({
    duration: window.innerWidth < 700 ? 800 : 1000,
    reset: true,
    interval: 0,
    viewFactor: window.innerWidth < 700 ? 0.2 : 0.1
});

// Configure individual elements for ScrollReveal
sr.reveal('.logo-img', { origin: 'top', distance: '50px', delay: 100 });
sr.reveal('.logo', { origin: 'top', distance: '50px', delay: 200 });
sr.reveal('.navigation a', { origin: 'top', distance: '50px', delay: 300 });
sr.reveal('.banner', { origin: 'bottom', distance: '50px', delay: 100 });
sr.reveal('.sec', { origin: 'bottom', distance: '50px', delay: 200 });
sr.reveal('.arthx-all-text', { origin: 'bottom', distance: '50px', delay: 300 });
sr.reveal('.team-box', { origin: 'bottom', distance: '50px', delay: 400 });
sr.reveal('.swiper-pagination', { origin: 'bottom', distance: '50px', delay: 500 });
sr.reveal('.marquee', { origin: 'bottom', distance: '50px', delay: 600 });
sr.reveal('.col', { origin: 'bottom', distance: '50px', delay: 700 });
sr.reveal('#footer', { origin: 'bottom', distance: '50px', delay: 800 });

// Event listener for scroll to trigger reveal animations
window.addEventListener('scroll', () => {
    sr.reveal('.reveal-on-scroll', {
        origin: 'bottom',
        distance: '50px',
        delay: 200
    });
});

// Select the form and handle its submission
const form = document.getElementById('email-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve the entered email
    const email = form.querySelector('input[type="email"]').value;
    console.log('Submitted email:', email);

    // Add further processing logic here, such as validation or submission handling
});
