// Select the story container element
var storyContainer = document.querySelector('.story-container');

// Select the buttons
var scaryStoryBtn = document.getElementById('scary-btn');
var funnyStoryBtn = document.getElementById('funny-btn');
var adventureStoryBtn = document.getElementById('adventure-btn');

// Select the result paragraph
var resultParagraph = document.getElementById('result');

// Object to hold the different types of stories
var storyObj = {
    scary: {
        story: "In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.",
        borderColor: "#ee4b2b"
    },
    funny: {
        story: "During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.",
        borderColor: "#f1be32"
    },
    adventure: {
        story: "Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.",
        borderColor: "#acd157"
    }
};

// Function to display the story
function displayStory(genre) {
    if (storyObj[genre]) {
        resultParagraph.textContent = storyObj[genre].story;
        storyContainer.style.borderColor = storyObj[genre].borderColor;
    }
}

// Add event listeners to buttons
scaryStoryBtn.addEventListener('click', function() {
    displayStory('scary');
});

funnyStoryBtn.addEventListener('click', function() {
    displayStory('funny');
});

adventureStoryBtn.addEventListener('click', function() {
    displayStory('adventure');
});
