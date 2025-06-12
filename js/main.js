// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Footer scroll animation
function handleFooterVisibility() {
    const footer = document.querySelector('.footer-bottom');
    if (!footer) return;
    
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const footerHeight = footer.offsetHeight;
    
    // Show footer when user is near the bottom of the page
    if (scrollPosition >= documentHeight - footerHeight - 50) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
    
    // Special case for when the page is not scrollable (content is smaller than viewport)
    if (documentHeight <= window.innerHeight) {
        footer.classList.add('visible');
    }
}

// Throttle scroll events for better performance
let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            handleFooterVisibility();
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Initial check in case the page loads at the bottom
window.addEventListener('load', handleFooterVisibility);
window.addEventListener('resize', handleFooterVisibility);

// Initial check
handleFooterVisibility();

// Add fade-in animation to sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navCenter = document.querySelector('.nav-center');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        navCenter.classList.toggle('active');
        document.body.style.overflow = navCenter.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('open');
            navCenter.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Matrix Background Effect
function createMatrixEffect() {
    const container = document.querySelector('.matrix-bg');
    if (!container) return; // Exit if no container found
    
    // Clear any existing canvas
    container.innerHTML = '';
    
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    // Matrix characters - only 0's and 1's
    const matrix = '01';
    const fontSize = 14;
    let columns = 0;
    let drops = [];
    
    // Set canvas to full container size
    function resizeCanvas() {
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        
        // Recalculate columns when resizing
        columns = Math.floor(canvas.width / fontSize);
        
        // Reset drops array with new column count
        drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100; // Start drops at random positions
        }
    }
    
    // Initialize canvas styles
    canvas.style.display = 'block';
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    
    // Set initial size
    resizeCanvas();
    
    // Add resize listener with debounce
    let resizeTimer;
    const handleResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            resizeCanvas();
        }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Drawing the characters
    function draw() {
        // Darker background with opacity for trail effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Set style for the characters (bright blue)
        ctx.fillStyle = '#00ffff';
        ctx.font = fontSize + 'px monospace';
        
        // Loop over drops
        for (let i = 0; i < drops.length; i++) {
            // Random character (0 or 1)
            const text = matrix[Math.floor(Math.random() * matrix.length)];
            
            // x = i * fontSize, y = value of drops[i] * fontSize
            const x = i * fontSize;
            const y = drops[i] * fontSize;
            
            // Only draw if the character would be visible
            if (y > 0 && y < canvas.height) {
                // Add slight opacity variation for depth effect
                ctx.globalAlpha = Math.random() * 0.5 + 0.5;
                ctx.fillText(text, x, y);
                ctx.globalAlpha = 1;
            }
            
            // Reset drop to top when it reaches bottom or randomly
            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            // Move the drop down (smaller increment = slower fall)
            if (Math.random() > 0.7) {
                drops[i] += 0.5;
            }
        }
        
        // Call the animation loop
        requestAnimationFrame(draw);
    }
    
    // Start the animation
    draw();
}

// Initialize matrix effect when the page loads
if (document.querySelector('.matrix-bg')) {
    createMatrixEffect();
}

// Navbar hide/show effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('hide');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('hide')) {
        // Scrolling down
        navbar.classList.add('hide');
    } else if (currentScroll < lastScroll && navbar.classList.contains('hide')) {
        // Scrolling up
        navbar.classList.remove('hide');
    }
    
    lastScroll = currentScroll;
});

// Contact Form Validation and Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form elements
        const nameInput = this.querySelector('input[type="text"]');
        const emailInput = this.querySelector('input[type="email"]');
        const messageInput = this.querySelector('textarea');
        const submitButton = this.querySelector('button[type="submit"]');
        
        // Basic validation
        let isValid = true;
        const errors = [];
        
        // Name validation
        if (!nameInput.value.trim()) {
            errors.push('Name is required');
            isValid = false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
            errors.push('Valid email is required');
            isValid = false;
        }
        
        // Message validation
        if (!messageInput.value.trim()) {
            errors.push('Message is required');
            isValid = false;
        }
        
        if (!isValid) {
            // Show errors
            const errorDiv = document.createElement('div');
            errorDiv.className = 'form-errors';
            errorDiv.innerHTML = errors.map(error => `<p>${error}</p>`).join('');
            
            // Remove any existing error messages
            const existingErrors = contactForm.querySelector('.form-errors');
            if (existingErrors) {
                existingErrors.remove();
            }
            
            contactForm.insertBefore(errorDiv, submitButton);
            return;
        }
        
        // Disable submit button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        try {
            // Here you would typically send the form data to your server
            // For now, we'll simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            const successDiv = document.createElement('div');
            successDiv.className = 'form-success';
            successDiv.innerHTML = '<p>Message sent successfully! I\'ll get back to you soon.</p>';
            contactForm.insertBefore(successDiv, submitButton);
            
            // Reset form
            contactForm.reset();
            
        } catch (error) {
            // Show error message
            const errorDiv = document.createElement('div');
            errorDiv.className = 'form-errors';
            errorDiv.innerHTML = '<p>Sorry, there was an error sending your message. Please try again later.</p>';
            contactForm.insertBefore(errorDiv, submitButton);
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.innerHTML = 'Send Message';
        }
    });
}

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});
