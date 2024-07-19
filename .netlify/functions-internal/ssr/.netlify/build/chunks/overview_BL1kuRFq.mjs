/* empty css                          */
import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent } from './astro/server_By5UoXfJ.mjs';
import 'kleur/colors';
import { S as StringUtils, g as getCollection, P as ProductUtils } from './coreUtils_DL8u35uA.mjs';
import { $ as $$Main, a as $$Layout } from './Layout_CeMivRIm.mjs';
import { P as PRODUCT, M as METAL, a as PLATING, O as OUR_BRAND, U as UI } from './constants_zJHtZRx4.mjs';
import { $ as $$H1 } from './H1_C97Slxu4.mjs';
import 'clsx';
import { $ as $$ProductCard } from './ProductCard_DtILhWwY.mjs';
import { R as ROUTES } from './routes_Be0JyTu8.mjs';
/* empty css                            */

const $$Astro$4 = createAstro("https://unimemo.netlify.app/");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { page, totalPages } = Astro2.props;
  const hasPreviousProducts = page > 1;
  const hasNextProducts = page < totalPages;
  function getPageUrl(newPage) {
    const url = new URL(Astro2.url);
    url.searchParams.set("page", newPage.toString());
    return url.search;
  }
  const prevPageUrl = getPageUrl(page - 1);
  const nextPageUrl = getPageUrl(page + 1);
  return renderTemplate`${maybeRenderHead()}<nav class="flex justify-center my-6" aria-label="Product list navigation"> <div class="flex items-center bg-sky-50 rounded-full px-3 py-1 shadow-sm transition-shadow hover:shadow-md"> <a${addAttribute(`p-1 rounded-full transition-colors ${hasPreviousProducts ? "text-sky-700 hover:bg-sky-700 hover:text-white" : "text-gray-400 cursor-not-allowed"}`, "class")}${addAttribute(hasPreviousProducts ? prevPageUrl : "#", "href")}${addAttribute(!hasPreviousProducts, "aria-disabled")}> <span class="sr-only">Previous Page</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> </a> <span class="mx-2 text-xs text-sky-700">
Page <span class="font-bold">${page}</span> of ${totalPages} </span> <a${addAttribute(`p-1 rounded-full transition-colors ${hasNextProducts ? "text-sky-700 hover:bg-sky-700 hover:text-white" : "text-gray-400 cursor-not-allowed"}`, "class")}${addAttribute(hasNextProducts ? nextPageUrl : "#", "href")}${addAttribute(!hasNextProducts, "aria-disabled")}> <span class="sr-only">Next Page</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> </a> </div> </nav>`;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/Pagination.astro", void 0);

const $$Astro$3 = createAstro("https://unimemo.netlify.app/");
const $$ProductList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProductList;
  const { products } = Astro2.props;
  return renderTemplate`${products.length > 0 ? renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-4 gap-x-5 gap-y-10 max-lg:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-x-5 max-sm:gap-y-5">${products.map((product) => renderTemplate`${renderComponent($$result, "ProductCard", $$ProductCard, { "product": product })}`)}</div>` : renderTemplate`<div class="flex flex-col items-center justify-center text-center bg-gray-100 rounded-lg p-6"><svg class="w-16 h-16 mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18M3 3v18M3 3l18 18"></path></svg><h2 class="text-2xl font-semibold text-gray-700 mb-2">
No Products Found
</h2><p class="text-gray-500">
We couldn't find any products matching your criteria. Please try
                adjusting your filters or check back later.
</p></div>`}`;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/ProductList.astro", void 0);

const $$Astro$2 = createAstro("https://unimemo.netlify.app/");
const $$ProductFilter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProductFilter;
  const currentSearchParams = Astro2.url.searchParams;
  const isPackagingSelected = currentSearchParams.get("product-type") === "packaging";
  const filterCategories = [
    {
      title: "Product types",
      categories: PRODUCT.ALL_TYPES,
      paramName: "product-type"
    },
    {
      title: "Metal types",
      categories: METAL.ALL_TYPES,
      paramName: "metal-type",
      disabled: isPackagingSelected
    },
    {
      title: "Plating types",
      categories: PLATING.ALL_TYPES,
      paramName: "plating-type",
      disabled: isPackagingSelected
    }
  ];
  const generateLink = (category, paramName) => {
    const params = new URLSearchParams(currentSearchParams);
    if (params.get(paramName) === category) {
      params.delete(paramName);
    } else {
      params.set(paramName, category);
      if (paramName === "product-type" && category === "packaging") {
        params.delete("metal-type");
        params.delete("plating-type");
      }
    }
    params.set("page", "1");
    return `?${params.toString()}`;
  };
  const activeFilters = filterCategories.map((category) => ({
    paramName: category.paramName,
    value: currentSearchParams.get(category.paramName) || ""
  })).filter((filter) => filter.value);
  return renderTemplate`${maybeRenderHead()}<div class="bg-white shadow rounded-lg p-4 mb-6" data-astro-cid-jdeevs2t> <h2 class="text-xl font-semibold mb-4 flex justify-between items-center" data-astro-cid-jdeevs2t>
