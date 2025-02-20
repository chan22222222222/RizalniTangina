document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections, about-text, and family-content
    document.querySelectorAll('.section, .about-text, .family-content').forEach((section) => {
        observer.observe(section);
    });
});