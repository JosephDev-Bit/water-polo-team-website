# Aqua Warriors - Water Polo Team Website

A modern, responsive, and lightweight website for your water polo team. Built with HTML5, CSS3, and vanilla JavaScript.

## 🌊 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Lightweight**: Fast loading with optimized code
- **Accessible**: Keyboard navigation and screen reader friendly
- **Cross-browser Compatible**: Works on all modern browsers

## 📁 File Structure

```
water-polo-team-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Local server** (recommended): Use a local server for best performance
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve .`
   - PHP: `php -S localhost:8000`

## 🎨 Customization Guide

### Team Information

Edit the team details in `index.html`:

```html
<!-- Update team name -->
<h1 class="hero-title">Your Team Name</h1>

<!-- Update team stats -->
<div class="stat">
    <span class="stat-number">15</span>
    <span class="stat-label">Wins</span>
</div>
```

### Player Information

Update player cards in the team section:

```html
<div class="player-card">
    <div class="player-image">
        <i class="fas fa-user-circle"></i>
    </div>
    <h3>Player Name</h3>
    <p class="position">Position</p>
    <p class="number">#Number</p>
    <div class="player-stats">
        <span>Stat: Value</span>
        <span>Stat: Value</span>
    </div>
</div>
```

### Game Schedule

Update the schedule section:

```html
<div class="game-card">
    <div class="game-date">
        <span class="month">MONTH</span>
        <span class="day">DD</span>
    </div>
    <div class="game-info">
        <h3>vs. Opponent</h3>
        <p class="time">Time</p>
        <p class="venue">Venue</p>
    </div>
    <div class="game-status upcoming">Upcoming</div>
</div>
```

### Contact Information

Update contact details:

```html
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <div>
        <h3>Practice Location</h3>
        <p>Your Address<br>City, State ZIP</p>
    </div>
</div>
```

### Colors and Styling

Customize colors in `styles.css`:

```css
/* Primary colors */
:root {
    --primary-color: #0066cc;
    --secondary-color: #00ccff;
    --accent-color: #ffd700;
    --text-color: #333;
    --light-bg: #f8f9fa;
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎯 Key Features Explained

### Navigation
- Fixed navigation bar with blur effect
- Mobile hamburger menu
- Smooth scrolling to sections

### Hero Section
- Animated water waves
- Counter animations for stats
- Call-to-action button

### Team Section
- Player cards with hover effects
- Individual player statistics
- Responsive grid layout

### Schedule Section
- Game cards with status indicators
- Date formatting
- Hover animations

### Gallery Section
- Placeholder images (replace with actual photos)
- Click effects with ripple animation
- Responsive grid

### Contact Section
- Contact form with validation
- Contact information display
- Form submission handling

## 🔧 Advanced Customization

### Adding Real Images

Replace placeholder images in the gallery:

```html
<div class="gallery-item">
    <img src="path/to/your/image.jpg" alt="Description">
</div>
```

### Custom Animations

Add new animations in `styles.css`:

```css
@keyframes yourAnimation {
    from { /* starting state */ }
    to { /* ending state */ }
}
```

### Additional JavaScript Features

Add new functionality in `script.js`:

```javascript
// Example: Add a new event listener
document.querySelector('.your-element').addEventListener('click', function() {
    // Your code here
});
```

## 🌐 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch and folder
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be deployed instantly
3. Get a custom domain if needed

### Vercel
1. Connect your GitHub repository to Vercel
2. Automatic deployments on every push
3. Custom domain support

## 📊 Performance Tips

- Optimize images before adding them
- Use WebP format for better compression
- Minimize CSS and JavaScript in production
- Enable gzip compression on your server

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths and permissions
2. **Styles not applying**: Clear browser cache
3. **JavaScript errors**: Check browser console for errors
4. **Mobile menu not working**: Ensure JavaScript is enabled

### Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📞 Support

If you need help customizing your website:

1. Check this README for common solutions
2. Review the code comments for guidance
3. Test changes in a development environment first

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ for water polo teams everywhere!** 