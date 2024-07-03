import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DWADJ5vz.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"sku":"332670100","images":["./images/332670100.jpg"],"tags":["new"],"unit":"pair","price":32,"stones":"cubic zirconia","remarks":"Nickel-free.","isAvailable":true};
				const file = "/Users/jasonluo/Documents/astro/memoir/src/content/products/332670100.md";
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
