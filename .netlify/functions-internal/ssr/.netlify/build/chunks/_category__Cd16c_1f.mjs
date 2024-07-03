/* empty css                         */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_DWADJ5vz.mjs';
import 'kleur/colors';
import { S as StringUtils, g as getCollection, P as ProductUtils, a as SEOUtils } from './coreUtils_B01bLQ1H.mjs';
import { $ as $$ProductListView } from './ProductListView_BikX674f.mjs';
import { P as PLATING, U as UI } from './constants_B0_dQ2bS.mjs';
import { $ as $$Main, a as $$Layout } from './Layout_Ce2eiY5t.mjs';
import { $ as $$H1 } from './H1_CD--PJjE.mjs';
import { $ as $$BackToAllProducts } from './BackToAllProducts_BxDswnFk.mjs';

const $$Astro$1 = createAstro("https://unimemo.netlify.app/");
const $$PlatingType404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PlatingType404;
  const { invalidPlatingType } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Plating Not Found", "description": "This is not the plating you're looking for" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center min-h-[70vh] text-center"> <div class="text-sky-500 mb-6"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-24 h-24"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"></path> </svg> </div> ${renderComponent($$result3, "H1", $$H1, { "title": "Plating Not Found" })} <div class="max-w-2xl mx-auto mt-8"> <p class="text-2xl font-light mb-6 italic text-sky-700">
"This is not the plating you're looking for."
</p> <p class="text-lg mb-4 text-gray-700">
It seems that <span class="font-semibold text-sky-600">"${invalidPlatingType}"</span> is not a plating type in our collection.
</p> <p class="text-lg mb-8 text-gray-700">
Perhaps our plating machine is on vacation, or this finish
                    exists only in a galaxy far, far away.
</p> <div class="mt-12"> ${renderComponent($$result3, "BackToAllProducts", $$BackToAllProducts, {})} </div> </div> </div> ` })} ` })}`;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/PlatingType404.astro", void 0);

const $$Astro = createAstro("https://unimemo.netlify.app/");
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const platingType = Astro2.params.category;
  const isValidPlatingType = PLATING.ALL_TYPES.includes(platingType);
  let title, seoDescription, products, totalPages, page;
  if (isValidPlatingType) {
    page = Number(Astro2.url.searchParams.get("page")) || 1;
    const start = (page - 1) * UI.PRODUCTS_PER_PAGE;
    const end = start + UI.PRODUCTS_PER_PAGE;
    title = StringUtils.capitalizeFirstLetter(platingType);
    seoDescription = SEOUtils.generateProductListCategoryDescription(platingType);
    const productsByCategory = (await getCollection("products")).filter(
      (product) => ProductUtils.getPlatingTypeFromSku(product.data.sku) === platingType
    );
    products = productsByCategory.sort((a, b) => a.data.price - b.data.price).slice(start, end);
    totalPages = Math.ceil(productsByCategory.length / UI.PRODUCTS_PER_PAGE);
  }
  return renderTemplate`${isValidPlatingType ? renderTemplate`${renderComponent($$result, "ProductListView", $$ProductListView, { "title": title, "description": seoDescription, "products": products, "page": page, "totalPages": totalPages, "byCategory": true })}` : renderTemplate`${renderComponent($$result, "PlatingType404", $$PlatingType404, { "invalidPlatingType": platingType })}`}`;
}, "/Users/jasonluo/Documents/astro/memoir/src/pages/overview/plating-types/[category].astro", void 0);

const $$file = "/Users/jasonluo/Documents/astro/memoir/src/pages/overview/plating-types/[category].astro";
const $$url = "/overview/plating-types/[category]";

export { $$category as default, $$file as file, $$url as url };
