// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to timeline list items
    const timelineItems = document.querySelectorAll('.timeline ul li');
    timelineItems.forEach(item => {
      item.addEventListener('click', function() {
        alert("More details coming soon about: " + item.textContent.trim());
      });
    });
  });
  