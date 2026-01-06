// 1. Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href === '#' || href === '#top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        let target = null;
        try {
            target = document.querySelector(href);
        } catch (err) {
            return;
        }
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Offset for sticky header
                behavior: 'smooth'
            });
        }
    });
});

// 2. Intersection Observer for 'Float Up' scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    revealOnScroll.observe(el);
});

// 3. Copy Link & Toast Notification
const copyBtn = document.getElementById('copy-link-btn');
const toast = document.getElementById('toast');

copyBtn.addEventListener('click', () => {
    const url = window.location.href;
    
    navigator.clipboard.writeText(url).then(() => {
        // Show Toast
        toast.classList.add('show');
        
        // Hide Toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});

// 4. Header shrink effect on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.glass-header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
    } else {
        header.style.padding = '15px 0';
    }
});
