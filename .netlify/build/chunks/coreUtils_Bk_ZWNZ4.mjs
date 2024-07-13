import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError } from './astro/assets-service_BUTefziw.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { c as createComponent, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_DWADJ5vz.mjs';
import 'kleur/colors';
import { b as PRODUCT_TYPE_MAP, P as PRODUCT, c as METAL_PLATING_MAP, M as METAL, a as PLATING } from './constants_zJHtZRx4.mjs';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://unimemo.netlify.app/", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function createGetEntryBySlug({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntryBySlug(collection, slug) {
    const entryImport = await getEntryImport(collection, slug);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    return {
      id: entry.id,
      slug: entry.slug,
      body: entry.body,
      collection: entry.collection,
      data: entry.data,
      async render() {
        return render({
          collection: entry.collection,
          id: entry.id,
          renderEntryImport: await getRenderEntryImport(collection, slug)
        });
      }
    };
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/products/014258867.md": () => import('./014258867_BXAEwQom.mjs'),"/src/content/products/112644201.md": () => import('./112644201_ToIXwPGh.mjs'),"/src/content/products/112646101.md": () => import('./112646101_8WZQ99H9.mjs'),"/src/content/products/112671001.md": () => import('./112671001_KSavutyh.mjs'),"/src/content/products/112686601.md": () => import('./112686601_-qpFa1gi.mjs'),"/src/content/products/114106200.md": () => import('./114106200_RDF2qYcM.mjs'),"/src/content/products/114139200.md": () => import('./114139200_COk7oevz.mjs'),"/src/content/products/114144200.md": () => import('./114144200_Di22yN1a.mjs'),"/src/content/products/114146100.md": () => import('./114146100_CXhJ5geU.mjs'),"/src/content/products/114171000.md": () => import('./114171000_5foOwdos.mjs'),"/src/content/products/114186600.md": () => import('./114186600_BLSb7MYC.mjs'),"/src/content/products/222618201.md": () => import('./222618201_Dm9EjnoE.mjs'),"/src/content/products/224118200.md": () => import('./224118200_CaSzj9SC.mjs'),"/src/content/products/224133800.md": () => import('./224133800_C0Nv-_-j.mjs'),"/src/content/products/332604101.md": () => import('./332604101_YKS4DB7f.mjs'),"/src/content/products/332615901.md": () => import('./332615901_DuXpvn89.mjs'),"/src/content/products/332626000.md": () => import('./332626000_BMrI1P-I.mjs'),"/src/content/products/332628900.md": () => import('./332628900_BNKao8V_.mjs'),"/src/content/products/332632600.md": () => import('./332632600_CymsCA_1.mjs'),"/src/content/products/332637200.md": () => import('./332637200_T5JK870T.mjs'),"/src/content/products/332645900.md": () => import('./332645900_DjQ5jE4i.mjs'),"/src/content/products/332662400.md": () => import('./332662400_ByFsCdvR.mjs'),"/src/content/products/332668401.md": () => import('./332668401_CO_r5ZHk.mjs'),"/src/content/products/332670100.md": () => import('./332670100_4tMmvj04.mjs'),"/src/content/products/332688000.md": () => import('./332688000_C4Uog5Rr.mjs'),"/src/content/products/334104100.md": () => import('./334104100_BPNZ4iDt.mjs'),"/src/content/products/334115900.md": () => import('./334115900_Dj6JDV9J.mjs'),"/src/content/products/334142300.md": () => import('./334142300_C5OA01AZ.mjs'),"/src/content/products/334158500.md": () => import('./334158500_DvqHSITB.mjs'),"/src/content/products/334168400.md": () => import('./334168400_hC5SznuF.mjs'),"/src/content/products/334171200.md": () => import('./334171200_t4df2GKk.mjs'),"/src/content/products/334174600.md": () => import('./334174600_DlV49EtK.mjs'),"/src/content/products/334189500.md": () => import('./334189500_B7J5FJqm.mjs'),"/src/content/products/334192700.md": () => import('./334192700_BzRICnn6.mjs'),"/src/content/products/334194200.md": () => import('./334194200_BVZm05v1.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"products":{"type":"content","entries":{"112644201":"/src/content/products/112644201.md","112646101":"/src/content/products/112646101.md","112671001":"/src/content/products/112671001.md","112686601":"/src/content/products/112686601.md","114106200":"/src/content/products/114106200.md","114139200":"/src/content/products/114139200.md","114144200":"/src/content/products/114144200.md","114146100":"/src/content/products/114146100.md","114171000":"/src/content/products/114171000.md","114186600":"/src/content/products/114186600.md","222618201":"/src/content/products/222618201.md","224118200":"/src/content/products/224118200.md","224133800":"/src/content/products/224133800.md","332604101":"/src/content/products/332604101.md","332615901":"/src/content/products/332615901.md","332626000":"/src/content/products/332626000.md","332628900":"/src/content/products/332628900.md","332632600":"/src/content/products/332632600.md","332637200":"/src/content/products/332637200.md","332645900":"/src/content/products/332645900.md","332662400":"/src/content/products/332662400.md","332668401":"/src/content/products/332668401.md","332670100":"/src/content/products/332670100.md","332688000":"/src/content/products/332688000.md","334104100":"/src/content/products/334104100.md","334115900":"/src/content/products/334115900.md","334142300":"/src/content/products/334142300.md","334158500":"/src/content/products/334158500.md","334168400":"/src/content/products/334168400.md","334171200":"/src/content/products/334171200.md","334174600":"/src/content/products/334174600.md","334189500":"/src/content/products/334189500.md","334192700":"/src/content/products/334192700.md","334194200":"/src/content/products/334194200.md","014258867":"/src/content/products/014258867.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/products/014258867.md": () => import('./014258867_BACaN-1i.mjs'),"/src/content/products/112644201.md": () => import('./112644201_HvveBlfx.mjs'),"/src/content/products/112646101.md": () => import('./112646101_CSTd-26w.mjs'),"/src/content/products/112671001.md": () => import('./112671001_DFMSC6k5.mjs'),"/src/content/products/112686601.md": () => import('./112686601_CRlte-V6.mjs'),"/src/content/products/114106200.md": () => import('./114106200_BvsKSQxP.mjs'),"/src/content/products/114139200.md": () => import('./114139200_BwnNgmQf.mjs'),"/src/content/products/114144200.md": () => import('./114144200_CZAH1RGy.mjs'),"/src/content/products/114146100.md": () => import('./114146100_DdHMvRTY.mjs'),"/src/content/products/114171000.md": () => import('./114171000_BmMfnrLE.mjs'),"/src/content/products/114186600.md": () => import('./114186600_CxZ-2EWe.mjs'),"/src/content/products/222618201.md": () => import('./222618201_CuUxWymT.mjs'),"/src/content/products/224118200.md": () => import('./224118200_BegmCOEe.mjs'),"/src/content/products/224133800.md": () => import('./224133800_Ch5Inz9l.mjs'),"/src/content/products/332604101.md": () => import('./332604101_DziFYDj8.mjs'),"/src/content/products/332615901.md": () => import('./332615901_DpRkFcxk.mjs'),"/src/content/products/332626000.md": () => import('./332626000_Cp8B3aC8.mjs'),"/src/content/products/332628900.md": () => import('./332628900_BKTLO42W.mjs'),"/src/content/products/332632600.md": () => import('./332632600_CBtuZJRh.mjs'),"/src/content/products/332637200.md": () => import('./332637200_DHb_vEK1.mjs'),"/src/content/products/332645900.md": () => import('./332645900_5yGJhdm-.mjs'),"/src/content/products/332662400.md": () => import('./332662400_CqtYlTWq.mjs'),"/src/content/products/332668401.md": () => import('./332668401_CbLboR_2.mjs'),"/src/content/products/332670100.md": () => import('./332670100_C2SAbgLY.mjs'),"/src/content/products/332688000.md": () => import('./332688000_pvEDF6Cf.mjs'),"/src/content/products/334104100.md": () => import('./334104100_zAjD06UV.mjs'),"/src/content/products/334115900.md": () => import('./334115900_DXGI44rP.mjs'),"/src/content/products/334142300.md": () => import('./334142300_VTMwjGZa.mjs'),"/src/content/products/334158500.md": () => import('./334158500_DwBT1Hdw.mjs'),"/src/content/products/334168400.md": () => import('./334168400_C5u6X3fg.mjs'),"/src/content/products/334171200.md": () => import('./334171200_KGwtbiRz.mjs'),"/src/content/products/334174600.md": () => import('./334174600_BidwaEIv.mjs'),"/src/content/products/334189500.md": () => import('./334189500_DXJktl_Z.mjs'),"/src/content/products/334192700.md": () => import('./334192700_BumTLdyY.mjs'),"/src/content/products/334194200.md": () => import('./334194200_C3rL5WbA.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getEntryBySlug = createGetEntryBySlug({
	getEntryImport: createGlobLookup(contentCollectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const StringUtils = {
  capitalizeFirstLetter: (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  },
  normalizeString: (str) => {
    return str.replace(/\+/g, " ").replace(/[^\w\s]/gi, "").toLowerCase();
  }
};
const ProductUtils = {
  getProductTypeFromSku: (sku) => {
    const productTypePrefix = sku.substring(0, 2);
    return PRODUCT_TYPE_MAP[productTypePrefix] || PRODUCT.UNKNOWN;
  },
  getMetalTypeFromSku: (sku) => {
    const metalPlatingCode = sku.substring(2, 4);
    const { metalType = METAL.UNKNOWN } = METAL_PLATING_MAP[metalPlatingCode] || {};
    return metalType;
  },
  getPlatingTypeFromSku: (sku) => {
    const metalPlatingCode = sku.substring(2, 4);
    const { plating = PLATING.UNKNOWN } = METAL_PLATING_MAP[metalPlatingCode] || {};
    return plating;
  },
  deriveProductInfo: (sku) => {
    return {
      productType: ProductUtils.getProductTypeFromSku(sku),
      metalType: ProductUtils.getMetalTypeFromSku(sku),
      plating: ProductUtils.getPlatingTypeFromSku(sku)
    };
  },
  matchesProductType: (sku, productType) => {
    if (!productType) return true;
    const skuProductType = ProductUtils.getProductTypeFromSku(sku);
    const normalizedSkuProductType = StringUtils.normalizeString(skuProductType);
    const normalizedFilterProductType = StringUtils.normalizeString(productType);
    return normalizedSkuProductType === normalizedFilterProductType;
  },
  matchesMetalType: (sku, metalType) => {
    if (!metalType) return true;
    const skuMetalType = ProductUtils.getMetalTypeFromSku(sku);
    const normalizedSkuMetalType = StringUtils.normalizeString(skuMetalType);
    const normalizedFilterMetalType = StringUtils.normalizeString(metalType);
    return normalizedSkuMetalType === normalizedFilterMetalType;
  },
  matchesPlatingType: (sku, platingType) => {
    if (!platingType) return true;
    const skuPlatingType = ProductUtils.getPlatingTypeFromSku(sku);
    const normalizedSkuPlatingType = StringUtils.normalizeString(skuPlatingType);
    const normalizedFilterPlatingType = StringUtils.normalizeString(platingType);
    return normalizedSkuPlatingType === normalizedFilterPlatingType;
  },
  // Combined filter function
  matchesAllFilters: (sku, productType, metalType, platingType) => {
    return ProductUtils.matchesProductType(sku, productType) && ProductUtils.matchesMetalType(sku, metalType) && ProductUtils.matchesPlatingType(sku, platingType);
  }
};
const SEOUtils = {
  generateProductDetailSiteDescription: (productType, metalType, plating, stones) => {
    return `Discover our ${productType} made of ${metalType} with ${plating}${stones?.trim() ? ` and ${stones.toLowerCase()}` : ""}. High-quality craftsmanship at competitive prices. Free delivery in Mong Kok.`;
  },
  generateProductListCategoryDescription: (category) => {
    return `Explore our ${category} jewelry. Find the perfect piece to complement your style. Shop now for competitive prices and free delivery in Mong Kok.`;
  }
};

export { ProductUtils as P, StringUtils as S, getEntryBySlug as a, SEOUtils as b, getCollection as g };
