import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent } from './astro/server_tfYgqP3C.mjs';
import 'kleur/colors';
import { P as ProductUtils, S as StringUtils } from './coreUtils_Doa5Wz6n.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_hW39gdnb.mjs';
import { R as ROUTES } from './routes_Be0JyTu8.mjs';

const $$Astro = createAstro("https://unimemo.netlify.app/");
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { product } = Astro2.props;
  const { name, images, sku, unit, price, isAvailable } = product.data;
  const { productType } = ProductUtils.deriveProductInfo(sku);
  const currentPage = Astro2.url.searchParams.get("page") || 1;
  const productT = Astro2.url.searchParams.get("product-type") || "";
  const platingT = Astro2.url.searchParams.get("plating-type") || "";
  const metalT = Astro2.url.searchParams.get("metal-type") || "";
  const slug = StringUtils.slugify(name);
  return renderTemplate`${maybeRenderHead()}<article class="group relative transition-all duration-300 ease-in-out overflow-hidden rounded-lg"${addAttribute(sku, "id")}> <a${addAttribute(`${ROUTES.PRODUCTS(slug)}?p=${currentPage}${productT.length > 0 ? `&product-type=${productT}` : ""}${platingT.length > 0 ? `&plating-type=${platingT}` : ""}${metalT.length > 0 ? `&metal-type=${metalT}` : ""}`, "href")} class="block relative"> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-lg aspect-square transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-md", "src": images[0], "alt": `Product Image of ${sku}`, "width": 400, "height": 400 })} <div class="absolute top-2 left-2 bg-white bg-opacity-75 px-2 py-1 rounded text-sky-900 capitalize text-xs max-sm:text-[11px]"> ${productType} </div> <div class="max-sm:hidden absolute top-2 right-2 bg-white bg-opacity-75 px-2 py-1 rounded text-xs max-sm:text-[11px]"> ${sku} </div> <div class="hidden absolute top-2 left-2 right-2 bg-white bg-opacity-75 px-2 py-1 justify-between items-center text-xs max-sm:text-[11px] rounded text-sky-900 capitalize max-sm:flex"> <span> ${productType} </span> <span> ${sku} </span> </div> <div class="absolute bottom-2 left-2 bg-white bg-opacity-75 px-2 py-1 rounded text-xs max-sm:text-[11px]">
HK$${price}/${unit} </div> ${!isAvailable && renderTemplate`<div class="absolute bottom-2 right-2 bg-red-500 bg-opacity-75 px-2 py-1 rounded text-xs text-white">
Out of Stock
</div>`} </a> </article>`;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/ProductCard.astro", void 0);

export { $$ProductCard as $ };
