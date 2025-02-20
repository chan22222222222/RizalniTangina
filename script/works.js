// Book data
const books = {
    english: {
        title: "The Philippines a century hence",
        author: "José Rizal",
        description: "José Rizal, in this short work (which originally appeared in Spanish in the Filipino newspaper La Solidaridad, September 1889-January 1890) gives a prediction of the future of the Philippines.",
        publishDate: "1912",
        language: "English",
        pages: "136",
        coverImage: "image/The Philippines a Century Hence.jpg",
        details: "1912, Philippine Education Company"
    }
};

// Function to scroll to book details
function scrollToBookDetails() {
    const bookDetails = document.getElementById('mainBookDisplay');
    bookDetails.scrollIntoView({ behavior: 'smooth' });
}

// Function to update main book display
function updateMainBookDisplay(bookKey) {
    const book = books[bookKey];
    const mainDisplay = document.getElementById('mainBookDisplay');
    
    if (!mainDisplay) {
        console.error('mainBookDisplay element not found');
        return;
    }

    // Add fade-out effect
    mainDisplay.style.opacity = '0';
    
    setTimeout(() => {
        mainDisplay.innerHTML = `
            <div class="book-left">
                <div class="book-cover">
                    <img src="${book.coverImage}" alt="${book.title}">
                </div>
                <button class="read-button">Read</button>
            </div>
            <div class="book-right">
                <h2>${book.title}</h2>
                <div class="book-authors">
                    by <a href="#">${book.author}</a>
                </div>
                <div class="book-description">
                    ${book.description}
                </div>
                <div class="book-metadata">
                    <div class="metadata-row">
                        <div class="metadata-item">
                            <span class="label">Publish Date:</span>
                            <span class="value">${book.publishDate}</span>
                        </div>
                        <div class="metadata-item">
                            <span class="label">Language:</span>
                            <span class="value">${book.language}</span>
                        </div>
                        <div class="metadata-item">
                            <span class="label">Pages:</span>
                            <span class="value">${book.pages}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Add fade-in effect
        mainDisplay.style.opacity = '1';

        // Reattach read button event listeners
        attachReadButtonListeners();
    }, 300);
}

// Function to update edition display
function updateEditionDisplay(bookKey) {
    const book = books[bookKey];
    const editionTitle = document.querySelector('.edition-title');
    const editionDetails = editionTitle.nextElementSibling;
    const editionLanguage = editionDetails.nextElementSibling;
    const editionThumbnail = editionTitle.parentElement.parentElement.querySelector('img');

    editionTitle.textContent = book.title;
    editionDetails.textContent = book.details;
    editionLanguage.textContent = `in ${book.language}`;
    editionThumbnail.src = book.coverImage;
    editionThumbnail.alt = book.title;
}

// Function to handle read button clicks
function handleReadButtonClick() {
    // Get the currently displayed book title from the main display
    const currentTitle = document.querySelector('.book-right h2').textContent;
    
    // Determine which book to read based on the current title
    let bookToRead;
    if (currentTitle.includes('Philippines')) {
        bookToRead = 'english';
    } else {
        bookToRead = 'spanish';
    }
    
    // Redirect to the read page with the correct book parameter
    window.location.href = `read.html?book=${bookToRead}`;
}

// Function to attach read button event listeners
function attachReadButtonListeners() {
    const readButtons = document.querySelectorAll('.read-button, .read-btn');
    readButtons.forEach(button => {
        button.addEventListener('click', handleReadButtonClick);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set initial book display
    updateMainBookDisplay('english');

    // Add click event listener to edition title
    const editionTitle = document.querySelector('.edition-title');
    if (editionTitle) {
        editionTitle.addEventListener('click', (e) => {
            e.preventDefault();
            
            const currentBook = editionTitle.dataset.book;
            
            if (currentBook === 'spanish') {
                updateMainBookDisplay('spanish');
                editionTitle.dataset.book = 'english';
                updateEditionDisplay('spanish');
            } else {
                updateMainBookDisplay('english');
                editionTitle.dataset.book = 'spanish';
                updateEditionDisplay('english');
            }
            
            // Scroll to book details
            scrollToBookDetails();
        });
    }

    // Initial attachment of read button listeners
    attachReadButtonListeners();
});