/* empty css                         */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_DWADJ5vz.mjs';
import 'kleur/colors';
import { g as getCollection } from './coreUtils_Bk_ZWNZ4.mjs';
import { $ as $$Main, a as $$Layout } from './Layout_D4b9ByJJ.mjs';
import { $ as $$H1 } from './H1_ByiZApk8.mjs';
import { O as OUR_BRAND } from './constants_zJHtZRx4.mjs';
import { $ as $$ProductCard } from './ProductCard_CpEjz56h.mjs';
/* empty css                         */

const $$Astro = createAstro("https://unimemo.netlify.app/");
const $$FeaturedProductCarousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeaturedProductCarousel;
  const { products } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative px-2" data-astro-cid-wa424qbr> <div class="overflow-x-auto pb-4 scrollbar-hide" id="carousel" data-astro-cid-wa424qbr> <div class="flex space-x-3 pr-3" data-astro-cid-wa424qbr> ${products.map((product) => renderTemplate`<div class="w-[calc(20%-12px)] min-w-[200px] flex-shrink-0" data-astro-cid-wa424qbr> ${renderComponent($$result, "ProductCard", $$ProductCard, { "product": product, "data-astro-cid-wa424qbr": true })} </div>`)} </div> </div> <div class="absolute -left-1 top-1/2 transform -translate-y-1/2 z-10" data-astro-cid-wa424qbr> <button id="prevBtn" class="carousel-btn" aria-label="Previous product" data-astro-cid-wa424qbr> <svg class="w-8 h-8" viewBox="0 0 50 50" data-astro-cid-wa424qbr> <circle class="btn-bg" cx="25" cy="25" r="23" fill="#f0f0f0" stroke="#e0e0e0" stroke-width="1" data-astro-cid-wa424qbr></circle> <path id="prevArrow" d="M28 18l-8 7 8 7" fill="none" stroke="#ffad30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-wa424qbr></path> </svg> </button> </div> <div class="absolute -right-1 top-1/2 transform -translate-y-1/2 z-10" data-astro-cid-wa424qbr> <button id="nextBtn" class="carousel-btn" aria-label="Next product" data-astro-cid-wa424qbr> <svg class="w-8 h-8" viewBox="0 0 50 50" data-astro-cid-wa424qbr> <circle class="btn-bg" cx="25" cy="25" r="23" fill="#f0f0f0" stroke="#e0e0e0" stroke-width="1" data-astro-cid-wa424qbr></circle> <path id="nextArrow" d="M22 18l8 7-8 7" fill="none" stroke="#ffad30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-wa424qbr></path> </svg> </button> </div> </div>  `;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/FeaturedProductCarousel.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allProducts = await getCollection("products");
  const featuredProducts = [
    "332662400",
    "332645900",
    "334194200",
    "114186600",
    "112671001",
    "224133800"
  ];
  const products = allProducts.filter(
    (product) => featuredProducts.indexOf(product.data.sku) != -1 && product.data.isAvailable
  ).sort((a, b) => a.data.price - b.data.price);
  const title = `${OUR_BRAND.NAME} | ${OUR_BRAND.MISSION}`;
  const description = OUR_BRAND.DESCRIPTION;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative h-[92vh] w-screen overflow-hidden" data-astro-cid-j7pv25f6> <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Elegant jewelry display" class="w-full h-full object-cover object-center" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4" data-astro-cid-j7pv25f6> <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-center" data-astro-cid-j7pv25f6>
Inspire the Next Jewelry
</h1> <p class="text-lg sm:text-xl md:text-2xl mb-8 text-center" data-astro-cid-j7pv25f6>
Gold Plated Silver Jewelry for <span class="retailer-highlight" data-astro-cid-j7pv25f6>Retailers</span> </p> <a href="/overview" class="bg-white text-sky-900 px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-sky-100 transition duration-300" data-astro-cid-j7pv25f6>
Explore Our Collection
</a> </div> </div> ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "title": "Featured Products", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result3, "FeaturedProductCarousel", $$FeaturedProductCarousel, { "products": products, "data-astro-cid-j7pv25f6": true })} <div class="mt-8 mb-6 text-center" data-astro-cid-j7pv25f6> <a href="/overview" class="inline-block bg-sky-900 text-white px-6 py-3 rounded-full text-base sm:text-lg hover:bg-sky-800 transition duration-300" data-astro-cid-j7pv25f6>
View All Products
</a> </div> ` })} ` })} `;
}, "/Users/jasonluo/Documents/astro/memoir/src/pages/index.astro", void 0);

const $$file = "/Users/jasonluo/Documents/astro/memoir/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
