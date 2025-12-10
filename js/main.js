/**
 * Portfolio Website JavaScript - Anup Parekh
 * Main functionality for interactive features
 */

// ==========================================================================
// Smooth Scroll Navigation
// ==========================================================================

/**
 * Enable smooth scrolling for all anchor links
 */
function initSmoothScroll() {
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
}

// ==========================================================================
// Contact Form Handler
// ==========================================================================

/**
 * Handle contact form submission
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Validate form data
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (!validatePhone(phone)) {
                alert('Please enter a valid phone number.');
                return;
            }

            // Here you would typically send this data to a server
            // For now, we'll just log it and show a success message
            console.log('Form submitted:', { phone, email, message });

            // Show success message
            alert('Thank you for your message! I will get back to you soon.');

            // Reset form
            this.reset();
        });
    }
}

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Validate phone format (basic validation)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return phone.length >= 10 && re.test(phone);
}

// ==========================================================================
// Navigation Scroll Effect
// ==========================================================================

/**
 * Add shadow effect to navigation on scroll
 */
function initNavigationEffect() {
    let lastScroll = 0;
    const nav = document.querySelector('nav');

    if (nav) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            } else {
                nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }

            lastScroll = currentScroll;
        });
    }
}

// ==========================================================================
// Scroll Animation Observer
// ==========================================================================

/**
 * Animate elements on scroll into view
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    const cards = document.querySelectorAll('.case-study-card, .testimonial-card, .project-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// ==========================================================================
// Image Loading Error Handler
// ==========================================================================

/**
 * Handle image loading errors gracefully
 */
function initImageErrorHandling() {
    const images = document.querySelectorAll('img[onerror]');
    images.forEach(img => {
        if (!img.complete || img.naturalHeight === 0) {
            img.addEventListener('error', function() {
                this.style.display = 'none';
                if (this.parentElement.classList.contains('placeholder-img')) {
                    this.parentElement.innerHTML = this.alt || 'Image';
                }
            });
        }
    });
}

// ==========================================================================
// Initialization
// ==========================================================================

/**
 * Initialize all functionality when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    initSmoothScroll();
    initContactForm();
    initNavigationEffect();
    initScrollAnimations();
    initImageErrorHandling();

    console.log('Portfolio website initialized successfully');
});

// ==========================================================================
// Performance Optimization
// ==========================================================================

/**
 * Lazy load images for better performance
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    // Uncomment below if you want to use lazy loading
    // document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}
