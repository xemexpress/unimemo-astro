import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError } from './astro/assets-service_DxVWRvTk.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { c as createComponent, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_By5UoXfJ.mjs';
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

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/products/blessed-grace-pendant.md": () => import('./blessed-grace-pendant_C7qqTJ0l.mjs'),"/src/content/products/celestial-chalcedony-earring-studs.md": () => import('./celestial-chalcedony-earring-studs_hdiwcBMP.mjs'),"/src/content/products/celestial-locket-pendant-w.md": () => import('./celestial-locket-pendant-w_BQMCddZw.mjs'),"/src/content/products/celestial-locket-pendant-y.md": () => import('./celestial-locket-pendant-y_Bk5EfB2G.mjs'),"/src/content/products/clover-earring-studs-w.md": () => import('./clover-earring-studs-w_NlOvtoL5.mjs'),"/src/content/products/clover-earring-studs-y.md": () => import('./clover-earring-studs-y_Cg486egh.mjs'),"/src/content/products/flutter-earring-studs-w.md": () => import('./flutter-earring-studs-w_bVtFpTjt.mjs'),"/src/content/products/flutter-earring-studs-y.md": () => import('./flutter-earring-studs-y_Bm9a-YzM.mjs'),"/src/content/products/golden-antler-necklace-w.md": () => import('./golden-antler-necklace-w_DxzvL098.mjs'),"/src/content/products/golden-antler-necklace-y.md": () => import('./golden-antler-necklace-y_CMqifbP_.mjs'),"/src/content/products/golden-mariner-pendant.md": () => import('./golden-mariner-pendant_DfVrdGTA.mjs'),"/src/content/products/golden-moonlight-necklace.md": () => import('./golden-moonlight-necklace_CU1iHe-b.mjs'),"/src/content/products/heart-earring-studs.md": () => import('./heart-earring-studs_87xWZOBa.mjs'),"/src/content/products/laura-key-pendant-w.md": () => import('./laura-key-pendant-w_BhSInfBe.mjs'),"/src/content/products/laura-key-pendant-y.md": () => import('./laura-key-pendant-y_3S4ak97r.mjs'),"/src/content/products/marquise-brilliance-earring-studs.md": () => import('./marquise-brilliance-earring-studs_DkEmdGsg.mjs'),"/src/content/products/misty-melody-earring-studs.md": () => import('./misty-melody-earring-studs_D190pmAv.mjs'),"/src/content/products/packaging.md": () => import('./packaging_Bx3pXjOv.mjs'),"/src/content/products/radiant-cross-earring-studs.md": () => import('./radiant-cross-earring-studs_BYCmVssZ.mjs'),"/src/content/products/sagittarius-arrow-earring-studs.md": () => import('./sagittarius-arrow-earring-studs_KaKzlY28.mjs'),"/src/content/products/seastar-earring-studs.md": () => import('./seastar-earring-studs_BlSSmFuc.mjs'),"/src/content/products/serenity-earring-studs.md": () => import('./serenity-earring-studs_DYsObHqC.mjs'),"/src/content/products/shimmer-earring-studs.md": () => import('./shimmer-earring-studs_dVTR53sE.mjs'),"/src/content/products/silver-skull-earring-studs.md": () => import('./silver-skull-earring-studs_zu0h7Vs0.mjs'),"/src/content/products/sky-spark-earring-studs.md": () => import('./sky-spark-earring-studs_D3Vl6gwV.mjs'),"/src/content/products/starburst-chalcedony-earring-studs.md": () => import('./starburst-chalcedony-earring-studs_BZPIXVtu.mjs'),"/src/content/products/starflower-earring-studs.md": () => import('./starflower-earring-studs_DBtbzfXt.mjs'),"/src/content/products/starlight-earring-studs.md": () => import('./starlight-earring-studs_DboDAShJ.mjs'),"/src/content/products/starlit-luna-pendant-w.md": () => import('./starlit-luna-pendant-w_udeswjd3.mjs'),"/src/content/products/starlit-luna-pendant-y.md": () => import('./starlit-luna-pendant-y_Dl4FcMZk.mjs'),"/src/content/products/stellar-love-locket-pendant-w.md": () => import('./stellar-love-locket-pendant-w_tsACpisc.mjs'),"/src/content/products/stellar-love-locket-pendant-y.md": () => import('./stellar-love-locket-pendant-y_UOobo0Qf.mjs'),"/src/content/products/teddy-earring-studs-w.md": () => import('./teddy-earring-studs-w_CgCSHKtq.mjs'),"/src/content/products/teddy-earring-studs-y.md": () => import('./teddy-earring-studs-y_Dl9UtX4b.mjs'),"/src/content/products/woodland-whisper-earring-studs.md": () => import('./woodland-whisper-earring-studs_BqIk2k6q.mjs')});
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
lookupMap = {"products":{"type":"content","entries":{"celestial-chalcedony-earring-studs":"/src/content/products/celestial-chalcedony-earring-studs.md","blessed-grace-pendant":"/src/content/products/blessed-grace-pendant.md","celestial-locket-pendant-w":"/src/content/products/celestial-locket-pendant-w.md","celestial-locket-pendant-y":"/src/content/products/celestial-locket-pendant-y.md","clover-earring-studs-y":"/src/content/products/clover-earring-studs-y.md","clover-earring-studs-w":"/src/content/products/clover-earring-studs-w.md","flutter-earring-studs-w":"/src/content/products/flutter-earring-studs-w.md","flutter-earring-studs-y":"/src/content/products/flutter-earring-studs-y.md","golden-antler-necklace-y":"/src/content/products/golden-antler-necklace-y.md","golden-antler-necklace-w":"/src/content/products/golden-antler-necklace-w.md","golden-moonlight-necklace":"/src/content/products/golden-moonlight-necklace.md","golden-mariner-pendant":"/src/content/products/golden-mariner-pendant.md","heart-earring-studs":"/src/content/products/heart-earring-studs.md","laura-key-pendant-w":"/src/content/products/laura-key-pendant-w.md","laura-key-pendant-y":"/src/content/products/laura-key-pendant-y.md","marquise-brilliance-earring-studs":"/src/content/products/marquise-brilliance-earring-studs.md","misty-melody-earring-studs":"/src/content/products/misty-melody-earring-studs.md","packaging":"/src/content/products/packaging.md","radiant-cross-earring-studs":"/src/content/products/radiant-cross-earring-studs.md","sagittarius-arrow-earring-studs":"/src/content/products/sagittarius-arrow-earring-studs.md","serenity-earring-studs":"/src/content/products/serenity-earring-studs.md","seastar-earring-studs":"/src/content/products/seastar-earring-studs.md","silver-skull-earring-studs":"/src/content/products/silver-skull-earring-studs.md","sky-spark-earring-studs":"/src/content/products/sky-spark-earring-studs.md","shimmer-earring-studs":"/src/content/products/shimmer-earring-studs.md","starburst-chalcedony-earring-studs":"/src/content/products/starburst-chalcedony-earring-studs.md","starflower-earring-studs":"/src/content/products/starflower-earring-studs.md","starlight-earring-studs":"/src/content/products/starlight-earring-studs.md","starlit-luna-pendant-y":"/src/content/products/starlit-luna-pendant-y.md","starlit-luna-pendant-w":"/src/content/products/starlit-luna-pendant-w.md","stellar-love-locket-pendant-y":"/src/content/products/stellar-love-locket-pendant-y.md","teddy-earring-studs-w":"/src/content/products/teddy-earring-studs-w.md","woodland-whisper-earring-studs":"/src/content/products/woodland-whisper-earring-studs.md","stellar-love-locket-pendant-w":"/src/content/products/stellar-love-locket-pendant-w.md","teddy-earring-studs-y":"/src/content/products/teddy-earring-studs-y.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/products/blessed-grace-pendant.md": () => import('./blessed-grace-pendant_9xQkZj5a.mjs'),"/src/content/products/celestial-chalcedony-earring-studs.md": () => import('./celestial-chalcedony-earring-studs_DsYmTASx.mjs'),"/src/content/products/celestial-locket-pendant-w.md": () => import('./celestial-locket-pendant-w_DB5UmP-n.mjs'),"/src/content/products/celestial-locket-pendant-y.md": () => import('./celestial-locket-pendant-y_BcUmype2.mjs'),"/src/content/products/clover-earring-studs-w.md": () => import('./clover-earring-studs-w_Ep7nCc7G.mjs'),"/src/content/products/clover-earring-studs-y.md": () => import('./clover-earring-studs-y_3Hp7PEQI.mjs'),"/src/content/products/flutter-earring-studs-w.md": () => import('./flutter-earring-studs-w_otzJTqwE.mjs'),"/src/content/products/flutter-earring-studs-y.md": () => import('./flutter-earring-studs-y_C3XGuz-a.mjs'),"/src/content/products/golden-antler-necklace-w.md": () => import('./golden-antler-necklace-w_BFNrKof6.mjs'),"/src/content/products/golden-antler-necklace-y.md": () => import('./golden-antler-necklace-y_DyRDWCW8.mjs'),"/src/content/products/golden-mariner-pendant.md": () => import('./golden-mariner-pendant_COU94aIG.mjs'),"/src/content/products/golden-moonlight-necklace.md": () => import('./golden-moonlight-necklace_CDMX9ogp.mjs'),"/src/content/products/heart-earring-studs.md": () => import('./heart-earring-studs_Ce0NOLHT.mjs'),"/src/content/products/laura-key-pendant-w.md": () => import('./laura-key-pendant-w_CNdvPb5C.mjs'),"/src/content/products/laura-key-pendant-y.md": () => import('./laura-key-pendant-y_BNJ_9bZI.mjs'),"/src/content/products/marquise-brilliance-earring-studs.md": () => import('./marquise-brilliance-earring-studs_BG89tybr.mjs'),"/src/content/products/misty-melody-earring-studs.md": () => import('./misty-melody-earring-studs_7baHtJl4.mjs'),"/src/content/products/packaging.md": () => import('./packaging_B59VUkf5.mjs'),"/src/content/products/radiant-cross-earring-studs.md": () => import('./radiant-cross-earring-studs_ZMlDamS_.mjs'),"/src/content/products/sagittarius-arrow-earring-studs.md": () => import('./sagittarius-arrow-earring-studs_CLI7-_Za.mjs'),"/src/content/products/seastar-earring-studs.md": () => import('./seastar-earring-studs_BLHD_Mq8.mjs'),"/src/content/products/serenity-earring-studs.md": () => import('./serenity-earring-studs_DP9DTT5Q.mjs'),"/src/content/products/shimmer-earring-studs.md": () => import('./shimmer-earring-studs_om8oE2FT.mjs'),"/src/content/products/silver-skull-earring-studs.md": () => import('./silver-skull-earring-studs_CzgMKSNJ.mjs'),"/src/content/products/sky-spark-earring-studs.md": () => import('./sky-spark-earring-studs_CUbJ-wHT.mjs'),"/src/content/products/starburst-chalcedony-earring-studs.md": () => import('./starburst-chalcedony-earring-studs_CTJHatp6.mjs'),"/src/content/products/starflower-earring-studs.md": () => import('./starflower-earring-studs_BZzywtbk.mjs'),"/src/content/products/starlight-earring-studs.md": () => import('./starlight-earring-studs_D_TKwm38.mjs'),"/src/content/products/starlit-luna-pendant-w.md": () => import('./starlit-luna-pendant-w_CG1FuZUy.mjs'),"/src/content/products/starlit-luna-pendant-y.md": () => import('./starlit-luna-pendant-y_DtNhCOZD.mjs'),"/src/content/products/stellar-love-locket-pendant-w.md": () => import('./stellar-love-locket-pendant-w_BLtlME48.mjs'),"/src/content/products/stellar-love-locket-pendant-y.md": () => import('./stellar-love-locket-pendant-y_CNmjJX1n.mjs'),"/src/content/products/teddy-earring-studs-w.md": () => import('./teddy-earring-studs-w_kUTMfpFR.mjs'),"/src/content/products/teddy-earring-studs-y.md": () => import('./teddy-earring-studs-y_2AfRaiv1.mjs'),"/src/content/products/woodland-whisper-earring-studs.md": () => import('./woodland-whisper-earring-studs_DQlSenFS.mjs')});
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
  },
  slugify: (text) => {
    return text.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
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
