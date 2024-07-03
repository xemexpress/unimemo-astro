/* empty css                         */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_DWADJ5vz.mjs';
import 'kleur/colors';
import { g as getCollection } from './coreUtils_B01bLQ1H.mjs';
import { $ as $$Main, a as $$Layout } from './Layout_Ce2eiY5t.mjs';
import { $ as $$H1 } from './H1_CD--PJjE.mjs';
import { $ as $$Pagination, a as $$ProductList, b as $$ProductFilter } from './ProductFilter_D08jUHFy.mjs';
import { U as UI, O as OUR_BRAND } from './constants_B0_dQ2bS.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allProducts = await getCollection("products");
  const totalPages = Math.ceil(allProducts.length / UI.PRODUCTS_PER_PAGE);
  const products = allProducts.filter((product) => product.data.isAvailable).sort((a, b) => a.data.price - b.data.price).slice(0, UI.PRODUCTS_PER_PAGE);
  const title = `${OUR_BRAND.NAME} | ${OUR_BRAND.MISSION}`;
  const description = OUR_BRAND.DESCRIPTION;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "title": "\u50F9\u76EE\u55AE" })} ${maybeRenderHead()}<div class="mb-12"> ${renderComponent($$result3, "Pagination", $$Pagination, { "prefix": "/overview", "page": 1, "totalPages": totalPages })} </div> ${renderComponent($$result3, "ProductList", $$ProductList, { "products": products })} <div class="my-12"> ${renderComponent($$result3, "Pagination", $$Pagination, { "prefix": "/overview", "page": 1, "totalPages": totalPages })} </div> <div class="mb-10"> ${renderComponent($$result3, "ProductFilter", $$ProductFilter, {})} </div> ` })} ` })}`;
}, "/Users/jasonluo/Documents/astro/memoir/src/pages/index.astro", void 0);

const $$file = "/Users/jasonluo/Documents/astro/memoir/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
