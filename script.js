// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.player-card, .game-card, .gallery-item, .contact-item, .coach-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! We\'ll get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Player card hover effects
document.querySelectorAll('.player-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Game card click effects
document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = 'translateX(5px)';
        }, 150);
    });
});

// Coach card hover effects
document.querySelectorAll('.coach-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
    
    // Add click effect for coach email
    const emailLink = card.querySelector('.coach-email');
    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            // Add a subtle animation
            emailLink.style.transform = 'scale(0.95)';
            setTimeout(() => {
                emailLink.style.transform = 'scale(1)';
            }, 150);
        });
    }
});

// Gallery item click effects
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        // Add a ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '100px';
        ripple.style.height = '100px';
        ripple.style.marginLeft = '-50px';
        ripple.style.marginTop = '-50px';
        
        item.style.position = 'relative';
        item.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Stats counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when hero section is visible
const heroSection = document.querySelector('.hero');
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(animateCounters, 1000);
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

heroObserver.observe(heroSection);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could be used for navigation
            console.log('Swipe up detected');
        } else {
            // Swipe down - could be used for navigation
            console.log('Swipe down detected');
        }
    }
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations and effects
}, 16)); // ~60fps

// Tactics Board Functionality
document.addEventListener('DOMContentLoaded', () => {
    initializeTacticsBoard();
});

function initializeTacticsBoard() {
    const players = document.querySelectorAll('.player');
    const formationBtns = document.querySelectorAll('.formation-btn');
    const resetBtn = document.getElementById('reset-btn');
    const clearBtn = document.getElementById('clear-btn');
    const saveBtn = document.getElementById('save-btn');
    
    // Formation presets
    const formations = {
        offensive: {
            positions: {
                '1': { top: '50%', left: '10%', transform: 'translateY(-50%)' },
                '2': { top: '25%', left: '25%' },
                '3': { top: '75%', left: '25%' },
                '4': { top: '50%', left: '45%', transform: 'translateY(-50%)' },
                '5': { top: '25%', left: '65%' },
                '6': { top: '75%', left: '65%' },
                '7': { top: '50%', left: '85%', transform: 'translateY(-50%)' }
            },
            description: 'Aggressive offensive formation with players spread across the pool. Center forward positioned for quick shots, wings ready for crosses.',
            stats: { attack: 9, defense: 6, speed: 8 }
        },
        defensive: {
            positions: {
                '1': { top: '50%', left: '10%', transform: 'translateY(-50%)' },
                '2': { top: '20%', left: '35%' },
                '3': { top: '80%', left: '35%' },
                '4': { top: '50%', left: '50%', transform: 'translateY(-50%)' },
                '5': { top: '20%', left: '65%' },
                '6': { top: '80%', left: '65%' },
                '7': { top: '50%', left: '80%', transform: 'translateY(-50%)' }
            },
            description: 'Defensive formation with players positioned to block shots and prevent counter-attacks. Strong defensive wall in front of goal.',
            stats: { attack: 5, defense: 9, speed: 7 }
        },
        counter: {
            positions: {
                '1': { top: '50%', left: '10%', transform: 'translateY(-50%)' },
                '2': { top: '30%', left: '30%' },
                '3': { top: '70%', left: '30%' },
                '4': { top: '50%', left: '40%', transform: 'translateY(-50%)' },
                '5': { top: '30%', left: '55%' },
                '6': { top: '70%', left: '55%' },
                '7': { top: '50%', left: '75%', transform: 'translateY(-50%)' }
            },
            description: 'Counter-attack formation with players positioned for quick transitions. Balanced setup for both defense and fast breaks.',
            stats: { attack: 7, defense: 7, speed: 9 }
        },
        press: {
            positions: {
                '1': { top: '50%', left: '15%', transform: 'translateY(-50%)' },
                '2': { top: '15%', left: '40%' },
                '3': { top: '85%', left: '40%' },
                '4': { top: '50%', left: '55%', transform: 'translateY(-50%)' },
                '5': { top: '15%', left: '70%' },
                '6': { top: '85%', left: '70%' },
                '7': { top: '50%', left: '90%', transform: 'translateY(-50%)' }
            },
            description: 'Full press formation with aggressive positioning. Players apply pressure across the entire pool to force turnovers.',
            stats: { attack: 8, defense: 8, speed: 6 }
        }
    };
    
    // Make players draggable
    players.forEach(player => {
        player.addEventListener('dragstart', handleDragStart);
        player.addEventListener('dragend', handleDragEnd);
    });
    
    // Pool field drop zone
    const poolField = document.querySelector('.pool-field');
    poolField.addEventListener('dragover', handleDragOver);
    poolField.addEventListener('drop', handleDrop);
    
    // Formation buttons
    formationBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const formation = btn.dataset.formation;
            applyFormation(formation, formations[formation]);
            
            // Update active button
            formationBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Control buttons
    resetBtn.addEventListener('click', () => {
        applyFormation('offensive', formations.offensive);
        formationBtns.forEach(b => b.classList.remove('active'));
        document.querySelector('[data-formation="offensive"]').classList.add('active');
    });
    
    clearBtn.addEventListener('click', () => {
        players.forEach(player => {
            player.style.top = '50%';
            player.style.left = '50%';
            player.style.transform = 'translate(-50%, -50%)';
        });
        updateFormationInfo('Custom Formation', 'Players positioned manually.', { attack: 5, defense: 5, speed: 5 });
    });
    
    saveBtn.addEventListener('click', () => {
        saveFormation();
    });
    
    // Initialize with offensive formation
    applyFormation('offensive', formations.offensive);
}

