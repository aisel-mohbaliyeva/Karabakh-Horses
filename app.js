

document.addEventListener('DOMContentLoaded', () => {

    // ---- Navbar scroll effect ----
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ---- Hamburger Menu ----
    const hamburger = document.getElementById('hamburger');
    const navMenu   = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            hamburger.classList.remove('active');
        });
    });

    // ---- Read More Modal ----
    const readMoreBtn  = document.getElementById('readMoreBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose   = document.getElementById('modalClose');

    readMoreBtn.addEventListener('click', () => {
        modalOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    const closeModal = () => {
        modalOverlay.classList.remove('show');
        document.body.style.overflow = '';
    };

    modalClose.addEventListener('click', closeModal);

    // Close on overlay click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('show')) {
            closeModal();
        }
    });

    // ---- Scroll to Top ----
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ---- Horse Card Fade-in on Scroll (IntersectionObserver) ----
    const cards = document.querySelectorAll('.horse-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Stagger the animation slightly per card
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 120);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    cards.forEach(card => observer.observe(card));

    // ---- Active nav link highlight on scroll ----
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    }, { rootMargin: `-${navbar.offsetHeight}px 0px -60% 0px`, threshold: 0 });

    sections.forEach(section => sectionObserver.observe(section));

});