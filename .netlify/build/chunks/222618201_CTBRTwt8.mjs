import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DWADJ5vz.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"sku":"222618201","images":["./images/222618201.jpg"],"tags":["new"],"unit":"piece","price":76,"remarks":"Nickel-free.","isAvailable":true};
				const file = "/Users/jasonluo/Documents/astro/memoir/src/content/products/222618201.md";
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
