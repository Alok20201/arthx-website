document.addEventListener("DOMContentLoaded", function() {
    // Selectors for video slider navigation
    const videoBtns = document.querySelectorAll(".nav-btn");
    const videoSlides = document.querySelectorAll(".video-slide");
    const contentSlides = document.querySelectorAll(".content");

    const sliderNav = function(manual) {
        videoBtns.forEach((btn) => {
            btn.classList.remove("active");
        });

        videoSlides.forEach((slide) => {
            slide.classList.remove("active");
        });

        contentSlides.forEach((content) => {
            content.classList.remove("active");
        });

        videoBtns[manual].classList.add("active");
        videoSlides[manual].classList.add("active");
        contentSlides[manual].classList.add("active");
    };

    videoBtns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sliderNav(i);
        });
    });

    // Selectors for slider items and thumbnails
    let items = document.querySelectorAll('.slider .list .item');
    let thumbnails = document.querySelectorAll('.thumbnail .item');
    
    // Selectors for navigation buttons
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    // Total number of items in the slider
    let countItem = items.length;
    
    // Active item index
    let itemActive = 0;
    
    // Interval for auto sliding
    let refreshInterval;

    // Function to initialize slider
    function initSlider() {
        // Add active class to initial item and thumbnail
        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');
        
        // Event listener for next button
        next.onclick = function() {
            changeItem(itemActive + 1);
        };
        
        // Event listener for previous button
        prev.onclick = function() {
            changeItem(itemActive - 1);
        };
        
        // Event listener for thumbnail clicks
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                changeItem(index);
            });
        });
        
        // Start auto slider
        startAutoSlider();
    }
    
    // Function to change active item
    function changeItem(index) {
        console.log(`Changing to item ${index}`);
        // Remove active class from current item and thumbnail
        items[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active');
        
        // Ensure itemActive stays within bounds
        if (index >= countItem) {
            itemActive = 0;
        } else if (index < 0) {
            itemActive = countItem - 1;
        } else {
            itemActive = index;
        }
        
        console.log(`New active item: ${itemActive}`);
        
        // Add active class to new item and thumbnail
        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');
        
        // Restart auto slider after interaction
        startAutoSlider();
    }
    
    // Function to start auto slider
    function startAutoSlider() {
        // Clear existing interval if any
        clearInterval(refreshInterval);
        
        // Set interval to auto click next button every 5000ms (5 seconds)
        refreshInterval = setInterval(() => {
            changeItem(itemActive + 1);
        }, 5000);
    }
    
    // Initialize slider
    initSlider();
    
    // Initialize ScrollReveal with common options
    const sr = ScrollReveal({
        duration: window.innerWidth < 700 ? 800 : 1000, // Shorter duration for mobile
        reset: true,
        interval: 0, // Set interval to 0 to prevent animations on scroll up
        viewFactor: window.innerWidth < 700 ? 0.2 : 0.1 // Adjust viewFactor for smaller screens
    });

    // Configure individual elements for ScrollReveal
    sr.reveal('.hero', { origin: 'top', distance: window.innerWidth < 700 ? '50px' : '100px' });
    sr.reveal('nav', { origin: 'bottom', distance: '50px', delay: 100 });
    sr.reveal('.content', { origin: 'top', distance: '50px' });
    sr.reveal('.mission-section', { origin: 'left', distance: '50px', delay: 200 });
    sr.reveal('.carousel', { origin: 'bottom', distance: '50px' });
    sr.reveal('.animated-cards', { origin: 'right', distance: '50px', delay: 100 });
    sr.reveal('.news', { origin: 'top', distance: '50px' });
    sr.reveal('h2', { origin: 'right', distance: '50px' });
    sr.reveal('p', { origin: 'right', distance: '50px', delay: 100 });

    // Function to reveal elements when scrolling down
    let lastScrollTop = 0;
    function revealOnScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Reveal elements when scrolling down
            sr.reveal('.reveal-on-scroll', {
                origin: 'bottom',
                distance: '50px',
                delay: 200
            });
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }

    // Event listener for scroll to trigger reveal animations
    window.addEventListener('scroll', revealOnScroll);

    // Select the form and handle its submission
    const form = document.getElementById('email-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve the entered email
        const email = form.querySelector('input[type="email"]').value;
        console.log('Submitted email:', email);

        // Add further processing logic here, such as validation or submission handling
    });
});
document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.links-container').classList.toggle('active');
});
