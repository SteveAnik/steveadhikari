// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navCenter = document.querySelector('.nav-center');

    if (menuBtn && navCenter) {
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

    // Navbar hide/show effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        
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
}); 