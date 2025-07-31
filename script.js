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

// Video Section Functionality
document.addEventListener('DOMContentLoaded', () => {
    initializeVideoSection();
});

function initializeVideoSection() {
    const uploadBox = document.getElementById('upload-box');
    const videoUpload = document.getElementById('video-upload');
    const categoryFilter = document.getElementById('category-filter');
    const dateFilter = document.getElementById('date-filter');
    const searchInput = document.getElementById('video-search');
    const videoGrid = document.getElementById('video-grid');
    
    // Video upload functionality
    uploadBox.addEventListener('click', () => {
        videoUpload.click();
    });
    
    uploadBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadBox.classList.add('dragover');
    });
    
    uploadBox.addEventListener('dragleave', () => {
        uploadBox.classList.remove('dragover');
    });
    
    uploadBox.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadBox.classList.remove('dragover');
        const files = e.dataTransfer.files;
        handleVideoUpload(files);
    });
    
    videoUpload.addEventListener('change', (e) => {
        const files = e.target.files;
        handleVideoUpload(files);
    });
    
    // Filter functionality
    categoryFilter.addEventListener('change', filterVideos);
    dateFilter.addEventListener('change', filterVideos);
    searchInput.addEventListener('input', filterVideos);
    
    // Load sample comments
    loadSampleComments();
}

function handleVideoUpload(files) {
    const uploadProgress = document.getElementById('upload-progress');
    const progressFill = document.getElementById('progress-fill');
    const progressPercent = document.getElementById('progress-percent');
    
    uploadProgress.style.display = 'block';
    
    Array.from(files).forEach((file, index) => {
        if (file.type.startsWith('video/')) {
            // Simulate upload progress
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 10;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                    
                    // Add video to grid
                    setTimeout(() => {
                        addVideoToGrid(file);
                        uploadProgress.style.display = 'none';
                        progressFill.style.width = '0%';
                        progressPercent.textContent = '0%';
                    }, 500);
                }
                
                progressFill.style.width = progress + '%';
                progressPercent.textContent = Math.round(progress) + '%';
            }, 200);
        }
    });
}

function addVideoToGrid(file) {
    const videoGrid = document.getElementById('video-grid');
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';
    videoCard.setAttribute('data-category', 'games');
    videoCard.setAttribute('data-date', new Date().toISOString().split('T')[0]);
    
    const fileName = file.name.replace(/\.[^/.]+$/, "");
    const fileSize = (file.size / (1024 * 1024)).toFixed(1);
    
    videoCard.innerHTML = `
        <div class="video-thumbnail">
            <img src="https://via.placeholder.com/300x200/0066cc/ffffff?text=${encodeURIComponent(fileName)}" alt="${fileName}">
            <div class="video-overlay">
                <i class="fas fa-play"></i>
                <span class="video-duration">New</span>
            </div>
        </div>
        <div class="video-info">
            <h3>${fileName}</h3>
            <p class="video-description">Uploaded video file (${fileSize} MB). Click to watch and add comments.</p>
            <div class="video-meta">
                <span class="video-category">Game Footage</span>
                <span class="video-date">${new Date().toLocaleDateString()}</span>
            </div>
            <div class="video-stats">
                <span><i class="fas fa-eye"></i> 0 views</span>
                <span><i class="fas fa-comment"></i> 0 comments</span>
            </div>
        </div>
        <div class="video-actions">
            <button class="action-btn watch-btn" onclick="openVideoModal('${fileName}')">
                <i class="fas fa-play"></i> Watch
            </button>
            <button class="action-btn comment-btn" onclick="openComments('${fileName}')">
                <i class="fas fa-comment"></i> Comments
            </button>
        </div>
    `;
    
    videoGrid.insertBefore(videoCard, videoGrid.firstChild);
    
    // Show success message
    showNotification('Video uploaded successfully!', 'success');
}

function filterVideos() {
    const categoryFilter = document.getElementById('category-filter').value;
    const dateFilter = document.getElementById('date-filter').value;
    const searchQuery = document.getElementById('video-search').value.toLowerCase();
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const date = card.getAttribute('data-date');
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('.video-description').textContent.toLowerCase();
        
        let showCard = true;
        
        // Category filter
        if (categoryFilter !== 'all' && category !== categoryFilter) {
            showCard = false;
        }
        
        // Date filter
        if (dateFilter !== 'all') {
            const videoDate = new Date(date);
            const now = new Date();
            const diffTime = Math.abs(now - videoDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (dateFilter === 'week' && diffDays > 7) showCard = false;
            if (dateFilter === 'month' && diffDays > 30) showCard = false;
            if (dateFilter === 'season' && diffDays > 90) showCard = false;
        }
        
        // Search filter
        if (searchQuery && !title.includes(searchQuery) && !description.includes(searchQuery)) {
            showCard = false;
        }
        
        card.style.display = showCard ? 'block' : 'none';
    });
}

