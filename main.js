/* ═══════════════════════════════════════════════
   Marius Bock — main.js
   ═══════════════════════════════════════════════ */

const $ = id => document.getElementById(id);

async function json(path) {
  const r = await fetch(path);
  if (!r.ok) throw new Error(`Cannot load ${path} (${r.status})`);
  return r.json();
}

/* ── Icon SVGs ── */
const I = {
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  scholar: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
};

/* ════════════════════════════════
   PROFILE
   ════════════════════════════════ */
async function loadProfile() {
  const p = await json('config/profile.json');

  // Hero photo — show initials until image loads, hide on error
  const photo = $('hero-photo');
  const init  = $('hero-photo-init');
  if (p.photo) {
    photo.src = p.photo;
    photo.onload  = () => { photo.classList.add('loaded'); init.style.display = 'none'; };
    photo.onerror = () => { photo.style.display = 'none'; }; // keep initials visible
  }

  $('hero-name').textContent  = p.name        || '';
  $('hero-role').textContent  = p.title       || '';
  $('hero-affil').textContent = p.affiliation || '';

  // Social buttons in hero
  const socials = $('hero-socials');
  (p.links || []).forEach(lk => {
    const a = document.createElement('a');
    a.href = lk.url; a.target = '_blank'; a.rel = 'noopener noreferrer';
    a.className = 'social-btn';
    a.innerHTML = `${I[lk.icon] || I.link}<span>${lk.label}</span>`;
    socials.appendChild(a);
  });

  // About bio
  const ab = $('about-body');
  (p.bio || []).forEach(para => {
    const el = document.createElement('p');
    el.innerHTML = para;
    ab.appendChild(el);
  });

  // Footer
  const fn = $('footer-name');
  if (fn) fn.textContent = p.name || '';
  const cy = $('copy-year');
  if (cy) cy.textContent = new Date().getFullYear();

  // Footer socials
  const fs = $('footer-socials');
  if (fs) {
    (p.links || []).slice(0, 5).forEach(lk => {
      const a = document.createElement('a');
      a.href = lk.url; a.target = '_blank'; a.rel = 'noopener noreferrer';
      a.className = 'footer-social'; a.title = lk.label;
      a.innerHTML = I[lk.icon] || I.link;
      fs.appendChild(a);
    });
  }

  // Contact button — email assembled in JS only (anti-scraping)
  const btn = $('contact-btn');
  if (btn) {
    const { email_user, email_domain, email_tld } = p.contact || {};
    if (email_user && email_domain && email_tld) {
      btn.addEventListener('click', () => {
        window.location.href = 'mailto:' + email_user + '\u0040' + email_domain + '.' + email_tld;
      });
    }
  }
  const cs = $('contact-sub');
  if (cs && p.contact?.sub) cs.textContent = p.contact.sub;
  const ct = $('contact-title');
  if (ct && p.contact?.title) ct.textContent = p.contact.title;
}

/* ════════════════════════════════
   NEWS  (compact, in hero panel)
   ════════════════════════════════ */
async function loadNews() {
  const data = await json('config/news.json');
  const news = data.news || [];
  const INIT = 5;
  const list = $('compact-news');

  news.forEach((item, i) => {
    const li = document.createElement('li');
    li.className = 'cn-item fi' + (i >= INIT ? ' hidden' : '');
    const body = item.link
      ? `${item.text_before || ''}<a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.link_text || 'link'}</a>${item.text_after || ''}`
      : (item.text || '');
    li.innerHTML = `<span class="cn-date">${item.date}</span><span class="cn-text">${body}</span>`;
    list.appendChild(li);
  });

  if (news.length > INIT) {
    const btn = document.createElement('button');
    btn.className = 'show-more';
    btn.textContent = `Show ${news.length - INIT} more`;
    list.after(btn);
    btn.addEventListener('click', () => {
      list.querySelectorAll('.hidden').forEach(el => el.classList.remove('hidden'));
      btn.remove();
      triggerAnim();
    });
  }
}

/* ════════════════════════════════
   PUBLICATIONS
   ════════════════════════════════ */
