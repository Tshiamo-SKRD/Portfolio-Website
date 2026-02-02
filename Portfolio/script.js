// Initialize score
let score = 0;
const scoreElement = document.getElementById('score');

// Navigation functionality
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('section');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-section');
        
        // Remove active class from all buttons and sections
        navButtons.forEach(btn => btn.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));
        
        // Add active class to clicked button and corresponding section
        button.classList.add('active');
        document.getElementById(sectionId).classList.add('active');
        
        // Add points for navigation
        addScore(100);
        
        // Show achievement
        showAchievement(`Explored ${sectionId.toUpperCase()} section!`);
        
        // Play sound effect (simulated with console)
        console.log('🔊 MENU SELECT');
    });
});

// Score system
function addScore(points) {
    score += points;
    scoreElement.textContent = score.toString().padStart(6, '0');
}

// Achievement system
function showAchievement(text) {
    const achievement = document.getElementById('achievement');
    const achievementText = document.getElementById('achievement-text');
    
    achievementText.textContent = text;
    achievement.classList.add('show');
    
    setTimeout(() => {
        achievement.classList.remove('show');
    }, 3000);
}

// Create pixel particles
function createParticles() {
    const container = document.getElementById('particles');
    const colors = ['#39ff14', '#ff10f0', '#00ffff', '#ffff00'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(particle);
    }
}

// Project buttons
const projectButtons = document.querySelectorAll('.project-btn');
projectButtons.forEach(button => {
    button.addEventListener('click', function() {
        addScore(250);
        showAchievement('Project viewed! +250 XP');
        console.log('🔊 POWER UP!');
    });
});

// Contact form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addScore(500);
    showAchievement('Message sent! +500 XP');
    console.log('🔊 QUEST COMPLETE!');
    
    // Simulate form submission
    setTimeout(() => {
        alert('🎮 MESSAGE SENT! THANK YOU FOR CONTACTING ME!');
        contactForm.reset();
    }, 500);
});

// Skill items hover effect
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        addScore(50);
        console.log('🔊 ITEM DISCOVERED');
    });
});

// Project cards hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        console.log('🔊 ITEM HIGHLIGHT');
    });
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        addScore(9999);
        showAchievement('KONAMI CODE ACTIVATED! +9999 XP');
        console.log('🔊 SECRET UNLOCKED!');
        document.body.style.animation = 'glitch 0.3s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 3000);
    }
});

// Initialize particles on load
window.addEventListener('load', () => {
    createParticles();
    showAchievement('Welcome, Player One!');
    console.log('🎮 GAME START!');
});

// Add random score over time (idle bonus)
setInterval(() => {
    if (Math.random() > 0.7) {
        addScore(10);
    }
}, 5000);

// Click anywhere for points
let clickCount = 0;
document.addEventListener('click', () => {
    clickCount++;
    if (clickCount % 10 === 0) {
        addScore(25);
        console.log('🔊 COMBO BONUS!');
    }
});