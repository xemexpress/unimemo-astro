import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, e as renderSlot } from './astro/server_DWADJ5vz.mjs';
import 'kleur/colors';
import 'clsx';
import { P as ProductUtils, L as LinkUtils } from './coreUtils_B01bLQ1H.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_BI8T0jgT.mjs';
import { a as PRODUCT, M as METAL, P as PLATING } from './constants_B0_dQ2bS.mjs';

const $$Astro$5 = createAstro("https://unimemo.netlify.app/");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { page, totalPages, prefix = "" } = Astro2.props;
  const hasPreviousProducts = page > 1;
  const hasNextProducts = totalPages > page;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between"> ${hasPreviousProducts && renderTemplate`<a class="bg-sky-900 text-white py-1 px-3 rounded-lg text-lg"${addAttribute(`${prefix}?page=${page - 1}`, "href")}>
←
</a>`} <div class="flex-grow"></div> ${hasNextProducts && renderTemplate`<a class="bg-sky-900 text-white py-1 px-3 rounded-lg text-lg"${addAttribute(`${prefix}?page=${page + 1}`, "href")}>
→
</a>`} </div>`;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/Pagination.astro", void 0);

const $$Astro$4 = createAstro("https://unimemo.netlify.app/");
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { product } = Astro2.props;
  const { images, sku, unit, price, isAvailable } = product.data;
  const { productType } = ProductUtils.deriveProductInfo(sku);
  return renderTemplate`${maybeRenderHead()}<article class="group transition-all duration-300 ease-in-out"> <a${addAttribute(`/products/${product.slug}`, "href")}> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-lg aspect-square transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-md", "src": images[0], "alt": `Product Image of ${sku}`, "width": 400, "height": 400 })} </a> <div class="text-center capitalize text-xs text-sky-900 mt-2"> ${productType} </div> <div class="text-center leading-snug">${sku}</div> <div class="text-center">HK$${price}/${unit}</div> ${!isAvailable && renderTemplate`<div class="text-center text-red-500">Out of Stock</div>`} </article>`;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/ProductCard.astro", void 0);

const $$Astro$3 = createAstro("https://unimemo.netlify.app/");
const $$ProductList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProductList;
  const { products } = Astro2.props;
  return renderTemplate`${products.length > 0 ? renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-4 gap-x-5 gap-y-10 max-md:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-x-5 max-sm:gap-y-5">${products.map((product) => renderTemplate`${renderComponent($$result, "ProductCard", $$ProductCard, { "product": product })}`)}</div>` : renderTemplate`<div class="flex flex-col items-center justify-center text-center bg-gray-100 rounded-lg p-6"><svg class="w-16 h-16 mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18M3 3v18M3 3l18 18"></path></svg><h2 class="text-2xl font-semibold text-gray-700 mb-2">
No Products Found
</h2><p class="text-gray-500">
We couldn't find any products matching your criteria. Please try
                adjusting your filters or check back later.
</p></div>`}`;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/ProductList.astro", void 0);

const $$Astro$2 = createAstro("https://unimemo.netlify.app/");
const $$Category = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Category;
  const { name, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-sm:max-w-80"> <a class="px-3 py-0.5 border rounded-full text-sm capitalize bg-gray-200 text-gray-900 hover:bg-blue-500 hover:text-white transition-colors duration-300 whitespace-nowrap"${addAttribute(link, "href")}> ${name} </a> </div>`;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/Category.astro", void 0);

const $$Astro$1 = createAstro("https://unimemo.netlify.app/");
const $$CategoryFilter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CategoryFilter;
  const { categories, generateLink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap items-center gap-2"> ${categories.map((category) => renderTemplate`${renderComponent($$result, "Category", $$Category, { "name": category, "link": generateLink(category) })}`)} </div>`;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/CategoryFilter.astro", void 0);

const $$Astro = createAstro("https://unimemo.netlify.app/");
const $$ProductFilterUnit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductFilterUnit;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap items-center gap-4 mb-4"> <h2 class="text-md font-semibold max-md:w-full w-28"> ${title} </h2> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/ProductFilterUnit.astro", void 0);

const $$ProductFilter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ProductFilterUnit", $$ProductFilterUnit, { "title": "Product types" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CategoryFilter", $$CategoryFilter, { "categories": PRODUCT.ALL_TYPES, "generateLink": LinkUtils.generateSpecificProductTypeLink })} ` })} ${renderComponent($$result, "ProductFilterUnit", $$ProductFilterUnit, { "title": "Metal types" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CategoryFilter", $$CategoryFilter, { "categories": METAL.ALL_TYPES, "generateLink": LinkUtils.generateSpecificMetalTypeLink })} ` })} ${renderComponent($$result, "ProductFilterUnit", $$ProductFilterUnit, { "title": "Plating types" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CategoryFilter", $$CategoryFilter, { "categories": PLATING.ALL_TYPES, "generateLink": LinkUtils.generateSpecificPlatingTypeLink })} ` })}`;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/ProductFilter.astro", void 0);

export { $$Pagination as $, $$ProductList as a, $$ProductFilter as b };
