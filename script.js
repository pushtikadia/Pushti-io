// 1. Initialize Icons
lucide.createIcons();

// 2. Spotlight & 3D Tilt Logic
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Spotlight variable
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        // 3D Tilt Math
        // Calculate center of card
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate tilt amount (max 15deg)
        const rotateX = ((y - centerY) / centerY) * -5; // Negative to tilt away
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    // Reset when mouse leaves
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// 3. Typing Effect
const texts = ["Computer Science Student", "Data Science Enthusiast", "Full Stack Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.getElementById('typing-text').textContent = letter;
    
    if (letter.length === currentText.length) {
        setTimeout(() => {
            // Delete effect logic could go here, but simple cycle for now
            count++;
            index = 0;
        }, 2000); 
    }
    setTimeout(type, 100); // Typing speed
}
// Start typing (Simple version for stability: just types one then resets)
// For a loop, we need a backspace function, but let's keep it simple:
const typingElement = document.getElementById('typing-text');
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = texts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex++);
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}
typeEffect();

// 4. Real-time Clock (Ahmedabad Time)
function updateTime() {
    const options = { 
        timeZone: 'Asia/Kolkata', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
    };
    const timeString = new Date().toLocaleTimeString('en-US', options);
    document.getElementById('local-time').textContent = timeString + " IST";
}
setInterval(updateTime, 1000);
updateTime();