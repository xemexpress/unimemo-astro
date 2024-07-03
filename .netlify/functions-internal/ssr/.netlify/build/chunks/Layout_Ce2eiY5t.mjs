import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, b as createAstro, d as addAttribute, s as spreadAttributes, u as unescapeHTML, a as renderComponent, f as renderHead } from './astro/server_DWADJ5vz.mjs';
import 'kleur/colors';
import 'clsx';
import { O as OUR_BRAND } from './constants_B0_dQ2bS.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image, a as getImage } from './_astro_assets_BI8T0jgT.mjs';

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="px-28 py-7 max-sm:px-7 max-md:px-16 max-lg:px-20 max-w-7xl w-full mx-auto"> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/Main.astro", void 0);

const $$Astro$8 = createAstro("https://unimemo.netlify.app/");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/jasonluo/Documents/astro/memoir/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$7 = createAstro("https://unimemo.netlify.app/");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/jasonluo/Documents/astro/memoir/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$6 = createAstro("https://unimemo.netlify.app/");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/jasonluo/Documents/astro/memoir/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$5 = createAstro("https://unimemo.netlify.app/");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/jasonluo/Documents/astro/memoir/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$4 = createAstro("https://unimemo.netlify.app/");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "/Users/jasonluo/Documents/astro/memoir/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$3 = createAstro("https://unimemo.netlify.app/");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/jasonluo/Documents/astro/memoir/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$2 = createAstro("https://unimemo.netlify.app/");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/Users/jasonluo/Documents/astro/memoir/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$1 = createAstro("https://unimemo.netlify.app/");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/Users/jasonluo/Documents/astro/memoir/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-sky-700 text-center py-14 max-sm:py-8"> <div class="container mx-auto flex flex-col items-center text-sky-100"> <div class="flex items-center mb-4"> <span class="text-2xl mr-2">✆</span> ${OUR_BRAND.CONTACT_NUMBER} <a${addAttribute(`https://wa.me/${OUR_BRAND.CONTACT_NUMBER.replace(/\D/g, "")}`, "href")} target="_blank" rel="noopener noreferrer" class="ml-2"> <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="WhatsApp" class="w-5 h-5"> </a> </div> <div class="mb-4"> <a${addAttribute(`mailto:${OUR_BRAND.HELP_DESK}`, "href")} class="hover:underline">
✉️ ${OUR_BRAND.HELP_DESK} </a> </div> <div class="max-w-md mx-auto text-sm mb-6"> <p class="mb-2"> <strong>Free Pick-up Location:</strong> Olympian City 3
</p> <p class="mb-2"> <strong>In-store Delivery Fee:</strong> $25, Free for orders over
                $800
</p> <p>For any inquiries or feedback, please feel free to contact us</p> </div> <div class="text-sky-200 text-xs">
© ${OUR_BRAND.COPYRIGHT} ${OUR_BRAND.NAME}. All rights reserved.
</div> </div> </footer>`;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/Footer.astro", void 0);

const logo = new Proxy({"src":"/_astro/logo.CGVypkpc.png","width":400,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jasonluo/Documents/astro/memoir/src/content/logo.png";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="px-24 py-12 max-sm:px-5 max-sm:py-7 max-w-7xl w-full mx-auto"> <a class="flex items-center gap-x-4" href="/"> ${renderComponent($$result, "Image", $$Image, { "class": "w-16", "src": logo, "alt": `${OUR_BRAND.NAME} Logo`, "width": 150, "height": 150 })} <p class="uppercase text-2xl font-bold text-sky-900"> ${OUR_BRAND.NAME} </p> </a> </header>`;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://unimemo.netlify.app/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, type = "website", image, product } = Astro2.props;
  const brandedTitle = title.toLowerCase().includes(OUR_BRAND.NAME.toLowerCase()) ? title : `${title} | ${OUR_BRAND.NAME}`;
  const finalImageSrc = (await getImage({
    src: image || logo,
    width: 1200,
    height: 630,
    format: "jpg",
    quality: 90,
    fit: "contain",
    // This will add padding to maintain aspect ratio
    background: "white"
    // Optional: Set background color if needed
  })).src;
  const faviconSrcPNG = (await getImage({
    src: logo,
    width: 32,
    height: 32,
    format: "png",
    quality: 90
  })).src;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="sitemap" href="/sitemap-index.xml"><link rel="icon" type="image/png"${addAttribute(faviconSrcPNG, "href")}><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "SEO", $$SEO, { "title": brandedTitle, "description": description, "openGraph": {
    basic: {
      title: brandedTitle,
      type,
      image: finalImageSrc,
      url: Astro2.url
    },
    optional: {
      description,
      siteName: OUR_BRAND.NAME
    },
    image: {
      url: finalImageSrc,
      alt: description
    }
  }, "twitter": {
    card: "summary_large_image",
    site: Astro2.url.href,
    creator: "@xemexpress",
    title: brandedTitle,
    description,
    image: finalImageSrc,
    imageAlt: description
  }, "extend": {
    // extending the default link tags
    link: [{ rel: "icon", href: OUR_BRAND.LOGO }],
    // extending the default meta tags
    meta: product && [
      { name: "og:price:sku", content: product?.sku },
      { name: "og:price:amount", content: product?.price },
      { name: "og:price:currency", content: product?.currency },
      { name: "product:brand", content: OUR_BRAND.NAME }
    ]
  } })}<meta name="google-site-verification" content="LcgIWvFWzJ_TFe9E2nuM6LfmtdXoSfwl5HX0En1P9Is">${renderHead()}</head> <body class="min-h-screen grid grid-rows-[auto, fr, auto]"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/jasonluo/Documents/astro/memoir/src/layouts/Layout.astro", void 0);

export { $$Main as $, $$Layout as a };
