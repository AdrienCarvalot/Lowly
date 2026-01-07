// main.js — theme toggle + render app cards with screenshots
(function () {
  /* ------------------------- Theme setup ------------------------- */
  const root = document.documentElement;
  const stored = localStorage.getItem('lowly-theme');
  root.setAttribute('data-theme', stored === 'dark' ? 'dark' : 'light');

  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('lowly-theme', next);
    });
  }

  /* --------------------- Guard: apps data exists --------------------- */
  if (typeof APPS === 'undefined') {
    console.warn('APPS is not defined. Did apps.js load?');
    return;
  }

  /* --------------------------- DOM targets --------------------------- */
  const grid = document.getElementById('apps-grid');
  if (!grid) return;

  /* ---------------------------- Helpers ----------------------------- */

  // Add gradient fades to the screenshot strip only after the user scrolls
  function enableScreensFades(el) {
    let touched = false;
    const update = () => {
      const canScroll = el.scrollWidth > el.clientWidth + 1;
      el.classList.toggle('scrolling', touched && canScroll && el.scrollLeft > 0);
    };
    el.addEventListener('scroll', () => { touched = true; update(); }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  // Reveal-on-scroll (stagger with --stagger)
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  function observeStaticReveals() {
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }

  function createShot(src, alt) {
    const wrap = document.createElement('div');
    wrap.className = 'shot';
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = src;
    img.alt = alt;
    wrap.appendChild(img);
    return wrap;
  }

  // Apply per-app accent (card tint + button color/gradient)
  function applyAccent(card, app, storeBtn) {
    if (Array.isArray(app.accent) && app.accent.length) {
      const stops = app.accent.join(', ');
      const flat  = `linear-gradient(90deg, ${stops})`;
      const oklab = `linear-gradient(90deg in oklab, ${stops})`;
      storeBtn.style.backgroundImage = flat;   // fallback
      storeBtn.style.backgroundImage = oklab;  // override when supported
      storeBtn.style.color = '#fff';
      storeBtn.style.border = '0';
      storeBtn.style.backgroundSize = '100% 100%';
      storeBtn.style.backgroundClip = 'padding-box';
    } else if (typeof app.accent === 'string') {
      storeBtn.style.background = app.accent;
      storeBtn.style.color = '#fff';
      storeBtn.style.border = '0';
    }

    const baseAccent = Array.isArray(app.accent)
      ? app.accent[0]
      : (app.accent || 'var(--accent)');

    card.style.setProperty('--app-accent', baseAccent);
    card.style.background = `color-mix(in oklab, var(--card) 94%, ${baseAccent} 6%)`;
  }

  // Card-level click to open the landing page, without affecting inner links
  function enableCardLink(card, app) {
    if (!app.landing) return;
    card.classList.add('is-link');
    card.setAttribute('role', 'link');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Open ${app.name} details`);

    const navigate = () => {
      window.location.href = app.landing;
    };

    card.addEventListener('click', (event) => {
      if (event.target.closest('a')) return;
      navigate();
    });

    card.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter') return;
      if (event.target.closest('a')) return;
      event.preventDefault();
      navigate();
    });
  }

  /* --------------------------- Card builder -------------------------- */
  function createCard(app, index) {
    const card = document.createElement('article');
    card.className = 'card reveal';
    card.style.setProperty('--stagger', index);

    // header row
    const head = document.createElement('div');
    head.className = 'card-head';

    const icon = document.createElement('div');
    icon.className = 'icon';
    if (app.icon) {
      const img = document.createElement('img');
      img.src = app.icon;
      img.alt = `${app.name} icon`;
      icon.appendChild(img);
    } else {
      const letter = document.createElement('span');
      letter.textContent = app.name.trim().charAt(0).toUpperCase();
      icon.appendChild(letter);
    }

    const titleWrap = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = app.name;
    const tagline = document.createElement('p');
    tagline.textContent = app.tagline || '';
    titleWrap.appendChild(title);
    titleWrap.appendChild(tagline);
    if (app.landing) {
      const landingLink = document.createElement('a');
      landingLink.className = 'card-link';
      landingLink.href = app.landing;
      landingLink.textContent = 'Learn more';
      landingLink.setAttribute('aria-label', `Learn more about ${app.name}`);
      titleWrap.appendChild(landingLink);
    }

    // actions (App Store button) — create BEFORE appending to head
    const actions = document.createElement('div');
    actions.className = 'actions';
    const storeBtn = document.createElement('a');
    storeBtn.className = 'btn primary';
    storeBtn.href = app.url;
    storeBtn.target = '_blank';
    storeBtn.rel = 'noopener';
    storeBtn.textContent = 'View on the App Store';
    actions.appendChild(storeBtn);

    // assemble header: [icon] [title/tagline] .......... [button]
    head.appendChild(icon);
    head.appendChild(titleWrap);
    head.appendChild(actions);

    // header onto card
    card.appendChild(head);

    // screenshots strip
    if (Array.isArray(app.screenshots) && app.screenshots.length) {
      const screens = document.createElement('div');
      screens.className = 'screens';
      app.screenshots.forEach((src, i) => {
        screens.appendChild(createShot(src, `${app.name} screenshot ${i + 1}`));
      });
      card.appendChild(screens);
      // optional fades behavior
      enableScreensFades(screens);
    }

    // apply accent now that button exists
    applyAccent(card, app, storeBtn);
    enableCardLink(card, app);

    io.observe(card);
    return card;
  }

  /* ----------------------------- Render ------------------------------ */
  observeStaticReveals();
  APPS.forEach((app, i) => grid.appendChild(createCard(app, i)));
})();