async function loadPublications() {
  const data = await json('config/publications.json');
  const pubs = data.publications || [];
  const container = $('pub-container');
  const MAX = 10;

  const highlights = pubs.filter(p => p.highlight);
  const others     = pubs.filter(p => !p.highlight);

  /* ── shared helpers ── */
  const thumbHTML = pub => pub.image
    ? `<img src="${pub.image}" alt="${pub.title}" loading="lazy">`
    : `<div class="pub-thumb-ph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>`;

  const linksHTML = (pub, compact) => (pub.links || []).map((lk, i) =>
    `<a href="${lk.url}" target="_blank" rel="noopener noreferrer"
       class="pub-link${i === 0 ? ' primary' : ''}${compact ? ' compact' : ''}">${lk.label}</a>`
  ).join('');

  const awardHTML = pub => pub.award
    ? `<span class="pub-award-badge">★ ${pub.award}</span>` : '';

  /* ── show-more helper ── */
  function attachShowMore(listEl, items, renderFn, shown) {
    if (items.length <= shown) return;
    const remaining = items.length - shown;
    const btn = document.createElement('button');
    btn.className = 'show-more pub-show-more';
    btn.textContent = `Show ${remaining} more`;
    listEl.after(btn);
    btn.addEventListener('click', () => {
      items.slice(shown).forEach(pub => listEl.appendChild(renderFn(pub)));
      btn.remove();
      triggerAnim();
    });
  }

  /* ════════════════
     HIGHLIGHTS — 2-column compact grid
     ════════════════ */
  const hlSection = document.createElement('div');
  hlSection.className = 'pub-section';
  hlSection.innerHTML = `
    <div class="pub-section-header">
      <h3 class="pub-section-title">Highlights</h3>
      <span class="pub-section-count">${highlights.length} papers</span>
    </div>
    <div class="pub-hl-grid" id="pub-hl-grid"></div>`;
  container.appendChild(hlSection);
  const hlGrid = hlSection.querySelector('#pub-hl-grid');

  const makeHlCard = pub => {
    const card = document.createElement('div');
    card.className = 'pub-hl-card fi';
    card.innerHTML = `
      <div class="pub-hl-thumb">${thumbHTML(pub)}</div>
      <div class="pub-hl-body">
        <div class="pub-top">
          <span class="pub-venue">${pub.venue || ''}</span>${awardHTML(pub)}
        </div>
        <div class="pub-title">${pub.title}</div>
        <div class="pub-authors">${pub.authors_html || pub.authors || ''}</div>
        <div class="pub-links">${linksHTML(pub, true)}</div>
      </div>`;
    return card;
  };

  highlights.slice(0, MAX).forEach(pub => hlGrid.appendChild(makeHlCard(pub)));
  attachShowMore(hlGrid, highlights, makeHlCard, MAX);

  /* ════════════════
     OTHERS — original single-column list, grouped by year
     ════════════════ */
  const otherSection = document.createElement('div');
  otherSection.className = 'pub-section pub-section-others';
  otherSection.innerHTML = `
    <div class="pub-section-header">
      <h3 class="pub-section-title">Other Publications</h3>
      <span class="pub-section-count">${others.length} papers</span>
    </div>
    <div class="pub-others-list" id="pub-others-list"></div>`;
  container.appendChild(otherSection);
  const othersList = otherSection.querySelector('#pub-others-list');

  /* group others by year */
  const byYear = {};
  others.forEach(p => { const y = p.year || 'Other'; (byYear[y] ||= []).push(p); });
  const years = Object.keys(byYear).sort((a, b) => b - a);

  /* flat ordered list for show-more counting */
  const othersFlat = years.flatMap(yr => byYear[yr]);

  /* render a year group containing only the given pubs */
  function renderYearGroup(yr, pubs) {
    const grp = document.createElement('div');
    grp.className = 'pub-year-group';
    grp.innerHTML = `<div class="pub-year-label">${yr}</div><div class="pub-list"></div>`;
    const listEl = grp.querySelector('.pub-list');
    pubs.forEach(pub => {
      const card = document.createElement('div');
      card.className = 'pub-card fi';
      card.innerHTML = `
        <div class="pub-thumb">${thumbHTML(pub)}</div>
        <div class="pub-body">
          <div class="pub-top"><span class="pub-venue">${pub.venue || ''}</span>${awardHTML(pub)}</div>
          <div class="pub-title">${pub.title}</div>
          <div class="pub-authors">${pub.authors_html || pub.authors || ''}</div>
          ${pub.links?.length ? `<div class="pub-links">${linksHTML(pub, false)}</div>` : ''}
        </div>`;
      listEl.appendChild(card);
    });
    return grp;
  }

  /* render up to MAX others, respecting year grouping */
  let rendered = 0;
  for (const yr of years) {
    if (rendered >= MAX) break;
    const slice = byYear[yr].slice(0, MAX - rendered);
    othersList.appendChild(renderYearGroup(yr, slice));
    rendered += slice.length;
  }

  /* show-more for others — renders remaining year groups */
  if (othersFlat.length > MAX) {
    const remaining = othersFlat.length - rendered;
    const btn = document.createElement('button');
    btn.className = 'show-more pub-show-more';
    btn.textContent = `Show ${remaining} more`;
    othersList.after(btn);
    btn.addEventListener('click', () => {
      let skip = rendered;
      for (const yr of years) {
        const alreadyShown = Math.min(byYear[yr].length, Math.max(0, skip));
        skip -= alreadyShown;
        if (alreadyShown < byYear[yr].length) {
          othersList.appendChild(renderYearGroup(yr, byYear[yr].slice(alreadyShown)));
        }
      }
      btn.remove();
      triggerAnim();
    });
  }
}