function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('text/plain', e.target.dataset.player);
}

function handleDragEnd(e) {
    e.target.style.opacity = '1';
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();
    const playerNum = e.dataTransfer.getData('text/plain');
    const player = document.querySelector(`[data-player="${playerNum}"]`);
    const poolField = document.querySelector('.pool-field');
    const rect = poolField.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Convert to percentages
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    
    // Keep player within bounds
    const clampedX = Math.max(5, Math.min(95, xPercent));
    const clampedY = Math.max(5, Math.min(95, yPercent));
    
    player.style.left = `${clampedX}%`;
    player.style.top = `${clampedY}%`;
    player.style.transform = 'translate(-50%, -50%)';
    
    // Update formation info for custom positioning
    updateFormationInfo('Custom Formation', 'Players positioned manually. Drag players to create your own formation.', { attack: 5, defense: 5, speed: 5 });
}

function applyFormation(formationName, formation) {
    const players = document.querySelectorAll('.player');
    
    players.forEach(player => {
        const playerNum = player.dataset.player;
        const position = formation.positions[playerNum];
        
        if (position) {
            player.style.top = position.top;
            player.style.left = position.left;
            player.style.transform = position.transform || 'translate(-50%, -50%)';
        }
    });
    
    updateFormationInfo(formationName.charAt(0).toUpperCase() + formationName.slice(1) + ' Formation', formation.description, formation.stats);
}

function updateFormationInfo(title, description, stats) {
    document.getElementById('formation-desc').textContent = description;
    document.getElementById('attack-rating').textContent = stats.attack + '/10';
    document.getElementById('defense-rating').textContent = stats.defense + '/10';
    document.getElementById('speed-rating').textContent = stats.speed + '/10';
}

function saveFormation() {
    const players = document.querySelectorAll('.player');
    const formation = {};
    
    players.forEach(player => {
        const playerNum = player.dataset.player;
        formation[playerNum] = {
            top: player.style.top,
            left: player.style.left,
            transform: player.style.transform
        };
    });
    
    // Save to localStorage
    localStorage.setItem('savedFormation', JSON.stringify(formation));
    
    // Show success message
    const saveBtn = document.getElementById('save-btn');
    const originalText = saveBtn.textContent;
    saveBtn.textContent = 'Saved!';
    saveBtn.style.background = '#28a745';
    saveBtn.style.borderColor = '#28a745';
    
    setTimeout(() => {
        saveBtn.textContent = originalText;
        saveBtn.style.background = '';
        saveBtn.style.borderColor = '';
    }, 2000);
} 