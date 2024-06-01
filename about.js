document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.main-img img, .text, .text h4, .text h1, .text hr, .text p, .last-text, .last-text .text1 h3, .last-text .text1 h5, .last-text .text2 h3, .last-text .text2 h5');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

// scripts.js

// Placeholder for any future JavaScript functionality
document.addEventListener("DOMContentLoaded", function() {
    // Example of potential interactivity: console log a message when a social link is clicked
    const socialLinks = document.querySelectorAll(".social-links a");
    socialLinks.forEach(link => {
        link.addEventListener("click", function() {
            console.log(`Clicked on ${this.querySelector('i').classList[1]}`);
        });
    });
});





