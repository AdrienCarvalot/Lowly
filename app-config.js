// App configuration - Add new apps here!
const apps = [
    {
        id: 'tracky',
        name: 'Tracky',
        description: 'Simple Budget Planner',
        tagline: 'Create, reuse and manage budgets with envelopes',
        icon: 'dist/images/tracky-icon.svg',
        appStoreUrl: '#', // Replace with actual App Store URL
        color: '#FF6B35'
    },
    {
        id: 'lorcana',
        name: 'Lorcana TCG Scanner',
        description: 'Card Scanner',
        tagline: 'Scan Disney Lorcana trading cards to fetch set, edition, price data',
        icon: 'dist/images/lorcana-icon.svg',
        appStoreUrl: '#', // Replace with actual App Store URL
        color: '#6366F1'
    },
    {
        id: 'pokemon',
        name: 'Pokémon Card Scanner',
        description: 'Card Scanner',
        tagline: 'Recognize Pokémon cards by name and number, fetch data via Pokémon TCG API',
        icon: 'dist/images/pokemon-icon.svg',
        appStoreUrl: '#', // Replace with actual App Store URL
        color: '#EF4444'
    }
    // To add a new app, just copy this template and update the values:
    // {
    //     id: 'new-app',
    //     name: 'New App Name',
    //     description: 'App Category',
    //     tagline: 'Brief description of what the app does',
    //     icon: 'dist/images/new-app-icon.svg',
    //     appStoreUrl: 'https://apps.apple.com/app/your-app-id',
    //     color: '#YOUR_COLOR'
    // }
];

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