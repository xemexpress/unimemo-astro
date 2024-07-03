/* empty css                         */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, F as Fragment, u as unescapeHTML } from './astro/server_DWADJ5vz.mjs';
import 'kleur/colors';
import { b as getEntryBySlug, P as ProductUtils, a as SEOUtils, S as StringUtils } from './coreUtils_B01bLQ1H.mjs';
import { $ as $$Main, a as $$Layout } from './Layout_Ce2eiY5t.mjs';
import { $ as $$H1 } from './H1_CD--PJjE.mjs';
import { a as getImage, $ as $$Image } from './_astro_assets_BI8T0jgT.mjs';
import { a as PRODUCT } from './constants_B0_dQ2bS.mjs';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
import { $ as $$BackToAllProducts } from './BackToAllProducts_BxDswnFk.mjs';

const $$Astro = createAstro("https://unimemo.netlify.app/");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const product = await getEntryBySlug("products", slug);
  if (!product) {
    return Astro2.redirect("/404");
  }
  const md = new MarkdownIt();
  const {
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
  const title = `Product ${sku}`;
  const renderedRemarks = md.render(remarks);
  const coverImageSrc = (await getImage({ src: images[0], format: "jpg" })).src;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "type": "product", "image": coverImageSrc, "product": { sku, price: `${price}`, currency: "HKD" } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "title": title })} ${renderComponent($$result3, "BackToAllProducts", $$BackToAllProducts, {})} ${maybeRenderHead()}<div class="grid grid-cols-1 lg:grid-cols-2 gap-8"> <!-- Product Image --> <div class="flex justify-center overflow-hidden rounded-3xl"> ${renderComponent($$result3, "Image", $$Image, { "class": "w-full max-w-md shadow-lg object-cover transition-transform duration-300 ease-in-out hover:scale-110 rounded-3xl", "src": images[0], "alt": title, "width": 1024, "height": 1024 })} </div> <!-- Product Details --> <div class="space-y-4"> <h2 class="text-2xl font-semibold text-sky-900">
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
</th> <td class="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-700"> <div class="flex flex-wrap gap-1 sm:gap-2"> ${tags.map((tag) => renderTemplate`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"> ${tag} </span>`)} </div> </td> </tr>`} </tbody> </table> </div> </div> </div> ${images.length > 1 && renderTemplate`<div class="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4"> ${images.slice(1).map((image, index) => renderTemplate`${renderComponent($$result3, "Image", $$Image, { "src": image, "alt": `${sku} | Product image ${index + 2}`, "width": 360, "height": 360, "class": "rounded-md object-cover" })}`)} </div>`}${renderComponent($$result3, "BackToAllProducts", $$BackToAllProducts, {})} ` })} ` })}`;
}, "/Users/jasonluo/Documents/astro/memoir/src/pages/products/[slug].astro", void 0);

const $$file = "/Users/jasonluo/Documents/astro/memoir/src/pages/products/[slug].astro";
const $$url = "/products/[slug]";

export { $$slug as default, $$file as file, $$url as url };
