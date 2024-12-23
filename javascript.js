window.addEventListener('load', () => {
    document.body.classList.add('fadeIn');
    document.querySelector('.sidebar').classList.add('slideInSidebar');
    document.querySelector('.content-area').classList.add('slideInContent');
    
    
    // Add functionality to the search box and clear button
    const searchBox = document.getElementById('searchBox');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    
    // Focus on the search box when clicked
    searchBox.addEventListener('focus', () => {
        searchBox.style.borderColor = "#00A8A8";
    });
    const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

});
const searchSuggestions = document.querySelector('.search-suggestions');

searchBox.addEventListener('input', () => {
    const query = searchBox.value.toLowerCase();
    searchSuggestions.innerHTML = '';  // Clear previous suggestions

    if (query) {
        const matchingVideos = Array.from(document.querySelectorAll('.video-card'))
            .filter(card => {
                return card.querySelector('h4').textContent.toLowerCase().includes(query);
            });

        matchingVideos.forEach(card => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = card.querySelector('h4').textContent;
            suggestionItem.addEventListener('click', () => {
                window.location.href = card.querySelector('.video-link').href;
            });
            searchSuggestions.appendChild(suggestionItem);
        });
        searchSuggestions.style.display = 'block';
    } else {
        searchSuggestions.style.display = 'none';
    }
});

// Hide suggestions when clicking outside
document.addEventListener('click', (event) => {
    if (!searchBox.contains(event.target) && !searchSuggestions.contains(event.target)) {
        searchSuggestions.style.display = 'none';
    }
});
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
});





    // Reset the border color when focus is lost
    searchBox.addEventListener('blur', () => {
        if (searchBox.value === "") {
            searchBox.style.borderColor = "#ccc";
        }
    });

    // Clear the search box when the "X" button is clicked
    clearSearchBtn.addEventListener('click', () => {
        searchBox.value = ""; // Clear the input field
        searchBox.focus(); // Focus back on the search box
        searchBox.style.borderColor = "#ccc"; // Reset border color
    });

    // Optional: Filter tutorial videos based on search input
    searchBox.addEventListener('input', () => {
        const query = searchBox.value.toLowerCase();
        const videoCards = document.querySelectorAll('.video-card');
        
        videoCards.forEach(card => {
            const title = card.querySelector('h4').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            // If the query matches the title or description, show the video card, otherwise hide it
            if (title.includes(query) || description.includes(query)) {
                card.style.display = 'flex'; // Show matching cards
            } else {
                card.style.display = 'none'; // Hide non-matching cards
            }
            
        });
    });
});

