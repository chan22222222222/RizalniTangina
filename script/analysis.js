document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const quizTimeBtn = document.getElementById('quiz-time-btn');
    const quizOverlay = document.getElementById('quiz-overlay');
    const quizCloseBtn = document.getElementById('quiz-close-btn');
    const slides = document.querySelectorAll('.quiz-slide');
    const nextSlideBtns = document.querySelectorAll('.next-slide-btn');
    const closeQuizBtns = document.querySelectorAll('.close-quiz-btn');
    
    let currentSlide = 0;
  
    // Show the first slide by default
    slides[currentSlide].classList.add('active');
  
    // Open the quiz modal
    quizTimeBtn.addEventListener('click', () => {
      quizOverlay.classList.add('open');
    });
  
    // Close the quiz modal with the "X" button
    quizCloseBtn.addEventListener('click', () => {
      closeQuiz();
    });
  
    // Close the quiz when "Finish" or final close is clicked
    closeQuizBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        closeQuiz();
      });
    });
  
    // Next Slide button(s)
    nextSlideBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        goToNextSlide();
      });
    });
  
    function goToNextSlide() {
      // Hide current slide
      slides[currentSlide].classList.remove('active');
      
      // Increment slide index
      currentSlide++;
      
      // If we go beyond the last slide, reset or close
      if (currentSlide >= slides.length) {
        closeQuiz();
        return;
      }
      
      // Show the next slide
      slides[currentSlide].classList.add('active');
    }
  
    function closeQuiz() {
      // Hide the overlay
      quizOverlay.classList.remove('open');
      // Reset slides to the beginning
      slides[currentSlide].classList.remove('active');
      currentSlide = 0;
      slides[currentSlide].classList.add('active');
    }
  });
  