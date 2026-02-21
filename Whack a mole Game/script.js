const holes = document.querySelectorAll('.hole');
const scoreBoard = document.getElementById('score');
const timeBoard = document.getElementById('time');
const startBtn = document.getElementById('start-btn');
const moles = document.querySelectorAll('.mole');

const popup = document.getElementById('popup');
const finalScore = document.getElementById('final-score');
const playAgainBtn = document.getElementById('play-again-btn');

let lastHole;
let timeUp = false;
let score = 0;
let timeLeft = 30;
let timerId = null;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(1000, 2000); // Slower appearance rate
    const hole = randomHole(holes);
    const mole = hole.querySelector('.mole');
    
    mole.classList.add('up');
    
    setTimeout(() => {
        mole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    timeLeft = 15; // Set time limit to 15 seconds
    timeBoard.textContent = timeLeft;
    startBtn.disabled = true;
    startBtn.textContent = 'Playing...';
    
    // Hide popup if starting from logic that wasn't the play again button
    popup.classList.remove('show');
    
    peep();
    
    if (timerId) clearInterval(timerId);
    timerId = setInterval(() => {
        timeLeft--;
        timeBoard.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerId);
            timeUp = true;
            startBtn.disabled = false;
            startBtn.textContent = 'Play Again';
            
            // Show popup
            finalScore.textContent = score;
            popup.classList.add('show');
        }
    }, 1000);
}

function bonk(e) {
    if (!e.isTrusted) return; // Disallow cheating scripts!
    if (!this.classList.contains('up')) return; // Can't whack if not up
    
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
    
    // Add point animation effect
    const hole = this.parentNode;
    const point = document.createElement('div');
    point.textContent = '+1';
    point.style.position = 'absolute';
    point.style.color = '#fff';
    point.style.fontSize = '24px';
    point.style.fontWeight = 'bold';
    point.style.textShadow = '0 2px 4px rgba(0,0,0,0.5)';
    point.style.top = '30px';
    point.style.left = '35px';
    point.style.pointerEvents = 'none';
    point.style.animation = 'floatUp 0.8s ease-out forwards';
    
    hole.appendChild(point);
    
    setTimeout(() => {
        point.remove();
    }, 800);
}

moles.forEach(mole => mole.addEventListener('click', bonk));
startBtn.addEventListener('click', startGame);

playAgainBtn.addEventListener('click', () => {
    popup.classList.remove('show');
    startGame();
});

// Add dynamic style for animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(-30px); opacity: 0; }
    }
    
    .mole:active {
        transform: scale(0.9);
    }
`;
document.head.appendChild(style);
