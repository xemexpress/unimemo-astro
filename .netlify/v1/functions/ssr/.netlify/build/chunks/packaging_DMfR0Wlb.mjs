import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_tfYgqP3C.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"name":"Packaging","sku":"014258867","images":["./images/014258867.jpg"],"tags":["new"],"unit":"piece","price":10,"remarks":"- Can hold necklaces, pendants, earrings, studs, and bracelets.\n- Ultra-microfiber material.","isAvailable":false};
				const file = "/Users/jasonluo/Documents/astro/memoir/src/content/products/packaging.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
