// ============================================
// POLONIA — APP.JS  (13 languages)
// ============================================

window.CURRENT_LANG = 'pl';

document.addEventListener('DOMContentLoaded', () => {

  // LOADER
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1400);

  // LANG PANEL
  const langToggle     = document.getElementById('langToggle');
  const langPanel      = document.getElementById('langPanel');
  const langOverlay    = document.getElementById('langOverlay');
  const langPanelClose = document.getElementById('langPanelClose');
  const langGrid       = document.getElementById('langGrid');
  const langFlag       = document.getElementById('langFlag');
  const langNameEl     = document.getElementById('langName');

  Object.entries(LANG_META).forEach(([code, meta]) => {
    const btn = document.createElement('button');
    btn.className = 'lang-option';
    btn.dataset.lang = code;
    btn.innerHTML = `<span class="lo-flag">${meta.flag}</span><span class="lo-name">${meta.name}</span>`;
    btn.addEventListener('click', () => { setLang(code); closeLangPanel(); });
    langGrid.appendChild(btn);
  });

  function openLangPanel() { langPanel.classList.add('open'); langOverlay.classList.add('open'); }
  function closeLangPanel() { langPanel.classList.remove('open'); langOverlay.classList.remove('open'); }

  langToggle.addEventListener('click', openLangPanel);
  langPanelClose.addEventListener('click', closeLangPanel);
  langOverlay.addEventListener('click', closeLangPanel);

  // UI element IDs that map directly to translation keys
  const UI_IDS = [
    'logoSub','hero_eyebrow','hero_line1','hero_line2','hero_desc',
    'btn_open_map','btn_year_circle','scroll_down',
    'stat_years','stat_events','stat_months','stat_langs',
    'nav_map','nav_traditions','nav_history','nav_culture','nav_about',
    'sec1_title','sec1_desc','sec2_title','sec2_desc',
    'sec3_title','sec3_desc','sec4_title','sec4_desc',
    'legend_title','legend_battles','legend_capitals','legend_culture_leg','legend_tragedies',
    'filter_all','filter_piast','filter_jagiello','filter_rzecz','filter_modern',
    'about_title','about_desc','footer_tagline',
    'cult_music_title','cult_music_desc','cult_food_title','cult_food_desc',
    'cult_folk_title','cult_folk_desc','cult_lit_title','cult_lit_desc',
    'cult_dance_title','cult_dance_desc','cult_char_title','cult_char_desc',
  ];

  function setLang(lang) {
    window.CURRENT_LANG = lang;
    const meta = LANG_META[lang];
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', meta.dir || 'ltr');
    langFlag.textContent = meta.flag;
    langNameEl.textContent = meta.name;
    document.querySelectorAll('.lang-option').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

    UI_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const trans = TRANSLATIONS[lang];
      const val = (trans && trans[id]) || (TRANSLATIONS['pl'] && TRANSLATIONS['pl'][id]);
      if (val) el.textContent = val;
    });

    renderMonthNav();
    renderMonthContent(currentMonth);
    renderTimeline();
    buildLangsAll();
    if (currentEventData) showEventPanel(currentEventData);
  }
  window.setLang = setLang;

  function buildLangsAll() {
    const el = document.getElementById('langsAll');
    if (!el) return;
    el.innerHTML = Object.entries(LANG_META).map(([code, meta]) =>
      `<button class="lang-pill ${code === window.CURRENT_LANG ? 'active' : ''}" onclick="setLang('${code}')">${meta.flag} ${meta.name}</button>`
    ).join('');
  }

  // MAP
  const map = L.map('main-map', { center: [52.0, 19.5], zoom: 6 });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap', maxZoom: 18
  }).addTo(map);

  const markerColors = { battle:'#DC143C', capital:'#C9963A', culture:'#4CAF50', tragedy:'#7B2D8B' };

  function makeIcon(type) {
    const c = markerColors[type] || '#C9963A';
    return L.divIcon({
      className: '',
      html: `<div style="width:14px;height:14px;border-radius:50%;background:${c};border:2px solid rgba(255,255,255,0.5);box-shadow:0 0 8px ${c}88,0 2px 6px rgba(0,0,0,0.5);cursor:pointer;"></div>`,
      iconSize: [14,14], iconAnchor: [7,7]
    });
  }

  let markers = [], currentEventData = null;
  const eventPanel = document.getElementById('eventPanel');

  function showEventPanel(ev) {
    currentEventData = ev;
    const lang = window.CURRENT_LANG;
    const fb = obj => obj[lang] || obj.pl || obj.ru || '';
    document.getElementById('eventYear').textContent  = ev.year;
    document.getElementById('eventTitle').textContent = fb(ev.title);
    document.getElementById('eventDesc').textContent  = fb(ev.desc);
    document.getElementById('eventTags').innerHTML = ev.tags.map(tag => `<span class="event-tag">${tag}</span>`).join('');
    eventPanel.classList.add('open');
  }

  document.getElementById('eventClose').addEventListener('click', () => {
    eventPanel.classList.remove('open'); currentEventData = null;
  });

  function renderMarkers(filter = 'all') {
    markers.forEach(m => m.remove()); markers = [];
    MAP_EVENTS.forEach(ev => {
      if (filter !== 'all' && ev.era !== filter) return;
      // лёгкое "дрожание" координат, чтобы события в одном городе не слипались в одну точку
      const jitterBase = 0.05;
      const jLat = ((ev.id % 3) - 1) * jitterBase;            // -0.05, 0 или +0.05°
      const jLng = ((ev.id % 5) - 2) * (jitterBase * 0.8);    // шаги по долготе
      const markerLat = ev.lat + jLat;
      const markerLng = ev.lng + jLng;
      const marker = L.marker([markerLat, markerLng], { icon: makeIcon(ev.type) });
      marker.on('click', () => showEventPanel(ev));
      marker.addTo(map); markers.push(marker);
    });
  }
  renderMarkers();

  document.querySelectorAll('.map-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.map-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMarkers(btn.dataset.filter);
      eventPanel.classList.remove('open'); currentEventData = null;
    });
  });

  // CALENDAR
  let currentMonth = 0;
  const MONTH_KEYS = ['month_jan','month_feb','month_mar','month_apr','month_may','month_jun',
                      'month_jul','month_aug','month_sep','month_oct','month_nov','month_dec'];
  const ROMAN = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
  const SEASON_COLORS = { winter:'#5B8CB8', spring:'#6BAF7A', summer:'#E8B84B', autumn:'#C97B4A' };
  const SEASON_ICONS  = { winter:'❄️', spring:'🌸', summer:'☀️', autumn:'🍂' };
  const SEASON_KEYS   = { winter:'season_winter', spring:'season_spring', summer:'season_summer', autumn:'season_autumn' };

  function tl(lang, key) {
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || (TRANSLATIONS['pl'] && TRANSLATIONS['pl'][key]) || key;
  }
  function fb(lang, obj) {
    return obj[lang] || obj.pl || obj.ru || '';
  }

  function renderMonthNav() {
    const lang = window.CURRENT_LANG;
    const nav = document.getElementById('monthsNav');
    nav.innerHTML = MONTH_KEYS.map((key, i) => `
      <button class="month-btn ${i === currentMonth ? 'active' : ''}" data-month="${i}">
        <span class="month-num">${ROMAN[i]}</span>
        <span class="month-name">${tl(lang, key)}</span>
      </button>
    `).join('');
    nav.querySelectorAll('.month-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        nav.querySelectorAll('.month-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentMonth = parseInt(btn.dataset.month);
        renderMonthContent(currentMonth);
      });
    });
  }

  function renderMonthContent(idx) {
    const data = CALENDAR_DATA[idx];
    const lang = window.CURRENT_LANG;
    const monthName   = tl(lang, MONTH_KEYS[idx]);
    const seasonLabel = `${SEASON_ICONS[data.season]} ${tl(lang, SEASON_KEYS[data.season])}`;

    const holidaysHTML = data.holidays.map(h => `
      <div class="holiday-item">
        <span class="holiday-emoji">${h.emoji}</span>
        <div class="holiday-date">${fb(lang, h.date)}</div>
        <div class="holiday-name">${fb(lang, h.name)}</div>
        <div class="holiday-desc">${fb(lang, h.desc)}</div>
      </div>
    `).join('');

    document.getElementById('monthContent').innerHTML = `
      <div class="month-display-name">${monthName}</div>
      <div class="month-season" style="color:${SEASON_COLORS[data.season]}">${seasonLabel}</div>
      <div class="holiday-list">${holidaysHTML}</div>
    `;
  }

  // TIMELINE
  function renderTimeline() {
    const lang = window.CURRENT_LANG;
    document.getElementById('timeline').innerHTML = TIMELINE_DATA.map((item, i) => `
      <div class="timeline-item" style="animation-delay:${i*0.04}s">
        <div class="tl-year">${item.year}</div>
        <div class="tl-title">${fb(lang, item.title)}</div>
        <div class="tl-desc">${fb(lang, item.desc)}</div>
        <span class="tl-tag ${item.tag}">${item.tag}</span>
      </div>
    `).join('');
  }

  // SCROLL ANIMATIONS
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.culture-card, .stat').forEach(el => {
    el.style.opacity='0'; el.style.transform='translateY(20px)';
    el.style.transition='opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  window.addEventListener('scroll', () => {
    document.getElementById('siteHeader').classList.toggle('scrolled', window.scrollY > 60);
  });

  // INIT
  setLang('pl');
});
