
// Function to generate app cards
function generateAppCards() {
    const appsGrid = document.querySelector('.apps-grid');
    if (!appsGrid) return;

    appsGrid.innerHTML = apps.map(app => `
        <a href="${app.appStoreUrl}" class="app-card" aria-label="Download ${app.name} from the App Store">
            <div class="app-icon">
                <img src="${app.icon}" alt="${app.name} app icon" width="84" height="84">
            </div>
            <div class="app-content">
                <h2 class="app-name">${app.name}</h2>
                <p class="app-description">${app.description}</p>
                <p class="app-tagline">${app.tagline}</p>
            </div>
        </a>
    `).join('');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    generateAppCards();
    
    // Add smooth scrolling for anchor links
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

    // Add subtle animation on app cards hover
    document.querySelectorAll('.app-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}); 