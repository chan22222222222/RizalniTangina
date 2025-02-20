document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector(".content");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                content.classList.add("visible");
                observer.unobserve(content);
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the content is visible
    observer.observe(content);
});

// Add this script to your home.js file
document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector(".footer");
    const footerContent = document.querySelector(".footer-content");
});