Filters
${activeFilters.length > 0 && renderTemplate`<span class="text-sm font-normal text-gray-500" data-astro-cid-jdeevs2t> ${activeFilters.length} active
</span>`} </h2> ${filterCategories.map((category) => renderTemplate`<details class="mb-4"${addAttribute(category.paramName, "data-category")} data-astro-cid-jdeevs2t> <summary${addAttribute(`font-medium text-lg cursor-pointer transition-colors ${category.disabled ? "text-gray-400" : "hover:text-sky-600"}`, "class")} data-astro-cid-jdeevs2t> ${category.title} ${!category.disabled && renderTemplate`<span class="text-sm font-normal text-gray-500 ml-2" data-astro-cid-jdeevs2t> ${StringUtils.capitalizeFirstLetter(
    currentSearchParams.get(category.paramName) ?? "any"
  )} </span>`} </summary> ${!category.disabled && renderTemplate`<div class="mt-2 flex flex-wrap gap-2" data-astro-cid-jdeevs2t> ${category.categories.map((item) => {
    const isActive = currentSearchParams.get(category.paramName) === item;
    const href = generateLink(item, category.paramName);
    return renderTemplate`<a${addAttribute(href, "href")}${addAttribute(`px-3 py-1 rounded-full text-sm capitalize transition-colors duration-300 ${isActive ? "bg-sky-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-sky-500 hover:text-white"}`, "class")} data-astro-cid-jdeevs2t> ${item} ${isActive && renderTemplate`<span class="ml-1" data-astro-cid-jdeevs2t>✕</span>`} </a>`;
  })} </div>`} </details>`)} ${activeFilters.length > 0 && renderTemplate`<a${addAttribute(`${ROUTES.OVERVIEW}`, "href")} class="text-sky-600 hover:text-sky-800 transition-colors text-sm" data-astro-cid-jdeevs2t>
Clear all filters
</a>`} </div>  `;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/ProductFilter.astro", void 0);

const $$Astro$1 = createAstro("https://unimemo.netlify.app/");
const $$ProductListView = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductListView;
  const {
    title,
    description = OUR_BRAND.DESCRIPTION,
    products,
    totalPages,
    page
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${title} | ${OUR_BRAND.NAME}`, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-10"> ${renderComponent($$result3, "H1", $$H1, { "title": title })} </div> <div class="mb-12"> ${renderComponent($$result3, "Pagination", $$Pagination, { "page": page, "totalPages": totalPages })} </div> ${renderComponent($$result3, "ProductList", $$ProductList, { "products": products })} <div class="mt-12"> ${renderComponent($$result3, "Pagination", $$Pagination, { "page": page, "totalPages": totalPages })} </div> ${renderComponent($$result3, "ProductFilter", $$ProductFilter, {})} ` })} ` })}`;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/ProductListView.astro", void 0);

const $$Astro = createAstro("https://unimemo.netlify.app/");
const $$Overview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Overview;
  const allProducts = await getCollection("products");
  const productType = Astro2.url.searchParams.get("product-type");
  const metalType = Astro2.url.searchParams.get("metal-type");
  const platingType = Astro2.url.searchParams.get("plating-type");
  const filteredProducts = allProducts.filter(
    (product) => ProductUtils.matchesAllFilters(
      product.data.sku,
      productType,
      metalType,
      platingType
    ) && (productType || metalType || platingType || product.data.isAvailable)
  ).sort((a, b) => a.data.price - b.data.price);
  const totalPages = Math.ceil(filteredProducts.length / UI.PRODUCTS_PER_PAGE);
  let page = Number(Astro2.url.searchParams.get("page")) || 1;
  if (page < 1) {
    page = 1;
  } else if (page > totalPages) {
    page = totalPages;
  }
  const start = (page - 1) * UI.PRODUCTS_PER_PAGE;
  const end = start + UI.PRODUCTS_PER_PAGE;
  const title = `\u50F9\u76EE\u55AE${productType ? ` - ${StringUtils.capitalizeFirstLetter(productType)}` : ""}${metalType ? ` - ${StringUtils.capitalizeFirstLetter(metalType)}` : ""}${platingType ? ` - ${StringUtils.capitalizeFirstLetter(platingType)}` : ""}`;
  const products = filteredProducts.slice(start, end);
  if (page !== Number(Astro2.url.searchParams.get("page"))) {
    return Astro2.redirect(
      `${Astro2.url.pathname}?page=${page}${productType ? `&product-type=${productType}` : ""}${metalType ? `&metal-type=${metalType}` : ""}${platingType ? `&plating-type=${platingType}` : ""}`,
      302
    );
  }
  return renderTemplate`${renderComponent($$result, "ProductListView", $$ProductListView, { "title": title, "description": OUR_BRAND.DESCRIPTION, "products": products, "totalPages": totalPages, "page": page })}`;
}, "/Users/jasonluo/Documents/astro/memoir/src/pages/overview.astro", void 0);

const $$file = "/Users/jasonluo/Documents/astro/memoir/src/pages/overview.astro";
const $$url = "/overview";

export { $$Overview as default, $$file as file, $$url as url };
