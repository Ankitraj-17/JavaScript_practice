// Get all favorite icon buttons
const favoriteButtons = document.querySelectorAll('.favorite-icon');

// Add click event listener to each button
favoriteButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Toggle the 'filled' class
        button.classList.toggle('filled');
        
        // Toggle the heart symbol
        if (button.classList.contains('filled')) {
            // Change to filled heart
            button.innerHTML = '❤'; // &#10084;
        } else {
            // Change to empty heart
            button.innerHTML = '♡'; // &#9825;
        }
    });
});
