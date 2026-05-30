import { c as createComponent } from './astro-component_Ba8YDBP2.mjs';
import 'piccolore';
import { s as renderComponent, v as renderTemplate, k as addAttribute, q as maybeRenderHead } from './entrypoint_Cvffq3iJ.mjs';
import { $ as $$Layout } from './Layout_CQHiC_T6.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let posts = [];
  let results = [];
  try {
    const res = await fetch("https://demskigroup.com/wp-json/wp/v2/posts?_embed&per_page=6", { signal: AbortSignal.timeout(8e3) });
    if (res.ok) posts = await res.json();
  } catch (e) {
    console.warn("Blog posts fetch failed:", e?.message);
  }
  try {
    const resultsRes = await fetch("https://demskigroup.com/wp-json/wp/v2/results?_embed&per_page=6", { signal: AbortSignal.timeout(8e3) });
    if (resultsRes.ok) results = await resultsRes.json();
  } catch (e) {
    console.warn("Results fetch failed:", e?.message);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "The Demski Group - Custom Software Development", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["          ", `<main id="main-content" data-astro-cid-j7pv25f6> <!-- ── S0: HERO ── --> <section class="hero" data-astro-cid-j7pv25f6> <div class="hero-overlay" aria-hidden="true" data-astro-cid-j7pv25f6></div> <div class="hero-inner" data-astro-cid-j7pv25f6> <div class="hero-text" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Custom<br class="mob-br" data-astro-cid-j7pv25f6> Software<br class="mob-br" data-astro-cid-j7pv25f6> Developers</h1> <div class="hero-typed" data-astro-cid-j7pv25f6>For any business, industry,<br data-astro-cid-j7pv25f6>or idea</div> <p class="hero-p-mob" data-astro-cid-j7pv25f6>We are your business software partners. Talk to our experts today about your project. We love a challenge.</p> <p class="hero-p-desk" data-astro-cid-j7pv25f6>Talk to our experts today about your project. We love a challenge.</p> <a href="/contact-us/" class="btn-orange" data-astro-cid-j7pv25f6>Schedule a Consultation</a> </div> </div> </section> <script>
(function() {
  var s = document.createElement('script');
  s.src = 'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js';
  s.onload = function() {
    new Typed('#typed-el', {
      strings: ['business.', 'industry.', 'idea.'],
      typeSpeed: 100, backSpeed: 50, backDelay: 1500, loop: true
    });
  };
  document.head.appendChild(s);
})();
<\/script> <!-- AOS init --> <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"><\/script> <script>
  window.addEventListener('load', function() {
    AOS.init({ offset: 120, duration: 700, easing: 'ease-in-out', once: true, delay: 0 });
  });
<\/script> <!-- ── S2: BRANDS ── --> <div class="brands-wrap" data-astro-cid-j7pv25f6> <div class="brands-label" data-astro-cid-j7pv25f6><span class="brands-text" data-astro-cid-j7pv25f6>Companies that trust<br data-astro-cid-j7pv25f6>our <a href="https://demskigroup.com/our-clients/" data-astro-cid-j7pv25f6>experienced team</a>.</span></div> <div class="brands-logo-img" data-astro-cid-j7pv25f6> <img src="/brandlogos.webp" alt="Companies: HP, Riot Games, Allstate, Bank of America, Herbalife, Rinnai" width="800" height="170" loading="lazy" data-astro-cid-j7pv25f6> </div> </div> <!-- ── S3: SERVICES ── --> <section class="services-section" data-astro-cid-j7pv25f6> <div class="services-inner" data-astro-cid-j7pv25f6> <div class="services-header" data-aos="fade-up" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Code the Future:<br class="mob-br" data-astro-cid-j7pv25f6> Innovative Solutions,<br data-astro-cid-j7pv25f6>Tailored for You</h2> <a href="/services/" class="btn-outline svc-btn-desktop" data-astro-cid-j7pv25f6>See all services <span class="btn-arrow-circle" data-astro-cid-j7pv25f6><i class="fa-solid fa-arrow-right" data-astro-cid-j7pv25f6></i></span></a> </div> <div class="services-grid" data-astro-cid-j7pv25f6> <div class="service-card" data-aos="fade-up" data-aos-delay="0" data-astro-cid-j7pv25f6> <div class="svc-icon" data-astro-cid-j7pv25f6><i class="fa-regular fa-file-code" data-astro-cid-j7pv25f6></i></div> <h3 data-astro-cid-j7pv25f6>Custom Software Development</h3> <p data-astro-cid-j7pv25f6>Develop tailored software solutions to meet your unique business needs and drive operational efficiency.</p> </div> <div class="service-card" data-aos="fade-up" data-aos-delay="80" data-astro-cid-j7pv25f6> <div class="svc-icon" data-astro-cid-j7pv25f6><i class="fa-solid fa-arrows-rotate" data-astro-cid-j7pv25f6></i></div> <h3 data-astro-cid-j7pv25f6>QA and Testing</h3> <p data-astro-cid-j7pv25f6><br data-astro-cid-j7pv25f6>Ensure your software is reliable, secure, and performs flawlessly under all conditions with our comprehensive QA and testing services.</p> </div> <div class="service-card" data-aos="fade-up" data-aos-delay="160" data-astro-cid-j7pv25f6> <div class="svc-icon" data-astro-cid-j7pv25f6><i class="fa-regular fa-mobile-screen" data-astro-cid-j7pv25f6></i></div> <h3 data-astro-cid-j7pv25f6>Mobile Development</h3> <p data-astro-cid-j7pv25f6><br data-astro-cid-j7pv25f6>Build robust and user-friendly mobile applications for iOS and Android platforms to enhance your business's mobile presence.</p> </div> <div class="service-card" data-aos="fade-up" data-aos-delay="0" data-astro-cid-j7pv25f6> <div class="svc-icon" data-astro-cid-j7pv25f6><i class="fa-solid fa-layer-group" data-astro-cid-j7pv25f6></i></div> <h3 data-astro-cid-j7pv25f6>UI/UX Design</h3> <p data-astro-cid-j7pv25f6><br data-astro-cid-j7pv25f6>Create intuitive and engaging user interfaces that provide an exceptional user experience through our UI/UX design services.</p> </div> <div class="service-card" data-aos="fade-up" data-aos-delay="80" data-astro-cid-j7pv25f6> <div class="svc-icon" data-astro-cid-j7pv25f6><i class="fa-solid fa-headset" data-astro-cid-j7pv25f6></i></div> <h3 data-astro-cid-j7pv25f6>Maintenance and Support</h3> <p data-astro-cid-j7pv25f6>We provide ongoing maintenance and support to keep your software running smoothly and efficiently, promptly addressing any issues.</p> </div> <div class="service-card" data-aos="fade-up" data-aos-delay="160" data-astro-cid-j7pv25f6> <div class="svc-icon" data-astro-cid-j7pv25f6><i class="fa-solid fa-network-wired" data-astro-cid-j7pv25f6></i></div> <h3 data-astro-cid-j7pv25f6>IoT Development</h3> <p data-astro-cid-j7pv25f6><br data-astro-cid-j7pv25f6>Integrate smart devices and advanced technologies to create connected solutions that transform your business operations with our IoT development services.</p> </div> </div> <a href="/services/" class="btn-outline svc-btn-mobile" data-astro-cid-j7pv25f6>See all services <span class="btn-arrow-circle" data-astro-cid-j7pv25f6><i class="fa-solid fa-arrow-right" data-astro-cid-j7pv25f6></i></span></a> </div> </section> <!-- ── S5: TECH STACK ── --> <section class="tech-section" data-astro-cid-j7pv25f6> <div class="tech-curve-top" data-astro-cid-j7pv25f6></div> <div class="tech-inner" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Our Cutting-Edge Tech<br class="mob-br" data-astro-cid-j7pv25f6> Stack</h2> <p class="sub" data-astro-cid-j7pv25f6>Our team has experience in many <br class="mob-br" data-astro-cid-j7pv25f6> programming languages. Take your pick.</p> <div class="marquee-wrapper" data-astro-cid-j7pv25f6> <!-- Row 1 — left to right --> <div class="marquee-track" data-astro-cid-j7pv25f6> `, ' </div> <!-- Row 2 — right to left --> <div class="marquee-track reverse" data-astro-cid-j7pv25f6> ', ` </div> </div> </div> <div class="tech-see-all" data-astro-cid-j7pv25f6> <a href="https://demskigroup.com/technologies/" class="btn-outline-dark" data-astro-cid-j7pv25f6>See all capabilities <span class="dark-arrow" data-astro-cid-j7pv25f6>→</span></a> </div> </section> <!-- ── S7: CLIENTS / TESTIMONIALS ── --> <section class="clients-section" data-astro-cid-j7pv25f6> <div class="clients-top" data-astro-cid-j7pv25f6> <div class="clients-left" data-astro-cid-j7pv25f6> <img src="https://demskigroup.com/wp-content/uploads/2024/06/two-coworkers-using-ipad-smiling-scaled.jpg" alt="Two coworkers using iPad smiling" width="600" height="800" loading="lazy" data-astro-cid-j7pv25f6> </div> <div class="clients-right" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>See the Businesses<br class="mob-br" data-astro-cid-j7pv25f6> That Rely<br class="desk-br" data-astro-cid-j7pv25f6> on Our<br class="mob-br" data-astro-cid-j7pv25f6> Services</h2> <p data-astro-cid-j7pv25f6>Over 12 years and hundreds of projects later, we have a lot to talk about.</p> <a href="https://demskigroup.com/our-clients/" class="btn-outline-clients" data-astro-cid-j7pv25f6>
See our clients <span class="arrow-circle" data-astro-cid-j7pv25f6>→</span> </a> </div> </div> <div class="testimonial-slider-wrap" data-astro-cid-j7pv25f6> <button class="slider-btn slider-btn-prev" id="tslider-prev" aria-label="Previous" data-astro-cid-j7pv25f6>←</button> <div class="tslider-clip" data-astro-cid-j7pv25f6> <div class="testimonial-slider" id="tslider" data-astro-cid-j7pv25f6> <div class="testimonial-card-new" data-astro-cid-j7pv25f6> <div class="tcard-top" data-astro-cid-j7pv25f6> <div class="tcard-quote" data-astro-cid-j7pv25f6>❝❝</div> <div class="tcard-logo" data-astro-cid-j7pv25f6><img src="/logos/Tausi.png" alt="Tausi" width="120" height="36" loading="lazy" data-astro-cid-j7pv25f6></div> </div> <p class="tcard-body" data-astro-cid-j7pv25f6>I've been working with the Demski team for a while now on building my app, and so far, the experience has been excellent! They are communicative, knowledgeable, and truly dedicated to bringing my vision to life. Their expertise and support have made this process smooth, enjoyable and nothing short of exciting. I'm looking forward to the launch and seeing everything come together. Highly recommended!</p> <div class="tcard-footer" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="tcard-author" data-astro-cid-j7pv25f6>Regina DeBellis</div> <div class="tcard-role" data-astro-cid-j7pv25f6>Owner</div> </div> <a href="/our-clients" class="tcard-case" data-astro-cid-j7pv25f6>Read case study →</a> </div> </div> <div class="testimonial-card-new" data-astro-cid-j7pv25f6> <div class="tcard-top" data-astro-cid-j7pv25f6> <div class="tcard-quote" data-astro-cid-j7pv25f6>❝❝</div> <div class="tcard-logo" data-astro-cid-j7pv25f6><img src="/logos/Zoomifi.png" alt="Zoomifi" width="120" height="36" loading="lazy" data-astro-cid-j7pv25f6></div> </div> <p class="tcard-body" data-astro-cid-j7pv25f6>My company partnered with The Demski Group for mobile application development, and their work exceeded our expectations. Their professionalism, attention to detail, and quality are unmatched. They provided valuable infrastructure advice, maintained excellent communication, and quickly resolved any issues or bugs. We are confident in their expertise.</p> <div class="tcard-footer" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="tcard-author" data-astro-cid-j7pv25f6>Timilehin Bashorun</div> <div class="tcard-role" data-astro-cid-j7pv25f6>Owner</div> </div> <a href="/our-clients" class="tcard-case" data-astro-cid-j7pv25f6>Read case study →</a> </div> </div> <div class="testimonial-card-new" data-astro-cid-j7pv25f6> <div class="tcard-top" data-astro-cid-j7pv25f6> <div class="tcard-quote" data-astro-cid-j7pv25f6>❝❝</div> <div class="tcard-logo" data-astro-cid-j7pv25f6><img src="/logos/BrandedAF.png" alt="Branded AF" width="120" height="36" loading="lazy" data-astro-cid-j7pv25f6></div> </div> <p class="tcard-body" data-astro-cid-j7pv25f6>Working with The Demski Group has been an absolute pleasure! They are professional, highly skilled, and incredibly easy to work with. Throughout the development of my mobile app, they are always responsive, helpful, and willing to go the extra mile to ensure everything is perfect. I highly recommend them to anyone looking for a reliable and talented development team! I know I will be returning to them for future projects!</p> <div class="tcard-footer" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="tcard-author" data-astro-cid-j7pv25f6>Kody Smith</div> <div class="tcard-role" data-astro-cid-j7pv25f6>Owner</div> </div> <a href="/our-clients" class="tcard-case" data-astro-cid-j7pv25f6>Read case study →</a> </div> </div> <div class="testimonial-card-new" data-astro-cid-j7pv25f6> <div class="tcard-top" data-astro-cid-j7pv25f6> <div class="tcard-quote" data-astro-cid-j7pv25f6>❝❝</div> <div class="tcard-logo" data-astro-cid-j7pv25f6><img src="/logos/ImpactTennis.png" alt="Impact Team Tennis" width="120" height="36" loading="lazy" data-astro-cid-j7pv25f6></div> </div> <p class="tcard-body" data-astro-cid-j7pv25f6>The Demski Group is great to work with! They inherited a mess with our platform and have been able to fix the bugs and make the platform more user friendly. Their professionalism and attention to detail are unmatched.</p> <div class="tcard-footer" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="tcard-author" data-astro-cid-j7pv25f6>Delaine Mast</div> <div class="tcard-role" data-astro-cid-j7pv25f6>CEO</div> </div> <a href="/our-clients" class="tcard-case" data-astro-cid-j7pv25f6>Read case study →</a> </div> </div> <div class="testimonial-card-new" data-astro-cid-j7pv25f6> <div class="tcard-top" data-astro-cid-j7pv25f6> <div class="tcard-quote" data-astro-cid-j7pv25f6>❝❝</div> <div class="tcard-logo" data-astro-cid-j7pv25f6><img src="https://demskigroup.com/wp-content/uploads/2024/07/Companylogo3-300x159.png" alt="Biopac" width="120" height="36" loading="lazy" data-astro-cid-j7pv25f6></div> </div> <p class="tcard-body" data-astro-cid-j7pv25f6>We spoke to a few different companies as we set out to find someone to create a website/database application. We chose The Demski Group in part because we found them very easy to talk to. That first impression stuck as we have a great relationship with them now. We are not even considering looking for anyone else.</p> <div class="tcard-footer" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="tcard-author" data-astro-cid-j7pv25f6>Mickey Rowe</div> <div class="tcard-role" data-astro-cid-j7pv25f6>Manager</div> </div> <a href="/our-clients" class="tcard-case" data-astro-cid-j7pv25f6>Read case study →</a> </div> </div> <div class="testimonial-card-new" data-astro-cid-j7pv25f6> <div class="tcard-top" data-astro-cid-j7pv25f6> <div class="tcard-quote" data-astro-cid-j7pv25f6>❝❝</div> <div class="tcard-logo" data-astro-cid-j7pv25f6><img src="/logos/Yawye.png" alt="Yawye" width="120" height="36" loading="lazy" data-astro-cid-j7pv25f6></div> </div> <p class="tcard-body" data-astro-cid-j7pv25f6>We are true believers in this team and will no doubt provide ongoing business. The Demski Group consistently produces quality work, leading our team to be true believers of their work. Their team is accountable, setting high standards for their work and delivering results.</p> <div class="tcard-footer" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="tcard-author" data-astro-cid-j7pv25f6>Danny Socolof</div> <div class="tcard-role" data-astro-cid-j7pv25f6>CEO</div> </div> <a href="/our-clients" class="tcard-case" data-astro-cid-j7pv25f6>Read case study →</a> </div> </div> <div class="testimonial-card-new" data-astro-cid-j7pv25f6> <div class="tcard-top" data-astro-cid-j7pv25f6> <div class="tcard-quote" data-astro-cid-j7pv25f6>❝❝</div> <div class="tcard-logo" data-astro-cid-j7pv25f6><img src="/logos/Tausi.png" alt="Tausi" width="120" height="36" loading="lazy" data-astro-cid-j7pv25f6></div> </div> <p class="tcard-body" data-astro-cid-j7pv25f6>The Demski Group was professional and outstanding at their work. The Demski Group delivered a professional website that received positive feedback from users across many industries. They communicated effectively via Zoom and were always accessible. Customers can expect an honest team that can provide outstanding outputs.</p> <div class="tcard-footer" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="tcard-author" data-astro-cid-j7pv25f6>Janice Shrokrian</div> <div class="tcard-role" data-astro-cid-j7pv25f6>Founder & CEO</div> </div> <a href="/our-clients" class="tcard-case" data-astro-cid-j7pv25f6>Read case study →</a> </div> </div> <div class="testimonial-card-new" data-astro-cid-j7pv25f6> <div class="tcard-top" data-astro-cid-j7pv25f6> <div class="tcard-quote" data-astro-cid-j7pv25f6>❝❝</div> <div class="tcard-logo" data-astro-cid-j7pv25f6><img src="/logos/Zoomifi.png" alt="Zoomifi" width="120" height="36" loading="lazy" data-astro-cid-j7pv25f6></div> </div> <p class="tcard-body" data-astro-cid-j7pv25f6>After working with many development firms, I now funnel all my development to The Demski Group. The Demski Group has become our main app developer thanks to their consistency, quality of work, and high level of communication. They deliver apps with minimal bugs, remain open to feedback, and can take an app from idea to execution with next to no management on our part.</p> <div class="tcard-footer" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="tcard-author" data-astro-cid-j7pv25f6>Slava Moshkovich</div> <div class="tcard-role" data-astro-cid-j7pv25f6>President</div> </div> <a href="/our-clients" class="tcard-case" data-astro-cid-j7pv25f6>Read case study →</a> </div> </div> <div class="testimonial-card-new" data-astro-cid-j7pv25f6> <div class="tcard-top" data-astro-cid-j7pv25f6> <div class="tcard-quote" data-astro-cid-j7pv25f6>❝❝</div> <div class="tcard-logo" data-astro-cid-j7pv25f6><img src="/logos/MartinSorbo.png" alt="Martin & Sorbo" width="120" height="36" loading="lazy" data-astro-cid-j7pv25f6></div> </div> <p class="tcard-body" data-astro-cid-j7pv25f6>It was such a pleasure working with The Demski Group. Not only were they flexible in scheduling meetings and moving deadlines but even with little information provided they knew exactly what the target outcome should be and absolutely outperformed. All of our requirements were fulfilled and they even provided us with useful documentation for future maintenance. We cannot recommend them enough and we will hire The Demski Group definitely again for any future development needs for our company.</p> <div class="tcard-footer" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="tcard-author" data-astro-cid-j7pv25f6>Stephanie Loike</div> <div class="tcard-role" data-astro-cid-j7pv25f6>CTO</div> </div> <a href="/our-clients" class="tcard-case" data-astro-cid-j7pv25f6>Read case study →</a> </div> </div> <div class="testimonial-card-new" data-astro-cid-j7pv25f6> <div class="tcard-top" data-astro-cid-j7pv25f6> <div class="tcard-quote" data-astro-cid-j7pv25f6>❝❝</div> <div class="tcard-logo" data-astro-cid-j7pv25f6><img src="/logos/BrandedAF.png" alt="Branded AF" width="120" height="36" loading="lazy" data-astro-cid-j7pv25f6></div> </div> <p class="tcard-body" data-astro-cid-j7pv25f6>They delivered what they said they would, and it worked as planned. As a result of the collaboration, The Demski Group successfully launched the website, and the revenue started generating. The team regularly held weekly meetings, keeping the client updated on all tasks, plans, and feedback. Ultimately, they precisely delivered what they promised.</p> <div class="tcard-footer" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="tcard-author" data-astro-cid-j7pv25f6>Chris Thompson</div> <div class="tcard-role" data-astro-cid-j7pv25f6>Managing Partner</div> </div> <a href="/our-clients" class="tcard-case" data-astro-cid-j7pv25f6>Read case study →</a> </div> </div> <div class="testimonial-card-new" data-astro-cid-j7pv25f6> <div class="tcard-top" data-astro-cid-j7pv25f6> <div class="tcard-quote" data-astro-cid-j7pv25f6>❝❝</div> <div class="tcard-logo" data-astro-cid-j7pv25f6><img src="/logos/Audiojack.png" alt="AudioJack" width="120" height="36" loading="lazy" data-astro-cid-j7pv25f6></div> </div> <p class="tcard-body" data-astro-cid-j7pv25f6>Fantastic experience working with this team. They communicate regularly, understand that things can change and adapt as we sorted through the issues that came up with the project. All very important qualities when working with someone. The other elements I expect to be good, but being able to go the extra mile and be present was wonderful. Will work with them again as we continue to grow.</p> <div class="tcard-footer" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="tcard-author" data-astro-cid-j7pv25f6>David Tobin</div> <div class="tcard-role" data-astro-cid-j7pv25f6>Founder</div> </div> <a href="/our-clients" class="tcard-case" data-astro-cid-j7pv25f6>Read case study →</a> </div> </div> <div class="testimonial-card-new" data-astro-cid-j7pv25f6> <div class="tcard-top" data-astro-cid-j7pv25f6> <div class="tcard-quote" data-astro-cid-j7pv25f6>❝❝</div> <div class="tcard-logo" data-astro-cid-j7pv25f6><img src="/logos/Corning.png" alt="Corning" width="120" height="36" loading="lazy" data-astro-cid-j7pv25f6></div> </div> <p class="tcard-body" data-astro-cid-j7pv25f6>The Demski Group team were great in helping out with our project and flexible with some of our changing timelines!</p> <div class="tcard-footer" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="tcard-author" data-astro-cid-j7pv25f6>&nbsp;</div> <div class="tcard-role" data-astro-cid-j7pv25f6>&nbsp;</div> </div> <a href="/our-clients" class="tcard-case" data-astro-cid-j7pv25f6>Read case study →</a> </div> </div> <div class="testimonial-card-new" data-astro-cid-j7pv25f6> <div class="tcard-top" data-astro-cid-j7pv25f6> <div class="tcard-quote" data-astro-cid-j7pv25f6>❝❝</div> <div class="tcard-logo" data-astro-cid-j7pv25f6><img src="/logos/FlowerMoxie.png" alt="Flower Moxie" width="120" height="36" loading="lazy" data-astro-cid-j7pv25f6></div> </div> <p class="tcard-body" data-astro-cid-j7pv25f6>The Demski Group was an absolute pleasure to work with and I will continue to hire them for my other Shopify dev projects. They scoped and quoted the project fairly, stayed within the hours they estimated, was extremely prompt in completing the tasks, extremely communicative, and quick to hop on a call. HIGHLY RECOMMEND, they're a wonderful hire!</p> <div class="tcard-footer" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="tcard-author" data-astro-cid-j7pv25f6>Amy McCord</div> <div class="tcard-role" data-astro-cid-j7pv25f6>Founder</div> </div> <a href="/our-clients" class="tcard-case" data-astro-cid-j7pv25f6>Read case study →</a> </div> </div> <div class="testimonial-card-new" data-astro-cid-j7pv25f6> <div class="tcard-top" data-astro-cid-j7pv25f6> <div class="tcard-quote" data-astro-cid-j7pv25f6>❝❝</div> <div class="tcard-logo" data-astro-cid-j7pv25f6><img src="/logos/SEEN.png" alt="SEEN" width="120" height="36" loading="lazy" data-astro-cid-j7pv25f6></div> </div> <p class="tcard-body" data-astro-cid-j7pv25f6>I really appreciate The Demski Group's willingness to shift quickly on projects and deadlines. The Demski Group continues to evolve the app to increase user engagement and retention. The team is available on multiple communication channels, which allows them to weigh in on various aspects of the product. They're also willing to pivot depending on the startup's needs.</p> <div class="tcard-footer" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="tcard-author" data-astro-cid-j7pv25f6>Evans Craddock</div> <div class="tcard-role" data-astro-cid-j7pv25f6>Production Coordinator</div> </div> <a href="/our-clients" class="tcard-case" data-astro-cid-j7pv25f6>Read case study →</a> </div> </div> <div class="testimonial-card-new" data-astro-cid-j7pv25f6> <div class="tcard-top" data-astro-cid-j7pv25f6> <div class="tcard-quote" data-astro-cid-j7pv25f6>❝❝</div> <div class="tcard-logo" data-astro-cid-j7pv25f6><img src="/logos/FarmersDaughter.png" alt="Farmer's Daughter" width="120" height="36" loading="lazy" data-astro-cid-j7pv25f6></div> </div> <p class="tcard-body" data-astro-cid-j7pv25f6>The Demski Group has done an outstanding job updating our website and implementing custom tools that have greatly improved our customer experience. Their expertise in SEO and PPC has also significantly increased our online visibility and sales. We are extremely pleased with the outcome and the positive feedback we've received from our customers.</p> <div class="tcard-footer" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="tcard-author" data-astro-cid-j7pv25f6>Candice English</div> <div class="tcard-role" data-astro-cid-j7pv25f6>Owner</div> </div> <a href="/our-clients" class="tcard-case" data-astro-cid-j7pv25f6>Read case study →</a> </div> </div> <div class="testimonial-card-new" data-astro-cid-j7pv25f6> <div class="tcard-top" data-astro-cid-j7pv25f6> <div class="tcard-quote" data-astro-cid-j7pv25f6>❝❝</div> <div class="tcard-logo" data-astro-cid-j7pv25f6><img src="/logos/GettinBy.png" alt="Gettin' By" width="120" height="36" loading="lazy" data-astro-cid-j7pv25f6></div> </div> <p class="tcard-body" data-astro-cid-j7pv25f6>They helped us make the game more effective because they understood what we were trying to do. The Demski Group was able to implement every aspect of the requirements, including the rules, much to our delight. The team was highly communicative, and internal stakeholders were particularly impressed with the vendor's game development and technical experience.</p> <div class="tcard-footer" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="tcard-author" data-astro-cid-j7pv25f6>Linda Riddell</div> <div class="tcard-role" data-astro-cid-j7pv25f6>Founder</div> </div> <a href="/our-clients" class="tcard-case" data-astro-cid-j7pv25f6>Read case study →</a> </div> </div> <div class="testimonial-card-new" data-astro-cid-j7pv25f6> <div class="tcard-top" data-astro-cid-j7pv25f6> <div class="tcard-quote" data-astro-cid-j7pv25f6>❝❝</div> <div class="tcard-logo" data-astro-cid-j7pv25f6><img src="/logos/TrickyWater.png" alt="Tricky Water" width="120" height="36" loading="lazy" data-astro-cid-j7pv25f6></div> </div> <p class="tcard-body" data-astro-cid-j7pv25f6>They are very sound at a technical skill level. The Demski Group delivered all the agreed-upon deliverables in a timely manner. They were very accessible and knowledgeable, which ensured a smooth and effective workflow. Their deep technical knowledge and expertise were hallmarks of their work.</p> <div class="tcard-footer" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="tcard-author" data-astro-cid-j7pv25f6>Manish Patel</div> <div class="tcard-role" data-astro-cid-j7pv25f6>Principal</div> </div> <a href="/our-clients" class="tcard-case" data-astro-cid-j7pv25f6>Read case study →</a> </div> </div> <div class="testimonial-card-new" data-astro-cid-j7pv25f6> <div class="tcard-top" data-astro-cid-j7pv25f6> <div class="tcard-quote" data-astro-cid-j7pv25f6>❝❝</div> <div class="tcard-logo-text" data-astro-cid-j7pv25f6>&nbsp;</div> </div> <p class="tcard-body" data-astro-cid-j7pv25f6>Our teams have partnered on over 20 projects, which have all been a tremendous success. The Demski Group confidentially meets any improvements or changes requested. They are able to display industry standard-excellence services. Timely and responsive, they have communicated their goals and expectations well.</p> <div class="tcard-footer" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="tcard-author" data-astro-cid-j7pv25f6>VP of Software Engineering</div> <div class="tcard-role" data-astro-cid-j7pv25f6>&nbsp;</div> </div> <a href="/our-clients" class="tcard-case" data-astro-cid-j7pv25f6>Read case study →</a> </div> </div> <div class="testimonial-card-new" data-astro-cid-j7pv25f6> <div class="tcard-top" data-astro-cid-j7pv25f6> <div class="tcard-quote" data-astro-cid-j7pv25f6>❝❝</div> <div class="tcard-logo-text" data-astro-cid-j7pv25f6>&nbsp;</div> </div> <p class="tcard-body" data-astro-cid-j7pv25f6>They listen, they're business savvy, and they're responsive. The Demski Group's work has met the mark. The team follows their assigned specifications to the letter and have had a high success rate so far. Customers can expect a professional team that follows directions well.</p> <div class="tcard-footer" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="tcard-author" data-astro-cid-j7pv25f6>Chief Data Officer</div> <div class="tcard-role" data-astro-cid-j7pv25f6>&nbsp;</div> </div> <a href="/our-clients" class="tcard-case" data-astro-cid-j7pv25f6>Read case study →</a> </div> </div> <div class="testimonial-card-new" data-astro-cid-j7pv25f6> <div class="tcard-top" data-astro-cid-j7pv25f6> <div class="tcard-quote" data-astro-cid-j7pv25f6>❝❝</div> <div class="tcard-logo-text" data-astro-cid-j7pv25f6>&nbsp;</div> </div> <p class="tcard-body" data-astro-cid-j7pv25f6>Code quality was very good and done in a fast, efficient manner. We are pleased with the excellent job from The Demski Group. The team was able to provide high-quality services throughout the project. They produced the deliverables in a timely manner and within budget.</p> <div class="tcard-footer" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div class="tcard-author" data-astro-cid-j7pv25f6>Thariq Kara</div> <div class="tcard-role" data-astro-cid-j7pv25f6>CEO</div> </div> <a href="/our-clients" class="tcard-case" data-astro-cid-j7pv25f6>Read case study →</a> </div> </div> </div> </div> <button class="slider-btn slider-btn-next" id="tslider-next" aria-label="Next" data-astro-cid-j7pv25f6>→</button> </div> </section> <script>
  (function () {
    const slider = document.getElementById('tslider');
    const btnNext = document.getElementById('tslider-next');
    const btnPrev = document.getElementById('tslider-prev');
    if (!slider) return;

    // Clone all cards and append + prepend for infinite illusion
    const cards = Array.from(slider.querySelectorAll('.testimonial-card-new'));
    const gap = 14;

    // Append clones at end
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      slider.appendChild(clone);
    });

    // Prepend clones at start
    cards.slice().reverse().forEach(card => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      slider.prepend(clone);
    });

    function cardWidth() {
      return slider.querySelector('.testimonial-card-new').offsetWidth + gap;
    }

    // Start at the first real card (after prepended clones)
    const jumpToReal = () => {
      slider.scrollLeft = cardWidth() * cards.length;
    };

    // No animation on init
    slider.style.scrollBehavior = 'auto';
    jumpToReal();
    setTimeout(() => { slider.style.scrollBehavior = 'smooth'; }, 50);

    function next() {
      slider.scrollBy({ left: cardWidth(), behavior: 'smooth' });
      setTimeout(() => {
        const max = slider.scrollWidth - slider.clientWidth;
        // If we've scrolled into the appended clones zone, silently jump back
        if (slider.scrollLeft >= cardWidth() * cards.length * 2) {
          slider.style.scrollBehavior = 'auto';
          slider.scrollLeft = cardWidth() * cards.length;
          setTimeout(() => { slider.style.scrollBehavior = 'smooth'; }, 50);
        }
      }, 400);
    }

    function prev() {
      slider.scrollBy({ left: -cardWidth(), behavior: 'smooth' });
      setTimeout(() => {
        // If we've scrolled into the prepended clones zone, silently jump forward
        if (slider.scrollLeft <= cardWidth() * (cards.length - 1)) {
          slider.style.scrollBehavior = 'auto';
          slider.scrollLeft = cardWidth() * cards.length * 2 - cardWidth();
          setTimeout(() => { slider.style.scrollBehavior = 'smooth'; }, 50);
        }
      }, 400);
    }

    btnNext && btnNext.addEventListener('click', next);
    btnPrev && btnPrev.addEventListener('click', prev);

    // Optional: auto-play every 4s
    let autoplay = setInterval(next, 4000);
    slider.addEventListener('mouseenter', () => clearInterval(autoplay));
    slider.addEventListener('mouseleave', () => { autoplay = setInterval(next, 4000); });
  })();
  <\/script> <!-- ── S8: EXCELLENCE ── --> <section class="excellence-section" data-astro-cid-j7pv25f6> <div class="excellence-card" data-astro-cid-j7pv25f6> <div class="excellence-left" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Excellence | Our<br data-astro-cid-j7pv25f6>Minimum Standard</h2> <p data-astro-cid-j7pv25f6>We pride ourselves on our unwavering commitment to customer satisfaction.</p> <a href="/our-clients" class="btn-outline-excellence" data-astro-cid-j7pv25f6>
See our success <i class="fa-solid fa-arrow-right" style="font-size:12px" data-astro-cid-j7pv25f6></i> </a> </div> <div class="excellence-right" data-astro-cid-j7pv25f6> <div class="badge-rotator" id="badge-rotator" data-astro-cid-j7pv25f6> <div class="badge-slide active" data-astro-cid-j7pv25f6> <img src="/clutchcowhite.webp" alt="Clutch Top Software Developers 2022" width="220" height="220" loading="lazy" data-astro-cid-j7pv25f6> </div> <div class="badge-slide" data-astro-cid-j7pv25f6> <img src="/clutch2.webp" alt="Clutch Top App Development 2023" width="220" height="220" loading="lazy" data-astro-cid-j7pv25f6> </div> <div class="badge-slide" data-astro-cid-j7pv25f6> <img src="/clutch3.webp" alt="Clutch Top Software Developers 2023" width="220" height="220" loading="lazy" data-astro-cid-j7pv25f6> </div> <div class="badge-slide" data-astro-cid-j7pv25f6> <img src="/cisppwhite.webp" alt="CISSP Certified" width="200" height="200" loading="lazy" data-astro-cid-j7pv25f6> </div> </div> </div> <div class="excellence-bottom" data-astro-cid-j7pv25f6> <div class="rating-col" data-astro-cid-j7pv25f6> <div class="rating-col-label" data-astro-cid-j7pv25f6>5/5 on Clutch</div> <div class="rating-col-stars" data-astro-cid-j7pv25f6>★★★★★</div> </div> <div class="rating-col" data-astro-cid-j7pv25f6> <div class="rating-col-label" data-astro-cid-j7pv25f6>5/5 on Google</div> <div class="rating-col-stars" data-astro-cid-j7pv25f6>★★★★★</div> </div> </div> </div> </section> <script>
  (function () {
    const slides = document.querySelectorAll('#badge-rotator .badge-slide');
    if (!slides.length) return;
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 2500);
  })();
  <\/script> <!-- ── S9: PROCESS ── --> <section class="process-section" id="process-section" data-astro-cid-j7pv25f6> <div class="process-shape-top" aria-hidden="true" data-astro-cid-j7pv25f6></div> <div class="process-inner" data-astro-cid-j7pv25f6> <div class="process-heading" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>From Vision to Victory:<br class="mob-br" data-astro-cid-j7pv25f6> Our Proven Process</h2> <p data-astro-cid-j7pv25f6>Discover how we turn your ideas into reality with our streamlined, client-focused development process. From initial consultation to final deployment, our expert team ensures every step is meticulously planned and executed to deliver outstanding results.</p> </div> <div class="process-body" data-astro-cid-j7pv25f6> <!-- Left: scroll-driven timeline --> <div class="process-steps" id="process-steps" data-astro-cid-j7pv25f6> <div class="process-line-track" data-astro-cid-j7pv25f6> <div class="process-line-fill" id="process-line-fill" data-astro-cid-j7pv25f6></div> </div> <div class="process-step" data-step="0" data-astro-cid-j7pv25f6> <div class="step-dot-wrap" data-astro-cid-j7pv25f6> <div class="step-dot" data-astro-cid-j7pv25f6><i class="fa-solid fa-phone" data-astro-cid-j7pv25f6></i></div> </div> <div class="step-content" data-astro-cid-j7pv25f6> <div class="step-label" data-astro-cid-j7pv25f6>Step 1</div> <div class="step-card" data-astro-cid-j7pv25f6> <h4 data-astro-cid-j7pv25f6>Have a Conversation</h4> <p data-astro-cid-j7pv25f6>We want to hear your ideas, learn your company's workflow, and offer our software expertise to find a solution to your frustrations while facilitating your growth.</p> </div> </div> </div> <div class="process-step" data-step="1" data-astro-cid-j7pv25f6> <div class="step-dot-wrap" data-astro-cid-j7pv25f6> <div class="step-dot" data-astro-cid-j7pv25f6><i class="fa-solid fa-file-lines" data-astro-cid-j7pv25f6></i></div> </div> <div class="step-content" data-astro-cid-j7pv25f6> <div class="step-label" data-astro-cid-j7pv25f6>Step 2</div> <div class="step-card" data-astro-cid-j7pv25f6> <h4 data-astro-cid-j7pv25f6>Propose Solution</h4> <p data-astro-cid-j7pv25f6>Post conversation, we will send you a custom proposal with recommended technologies, a rough timeline, and a cost estimate to define the project specifications.</p> </div> </div> </div> <div class="process-step" data-step="2" data-astro-cid-j7pv25f6> <div class="step-dot-wrap" data-astro-cid-j7pv25f6> <div class="step-dot" data-astro-cid-j7pv25f6><i class="fa-solid fa-pen-ruler" data-astro-cid-j7pv25f6></i></div> </div> <div class="step-content" data-astro-cid-j7pv25f6> <div class="step-label" data-astro-cid-j7pv25f6>Step 3</div> <div class="step-card" data-astro-cid-j7pv25f6> <h4 data-astro-cid-j7pv25f6>Design</h4> <p data-astro-cid-j7pv25f6>Create low-fidelity designs to outline basic structure and functionality, develop high-fidelity designs for detailed visual representation, and build interactive prototypes for user testing and feedback.</p> </div> </div> </div> <div class="process-step" data-step="3" data-astro-cid-j7pv25f6> <div class="step-dot-wrap" data-astro-cid-j7pv25f6> <div class="step-dot" data-astro-cid-j7pv25f6><i class="fa-solid fa-code" data-astro-cid-j7pv25f6></i></div> </div> <div class="step-content" data-astro-cid-j7pv25f6> <div class="step-label" data-astro-cid-j7pv25f6>Step 4</div> <div class="step-card" data-astro-cid-j7pv25f6> <h4 data-astro-cid-j7pv25f6>Develop, Test, and Deploy</h4> <p data-astro-cid-j7pv25f6>Utilizing agile methodologies, involving iterative development cycles, continuous integration and testing, regular feedback sessions, and seamless deployment practices.</p> </div> </div> </div> <div class="process-step" data-step="4" data-astro-cid-j7pv25f6> <div class="step-dot-wrap" data-astro-cid-j7pv25f6> <div class="step-dot" data-astro-cid-j7pv25f6><i class="fa-solid fa-rocket" data-astro-cid-j7pv25f6></i></div> </div> <div class="step-content" data-astro-cid-j7pv25f6> <div class="step-label" data-astro-cid-j7pv25f6>Step 5</div> <div class="step-card" data-astro-cid-j7pv25f6> <h4 data-astro-cid-j7pv25f6>Post-Launch</h4> <p data-astro-cid-j7pv25f6>We stand by you and our work. After project completion, we warranty our work to make sure you are satisfied and will remain available for future maintenance & optimizations.</p> </div> </div> </div> </div> <!-- Right: sticky CTA only --> <div class="process-right" data-astro-cid-j7pv25f6> <div class="process-right-actions" data-astro-cid-j7pv25f6> <span class="btn-back-arrow" aria-hidden="true" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="1em" height="1em" data-astro-cid-j7pv25f6> <path d="M23 12H5M12 19l-7-7 7-7" data-astro-cid-j7pv25f6></path> </svg> </span> <a href="/contact-us/" class="btn-orange-process" data-astro-cid-j7pv25f6>Schedule a Consultation</a> </div> </div> </div> <!-- end process-body --> </div> <!-- end process-inner --> <!-- Big decorative diamond --> <div class="process-deco-card" aria-hidden="true" data-astro-cid-j7pv25f6></div> </section> <script>
(function () {
  const stepsContainer = document.getElementById('process-steps');
  const lineFill = document.getElementById('process-line-fill');
  const steps = Array.from(document.querySelectorAll('.process-step'));
  if (!stepsContainer || !lineFill || !steps.length) return;

  function update() {
    const containerRect = stepsContainer.getBoundingClientRect();
    const containerTop = containerRect.top;
    const containerHeight = containerRect.height;
    const windowH = window.innerHeight;

    // How far we've scrolled into the container (0 → 1)
    const scrolled = Math.max(0, Math.min(1,
      (windowH * 0.6 - containerTop) / containerHeight
    ));

    lineFill.style.height = (scrolled * 100) + '%';

    // Activate steps
    steps.forEach((step) => {
      const rect = step.getBoundingClientRect();
      const mid = rect.top + rect.height / 2;
      if (mid < windowH * 0.65) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
<\/script> <!-- ── S10+11: BLOG ── --> <section class="blog-section" data-astro-cid-j7pv25f6> <div class="section-inner" data-astro-cid-j7pv25f6> <div class="section-header" data-aos="fade-up" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>From the Blog</h2> </div> <a href="/blog" class="btn-see-all" data-astro-cid-j7pv25f6>See all <span class="arrow-circle" data-astro-cid-j7pv25f6>→</span></a> </div> <div class="cards-slider-wrap" data-astro-cid-j7pv25f6> <button class="cards-nav cards-nav-prev" id="blog-prev" aria-label="Previous blog post" data-astro-cid-j7pv25f6>←</button> <div class="cards-slider" id="blog-slider" data-astro-cid-j7pv25f6> `, ' </div> <button class="cards-nav cards-nav-next" id="blog-next" aria-label="Next blog post" data-astro-cid-j7pv25f6>→</button> </div> </div> </section> <!-- ── S12+13: RESULTS ── --> <section class="results-section" data-astro-cid-j7pv25f6> <div class="section-inner" data-astro-cid-j7pv25f6> <div class="section-header" data-aos="fade-up" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Real Results, Real Projects</h2> <p style="color:#0A0000;" data-astro-cid-j7pv25f6>See how we produced real-world returns for our clients.</p> </div> <a href="https://demskigroup.com/results/" class="btn-see-all" data-astro-cid-j7pv25f6>See all <span class="arrow-circle" data-astro-cid-j7pv25f6>→</span></a> </div> <div class="cards-slider-wrap" data-astro-cid-j7pv25f6> <button class="cards-nav cards-nav-prev" id="results-prev" aria-label="Previous result" data-astro-cid-j7pv25f6>←</button> <div class="cards-slider" id="results-slider" data-astro-cid-j7pv25f6> ', ` </div> <button class="cards-nav cards-nav-next" id="results-next" aria-label="Next result" data-astro-cid-j7pv25f6>→</button> </div> </div> </section> <script>
(function () {
  function initInfiniteSlider(sliderId, prevId, nextId) {
    const slider = document.getElementById(sliderId);
    const btnPrev = document.getElementById(prevId);
    const btnNext = document.getElementById(nextId);
    if (!slider || !btnPrev || !btnNext) return;

    const cards = Array.from(slider.querySelectorAll('.post-card'));
    if (!cards.length) return;
    const gap = parseInt(getComputedStyle(slider).gap) || 20;

    // Clone all cards: append at end + prepend at start for infinite illusion
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      slider.appendChild(clone);
    });
    cards.slice().reverse().forEach(card => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      slider.prepend(clone);
    });

    function cardWidth() {
      return slider.querySelector('.post-card').offsetWidth + gap;
    }

    // Jump silently to the real cards (skip the prepended clones)
    slider.style.scrollBehavior = 'auto';
    slider.scrollLeft = cardWidth() * cards.length;
    setTimeout(() => { slider.style.scrollBehavior = 'smooth'; }, 50);

    let busy = false;

    function next() {
      if (busy) return;
      busy = true;
      slider.scrollBy({ left: cardWidth(), behavior: 'smooth' });
      setTimeout(() => {
        // If deep into appended clones, silently jump back to real start
        if (slider.scrollLeft >= cardWidth() * cards.length * 2) {
          slider.style.scrollBehavior = 'auto';
          slider.scrollLeft = cardWidth() * cards.length;
          setTimeout(() => { slider.style.scrollBehavior = 'smooth'; }, 50);
        }
        busy = false;
      }, 450);
    }

    function prev() {
      if (busy) return;
      busy = true;
      slider.scrollBy({ left: -cardWidth(), behavior: 'smooth' });
      setTimeout(() => {
        // If deep into prepended clones, silently jump forward to real end
        if (slider.scrollLeft <= cardWidth() * (cards.length - 1)) {
          slider.style.scrollBehavior = 'auto';
          slider.scrollLeft = cardWidth() * cards.length * 2 - cardWidth();
          setTimeout(() => { slider.style.scrollBehavior = 'smooth'; }, 50);
        }
        busy = false;
      }, 450);
    }

    btnNext.addEventListener('click', next);
    btnPrev.addEventListener('click', prev);
  }

  initInfiniteSlider('blog-slider',    'blog-prev',    'blog-next');
  initInfiniteSlider('results-slider', 'results-prev', 'results-next');
})();
<\/script> <!-- ── S14: FINAL CTA ── --> <section class="final-cta" data-astro-cid-j7pv25f6> <div class="final-cta-inner" data-astro-cid-j7pv25f6> <div class="final-cta-text" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Transform Your Vision into<br class="mob-br" data-astro-cid-j7pv25f6> Reality:</span> <span style="color: white;" class="cta-line2" data-astro-cid-j7pv25f6>Partner with Our Expert<br class="mob-br" data-astro-cid-j7pv25f6> Team Today!</span> </h2> <div data-astro-cid-j7pv25f6> <a href="/contact-us/" class="btn-orange" data-astro-cid-j7pv25f6>Schedule a Consultation</a> </div> </div> <div class="final-cta-image" data-astro-cid-j7pv25f6> <img src="https://demskigroup.com/wp-content/uploads/2024/06/cropped-shot-of-a-group-of-creatives-having-a-meet-2023-11-27-04-53-10-utc-1.jpg" alt="Team meeting" width="800" height="352" loading="lazy" data-astro-cid-j7pv25f6> </div> </div> </section> </main> `])), maybeRenderHead(), ["Java", "PHP", "iOS", "Android", "Python", "JavaScript", "C#", "C++", "TypeScript", "Rust"].concat(
    ["Java", "PHP", "iOS", "Android", "Python", "JavaScript", "C#", "C++", "TypeScript", "Rust"]
  ).map((t) => renderTemplate`<span class="tech-tag" data-astro-cid-j7pv25f6>${t}</span>`), ["React", "Angular", "Ruby", "Swift", "Kotlin", "Node.js", ".NET", "Go", "Vue", "Flutter"].concat(
    ["React", "Angular", "Ruby", "Swift", "Kotlin", "Node.js", ".NET", "Go", "Vue", "Flutter"]
  ).map((t) => renderTemplate`<span class="tech-tag" data-astro-cid-j7pv25f6>${t}</span>`), posts.map((post) => {
    const img = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    const date = new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    return renderTemplate`<a class="post-card"${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-j7pv25f6> ${img && renderTemplate`<img${addAttribute(img, "src")}${addAttribute(post.title.rendered, "alt")} loading="lazy" width="600" height="450" data-astro-cid-j7pv25f6>`} <div class="post-card-overlay" data-astro-cid-j7pv25f6> <div class="post-card-title" data-astro-cid-j7pv25f6>${post.title.rendered}</div> <div class="post-card-bottom" data-astro-cid-j7pv25f6> <span class="post-card-date" data-astro-cid-j7pv25f6>${date}</span> <span class="post-card-read" data-astro-cid-j7pv25f6>Read More →</span> </div> </div> </a>`;
  }), results.map((post) => {
    const img = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    const date = new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    return renderTemplate`<a class="post-card"${addAttribute(`/results/${post.slug}`, "href")} data-astro-cid-j7pv25f6> ${img && renderTemplate`<img${addAttribute(img, "src")}${addAttribute(post.title.rendered, "alt")} loading="lazy" width="600" height="450" data-astro-cid-j7pv25f6>`} <div class="post-card-overlay" data-astro-cid-j7pv25f6> <div class="post-card-title" data-astro-cid-j7pv25f6>${post.title.rendered}</div> <div class="post-card-bottom" data-astro-cid-j7pv25f6> <span class="post-card-date" data-astro-cid-j7pv25f6>${date}</span> <span class="post-card-read" data-astro-cid-j7pv25f6>Read More →</span> </div> </div> </a>`;
  })), "head": async ($$result2) => renderTemplate`<link rel="preload" href="/hero-bg.jpg" as="image"><link rel="preconnect" href="https://cdn.jsdelivr.net"><link rel="preconnect" href="https://api.fontshare.com"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" media="print" onload="this.media='all'">` })}`;
}, "C:/Users/shreya/wordpress-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/shreya/wordpress-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
