// 1. INITIALIZE ICONS
lucide.createIcons();

// 2. CUSTOM CURSOR PHYSICS
const cursorDot = document.getElementById('cursor-dot');
const cursorCircle = document.getElementById('cursor-circle');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
});

function animateCursor() {
    const speed = 0.15;
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    
    cursorCircle.style.left = `${cursorX}px`;
    cursorCircle.style.top = `${cursorY}px`;
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Magnetic Hover Effect
document.querySelectorAll('.magnetic, .nav-links li, .socials i, .project-card').forEach(item => {
    item.addEventListener('mouseenter', () => {
        document.body.classList.add('hovered');
        cursorCircle.style.transform = `translate(-50%, -50%) scale(1.5)`;
    });
    item.addEventListener('mouseleave', () => {
        document.body.classList.remove('hovered');
        cursorCircle.style.transform = `translate(-50%, -50%) scale(1)`;
    });
});

// 3. PAGE NAVIGATION
const navLinks = document.querySelectorAll('.nav-links li');
const pages = document.querySelectorAll('.page');

window.navigateTo = (pageId) => {
    navLinks.forEach(link => link.classList.remove('active'));
    pages.forEach(page => page.classList.remove('active-page'));

    const targetLink = document.querySelector(`[data-target="${pageId}"]`);
    const targetPage = document.getElementById(pageId);

    if (targetLink) targetLink.classList.add('active');
    if (targetPage) targetPage.classList.add('active-page');
};

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const target = link.getAttribute('data-target');
        window.navigateTo(target);
    });
});

// 4. 3D TILT EFFECT
const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});