// Video modal functionality
function openVideoModal(videoId) {
    const modal = document.getElementById('video-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalVideo = document.getElementById('modal-video');
    const modalDescription = document.getElementById('modal-description');
    
    // Set modal content based on video ID
    const videoData = getVideoData(videoId);
    modalTitle.textContent = videoData.title;
    modalDescription.textContent = videoData.description;
    
    // For demo purposes, use a placeholder video
    modalVideo.src = 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4';
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    
    modal.style.display = 'none';
    modalVideo.pause();
    modalVideo.src = '';
    document.body.style.overflow = 'auto';
}

// Comments functionality
let currentVideoId = null;
let comments = {};

function openComments(videoId) {
    currentVideoId = videoId;
    const modal = document.getElementById('comments-modal');
    
    // Load comments for this video
    if (!comments[videoId]) {
        comments[videoId] = [];
    }
    
    displayComments(videoId);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeComments() {
    const modal = document.getElementById('comments-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentVideoId = null;
}

function addComment() {
    const commentInput = document.getElementById('comment-input');
    const comment = commentInput.value.trim();
    
    if (!comment || !currentVideoId) return;
    
    const newComment = {
        id: Date.now(),
        author: getCurrentUser(),
        text: comment,
        time: new Date().toISOString(),
        avatar: getRandomAvatar()
    };
    
    if (!comments[currentVideoId]) {
        comments[currentVideoId] = [];
    }
    
    comments[currentVideoId].unshift(newComment);
    displayComments(currentVideoId);
    commentInput.value = '';
    
    // Update comment count
    updateCommentCount(currentVideoId);
}

function displayComments(videoId) {
    const commentsList = document.getElementById('comments-list');
    const videoComments = comments[videoId] || [];
    
    if (videoComments.length === 0) {
        commentsList.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">No comments yet. Be the first to comment!</p>';
        return;
    }
    
    commentsList.innerHTML = videoComments.map(comment => `
        <div class="comment">
            <div class="comment-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="comment-content">
                <div class="comment-header">
                    <span class="comment-author">${comment.author}</span>
                    <span class="comment-time">${formatTime(comment.time)}</span>
                </div>
                <div class="comment-text">${comment.text}</div>
            </div>
        </div>
    `).join('');
}

function loadSampleComments() {
    // Load sample comments for demo videos
    comments['game-vs-thunder-sharks'] = [
        {
            id: 1,
            author: 'Coach Michael',
            text: 'Great defensive positioning in the second quarter. Sarah, your goalkeeper skills were outstanding!',
            time: '2024-12-01T15:30:00Z',
            avatar: 'coach'
        },
        {
            id: 2,
            author: 'Sarah Chen',
            text: 'Thanks Coach! I felt really focused during those penalty shots. The team communication was excellent.',
            time: '2024-12-01T16:45:00Z',
            avatar: 'player'
        },
        {
            id: 3,
            author: 'Alex Rodriguez',
            text: 'Our offensive plays were working perfectly. Mike, that assist at 12:30 was textbook!',
            time: '2024-12-01T17:20:00Z',
            avatar: 'player'
        }
    ];
    
    comments['practice-session'] = [
        {
            id: 4,
            author: 'Coach Sarah',
            text: 'Excellent work on the shooting drills. Everyone showed improvement in accuracy.',
            time: '2024-11-28T14:15:00Z',
            avatar: 'coach'
        },
        {
            id: 5,
            author: 'David Kim',
            text: 'The new passing drill really helped with my timing. Can we practice more of those?',
            time: '2024-11-28T15:00:00Z',
            avatar: 'player'
        }
    ];
    
    comments['tactical-analysis'] = [
        {
            id: 6,
            author: 'Coach Michael',
            text: 'Key defensive moment at 8:45 - notice how we maintained formation under pressure.',
            time: '2024-11-25T10:30:00Z',
            avatar: 'coach'
        },
        {
            id: 7,
            author: 'Emma Davis',
            text: 'I see what you mean about the positioning. We need to work on our transition speed.',
            time: '2024-11-25T11:15:00Z',
            avatar: 'player'
        },
        {
            id: 8,
            author: 'Lisa Wang',
            text: 'The counter-attack at 6:20 was perfectly executed. Great teamwork!',
            time: '2024-11-25T12:00:00Z',
            avatar: 'player'
        }
    ];
}

function getVideoData(videoId) {
    const videoData = {
        'game-vs-thunder-sharks': {
            title: 'Game vs Thunder Sharks - Dec 1, 2024',
            description: 'Full game footage from our victory against Thunder Sharks. Great defensive plays and offensive execution.'
        },
        'practice-session': {
            title: 'Practice Session - Offensive Drills',
            description: 'Focus on offensive positioning and shooting accuracy. Coach Michael\'s tactical insights included.'
        },
        'tactical-analysis': {
            title: 'Tactical Analysis - Defensive Formation',
            description: 'Breakdown of our defensive strategies and positioning. Key moments and improvement areas highlighted.'
        }
    };
    
    return videoData[videoId] || {
        title: videoId,
        description: 'Video analysis and team discussion.'
    };
}

function getCurrentUser() {
    // In a real app, this would get the logged-in user
    const users = ['Coach Michael', 'Coach Sarah', 'Alex Rodriguez', 'Sarah Chen', 'Mike Johnson', 'Emma Davis', 'David Kim', 'Lisa Wang'];
    return users[Math.floor(Math.random() * users.length)];
}

function getRandomAvatar() {
    const avatars = ['coach', 'player'];
    return avatars[Math.floor(Math.random() * avatars.length)];
}

function formatTime(timeString) {
    const date = new Date(timeString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
}

function updateCommentCount(videoId) {
    const videoCard = document.querySelector(`[onclick*="${videoId}"]`).closest('.video-card');
    const commentCount = videoCard.querySelector('.video-stats span:last-child');
    const count = comments[videoId] ? comments[videoId].length : 0;
    commentCount.innerHTML = `<i class="fas fa-comment"></i> ${count} comments`;
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#0066cc'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add notification animations to CSS
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyles); 