/* ════════════════════════════════
   TALKS
   ════════════════════════════════ */
async function loadTalks() {
  const data = await json('config/talks.json');
  const talks = data.talks || [];
  const cont = $('talks-container');

  const byYear = {};
  talks.forEach(t => { const y = t.year || 'Other'; (byYear[y] ||= []).push(t); });

  Object.keys(byYear).sort((a, b) => b - a).forEach(yr => {
    const grp = document.createElement('div');
    grp.className = 'talk-year-group';
    grp.innerHTML = `<div class="talk-year-label">${yr}</div>`;
    cont.appendChild(grp);

    byYear[yr].forEach(t => {
      const links = (t.links || []).map(l =>
        `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="talk-link">${l.label}</a>`
      ).join('');
      const row = document.createElement('div');
      row.className = 'talk-row fi';
      row.innerHTML = `
        <span class="talk-date-col">${t.date_short || ''}</span>
        <div class="talk-body">
          <div class="talk-title">${t.title}</div>
          <div class="talk-venue"><span class="talk-type-badge">${t.type || 'Talk'}</span>${t.venue}${t.location ? `, ${t.location}` : ''}</div>
          ${links ? `<div class="talk-links">${links}</div>` : ''}
        </div>`;
      grp.appendChild(row);
    });
  });
}

/* ════════════════════════════════
   SERVICES
   ════════════════════════════════ */
async function loadServices() {
  const data = await json('config/services.json');
  const grid = $('services-grid');
  (data.services || []).forEach(s => {
    const card = document.createElement('div');
    card.className = 'service-card fi';
    card.innerHTML = `
      <div class="service-category">${s.category || ''}</div>
      <div class="service-title">${s.title}</div>
      <div class="service-detail">${s.detail || ''}</div>`;
    grid.appendChild(card);
  });
}

/* ════════════════════════════════
   AWARDS
   ════════════════════════════════ */
async function loadAwards() {
  const data = await json('config/awards.json');
  const list = $('awards-list');
  (data.awards || []).forEach(a => {
    const item = document.createElement('div');
    item.className = 'award-item fi';
    item.innerHTML = `
      <div class="award-year">${a.year || ''}</div>
      <div class="award-icon">${a.emoji || '🏆'}</div>
      <div class="award-body">
        <div class="award-title">${a.title}</div>
        <div class="award-org">${a.org || ''}</div>
      </div>`;
    list.appendChild(item);
  });
}

/* ════════════════════════════════
   TEACHING  (compact rows)
   ════════════════════════════════ */
async function loadTeaching() {
  const data = await json('config/teaching.json');
  const compact = $('teaching-compact');
  (data.courses || []).forEach(c => {
    const row = document.createElement('div');
    row.className = 'tc-item fi';
    row.innerHTML = `
      <span class="tc-year">${c.year || ''}</span>
      <span class="tc-title">${c.title}</span>
      <span class="tc-inst">${c.institution || ''}</span>
      <span class="tc-level">${c.level || ''}</span>`;
    compact.appendChild(row);
  });
}

/* ════════════════════════════════
   NAVBAR
   ════════════════════════════════ */
function initNavbar() {
  const nb  = $('navbar');
  const bur = $('burger');
  const nl  = $('nav-links');

  function onScroll() {
    nb.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  bur.addEventListener('click', () => {
    const open = nl.classList.toggle('open');
    bur.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nl').forEach(l =>
    l.addEventListener('click', () => {
      nl.classList.remove('open');
      bur.setAttribute('aria-expanded', 'false');
    })
  );

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nl');
  function highlightNav() {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) cur = s.id; });
    links.forEach(l => {
      const href = l.getAttribute('href');
      // match both the section id and inline anchors (#about, #news map to #home)
      const match = href === `#${cur}` || (cur === 'home' && (href === '#about' || href === '#news'));
      l.classList.toggle('active', match);
    });
  }
  window.addEventListener('scroll', highlightNav, { passive: true });
}

/* ════════════════════════════════
   SCROLL ANIMATIONS
   ════════════════════════════════ */
function triggerAnim() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('v'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.06 });
  document.querySelectorAll('.fi:not(.v)').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('v');
    else obs.observe(el);
  });
}

/* ════════════════════════════════
   BOOT
   ════════════════════════════════ */
async function init() {
  initNavbar();

  const safe = (fn, label) => fn().catch(e => console.warn(`[${label}]`, e.message));

  await safe(loadProfile, 'profile');
  await Promise.allSettled([
    safe(loadNews,         'news'),
    safe(loadPublications, 'publications'),
    safe(loadTalks,        'talks'),
    safe(loadServices,     'services'),
    safe(loadAwards,       'awards'),
    safe(loadTeaching,     'teaching'),
  ]);

  requestAnimationFrame(triggerAnim);
  window.addEventListener('scroll', triggerAnim, { passive: true });
}

document.addEventListener('DOMContentLoaded', init);
