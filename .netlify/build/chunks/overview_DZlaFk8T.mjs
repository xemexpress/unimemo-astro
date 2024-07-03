/* empty css                         */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from './astro/server_DWADJ5vz.mjs';
import 'kleur/colors';
import { g as getCollection } from './coreUtils_B01bLQ1H.mjs';
import { $ as $$ProductListView } from './ProductListView_BikX674f.mjs';
import { U as UI, O as OUR_BRAND } from './constants_B0_dQ2bS.mjs';

const $$Astro = createAstro("https://unimemo.netlify.app/");
const $$Overview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Overview;
  const page = Number(Astro2.url.searchParams.get("page")) || 1;
  const start = (page - 1) * UI.PRODUCTS_PER_PAGE;
  const end = start + UI.PRODUCTS_PER_PAGE;
  const title = "\u50F9\u76EE\u55AE";
  const allProducts = (await getCollection("products")).filter(
    (product) => product.data.isAvailable
  );
  const totalPages = Math.ceil(allProducts.length / UI.PRODUCTS_PER_PAGE);
  const products = allProducts.sort((a, b) => a.data.price - b.data.price).slice(start, end);
  return renderTemplate`${renderComponent($$result, "ProductListView", $$ProductListView, { "title": title, "description": OUR_BRAND.DESCRIPTION, "products": products, "totalPages": totalPages, "page": page })}`;
}, "/Users/jasonluo/Documents/astro/memoir/src/pages/overview.astro", void 0);

const $$file = "/Users/jasonluo/Documents/astro/memoir/src/pages/overview.astro";
const $$url = "/overview";

export { $$Overview as default, $$file as file, $$url as url };
