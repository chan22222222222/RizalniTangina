// JavaScript to trigger the animation
window.onload = function() {
    document.getElementById('animated-text').style.animationPlayState = 'running';
    document.getElementById('author-text').style.animationPlayState = 'running';
    document.getElementById('image').style.animationPlayState = 'running';
};

// Add event listeners to navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('animated-text').classList.add('move-up');
        document.getElementById('author-text').classList.add('move-up');
        document.getElementById('image').classList.add('move-up');
    });
});