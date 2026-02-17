# Anup Parekh - Portfolio Website

Professional portfolio website showcasing product design and strategy work.

## Overview

This is a modern, responsive portfolio website built with clean HTML5, CSS3, and vanilla JavaScript. The site showcases case studies, testimonials, and projects in an elegant, minimalist design.

## Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── refsix.html             # REFSIX case study page
├── avalara.html            # Avalara case study page
├── server.py               # Local dev server (clean URL support)
├── .htaccess               # Apache server configuration
├── robots.txt              # Search engine crawling rules
├── sitemap.xml             # XML sitemap for SEO
├── humans.txt              # Credits and team information
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   ├── main.js             # JavaScript functionality
│   ├── config.js           # Environment config (gitignored)
│   └── config.example.js   # Config template
├── assets/
│   └── images/
│       ├── casestudies/    # Case study images
│       ├── logos/           # Company logos
│       └── profile/         # Profile images
└── .well-known/
    ├── security.txt        # Security contact information
    └── change-password     # Password change URL
```

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern CSS**: Uses CSS Grid, Flexbox, and CSS Variables
- **Smooth Scrolling**: Animated smooth scrolling navigation
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- **Performance**: Gzip compression, browser caching, and optimized assets
- **Security**: Security headers and best practices implemented
- **Accessibility**: Semantic HTML and ARIA attributes

## Sections

1. **Hero**: Introduction and profile image
2. **Worked With**: Logo showcase of companies and brands
3. **Case Studies**: Detailed project case studies (REFSIX, Avalara)
4. **Testimonials**: Client testimonials and reviews
5. **Contact**: Contact form for inquiries

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Variables)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)
- Apache (.htaccess configuration)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Local Development

1. Clone the repository
2. Copy `js/config.example.js` to `js/config.js` and add your Formsubmit key
3. Run the local dev server: `python3 server.py`
4. Open `http://localhost:8000`

The local server supports clean URLs (e.g. `/refsix` serves `refsix.html`), matching the `.htaccess` rewrite rules on production.

## Installation

1. Upload all files to your web hosting root directory
2. Ensure your server supports Apache with mod_rewrite enabled
3. Create `js/config.js` with your production Formsubmit key (see `config.example.js`)
4. Update the domain name in:
   - `sitemap.xml`
   - `robots.txt`
   - `.well-known/security.txt`
   - `index.html` (Open Graph and canonical URLs)
5. Add your own favicon files to the root directory

## Configuration

### SEO Configuration

Update the following files with your actual domain:
- `sitemap.xml`: Update all URLs with your domain
- `robots.txt`: Update sitemap URL
- `index.html`: Update canonical URL and Open Graph tags

### Contact Form

The contact form uses [Formsubmit.co](https://formsubmit.co/) to send submissions via email. Configuration:

1. Copy `js/config.example.js` to `js/config.js`
2. Replace `your-formsubmit-key-here` with your Formsubmit key
3. `config.js` is gitignored so each environment (local, production) can use its own key

### Analytics

To add Google Analytics or other tracking:
1. Add the tracking script before the closing `</head>` tag in `index.html`
2. Ensure you comply with GDPR/privacy regulations

## Customization

### Colors

The color scheme is defined in CSS variables in `css/style.css`:

```css
:root {
    --bg-dark: #0a0a0a;
    --bg-light: #ffffff;
    --text-primary: #0a0a0a;
    --text-secondary: #666666;
    --accent: #0a0a0a;
    --border: #e5e5e5;
}
```

### Content

Update content directly in `index.html`:
- Replace placeholder text
- Update image URLs
- Add your own case studies and projects

## Performance Optimization

The site includes several performance optimizations:
- Gzip compression
- Browser caching (1 year for static assets)
- Minification ready (minify CSS and JS before production)
- Lazy loading support (commented out in `main.js`)

## Security

Security features implemented:
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- HTTPS redirect (commented out in .htaccess - enable when SSL is configured)
- Hidden file protection
- .well-known/security.txt for responsible disclosure

## License

Copyright © 2026 Anup Parekh. All rights reserved.

## Contact

For inquiries, please use the contact form on the website or visit [anupparekh.com](https://www.anupparekh.com)

---

Made with ❤️
