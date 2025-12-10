# Anup Parekh - Portfolio Website

Professional portfolio website showcasing product design and strategy work.

## Overview

This is a modern, responsive portfolio website built with clean HTML5, CSS3, and vanilla JavaScript. The site showcases case studies, testimonials, and projects in an elegant, minimalist design.

## Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── .htaccess              # Apache server configuration
├── robots.txt             # Search engine crawling rules
├── sitemap.xml            # XML sitemap for SEO
├── humans.txt             # Credits and team information
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
├── assets/
│   └── images/            # Image assets directory
└── .well-known/
    ├── security.txt       # Security contact information
    └── change-password    # Password change URL
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
3. **Case Studies**: Detailed project case studies
4. **Testimonials**: Client testimonials and reviews
5. **Projects**: Recent work showcase
6. **Contact**: Contact form for inquiries

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

## Installation

1. Upload all files to your web hosting root directory
2. Ensure your server supports Apache with mod_rewrite enabled
3. Update the domain name in:
   - `sitemap.xml`
   - `robots.txt`
   - `.well-known/security.txt`
   - `index.html` (Open Graph and canonical URLs)
4. Add your own favicon files to the root directory
5. Update contact email and any placeholder content

## Configuration

### SEO Configuration

Update the following files with your actual domain:
- `sitemap.xml`: Update all URLs with your domain
- `robots.txt`: Update sitemap URL
- `index.html`: Update canonical URL and Open Graph tags

### Contact Form

The contact form currently logs to console. To make it functional, you'll need to:
1. Set up a backend endpoint to handle form submissions
2. Update the form handler in `js/main.js`
3. Consider using services like Formspree, Netlify Forms, or your own backend

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

Copyright © 2025 Anup Parekh. All rights reserved.

## Contact

For inquiries, please use the contact form on the website or visit [anupparekh.com](https://www.anupparekh.com)

---

Made with ❤️
