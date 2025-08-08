# Lowly - Simple iOS Apps

A beautiful, minimalist landing page showcasing Lowly's user-friendly iOS applications.

## Apps

- **Tracky**: Simple Budget Planner – create, reuse and manage budgets with envelopes
- **Lorcana TCG Scanner**: Scan Disney Lorcana trading cards to fetch set, edition, price data
- **Pokémon Card Scanner**: Recognize Pokémon cards by name and number, fetch data via Pokémon TCG API

## Features

- 🎨 **Minimalist Design**: Clean, Apple-inspired interface with white background and ample whitespace
- 📱 **Mobile-First**: Responsive design that works perfectly on all devices
- ♿ **Accessible**: Full keyboard navigation, screen reader support, and ARIA labels
- 🌙 **Dark Mode**: Automatic dark mode support based on system preferences
- ⚡ **Fast**: Lightweight CSS with no external frameworks
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML
- 🔧 **Modular**: Easy to add new apps by updating a simple configuration file

## Development

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/AdrienCarvalot/Lowly.git
cd Lowly
```

2. Open `index.html` in your browser or serve it locally:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000` in your browser

### Adding New Apps

The website uses a modular system that makes it incredibly easy to add new apps. Simply edit the `app-config.js` file:

```javascript
const apps = [
    // ... existing apps ...
    {
        id: 'new-app',
        name: 'New App Name',
        description: 'App Category',
        tagline: 'Brief description of what the app does',
        icon: 'dist/images/new-app-icon.svg',
        appStoreUrl: 'https://apps.apple.com/app/your-app-id',
        color: '#YOUR_COLOR'
    }
];
```

**Steps to add a new app:**

1. **Add app icon**: Place your app icon (84x84px SVG recommended) in `dist/images/`
2. **Update configuration**: Add a new entry to the `apps` array in `app-config.js`
3. **Update App Store URL**: Replace the placeholder URL with your actual App Store link
4. **Done!** The app will automatically appear on the website

### Customization

#### App Store Links
Update the `appStoreUrl` values in `app-config.js`:

```javascript
{
    id: 'tracky',
    appStoreUrl: 'https://apps.apple.com/app/tracky/id123456789'
}
```

#### App Icons
Replace the placeholder SVG icons in `dist/images/` with your actual app icons:
- `tracky-icon.svg` - Tracky app icon
- `lorcana-icon.svg` - Lorcana TCG Scanner app icon  
- `pokemon-icon.svg` - Pokémon Card Scanner app icon

#### Colors
The primary accent color is `#ff6b35` (orange). You can customize this in `styles.css` by updating the CSS custom properties and gradient values.

## Design System

### Colors
- **Primary**: `#ff6b35` (Orange)
- **Background**: `#ffffff` (White)
- **Text**: `#1d1d1f` (Dark Gray)
- **Secondary Text**: `#86868b` (Light Gray)
- **Borders**: `#f2f2f2` (Very Light Gray)

### Typography
- **Font Family**: Inter (with system font fallbacks)
- **Headlines**: 700 weight, large sizes
- **Body Text**: 400-500 weight, medium sizes
- **Accent Text**: 500 weight, uppercase, letter-spaced

### Layout
- **Container**: Max-width 800px, centered
- **Apps**: Vertical list layout, scalable for unlimited apps
- **Spacing**: Generous padding and margins throughout
- **Responsive**: Mobile-first with tablet and desktop breakpoints

## Deployment

### GitHub Pages

1. Push your changes to the main branch
2. Go to your repository settings
3. Navigate to "Pages" in the sidebar
4. Select "Deploy from a branch" and choose the main branch
5. Your site will be available at `https://yourusername.github.io/Lowly`

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command to empty (not needed for static site)
3. Set publish directory to `.` (root)
4. Deploy!

### Vercel

1. Import your GitHub repository to Vercel
2. Vercel will automatically detect it as a static site
3. Deploy with default settings

## File Structure

```
Lowly/
├── index.html          # Main landing page
├── styles.css          # All styles
├── app-config.js       # App configuration (add new apps here!)
├── dist/
│   └── images/
│       ├── logo.svg    # Lowly logo
│       ├── tracky-icon.svg
│       ├── lorcana-icon.svg
│       └── pokemon-icon.svg
└── README.md
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

ISC License - see LICENSE file for details.

## Contact

For questions or feedback, email us at [contact@lowly.fr](mailto:contact@lowly.fr)