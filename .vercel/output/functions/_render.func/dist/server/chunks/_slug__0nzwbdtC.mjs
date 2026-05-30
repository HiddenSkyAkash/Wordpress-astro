import { c as createComponent } from './astro-component_Ba8YDBP2.mjs';
import 'piccolore';
import { s as renderComponent, v as renderTemplate, d as Fragment, q as maybeRenderHead, k as addAttribute, z as unescapeHTML } from './entrypoint_Cvffq3iJ.mjs';
import { $ as $$Layout } from './Layout_CQHiC_T6.mjs';

const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const res = await fetch(`https://demskigroup.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);
  const posts = await res.json();
  const post = posts[0];
  const date = post ? new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "";
  const featuredImg = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const cat = post?._embedded?.["wp:term"]?.[0]?.[0];
  const author = post?._embedded?.["author"]?.[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post ? `${post.title.rendered} - Demski Group` : "Post Not Found", "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate`  ${post ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="post-hero" data-astro-cid-4sn4zg3r> <div class="breadcrumb" data-astro-cid-4sn4zg3r> <a href="/" data-astro-cid-4sn4zg3r>Home</a> &nbsp;›&nbsp; <a href="/" data-astro-cid-4sn4zg3r>Blog</a> &nbsp;›&nbsp; ${post.title.rendered} </div> <h1 data-astro-cid-4sn4zg3r>${post.title.rendered}</h1> <div class="post-meta" data-astro-cid-4sn4zg3r> <span data-astro-cid-4sn4zg3r>${date}</span> ${cat && renderTemplate`<a${addAttribute(`/category/${cat.slug}`, "href")} class="cat-tag" data-astro-cid-4sn4zg3r>${cat.name}</a>`} ${author && renderTemplate`<span data-astro-cid-4sn4zg3r>By ${author.name}</span>`} </div> </div> ${featuredImg && renderTemplate`<div class="featured-img-wrap" data-astro-cid-4sn4zg3r> <img${addAttribute(featuredImg, "src")}${addAttribute(post.title.rendered, "alt")} data-astro-cid-4sn4zg3r> </div>`}<div class="post-body-wrap" data-astro-cid-4sn4zg3r> <a class="back-link" href="/" data-astro-cid-4sn4zg3r> <svg width="14" height="12" viewBox="0 0 14 12" fill="none" style="transform:rotate(180deg)" data-astro-cid-4sn4zg3r> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6C0 5.77271 0.0902897 5.55473 0.251006 5.39402C0.411723 5.2333 0.629701 5.14301 0.856988 5.14301H10.7861L7.10615 1.46482C6.94523 1.3039 6.85482 1.08565 6.85482 0.858071C6.85482 0.630497 6.94523 0.412243 7.10615 0.251323C7.26707 0.0904038 7.48532 0 7.71289 0C7.94047 0 8.15872 0.0904038 8.31964 0.251323L13.4616 5.39325C13.5414 5.47286 13.6047 5.56743 13.6479 5.67154C13.6911 5.77566 13.7133 5.88728 13.7133 6C13.7133 6.11272 13.6911 6.22434 13.6479 6.32845C13.6047 6.43257 13.5414 6.52714 13.4616 6.60675L8.31964 11.7487C8.15872 11.9096 7.94047 12 7.71289 12C7.48532 12 7.26707 11.9096 7.10615 11.7487C6.94523 11.5878 6.85482 11.3695 6.85482 11.1419C6.85482 10.9144 6.94523 10.6961 7.10615 10.5352L10.7861 6.85699H0.856988C0.629701 6.85699 0.411723 6.7667 0.251006 6.60598C0.0902897 6.44527 0 6.22729 0 6Z" fill="#5B7486" data-astro-cid-4sn4zg3r></path> </svg>
Back to Blog
</a> <div class="post-content" data-astro-cid-4sn4zg3r>${unescapeHTML(post.content.rendered)}</div> </div> ` })}` : renderTemplate`<div class="not-found" data-astro-cid-4sn4zg3r>Post not found. <a href="/" style="color:#003087" data-astro-cid-4sn4zg3r>← Back to Blog</a></div>`}` })}`;
}, "C:/Users/shreya/wordpress-astro/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/shreya/wordpress-astro/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
