import { c as createComponent } from './astro-component_Ba8YDBP2.mjs';
import 'piccolore';
import { s as renderComponent, v as renderTemplate, q as maybeRenderHead, k as addAttribute } from './entrypoint_Cvffq3iJ.mjs';
import { $ as $$Layout } from './Layout_CQHiC_T6.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const page = Number(Astro2.url.searchParams.get("page") || 1);
  const perPage = 10;
  const res = await fetch(`https://demskigroup.com/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`);
  const posts = await res.json();
  const totalRes = await fetch("https://demskigroup.com/wp-json/wp/v2/posts?per_page=1");
  const totalPages = Number(totalRes.headers.get("X-WP-TotalPages") || 1);
  const catRes = await fetch("https://demskigroup.com/wp-json/wp/v2/categories?per_page=20");
  const categories = await catRes.json();
  const tagRes = await fetch("https://demskigroup.com/wp-json/wp/v2/tags?per_page=50");
  const tags = await tagRes.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Our Blog - Demski Group", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="hero" data-astro-cid-5tznm7mj> <h1 data-astro-cid-5tznm7mj>Our blog</h1> <div class="breadcrumb" data-astro-cid-5tznm7mj> <a href="#" data-astro-cid-5tznm7mj>Home</a> &nbsp;&nbsp;&nbsp;›&nbsp;&nbsp;&nbsp; The Demski Group Blog
</div> </div> <div class="main-wrap" data-astro-cid-5tznm7mj> <div class="posts-col" data-astro-cid-5tznm7mj> ${posts.map((post) => {
    const img = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    const date = new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    const cat = post._embedded?.["wp:term"]?.[0]?.[0];
    const excerpt = post.excerpt?.rendered?.replace(/<[^>]+>/g, "").substring(0, 160) + "...";
    return renderTemplate`<div class="post-card" data-astro-cid-5tznm7mj> ${img && renderTemplate`<img${addAttribute(img, "src")}${addAttribute(post.title.rendered, "alt")} data-astro-cid-5tznm7mj>`} <div class="post-info" data-astro-cid-5tznm7mj> <div class="post-meta-row" data-astro-cid-5tznm7mj> <span class="post-date-txt" data-astro-cid-5tznm7mj>${date}</span> ${cat && renderTemplate`<a${addAttribute(`/category/${cat.slug}`, "href")} class="cat-tag" data-astro-cid-5tznm7mj>${cat.name}</a>`} </div> <h2 data-astro-cid-5tznm7mj><a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-5tznm7mj>${post.title.rendered}</a></h2> <p class="post-excerpt" data-astro-cid-5tznm7mj>${excerpt}</p> <a class="read-more-link"${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-5tznm7mj>
Read More
<svg width="14" height="12" viewBox="0 0 14 12" fill="none" data-astro-cid-5tznm7mj> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6C0 5.77271 0.0902897 5.55473 0.251006 5.39402C0.411723 5.2333 0.629701 5.14301 0.856988 5.14301H10.7861L7.10615 1.46482C6.94523 1.3039 6.85482 1.08565 6.85482 0.858071C6.85482 0.630497 6.94523 0.412243 7.10615 0.251323C7.26707 0.0904038 7.48532 0 7.71289 0C7.94047 0 8.15872 0.0904038 8.31964 0.251323L13.4616 5.39325C13.5414 5.47286 13.6047 5.56743 13.6479 5.67154C13.6911 5.77566 13.7133 5.88728 13.7133 6C13.7133 6.11272 13.6911 6.22434 13.6479 6.32845C13.6047 6.43257 13.5414 6.52714 13.4616 6.60675L8.31964 11.7487C8.15872 11.9096 7.94047 12 7.71289 12C7.48532 12 7.26707 11.9096 7.10615 11.7487C6.94523 11.5878 6.85482 11.3695 6.85482 11.1419C6.85482 10.9144 6.94523 10.6961 7.10615 10.5352L10.7861 6.85699H0.856988C0.629701 6.85699 0.411723 6.7667 0.251006 6.60598C0.0902897 6.44527 0 6.22729 0 6Z" fill="#5B7486" data-astro-cid-5tznm7mj></path> </svg> </a> </div> </div>`;
  })} <div class="pagination" data-astro-cid-5tznm7mj> ${page > 1 && renderTemplate`<a${addAttribute(`?page=${page - 1}`, "href")} data-astro-cid-5tznm7mj>‹</a>`} ${page > 2 && renderTemplate`<a href="?page=1" data-astro-cid-5tznm7mj>1</a>`} ${page > 3 && renderTemplate`<span data-astro-cid-5tznm7mj>...</span>`} ${page > 1 && renderTemplate`<a${addAttribute(`?page=${page - 1}`, "href")} data-astro-cid-5tznm7mj>${page - 1}</a>`} <span class="active" data-astro-cid-5tznm7mj>${page}</span> ${page < totalPages && renderTemplate`<a${addAttribute(`?page=${page + 1}`, "href")} data-astro-cid-5tznm7mj>${page + 1}</a>`} ${page < totalPages - 2 && renderTemplate`<span data-astro-cid-5tznm7mj>...</span>`} ${page < totalPages - 1 && renderTemplate`<a${addAttribute(`?page=${totalPages}`, "href")} data-astro-cid-5tznm7mj>${totalPages}</a>`} ${page < totalPages && renderTemplate`<a${addAttribute(`?page=${page + 1}`, "href")} data-astro-cid-5tznm7mj>›</a>`} </div> </div> <div class="sidebar-col" data-astro-cid-5tznm7mj> <div class="sb-box" data-astro-cid-5tznm7mj> <form class="search-form" action="#" method="get" data-astro-cid-5tznm7mj> <input type="search" name="s" placeholder="Search..." data-astro-cid-5tznm7mj> <button type="submit" data-astro-cid-5tznm7mj>🔍</button> </form> </div> <div class="sb-box" data-astro-cid-5tznm7mj> <h3 data-astro-cid-5tznm7mj>Recent Posts</h3> <ul class="recent-ul" data-astro-cid-5tznm7mj> ${posts.slice(0, 5).map((post) => renderTemplate`<li data-astro-cid-5tznm7mj><a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-5tznm7mj>${post.title.rendered}</a></li>`)} </ul> </div> <div class="sb-box" data-astro-cid-5tznm7mj> <h3 data-astro-cid-5tznm7mj>Blog Categories</h3> <ul class="cat-ul" data-astro-cid-5tznm7mj> ${categories.filter((c) => c.count > 0).map((cat) => renderTemplate`<li data-astro-cid-5tznm7mj> <a${addAttribute(`/category/${cat.slug}`, "href")} data-astro-cid-5tznm7mj>${cat.name}</a> <span data-astro-cid-5tznm7mj>(${cat.count})</span> </li>`)} </ul> </div> <div class="sb-box" data-astro-cid-5tznm7mj> <h3 data-astro-cid-5tznm7mj>Technologies</h3> <div class="tech-cloud" data-astro-cid-5tznm7mj> ${tags.map((tag) => renderTemplate`<a${addAttribute(`/technology/${tag.slug}/`, "href")} class="tech-link" data-astro-cid-5tznm7mj>${tag.name}</a>`)} </div> </div> </div> </div> ` })}`;
}, "C:/Users/shreya/wordpress-astro/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/shreya/wordpress-astro/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
