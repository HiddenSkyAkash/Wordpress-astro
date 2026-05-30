import { c as createComponent } from './astro-component_Ba8YDBP2.mjs';
import 'piccolore';
import { t as renderHead, k as addAttribute, v as renderTemplate } from './entrypoint_Cvffq3iJ.mjs';
import 'clsx';

const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const tagRes = await fetch(`https://demskigroup.com/wp-json/wp/v2/tags?slug=${slug}`);
  const tags = await tagRes.json();
  const tag = tags[0];
  const postsRes = await fetch(`https://demskigroup.com/wp-json/wp/v2/posts?_embed&tags=${tag.id}&per_page=10`);
  const posts = await postsRes.json();
  return renderTemplate`<html lang="en" data-astro-cid-qy2hbvfh> <head><meta charset="UTF-8"><title>${tag.name} - Demski Group Blog</title><link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;800&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-qy2hbvfh> <div class="top-bar" data-astro-cid-qy2hbvfh>Questions? We're Online — Give Us a Call: 406-412-5291</div> <header data-astro-cid-qy2hbvfh> <div class="logo" data-astro-cid-qy2hbvfh>⬡ Demski Group</div> <nav data-astro-cid-qy2hbvfh> <a href="/" data-astro-cid-qy2hbvfh>Blog</a> <a href="#" class="btn-cta" data-astro-cid-qy2hbvfh>Request a Free Consultation</a> </nav> </header> <div class="hero" data-astro-cid-qy2hbvfh> <h1 data-astro-cid-qy2hbvfh>Tag: ${tag.name}</h1> <div class="breadcrumb" data-astro-cid-qy2hbvfh> <a href="/" data-astro-cid-qy2hbvfh>Home</a> › <a href="/" data-astro-cid-qy2hbvfh>Blog</a> › ${tag.name} </div> </div> <div class="container" data-astro-cid-qy2hbvfh> <a href="/" class="back" data-astro-cid-qy2hbvfh>← Back to Blog</a> ${posts.map((post) => {
    const img = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    const date = new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    return renderTemplate`<div class="post-card" data-astro-cid-qy2hbvfh> ${img && renderTemplate`<img${addAttribute(img, "src")}${addAttribute(post.title.rendered, "alt")} data-astro-cid-qy2hbvfh>`} <div class="info" data-astro-cid-qy2hbvfh> <div class="meta" data-astro-cid-qy2hbvfh>${date}</div> <h2 data-astro-cid-qy2hbvfh>${post.title.rendered}</h2> <a class="read-more"${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-qy2hbvfh>Read More →</a> </div> </div>`;
  })} </div> </body></html>`;
}, "C:/Users/shreya/wordpress-astro/src/pages/tag/[slug].astro", void 0);

const $$file = "C:/Users/shreya/wordpress-astro/src/pages/tag/[slug].astro";
const $$url = "/tag/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
