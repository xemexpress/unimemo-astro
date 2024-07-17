import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_By5UoXfJ.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"name":"Golden Mariner Pendant","sku":"114139200","images":["./images/114139200.jpg"],"tags":["new"],"unit":"piece","price":64,"stones":"cubic zirconia","remarks":"- About 8mm wide.\n- Nickel-free.","isAvailable":true};
				const file = "/Users/jasonluo/Documents/astro/memoir/src/content/products/golden-mariner-pendant.md";
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
