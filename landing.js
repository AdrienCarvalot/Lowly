const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const storedTheme = localStorage.getItem('lowly-theme');
const systemPrefersDark =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme =
    storedTheme === 'dark' || storedTheme === 'light'
        ? storedTheme
        : (systemPrefersDark ? 'dark' : 'light');

root.setAttribute('data-theme', initialTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', nextTheme);
        localStorage.setItem('lowly-theme', nextTheme);
    });
}

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
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    revealOnScroll.observe(el);
});

const copyBtn = document.getElementById('copy-link-btn');
const toast = document.getElementById('toast');

if (copyBtn && toast && navigator.clipboard) {
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    });
}

const header = document.querySelector('.glass-header');
if (header) {
    window.addEventListener('scroll', () => {
        header.style.padding = window.scrollY > 50 ? '10px 0' : '15px 0';
    });
}
