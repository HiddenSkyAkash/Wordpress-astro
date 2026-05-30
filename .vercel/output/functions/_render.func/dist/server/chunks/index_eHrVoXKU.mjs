import { c as createComponent } from './astro-component_Ba8YDBP2.mjs';
import 'piccolore';
import { s as renderComponent, v as renderTemplate, k as addAttribute, q as maybeRenderHead } from './entrypoint_Cvffq3iJ.mjs';
import { $ as $$Layout } from './Layout_CQHiC_T6.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const assetBase = "/solutions/sales-lead-tracking-tools";
  const deliverables = [
    ["fa-table-cells-large", "Real-Time Lead Management", "Centralize your inbound leads from every channel — web forms, email, phone, and live chat — into one unified interface. Track lead sources, assign ownership, and monitor performance in real time to reduce response times and boost conversions."],
    ["fa-square-check", "Custom Sales Pipelines", "We build pipelines that match your actual sales process — not the other way around. Create deal stages that reflect your workflows, automate handoffs, and keep your team aligned from first touch to close."],
    ["fa-layer-group", "AI-Powered Prioritization", "Leverage data-driven scoring and intelligent suggestions to surface your most promising opportunities. Our tools use AI to help your team focus on the leads most likely to convert, maximizing time and ROI."],
    ["fa-laptop-code", "Continuous Engagement Tools", "Never let a lead fall through the cracks. We can integrate tools like SMS, live chat, and automated call routing (e.g. Twilio, Pusher) to ensure a real human touchpoint — even when your main rep is unavailable."],
    ["fa-shield-halved", "Mobile & Remote Access", "Sales doesn't just happen at a desk. Our solutions are fully responsive and mobile-ready, giving your team instant access to their pipeline from anywhere."]
  ];
  const services = [
    ["fa-route", "Sales Process Consulting", "We work with your team to map your existing workflows, identify gaps, and design a smarter, streamlined process from first contact to close."],
    ["fa-head-side-virus", "Solution Design & Prototyping", "Our team designs interfaces, data flows, and pipeline structures that fit your business model — including clickable prototypes for stakeholder feedback before development begins."],
    ["fa-arrow-trend-up", "Custom Software Development", "We build scalable, secure systems tailored to your stack, integrating with CRMs like Salesforce or HubSpot, communication platforms, and internal tools."],
    ["fa-code-branch", "Systems Integration", "Need to sync leads with your ERP or legacy software? We develop custom APIs and integrations that ensure smooth data flow and long-term compatibility."],
    ["fa-headset", "Implementation & Training", "Once deployed, we guide your team through onboarding, workflow testing, and adoption. We also provide documentation and optional training sessions to keep everyone aligned."]
  ];
  const strategicBenefits = [
    ["fa-table-cells-large", "Greater Team Collaboration", "With all lead and customer data in one place, your sales and marketing teams can work from a single source of truth — improving communication, accountability, and performance."],
    ["fa-square-check", "Higher Conversion Rates", "From smarter lead scoring to intelligent follow-up tools, we help your team convert more leads into paying customers."],
    ["fa-layer-group", "Scalable, Secure Architecture", "Our tools are built for growth, with secure user access controls and the flexibility to integrate with CRMs, ERPs, or proprietary systems through custom APIs."],
    ["fa-laptop-code", "Continuous Engagement Tools", "Never let a lead fall through the cracks. We can integrate tools like SMS, live chat, and automated call routing (e.g. Twilio, Pusher) to ensure a real human touchpoint — even when your main rep is unavailable."],
    ["fa-shield-halved", "Mobile & Remote Access", "Sales doesn't just happen at a desk. Our solutions are fully responsive and mobile-ready, giving your team instant access to their pipeline from anywhere."]
  ];
  const contactTestimonials = [
    { quote: "The Demski Group is great to work with! They inherited a mess with our platform and have been able to fix the bugs and make the platform more user friendly. They are also very professional and timely as well as a pleasure to work with! We have worked with Andrew Demski for all of our IT needs.", name: "Delaine Mast", role: "CEO", link: "/our-clients/impact-team-tennis/" },
    { quote: "We spoke to a few different companies as we set out to find someone to create a website/database application to augment our desktop software. We chose The Demski Group in part because we found them very easy to talk to in our interview. That first impression stuck as we have a great relationship with them now. We are currently planning to farm out another project and are not even considering looking for anyone else to take it on.", name: "Mickey Rowe", role: "Manager", link: "/our-clients/biopac/" },
    { quote: "Code quality was very good and done in a fast, efficient manner. We are pleased with the excellent job from The Demski Group. The team was able to provide high-quality services throughout the project. They produced the deliverables in a timely manner and within budget.", name: "Thariq Kara", role: "CEO", link: "/our-clients/nu-borders/" }
  ];
  const cases = [
    { tag: "Biotechnology", name: "BIOPAC Systems, Inc.", description: "The Demski Group successfully delivered a scalable and efficient web application for Biopac, enabling users to perform and track scientific studies online.", image: "Biopac-white.png", tone: "dark", link: "/our-clients/biopac" },
    { tag: "Sports", name: "Impact Team Tennis", description: "", image: "ImpactTennis-e1744403805766.png", tone: "green", link: "/our-clients/impact-team-tennis/" },
    { tag: "Health & Wellness", name: "Prefusion Health", description: "", image: "PrefusionHealth.png", tone: "purple", link: "/our-clients/prefusion-health/" },
    { tag: "Insurance", name: "Adaptrack", description: "", image: "ADAPTRACK.png", tone: "rose", link: "/our-clients/" },
    { tag: "Retail", name: "Zoomifi", description: "", image: "Zoomifi-2-e1744403389524.png", tone: "pink", link: "/our-clients/zoomifi/" },
    { tag: "Real Estate", name: "Property Gauge", description: "", image: "PropertyGauge.png", tone: "sky", link: "/our-clients/property-gauge/" },
    { tag: "Energy & Utilities", name: "Corning", description: "", image: "Corning-e1744401647484.png", tone: "yellow", link: "/our-clients/corning-glass/" },
    { tag: "Logistics", name: "Bite", description: "", image: "Bite-e1746208787498.png", tone: "violet", link: "/our-clients/bite/" },
    { tag: "Manufacturing", name: "Saputo", description: "", image: "Saputo.png", tone: "sand", link: "/our-clients/" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Custom Sales & Lead Tracking Tools | The Demski Group", "description": "Boost conversions and streamline your sales pipeline with custom lead tracking tools, intelligent automation, and real-time performance insights.", "pageClass": "sales-solution-page", "data-astro-cid-zvharguj": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["    ", '<main class="sales-page" data-astro-cid-zvharguj> <!-- ══ HERO ══ --> <section class="sales-section hero" data-astro-cid-zvharguj> <!-- LEFT: text content --> <div class="hero-content" data-astro-cid-zvharguj> <div class="eyebrow" data-astro-cid-zvharguj>Solutions</div> <h1 data-astro-cid-zvharguj>Sales &amp; Lead Tracking Tools that Power Your Pipeline</h1> <p data-astro-cid-zvharguj>Drive more qualified leads, streamline sales operations, and close deals faster with custom-built sales and lead tracking tools designed for your business.</p> <a class="hero-btn" href="/contact-us/" data-astro-cid-zvharguj> <i class="fa-solid fa-square-arrow-up-right" data-astro-cid-zvharguj></i> Request a Free Consultation\n</a> </div> <!-- RIGHT: stacked trust badges — inside hero matching reference --> <div class="hero-badges" aria-label="Review badges" data-astro-cid-zvharguj> <img', ' alt="Clutch 2024 Top Software Developers badge" width="148" height="148" loading="lazy" data-astro-cid-zvharguj> <img', ' alt="Clutch 2023 Top Software Developers badge" width="148" height="148" loading="lazy" data-astro-cid-zvharguj> <img', ` alt="Google five star review badge" width="148" height="148" loading="lazy" data-astro-cid-zvharguj> </div> </section> <!-- ══ INTRO GRID ══ --> <section class="sales-section intro-grid" data-astro-cid-zvharguj> <h2 class="section-title" data-astro-cid-zvharguj>Build a Smarter<br data-astro-cid-zvharguj>Sales Engine</h2> <div class="copy" data-astro-cid-zvharguj> <p data-astro-cid-zvharguj>Off-the-shelf CRMs and sales platforms often come with limitations — bloated features you don't need or missing functionality you do. That's where we come in.</p> <p data-astro-cid-zvharguj>At The Demski Group, we design and develop tailored sales and lead tracking tools that give your team full visibility into every stage of the pipeline. From initial contact to closed deal, we create systems that help your business connect, convert, and grow.</p> </div> </section> <!-- ══ DELIVERABLES ACCORDION ══ --> <section class="sales-section media-accordion" data-astro-cid-zvharguj> <!-- img (second in DOM) renders LEFT via CSS order:-1 --> <div class="accordion-copy" data-astro-cid-zvharguj> <div class="eyebrow" data-astro-cid-zvharguj>Service Benefits</div> <h2 class="section-title" data-astro-cid-zvharguj>What Our Sales &amp; Lead Tracking Tools Deliver</h2> <div class="acc-list" data-acc data-astro-cid-zvharguj> `, ' </div> </div> <img class="feature-image"', ' alt="Software engineer working on sales tracking dashboards" width="1024" height="683" loading="lazy" data-astro-cid-zvharguj> </section> <!-- ══ SERVICES ══ --> <section class="sales-section services-grid-section" data-astro-cid-zvharguj> <h2 class="section-title" data-astro-cid-zvharguj>Our Sales Enablement Services</h2> <div class="service-grid" data-astro-cid-zvharguj> ', ' </div> </section> <!-- ══ STRATEGIC BENEFITS ACCORDION ══ --> <section class="sales-section media-accordion" data-astro-cid-zvharguj> <div class="accordion-copy" data-astro-cid-zvharguj> <div class="eyebrow" data-astro-cid-zvharguj>Service Benefits</div> <h2 class="section-title" data-astro-cid-zvharguj>Strategic Benefits for Your Business</h2> <div class="acc-list" data-acc data-astro-cid-zvharguj> ', ' </div> </div> <img class="feature-image"', ` alt="Business team discussing sales strategy" width="1024" height="683" loading="lazy" data-astro-cid-zvharguj> </section> <!-- ══ WHY CHOOSE ══ --> <div class="why-section-wrap" data-astro-cid-zvharguj> <section class="why-section" data-astro-cid-zvharguj> <div class="why-copy" style="padding-right: 410px;" data-astro-cid-zvharguj> <div class="eyebrow" data-astro-cid-zvharguj>Choose Us</div> <h2 class="section-title" data-astro-cid-zvharguj>Why Choose the Demski Group?</h2> <p data-astro-cid-zvharguj>We don't just implement tools — we architect solutions. Whether you're upgrading from spreadsheets or pushing past the limitations of your CRM, we build custom software that mirrors your business logic, workflows, and goals.</p> <p data-astro-cid-zvharguj><strong data-astro-cid-zvharguj>What sets us apart:</strong></p> <ul data-astro-cid-zvharguj> <li data-astro-cid-zvharguj>Deep integration experience with platforms like Salesforce, HubSpot, and Pipedrive</li> <li data-astro-cid-zvharguj>Custom API development for proprietary tools and databases</li> <li data-astro-cid-zvharguj>Expertise in AI-powered personalization and intelligent automation</li> <li data-astro-cid-zvharguj>Proven success improving conversion rates and team performance</li> </ul> <div class="testimonial" data-astro-cid-zvharguj> <h3 data-astro-cid-zvharguj>Client Success Stories</h3> <div class="quote-mark" data-astro-cid-zvharguj>&ldquo;&ldquo;</div> <blockquote data-astro-cid-zvharguj>The Demski Group is great to work with! They inherited a mess with our platform and have been able to fix the bugs and make the platform more user friendly. They are also very professional and timely as well as a pleasure to work with! We have worked with Andrew Demski for all of our IT needs.</blockquote> <div class="testimonial-footer" data-astro-cid-zvharguj> <p data-astro-cid-zvharguj>Delaine Mast<br data-astro-cid-zvharguj>CEO</p> <a class="text-link" href="/our-clients/impact-team-tennis/" data-astro-cid-zvharguj>Learn more →</a> </div> <div class="testi-fraction" data-astro-cid-zvharguj>1 / 1</div> </div> </div> </section> <aside class="why-card" data-astro-cid-zvharguj> <div class="why-card-img-frame" data-astro-cid-zvharguj> <img`, ` alt="Software development team working together" width="1024" height="683" loading="lazy" data-astro-cid-zvharguj> </div> <div class="why-card-body" data-astro-cid-zvharguj> <h3 data-astro-cid-zvharguj>Let's Build a Lead Machine<br data-astro-cid-zvharguj>Together</h3> <a class="button-light" href="/contact-us/" data-astro-cid-zvharguj>
Request a Free<br data-astro-cid-zvharguj>Consultation <i class="fa-solid fa-up-right-from-square" data-astro-cid-zvharguj></i> </a> </div> </aside> </div> <!-- ══ CASE STUDIES ══ --> <section class="sales-section case-section" data-astro-cid-zvharguj> <div class="eyebrow" data-astro-cid-zvharguj>Case Studies</div> <h2 class="section-title" data-astro-cid-zvharguj>Over 600 Projects Delivered Successfully</h2> <p class="case-intro" data-astro-cid-zvharguj>With over 12 years of software development experience in many industries, we have a lot to talk about. Here are just a few of our success stories.</p> <div class="case-grid" data-astro-cid-zvharguj> `, ` </div> </section> <!-- ══ CONTACT ══ --> <section class="contact-section" data-astro-cid-zvharguj> <div class="contact-inner" data-astro-cid-zvharguj> <div class="contact-form-col" data-astro-cid-zvharguj> <h2 class="section-title" data-astro-cid-zvharguj>Let's Talk About Your Business Goals</h2> <form class="contact-form" action="/contact-us/" method="get" novalidate data-astro-cid-zvharguj> <div class="form-row" data-astro-cid-zvharguj> <input type="text" name="name" placeholder="Name" data-astro-cid-zvharguj> <input type="email" name="email" placeholder="Email" required data-astro-cid-zvharguj> </div> <input type="tel" name="phone" placeholder="Phone" data-astro-cid-zvharguj> <input type="text" name="company" placeholder="Company" data-astro-cid-zvharguj> <input type="text" name="website" placeholder="Website" data-astro-cid-zvharguj> <textarea name="message" placeholder="Describe your project" data-astro-cid-zvharguj></textarea> <button type="submit" class="form-submit" data-astro-cid-zvharguj>Contact Us</button> </form> </div> <div class="contact-right-col" data-astro-cid-zvharguj> <p class="contact-right-label" data-astro-cid-zvharguj>What our customers say</p> <div class="tc-carousel" id="tcCarousel" data-astro-cid-zvharguj> `, ' </div> <div class="tc-fraction-bar" data-astro-cid-zvharguj> <span id="tcFraction" data-astro-cid-zvharguj>1 / ', '</span> </div> <img class="contact-right-img"', ` alt="Developers discussing code" width="1024" height="683" loading="lazy" data-astro-cid-zvharguj> </div> </div> </section> <div class="chat-bubble" aria-hidden="true" data-astro-cid-zvharguj></div> </main> <script>
    (function () {
      var page = document.querySelector('.sales-page');
      if (!page) return;

      /* Accordion */
      page.querySelectorAll('[data-acc]').forEach(function (list) {
        var items = Array.from(list.querySelectorAll('.acc-item'));
        items.forEach(function (item) {
          var btn = item.querySelector('.acc-btn');
          if (!btn) return;
          btn.addEventListener('click', function () {
            var wasActive = item.classList.contains('active');
            items.forEach(function (i) {
              i.classList.remove('active');
              var b = i.querySelector('.acc-btn');
              if (b) b.setAttribute('aria-expanded', 'false');
              var p = i.querySelector('.acc-panel');
              if (p) p.style.maxHeight = '';
            });
            if (!wasActive) {
              item.classList.add('active');
              btn.setAttribute('aria-expanded', 'true');
              var panel = item.querySelector('.acc-panel');
              if (panel) panel.style.maxHeight = '500px';
            }
          });
        });
      });

      /* Testimonial carousel */
      var slides = Array.from(document.querySelectorAll('[data-tc-slide]'));
      var fracEl = document.getElementById('tcFraction');
      var prevBtn = document.getElementById('tcPrev');
      var nextBtn = document.getElementById('tcNext');

      if (slides.length && prevBtn && nextBtn) {
        var cur = 0;
        var carousel = document.getElementById('tcCarousel');

        function showSlide(n) {
          slides[cur].classList.remove('active');
          cur = (n + slides.length) % slides.length;
          slides[cur].classList.add('active');
          if (fracEl) fracEl.textContent = (cur + 1) + ' / ' + slides.length;
        }

        prevBtn.addEventListener('click', function () { showSlide(cur - 1); });
        nextBtn.addEventListener('click', function () { showSlide(cur + 1); });

        var timer = setInterval(function () { showSlide(cur + 1); }, 8000);
        if (carousel) {
          carousel.addEventListener('mouseenter', function () { clearInterval(timer); });
          carousel.addEventListener('mouseleave', function () {
            timer = setInterval(function () { showSlide(cur + 1); }, 8000);
          });
        }
      }
    })();
  <\/script> `])), maybeRenderHead(), addAttribute(`${assetBase}/Clutch2024.png`, "src"), addAttribute(`${assetBase}/Clutch2023.png`, "src"), addAttribute(`${assetBase}/Google.png`, "src"), deliverables.map(([icon, title, text], i) => renderTemplate`<div${addAttribute(`acc-item${i === 0 ? " active" : ""}`, "class")} data-astro-cid-zvharguj> <button class="acc-btn" type="button"${addAttribute(i === 0 ? "true" : "false", "aria-expanded")} data-astro-cid-zvharguj> <span class="acc-icon-box" data-astro-cid-zvharguj><i${addAttribute(`fa-solid ${icon}`, "class")} aria-hidden="true" data-astro-cid-zvharguj></i></span> <span class="acc-title" data-astro-cid-zvharguj>${title}</span> <span class="acc-toggle" aria-hidden="true" data-astro-cid-zvharguj></span> </button> <div class="acc-panel"${addAttribute(i === 0 ? "max-height:500px" : "", "style")} data-astro-cid-zvharguj> <div class="acc-body" data-astro-cid-zvharguj>${text}</div> </div> </div>`), addAttribute(`${assetBase}/engineer-working-on-chip-development-2025-03-06-13-42-24-utc-1024x683.jpg`, "src"), services.map(([icon, title, text]) => renderTemplate`<article class="service-card" data-astro-cid-zvharguj> <i${addAttribute(`fa-solid ${icon}`, "class")} aria-hidden="true" data-astro-cid-zvharguj></i> <h3 data-astro-cid-zvharguj>${title}</h3> <p data-astro-cid-zvharguj>${text}</p> </article>`), strategicBenefits.map(([icon, title, text], i) => renderTemplate`<div${addAttribute(`acc-item${i === 0 ? " active" : ""}`, "class")} data-astro-cid-zvharguj> <button class="acc-btn" type="button"${addAttribute(i === 0 ? "true" : "false", "aria-expanded")} data-astro-cid-zvharguj> <span class="acc-icon-box" data-astro-cid-zvharguj><i${addAttribute(`fa-solid ${icon}`, "class")} aria-hidden="true" data-astro-cid-zvharguj></i></span> <span class="acc-title" data-astro-cid-zvharguj>${title}</span> <span class="acc-toggle" aria-hidden="true" data-astro-cid-zvharguj></span> </button> <div class="acc-panel"${addAttribute(i === 0 ? "max-height:500px" : "", "style")} data-astro-cid-zvharguj> <div class="acc-body" data-astro-cid-zvharguj>${text}</div> </div> </div>`), addAttribute(`${assetBase}/professional-businessman-person-team-group-meeting-2025-03-26-13-34-42-utc-1024x683.jpg`, "src"), addAttribute(`${assetBase}/colleagues-in-office-using-computer-2024-10-18-17-41-53-utc-1024x683.jpg`, "src"), cases.map(({ tag, name, description, image, tone, link }) => renderTemplate`<article${addAttribute(`case-card ${tone === "dark" ? "featured" : tone}`, "class")} data-astro-cid-zvharguj> <span class="case-tag" data-astro-cid-zvharguj>${tag}</span> <img${addAttribute(`${assetBase}/${image}`, "src")}${addAttribute(`${name} logo`, "alt")} width="300" height="92" loading="lazy" data-astro-cid-zvharguj> ${description && renderTemplate`<p data-astro-cid-zvharguj>${description}</p>`} <a class="case-link"${addAttribute(link, "href")} data-astro-cid-zvharguj>Read full case study →</a> </article>`), contactTestimonials.map((t, i) => renderTemplate`<div${addAttribute(`tc-slide${i === 0 ? " active" : ""}`, "class")} data-tc-slide data-astro-cid-zvharguj> <div class="tc-quote-icon" data-astro-cid-zvharguj><i class="fa-solid fa-quote-left" aria-hidden="true" data-astro-cid-zvharguj></i></div> <p class="tc-text" data-astro-cid-zvharguj>${t.quote}</p> <div class="tc-footer" data-astro-cid-zvharguj> <div class="tc-author" data-astro-cid-zvharguj> ${t.name}<span data-astro-cid-zvharguj>${t.role}</span> </div> <a class="tc-link"${addAttribute(t.link, "href")} data-astro-cid-zvharguj>Read case study →</a> </div> </div>`), contactTestimonials.length, addAttribute(`${assetBase}/two-young-intercultural-colleagues-discussing-code-2025-03-16-06-53-49-utc-1024x683.jpg`, "src")), "head": ($$result2) => renderTemplate`<link rel="preload"${addAttribute(`${assetBase}/a-group-of-people-working-man-and-woman-in-the-pla-2025-10-16-22-30-43-utc-scaled.jpg`, "href")} as="image">` })}`;
}, "C:/Users/shreya/wordpress-astro/src/pages/solutions/sales-lead-tracking-tools/index.astro", void 0);

const $$file = "C:/Users/shreya/wordpress-astro/src/pages/solutions/sales-lead-tracking-tools/index.astro";
const $$url = "/solutions/sales-lead-tracking-tools";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
