import { c as createComponent } from './astro-component_Ba8YDBP2.mjs';
import 'piccolore';
import { s as renderComponent, v as renderTemplate, q as maybeRenderHead } from './entrypoint_Cvffq3iJ.mjs';
import { $ as $$Layout } from './Layout_CQHiC_T6.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Our Clients - The Demski Group" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["   ", '<section class="clients-hero"> <div class="clients-hero-inner"> <div class="clients-hero-left"> <div class="clients-eyebrow">Case Studies</div> <h1>Success Speaks for Itself</h1> <p>See our portfolio of clients who improved their business with better software.</p> <a href="/contact-us/" class="btn-schedule">Schedule a Consultation</a> </div> <!-- Cards injected by JS --> <div class="clients-hero-right" id="hero-cards"> <div class="hero-card-skeleton"></div> <div class="hero-card-skeleton"></div> <div class="hero-card-skeleton"></div> </div> </div> </section>  <div class="brands-outer"> <div class="brands-wrap"> <div class="brands-label">Companies that trust our<br>experienced team</div> <div class="brands-logos"> <img src="https://demskigroup.com/wp-content/uploads/2024/06/logoswhite-1024x366.png" alt="companies we work with"> </div> </div> </div>  <section class="all-clients-section"> <div class="all-clients-inner"> <h2 class="all-clients-heading">\nOver 600 Projects Delivered Successfully.<br>Here Are Some of Our Clients.\n</h2> <!-- BIOPAC + 4 --> <div class="clients-top-wrap" id="biopac-section"> <div class="card-skeleton biopac-card" style="grid-row:span 2"></div> <div class="top-four-grid"> <div class="card-skeleton"></div> <div class="card-skeleton"></div> <div class="card-skeleton"></div> <div class="card-skeleton"></div> </div> </div> <!-- All remaining --> <div class="clients-main-grid" id="all-clients-grid"> ', ` </div> </div> </section>  <section class="clients-cta"> <div class="clients-cta-bg"></div> <div class="clients-cta-inner"> <h2>Ready to Become Our Next<br>Success Story?</h2> <div class="cta-btns"> <a href="/contact-us/" class="btn-orange">Contact Us</a> <a href="tel:+14068681034" class="btn-call"> <i class="fa-solid fa-phone-alt"></i> Call Us
</a> </div> </div> </section> <script>
(async function() {
  // ── Fetch from WP REST API (browser-side, works on any host) ──
  const WP_URLS = [
    'https://demskigroup.com/wp-json/wp/v2/our-clients',
    'https://demskigrdev.wpenginepowered.com/wp-json/wp/v2/our-clients',
  ];

  function clean(str) {
    return (str || '').replace(/&amp;/g,'&').replace(/&#8217;/g,"'")
      .replace(/&#8216;/g,"'").replace(/<[^>]*>/g,'').trim();
  }

  function normalizeLink(link, slug) {
    return (link || '')
      .replace('https://demskigrdev.wpenginepowered.com','')
      .replace('https://demskigroup.com','')
      || \`/our-clients/\${slug}/\`;
  }

  async function fetchClients() {
    for (const base of WP_URLS) {
      try {
        let all = [], page = 1, totalPages = 1;
        do {
          const res = await fetch(
            \`\${base}?_embed&per_page=100&page=\${page}\`
          );
          if (!res.ok) break;
          const tp = res.headers.get('X-WP-TotalPages');
          if (tp) totalPages = parseInt(tp);
          const data = await res.json();
          if (!Array.isArray(data) || !data.length) break;
          all = [...all, ...data];
          page++;
        } while (page <= totalPages);

        if (all.length > 0) return all.map(item => ({
          id:    item.id,
          name:  clean(item.title?.rendered),
          slug:  item.slug || '',
          link:  normalizeLink(item.link, item.slug),
          photo: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
          desc:  clean(item.excerpt?.rendered).replace(/\\[&hellip;\\]/g,''),
        }));
      } catch(e) { continue; }
    }
    return [];
  }

  function heroCard(c, tall) {
    const style = c.photo ? \`background-image:url('\${c.photo}')\` : 'background:#0a1628';
    return \`<a class="hero-img-card" href="\${c.link}" \${tall ? 'style="grid-row:span 2"' : ''}>
      <div class="hero-img-card-bg" style="\${style}"></div>
      <div class="hero-img-card-content">
        <div class="hero-img-card-name">\${c.name}</div>
        <span class="hero-img-card-link">Read case study →</span>
      </div>
    </a>\`;
  }

  function clientCard(c) {
    const img = c.photo
      ? \`<img src="\${c.photo}" alt="\${c.name}" loading="lazy" />\`
      : \`<span class="client-card-name">\${c.name}</span>\`;
    return \`<a class="client-card" href="\${c.link}">
      <div class="client-card-img-wrap">\${img}</div>
      <span class="client-card-link">Read full case study →</span>
    </a>\`;
  }

  // Fetch
  const clients = await fetchClients();
  if (!clients.length) return;

  // ── Hero cards ──
  const biopacSlugs = ['hewlett-packard-enterprise', 'willo', 'farmers-daughter-fibers'];
  let heroCards = biopacSlugs.map(s => clients.find(c => c.slug === s)).filter(Boolean);
  if (heroCards.length < 2) heroCards = clients.filter(c => c.photo).slice(0, 3);

  const heroEl = document.getElementById('hero-cards');
  if (heroEl && heroCards.length) {
    heroEl.innerHTML = heroCards.slice(0,3).map((c,i) => heroCard(c, i===0)).join('');
  }

  // ── BIOPAC section ──
  const biopac = clients.find(c => c.slug?.includes('biopac')) || clients[0];
  const others = clients.filter(c => c.id !== biopac?.id);
  const topFour = others.slice(0, 4);
  const rest = others.slice(4);

  const biopacDesc = biopac?.desc?.length > 20
    ? biopac.desc
    : 'The Demski Group successfully delivered a scalable and efficient web application for Biopac, enabling users to perform and track scientific studies online.';

  const biopacLogoHtml = biopac?.photo
    ? \`<img src="\${biopac.photo}" alt="\${biopac.name}" style="height:64px;object-fit:contain;filter:brightness(0) invert(1)" />\`
    : \`<span class="biopac-name-text">\${biopac?.name || ''}</span>\`;

  const biopacSection = document.getElementById('biopac-section');
  if (biopacSection && biopac) {
    biopacSection.innerHTML = \`
      <a class="biopac-card" href="\${biopac.link}" style="grid-row:span 2">
        <div class="biopac-logo">\${biopacLogoHtml}</div>
        <p class="biopac-desc">\${biopacDesc}</p>
        <span class="biopac-link">Read full case study →</span>
      </a>
      <div class="top-four-grid">
        \${topFour.map(c => clientCard(c)).join('')}
      </div>
    \`;
  }

  // ── All remaining clients ──
  const grid = document.getElementById('all-clients-grid');
  if (grid) {
    grid.innerHTML = rest.map(c => clientCard(c)).join('');
  }
})();
<\/script> `], ["   ", '<section class="clients-hero"> <div class="clients-hero-inner"> <div class="clients-hero-left"> <div class="clients-eyebrow">Case Studies</div> <h1>Success Speaks for Itself</h1> <p>See our portfolio of clients who improved their business with better software.</p> <a href="/contact-us/" class="btn-schedule">Schedule a Consultation</a> </div> <!-- Cards injected by JS --> <div class="clients-hero-right" id="hero-cards"> <div class="hero-card-skeleton"></div> <div class="hero-card-skeleton"></div> <div class="hero-card-skeleton"></div> </div> </div> </section>  <div class="brands-outer"> <div class="brands-wrap"> <div class="brands-label">Companies that trust our<br>experienced team</div> <div class="brands-logos"> <img src="https://demskigroup.com/wp-content/uploads/2024/06/logoswhite-1024x366.png" alt="companies we work with"> </div> </div> </div>  <section class="all-clients-section"> <div class="all-clients-inner"> <h2 class="all-clients-heading">\nOver 600 Projects Delivered Successfully.<br>Here Are Some of Our Clients.\n</h2> <!-- BIOPAC + 4 --> <div class="clients-top-wrap" id="biopac-section"> <div class="card-skeleton biopac-card" style="grid-row:span 2"></div> <div class="top-four-grid"> <div class="card-skeleton"></div> <div class="card-skeleton"></div> <div class="card-skeleton"></div> <div class="card-skeleton"></div> </div> </div> <!-- All remaining --> <div class="clients-main-grid" id="all-clients-grid"> ', ` </div> </div> </section>  <section class="clients-cta"> <div class="clients-cta-bg"></div> <div class="clients-cta-inner"> <h2>Ready to Become Our Next<br>Success Story?</h2> <div class="cta-btns"> <a href="/contact-us/" class="btn-orange">Contact Us</a> <a href="tel:+14068681034" class="btn-call"> <i class="fa-solid fa-phone-alt"></i> Call Us
</a> </div> </div> </section> <script>
(async function() {
  // ── Fetch from WP REST API (browser-side, works on any host) ──
  const WP_URLS = [
    'https://demskigroup.com/wp-json/wp/v2/our-clients',
    'https://demskigrdev.wpenginepowered.com/wp-json/wp/v2/our-clients',
  ];

  function clean(str) {
    return (str || '').replace(/&amp;/g,'&').replace(/&#8217;/g,"'")
      .replace(/&#8216;/g,"'").replace(/<[^>]*>/g,'').trim();
  }

  function normalizeLink(link, slug) {
    return (link || '')
      .replace('https://demskigrdev.wpenginepowered.com','')
      .replace('https://demskigroup.com','')
      || \\\`/our-clients/\\\${slug}/\\\`;
  }

  async function fetchClients() {
    for (const base of WP_URLS) {
      try {
        let all = [], page = 1, totalPages = 1;
        do {
          const res = await fetch(
            \\\`\\\${base}?_embed&per_page=100&page=\\\${page}\\\`
          );
          if (!res.ok) break;
          const tp = res.headers.get('X-WP-TotalPages');
          if (tp) totalPages = parseInt(tp);
          const data = await res.json();
          if (!Array.isArray(data) || !data.length) break;
          all = [...all, ...data];
          page++;
        } while (page <= totalPages);

        if (all.length > 0) return all.map(item => ({
          id:    item.id,
          name:  clean(item.title?.rendered),
          slug:  item.slug || '',
          link:  normalizeLink(item.link, item.slug),
          photo: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
          desc:  clean(item.excerpt?.rendered).replace(/\\\\[&hellip;\\\\]/g,''),
        }));
      } catch(e) { continue; }
    }
    return [];
  }

  function heroCard(c, tall) {
    const style = c.photo ? \\\`background-image:url('\\\${c.photo}')\\\` : 'background:#0a1628';
    return \\\`<a class="hero-img-card" href="\\\${c.link}" \\\${tall ? 'style="grid-row:span 2"' : ''}>
      <div class="hero-img-card-bg" style="\\\${style}"></div>
      <div class="hero-img-card-content">
        <div class="hero-img-card-name">\\\${c.name}</div>
        <span class="hero-img-card-link">Read case study →</span>
      </div>
    </a>\\\`;
  }

  function clientCard(c) {
    const img = c.photo
      ? \\\`<img src="\\\${c.photo}" alt="\\\${c.name}" loading="lazy" />\\\`
      : \\\`<span class="client-card-name">\\\${c.name}</span>\\\`;
    return \\\`<a class="client-card" href="\\\${c.link}">
      <div class="client-card-img-wrap">\\\${img}</div>
      <span class="client-card-link">Read full case study →</span>
    </a>\\\`;
  }

  // Fetch
  const clients = await fetchClients();
  if (!clients.length) return;

  // ── Hero cards ──
  const biopacSlugs = ['hewlett-packard-enterprise', 'willo', 'farmers-daughter-fibers'];
  let heroCards = biopacSlugs.map(s => clients.find(c => c.slug === s)).filter(Boolean);
  if (heroCards.length < 2) heroCards = clients.filter(c => c.photo).slice(0, 3);

  const heroEl = document.getElementById('hero-cards');
  if (heroEl && heroCards.length) {
    heroEl.innerHTML = heroCards.slice(0,3).map((c,i) => heroCard(c, i===0)).join('');
  }

  // ── BIOPAC section ──
  const biopac = clients.find(c => c.slug?.includes('biopac')) || clients[0];
  const others = clients.filter(c => c.id !== biopac?.id);
  const topFour = others.slice(0, 4);
  const rest = others.slice(4);

  const biopacDesc = biopac?.desc?.length > 20
    ? biopac.desc
    : 'The Demski Group successfully delivered a scalable and efficient web application for Biopac, enabling users to perform and track scientific studies online.';

  const biopacLogoHtml = biopac?.photo
    ? \\\`<img src="\\\${biopac.photo}" alt="\\\${biopac.name}" style="height:64px;object-fit:contain;filter:brightness(0) invert(1)" />\\\`
    : \\\`<span class="biopac-name-text">\\\${biopac?.name || ''}</span>\\\`;

  const biopacSection = document.getElementById('biopac-section');
  if (biopacSection && biopac) {
    biopacSection.innerHTML = \\\`
      <a class="biopac-card" href="\\\${biopac.link}" style="grid-row:span 2">
        <div class="biopac-logo">\\\${biopacLogoHtml}</div>
        <p class="biopac-desc">\\\${biopacDesc}</p>
        <span class="biopac-link">Read full case study →</span>
      </a>
      <div class="top-four-grid">
        \\\${topFour.map(c => clientCard(c)).join('')}
      </div>
    \\\`;
  }

  // ── All remaining clients ──
  const grid = document.getElementById('all-clients-grid');
  if (grid) {
    grid.innerHTML = rest.map(c => clientCard(c)).join('');
  }
})();
<\/script> `])), maybeRenderHead(), Array(8).fill(0).map(() => renderTemplate`<div class="card-skeleton"></div>`)) })}`;
}, "C:/Users/shreya/wordpress-astro/src/pages/our-clients/index.astro", void 0);

const $$file = "C:/Users/shreya/wordpress-astro/src/pages/our-clients/index.astro";
const $$url = "/our-clients";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
