const textElement = document.getElementById("text");
const word = "Plan";  // The word to type
let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting) {
        textElement.textContent = word.substring(0, index + 1);
        index++;
        if (index === word.length) {
            setTimeout(() => isDeleting = true, 1000);
        }
    } else {
        textElement.textContent = word.substring(0, index - 1);
        index--;
        if (index === 0) {
            isDeleting = false;
        }
    }

    let speed = isDeleting ? 100 : 300;  // Slow typing, fast deleting
    setTimeout(typeEffect, speed);
}

setTimeout(typeEffect, 500); // Start typing after page loads



window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-on-scroll");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("opacity-100", "translate-y-0");
                    entry.target.classList.remove("opacity-0", "translate-y-10");
                }
            });
        },
        { threshold: 0.2 }
    );

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});



const menu = document.getElementById('mobile-menu');
const openMenuBtn = document.getElementById('menu-btn'); 
const closeMenuBtn = document.getElementById('close-menu');

// Open Sidebar
openMenuBtn.addEventListener('click', () => {
    menu.style.right = "0"; // Moves into view
});

// Close Sidebar
closeMenuBtn.addEventListener('click', () => {
    menu.style.right = "-100%"; // Moves out of view
});

// Close on Click Outside
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !openMenuBtn.contains(event.target)) {
        menu.style.right = "-100%"; // Moves out of view
    }
});




