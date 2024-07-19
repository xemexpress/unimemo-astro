/* empty css                                     */
import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, F as Fragment, u as unescapeHTML } from '../../chunks/astro/server_tfYgqP3C.mjs';
import 'kleur/colors';
import { a as getEntryBySlug, P as ProductUtils, b as SEOUtils, S as StringUtils } from '../../chunks/coreUtils_Doa5Wz6n.mjs';
import { $ as $$Main, a as $$Layout } from '../../chunks/Layout_BjTnNXMf.mjs';
import { $ as $$H1 } from '../../chunks/H1_D3wNYO_z.mjs';
import { a as getImage, $ as $$Image } from '../../chunks/_astro_assets_hW39gdnb.mjs';
import { P as PRODUCT } from '../../chunks/constants_zJHtZRx4.mjs';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
import 'clsx';
import { R as ROUTES$1 } from '../../chunks/routes_Be0JyTu8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://unimemo.netlify.app/");
const $$Back = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Back;
  const { slug } = Astro2.params;
  const params = new URLSearchParams(Astro2.url.search);
  params.delete("p");
  const queryString = params.toString();
  return renderTemplate`${maybeRenderHead()}<a class="inline-block p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"${addAttribute(`${ROUTES$1.OVERVIEW}${queryString ? `?${queryString}` : ""}${slug ? `#${slug}` : ""}`, "href")} aria-label="Back to overview"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg> </a>`;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/Back.astro", void 0);

const $$Astro = createAstro("https://unimemo.netlify.app/");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const product = await getEntryBySlug("products", slug);
  if (!product) {
    return Astro2.redirect(ROUTES.NOT_FOUND);
  }
  const md = new MarkdownIt();
  const {
    name,
    images,
    sku,
    tags,
    unit,
    price,
    isAvailable,
    remarks,
    stones = ""
  } = product.data;
  const { productType, metalType, plating } = ProductUtils.deriveProductInfo(sku);
  const description = SEOUtils.generateProductDetailSiteDescription(
    productType,
    metalType,
    plating,
    stones
  );
  const title = name;
  const renderedRemarks = md.render(remarks);
  const coverImageSrc = (await getImage({ src: images[0], format: "jpg" })).src;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "type": "product", "image": coverImageSrc, "product": { sku, price: `${price}`, currency: "HKD" } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-10"> ${renderComponent($$result3, "H1", $$H1, { "title": title })} </div> ${renderComponent($$result3, "Back", $$Back, { "sku": sku })} <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"> <!-- Product Image --> <div class="flex justify-center overflow-hidden rounded-3xl"> ${renderComponent($$result3, "Image", $$Image, { "class": "w-full max-w-md shadow-lg object-cover transition-transform duration-300 ease-in-out hover:scale-110 rounded-3xl", "src": images[0], "alt": title, "width": 1024, "height": 1024 })} </div> <!-- Product Details --> <div class="space-y-4"> <h2 class="text-2xl font-semibold text-sky-900">
Product details
</h2> <div class="max-w-full overflow-x-auto"> <table class="w-full bg-white border border-gray-200 rounded-lg shadow-sm"> <tbody> <tr class="border-t hover:bg-gray-200 hover:shadow-md transition duration-300"> <th class="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 align-top text-left">SKU</th> <td class="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-700">${sku}</td> </tr> <tr class="border-t hover:bg-gray-200 hover:shadow-md transition duration-300"> <th class="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 align-top text-left">Unit price</th> <td class="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-700">
HK$${price} / ${unit} </td> </tr> <tr class="border-t hover:bg-gray-200 hover:shadow-md transition duration-300"> <th class="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 align-top text-left">Stock</th> <td class="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-700"> ${isAvailable ? `Available` : "Out of stock"} </td> </tr> <tr class="border-t bg-gray-50 hover:bg-gray-200 hover:shadow-md transition duration-300"> <th class="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 align-top text-left">Product type</th> <td class="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700"> ${StringUtils.capitalizeFirstLetter(
    productType
  )} </td> </tr> ${productType != PRODUCT.TYPES.PACKAGING && renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate` <tr class="border-t bg-gray-50 hover:bg-gray-200 hover:shadow-md transition duration-300"> <th class="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 align-top text-left">
Base metal type
</th> <td class="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700"> ${StringUtils.capitalizeFirstLetter(
    metalType
  )} </td> </tr> <tr class="border-t bg-gray-50 hover:bg-gray-200 hover:shadow-md transition duration-300"> <th class="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 align-top text-left">
Plating
</th> <td class="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700"> ${StringUtils.capitalizeFirstLetter(
    plating
  )} </td> </tr> ` })}`} ${stones.trim() !== "" && renderTemplate`<tr class="border-t bg-gray-50 hover:bg-gray-200 hover:shadow-md transition duration-300"> <th class="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 align-top text-left">
Stones
</th> <td class="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700"> ${StringUtils.capitalizeFirstLetter(
    stones
  )} </td> </tr>`} ${remarks.trim() !== "" && renderTemplate`<tr class="border-t bg-gray-50 hover:bg-gray-200 hover:shadow-md transition duration-300"> <th class="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 align-top text-left">
Remarks
</th> <td class="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-700"> <div>${unescapeHTML(sanitizeHtml(
    renderedRemarks
  ))}</div> </td> </tr>`} ${tags.length > 0 && renderTemplate`<tr class="border-t bg-gray-50 hover:bg-gray-200 transition duration-300"> <th class="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 align-top text-left">
Tags
</th> <td class="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-700"> <div class="flex flex-wrap gap-1 sm:gap-2"> ${tags.map((tag) => renderTemplate`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"> ${tag} </span>`)} </div> </td> </tr>`} </tbody> </table> </div> </div> </div> ${images.length > 1 && renderTemplate`<div class="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4"> ${images.slice(1).map((image, index) => renderTemplate`${renderComponent($$result3, "Image", $$Image, { "src": image, "alt": `${sku} | Product image ${index + 2}`, "width": 360, "height": 360, "class": "rounded-md object-cover" })}`)} </div>`}${renderComponent($$result3, "Back", $$Back, { "sku": sku })} ` })} ` })}`;
}, "/Users/jasonluo/Documents/astro/memoir/src/pages/products/[slug].astro", void 0);

const $$file = "/Users/jasonluo/Documents/astro/memoir/src/pages/products/[slug].astro";
const $$url = "/products/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
