import { c as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderSlot, d as createAstro, b as addAttribute, s as spreadAttributes, u as unescapeHTML, a as renderComponent, i as renderHead } from './astro/server_tfYgqP3C.mjs';
import 'kleur/colors';
import 'clsx';
import { O as OUR_BRAND } from './constants_zJHtZRx4.mjs';
import { R as ROUTES } from './routes_Be0JyTu8.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image, a as getImage } from './_astro_assets_hW39gdnb.mjs';
import { p as projectAuth } from './client_BEufOgtb.mjs';

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="px-14 pt-28 pb-7 max-sm:px-7 max-sm:pt-12 max-md:px-16 max-md:pt-16 max-lg:px-20 max-lg:pt-24 max-xl:px-24 w-[100vw] mx-auto"> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/Main.astro", void 0);

const $$Astro$9 = createAstro("https://unimemo.netlify.app/");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/jasonluo/Documents/astro/memoir/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$8 = createAstro("https://unimemo.netlify.app/");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/jasonluo/Documents/astro/memoir/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$7 = createAstro("https://unimemo.netlify.app/");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/jasonluo/Documents/astro/memoir/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$6 = createAstro("https://unimemo.netlify.app/");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/jasonluo/Documents/astro/memoir/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$5 = createAstro("https://unimemo.netlify.app/");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "/Users/jasonluo/Documents/astro/memoir/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$4 = createAstro("https://unimemo.netlify.app/");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/jasonluo/Documents/astro/memoir/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$3 = createAstro("https://unimemo.netlify.app/");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/Users/jasonluo/Documents/astro/memoir/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$2 = createAstro("https://unimemo.netlify.app/");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
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
  return renderTemplate`${maybeRenderHead()}<footer class="bg-sky-800 text-sky-100 py-12 px-14 sm:px-8 md:px-12"> <div class="container mx-auto max-w-6xl"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="text-center md:text-left"> <h2 class="text-xl font-semibold mb-4">Hello!</h2> <p class="mb-2">
Welcome to schedule an appointment for an on-site product
                    viewing.
</p> <p class="font-bold">No minimum order quantity required.</p> </div> <div class="text-center md:text-left"> <h2 class="text-xl font-semibold mb-4">Contact Us</h2> <div class="flex items-center justify-center md:justify-start mb-2"> <span> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </span> <a${addAttribute(`tel:${OUR_BRAND.CONTACT_NUMBER}`, "href")} class="hover:text-sky-300 transition duration-300"> ${OUR_BRAND.CONTACT_NUMBER} </a> </div> <div class="flex items-center justify-center md:justify-start mb-2"> <span> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </span> <a${addAttribute(`mailto:${OUR_BRAND.HELP_DESK}`, "href")} class="hover:text-sky-300 transition duration-300"> ${OUR_BRAND.HELP_DESK} </a> </div> <div class="flex items-center justify-center md:justify-start"> <span> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24"> <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path> </svg> </span> <a${addAttribute(`https://wa.me/${OUR_BRAND.CONTACT_NUMBER.replace(/\D/g, "")}`, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-sky-300 transition duration-300">
Chat on WhatsApp
</a> </div> </div> <div class="text-center md:text-left"> <h2 class="text-xl font-semibold mb-4">Quick Links</h2> <ul> <li> <a href="/" class="hover:text-sky-300 transition duration-300">Home</a> </li> <li> <a${addAttribute(`${ROUTES.OVERVIEW}`, "href")} class="hover:text-sky-300 transition duration-300">Products</a> </li> <!-- Commented out links remain the same --> </ul> </div> </div> <div class="mt-8 pt-8 border-t border-sky-700 text-center px-4"> <p class="text-sm">
© ${(/* @__PURE__ */ new Date()).getFullYear()} ${OUR_BRAND.NAME}. All rights reserved.
</p> </div> </div> </footer>`;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/Footer.astro", void 0);

const logo = new Proxy({"src":"/_astro/logo.DrItcmE-.png","width":400,"height":400,"format":"png"}, {
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

const $$Astro$1 = createAstro("https://unimemo.netlify.app/");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const user = projectAuth.currentUser;
  const currentPath = Astro2.url.pathname;
  const isLoginPage = currentPath === ROUTES.LOGIN;
  const isFeedbackPage = currentPath === ROUTES.FEEDBACK;
  return renderTemplate`${maybeRenderHead()}<header id="sticky-header" class="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 py-2 sm:py-3 flex justify-between items-center bg-white bg-opacity-90 backdrop-blur-sm shadow-md transition-all duration-300 ease-in-out"> <a href="/" class="flex items-center rounded-lg transition-all duration-300 hover:bg-gray-100"> ${renderComponent($$result, "Image", $$Image, { "class": "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain", "src": logo, "alt": `${OUR_BRAND.NAME} Logo`, "width": 150, "height": 150, "loading": "eager", "fetchpriority": "high", "decoding": "async" })} </a> <nav class="flex items-center space-x-2 sm:space-x-4"> ${user && renderTemplate`<a${addAttribute(ROUTES.PROFILE, "href")} class="bg-gray-200 text-gray-800 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-bold hover:bg-gray-300 transition duration-300" aria-label="User Profile"> ${user.displayName?.[0].toUpperCase() || user.email?.[0].toUpperCase() || "U"} </a>`} ${!user && !isLoginPage && !isFeedbackPage && renderTemplate`<a${addAttribute(ROUTES.LOGIN, "href")} class="bg-sky-900 text-white px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-sky-800 transition duration-300 h-8 sm:h-10 flex items-center justify-center">
Log In
</a>`} ${isFeedbackPage && renderTemplate`<a${addAttribute(ROUTES.HOME, "href")} class="text-sky-600 hover:text-sky-800 transition duration-300 text-xs sm:text-sm font-medium h-8 sm:h-10 flex items-center justify-center">
Back to Home
</a>`} ${!isFeedbackPage && renderTemplate`<a${addAttribute(ROUTES.FEEDBACK, "href")} class="group relative flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 h-8 sm:h-10 w-8 sm:w-10" aria-label="Send Feedback"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path> </svg> <span class="absolute top-full right-0 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
Send Feedback
</span> </a>`} </nav> </header> `;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/Header.astro", void 0);

const logoBg = new Proxy({"src":"/_astro/logo-bg.CGVypkpc.png","width":400,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jasonluo/Documents/astro/memoir/src/content/logo-bg.png";
							}
							
							return target[name];
						}
					});

const $$BackToTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="backToTopBtn" class="fixed bottom-8 right-8 bg-sky-900 text-white p-3 rounded-full shadow-lg opacity-0 transition-opacity duration-300 hover:bg-sky-700" aria-label="Back to top"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path> </svg> </button> `;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/BackToTop.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
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
    background: "white"
  })).src;
  const faviconSrcPNG = (await getImage({
    src: logoBg,
    width: 32,
    height: 32,
    format: "png",
    quality: 90
  })).src;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><!-- Google tag (gtag.js) --><script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-0DX2BT6EQ9"><\/script><script type="text/partytown">\n            window.dataLayer = window.dataLayer || [];\n            function gtag() {\n                dataLayer.push(arguments);\n            }\n            gtag("js", new Date());\n\n            gtag("config", "G-0DX2BT6EQ9");\n        <\/script><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"', '><link rel="sitemap" href="/sitemap-index.xml"><link rel="icon" type="image/png"', ">", '<meta name="google-site-verification" content="LcgIWvFWzJ_TFe9E2nuM6LfmtdXoSfwl5HX0En1P9Is">', '</head> <body class="min-h-screen grid grid-rows-[auto,1fr,auto]"> ', " ", " ", " ", ' <!-- Improved Toast Notification Container --> <div id="toast" class="fixed bottom-4 left-4 right-4 sm:left-1/2 sm:-translate-x-1/2 px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-white opacity-0 transition-all duration-300 ease-in-out z-50 shadow-lg sm:max-w-md text-center"></div>  </body> </html>'])), addAttribute(Astro2.generator, "content"), addAttribute(faviconSrcPNG, "href"), renderComponent($$result, "SEO", $$SEO, { "title": brandedTitle, "description": description, "openGraph": {
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
  } }), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "BackToTop", $$BackToTop, {}));
}, "/Users/jasonluo/Documents/astro/memoir/src/layouts/Layout.astro", void 0);

export { $$Main as $, $$Layout as a };
