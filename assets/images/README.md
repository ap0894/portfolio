# Images Directory

This directory should contain all local image assets for the website.

## Current Setup

The website currently uses externally hosted images from `anupparekhcom.wstd.io`. If you want to host images locally, download them and place them in this directory.

## Recommended Image Structure

```
images/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── profile/
│   └── headshot.jpeg
├── logos/
│   ├── avalara.svg
│   ├── amex.svg
│   ├── refsix.png
│   └── scorza.png
├── case-studies/
│   ├── refsix-journey.png
│   └── avalara-hero.jpg
├── testimonials/
│   ├── client-1.jpg
│   ├── client-2.jpg
│   ├── client-3.jpg
│   └── client-4.jpg
├── projects/
│   ├── project-1.jpg
│   ├── project-2.jpg
│   ├── project-3.jpg
│   └── project-4.jpg
└── icons/
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png
    ├── icon-384x384.png
    └── icon-512x512.png
```

## Image Optimization Tips

1. **Format**: Use modern formats like WebP for better compression
2. **Size**: Optimize images before uploading (use tools like TinyPNG, ImageOptim)
3. **Dimensions**: Resize images to their display dimensions
4. **Compression**: Balance quality and file size (80-85% quality is usually good)
5. **Lazy Loading**: Consider implementing lazy loading for better performance

## Favicon

Generate favicons using tools like:
- https://realfavicongenerator.net/
- https://favicon.io/

Place generated files in the root directory.

## PWA Icons

For Progressive Web App support, create icons in various sizes:
- 72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512

## Updating Image References

If you move images to this local directory, update the image paths in:
- `index.html` (all `<img>` tags)
- Any future pages that use images

Example change:
```html
<!-- Before (external) -->
<img src="https://anupparekhcom.wstd.io/cgi/image/..." alt="...">

<!-- After (local) -->
<img src="/assets/images/profile/headshot.jpg" alt="...">
```
