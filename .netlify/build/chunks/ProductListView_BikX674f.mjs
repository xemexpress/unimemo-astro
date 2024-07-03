import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_DWADJ5vz.mjs';
import 'kleur/colors';
import { $ as $$Main, a as $$Layout } from './Layout_Ce2eiY5t.mjs';
import { O as OUR_BRAND } from './constants_B0_dQ2bS.mjs';
import { $ as $$H1 } from './H1_CD--PJjE.mjs';
import { $ as $$Pagination, a as $$ProductList, b as $$ProductFilter } from './ProductFilter_D08jUHFy.mjs';
import { $ as $$BackToAllProducts } from './BackToAllProducts_BxDswnFk.mjs';

const $$Astro = createAstro("https://unimemo.netlify.app/");
const $$ProductListView = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductListView;
  const {
    title,
    description = OUR_BRAND.DESCRIPTION,
    products,
    totalPages,
    page,
    byCategory = false
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${title} | ${OUR_BRAND.NAME}`, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "title": title })} ${byCategory && renderTemplate`${renderComponent($$result3, "BackToAllProducts", $$BackToAllProducts, {})}`}${maybeRenderHead()}<div class="mb-12"> ${renderComponent($$result3, "Pagination", $$Pagination, { "page": page, "totalPages": totalPages })} </div> ${renderComponent($$result3, "ProductList", $$ProductList, { "products": products })} <div class="mt-12"> ${renderComponent($$result3, "Pagination", $$Pagination, { "page": page, "totalPages": totalPages })} </div> ${byCategory ? renderTemplate`${renderComponent($$result3, "BackToAllProducts", $$BackToAllProducts, {})}` : renderTemplate`<div class="my-12"> ${renderComponent($$result3, "ProductFilter", $$ProductFilter, {})} </div>`}` })} ` })}`;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/ProductListView.astro", void 0);

export { $$ProductListView as $ };
