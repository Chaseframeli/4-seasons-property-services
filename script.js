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

// Hero Video Handling
function initHeroVideo() {
    const heroVideo = document.querySelector('.hero-video');
    
    if (heroVideo) {
        // Ensure video is muted and loops
        heroVideo.muted = true;
        heroVideo.loop = true;
        heroVideo.playsInline = true;
        
        // Handle video loading
        heroVideo.addEventListener('loadeddata', () => {
            console.log('Hero video loaded successfully');
        });
        
        // Handle video errors
        heroVideo.addEventListener('error', (e) => {
            console.error('Video loading error:', e);
            // Fallback: hide video container and show background
            const videoContainer = document.querySelector('.hero-video-container');
            if (videoContainer) {
                videoContainer.style.display = 'none';
            }
        });
        
        // Ensure video plays on mobile devices
        heroVideo.addEventListener('canplay', () => {
            heroVideo.play().catch(e => {
                console.log('Auto-play prevented:', e);
                // Video will still be visible but may not auto-play on some mobile devices
            });
        });
        
        // Pause video when not visible to save resources
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    heroVideo.play().catch(e => console.log('Play prevented:', e));
                } else {
                    heroVideo.pause();
                }
            });
        }, { threshold: 0.1 });
        
        videoObserver.observe(heroVideo);
    }
}

// Gallery Filtering for Before & After Section
const beforeAfterFilterButtons = document.querySelectorAll('#before-after .filter-btn');
const beforeAfterGalleryItems = document.querySelectorAll('#before-after .gallery-item');

beforeAfterFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons in this section
        beforeAfterFilterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        const galleryGrid = document.querySelector('#before-after .gallery-grid');
        
        // Immediately hide all items first
        beforeAfterGalleryItems.forEach(item => {
            item.classList.add('hidden');
            item.classList.remove('visible');
        });
        
        // Convert NodeList to Array for sorting
        const itemsArray = Array.from(beforeAfterGalleryItems);
        
        // Sort items: filtered items first, then others
        itemsArray.sort((a, b) => {
            const aCategory = a.getAttribute('data-category');
            const bCategory = b.getAttribute('data-category');
            
            const aMatches = filter === 'all' || aCategory === filter;
            const bMatches = filter === 'all' || bCategory === filter;
            
            if (aMatches && !bMatches) return -1;
            if (!aMatches && bMatches) return 1;
            return 0;
        });
        
        // Reorder items in the DOM
        itemsArray.forEach(item => {
            galleryGrid.appendChild(item);
        });
        
        // Show only the filtered items
        beforeAfterGalleryItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                item.classList.remove('hidden');
                item.classList.add('visible');
            }
        });
    });
});

// Gallery Filtering for Work Gallery Section
const workFilterButtons = document.querySelectorAll('#work .filter-btn');
const workGalleryItems = document.querySelectorAll('#work .gallery-item');

workFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons in this section
        workFilterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        const galleryGrid = document.querySelector('#work .gallery-grid');
        
        // Immediately hide all items first
        workGalleryItems.forEach(item => {
            item.classList.add('hidden');
            item.classList.remove('visible');
        });
        
        // Convert NodeList to Array for sorting
        const itemsArray = Array.from(workGalleryItems);
        
        // Sort items: filtered items first, then others
        itemsArray.sort((a, b) => {
            const aCategory = a.getAttribute('data-category');
            const bCategory = b.getAttribute('data-category');
            
            const aMatches = filter === 'all' || aCategory === filter;
            const bMatches = filter === 'all' || bCategory === filter;
            
            if (aMatches && !bMatches) return -1;
            if (!aMatches && bMatches) return 1;
            return 0;
        });
        
        // Reorder items in the DOM
        itemsArray.forEach(item => {
            galleryGrid.appendChild(item);
        });
        
        // Show only the filtered items
        workGalleryItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                item.classList.remove('hidden');
                item.classList.add('visible');
            }
        });
    });
});

// FAQ Accordion Functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other FAQ items
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Contact Form Handling
const estimateForm = document.getElementById('estimateForm');

estimateForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !phone || !service || !message) {
        showMessage('Please fill in all fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
        showMessage('Please enter a valid phone number.', 'error');
        return;
    }
    
    // Simulate form submission (replace with actual backend integration)
    showMessage('Thank you! Your estimate request has been sent. We will contact you within 24 hours.', 'success');
    
    // Clear form
    this.reset();
    
    // Log form data (for development - remove in production)
    console.log('Estimate Request:', {
        name,
        email,
        phone,
        service,
        message,
        timestamp: new Date().toISOString()
    });
});

// Show success/error messages
function showMessage(message, type) {
    // Remove any existing messages
    const existingMessage = document.querySelector('.success-message, .error-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `${type}-message`;
    messageDiv.textContent = message;
    
    // Insert after form
    const form = document.getElementById('estimateForm');
    form.parentNode.insertBefore(messageDiv, form.nextSibling);
    
    // Auto-remove message after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
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
    const animatedElements = document.querySelectorAll('.service-card, .about-content, .contact-content, .gallery-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Initialize gallery items as visible
    beforeAfterGalleryItems.forEach(item => {
        item.classList.add('visible');
    });
    workGalleryItems.forEach(item => {
        item.classList.add('visible');
    });
    
    // Initialize hero video
    initHeroVideo();
});

// Service selection enhancement
const serviceSelect = document.getElementById('service');
const messageTextarea = document.getElementById('message');

// Add placeholder text based on service selection
serviceSelect.addEventListener('change', () => {
    const selectedService = serviceSelect.value;
    let placeholderText = 'Tell us about your project...';
    
    switch(selectedService) {
        case 'lawn-care':
            placeholderText = 'Tell us about your lawn care needs (e.g., mowing frequency, lawn size, specific issues)...';
            break;
        case 'retaining-walls':
            placeholderText = 'Tell us about your retaining wall project (e.g., height, length, material preference, purpose)...';
            break;
        case 'concrete':
            placeholderText = 'Tell us about your concrete project (e.g., driveway, patio, walkway, decorative work)...';
            break;
        case 'landscaping':
            placeholderText = 'Tell us about your landscaping project (e.g., design preferences, plant types, hardscaping needs)...';
            break;
        case 'tree-removal':
            placeholderText = 'Tell us about your tree removal needs (e.g., tree size, location, stump grinding, emergency services)...';
            break;
        case 'multiple':
            placeholderText = 'Tell us about your multiple service needs and project timeline...';
            break;
    }
    
    messageTextarea.placeholder = placeholderText;
});

// Phone number formatting
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        if (value.length <= 3) {
            value = `(${value}`;
        } else if (value.length <= 6) {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else {
            value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }
    }
    e.target.value = value;
});

// Add loading state to form submission
function setFormLoading(loading) {
    const submitButton = estimateForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    if (loading) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        submitButton.style.opacity = '0.7';
    } else {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
        submitButton.style.opacity = '1';
    }
}

// Enhanced form submission with loading state
estimateForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    setFormLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
        // Your actual form submission logic here
        showMessage('Thank you! Your estimate request has been sent. We will contact you within 24 hours.', 'success');
        this.reset();
        setFormLoading(false);
    }, 1500);
});

// Add hover effects to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click-to-call functionality
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', (e) => {
        // Add click tracking if needed
        console.log('Phone number clicked:', link.href);
    });
});

// Add click-to-email functionality
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', (e) => {
        // Add click tracking if needed
        console.log('Email clicked:', link.href);
    });
});

// Initialize tooltips for better UX
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = e.target.dataset.tooltip;
            document.body.appendChild(tooltip);
            
            const rect = e.target.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        });
        
        element.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Initialize tooltips when DOM is loaded
document.addEventListener('DOMContentLoaded', initTooltips);

// Add scroll-to-top functionality
function addScrollToTop() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #4a7c59;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    document.body.appendChild(scrollButton);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    });
    
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll-to-top button
document.addEventListener('DOMContentLoaded', addScrollToTop);

// Gallery image lazy loading
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is loaded
document.addEventListener('DOMContentLoaded', initLazyLoading); 