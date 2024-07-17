import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_By5UoXfJ.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"name":"Serenity Earring Studs","sku":"334194200","images":["./images/334194200.jpg"],"tags":["new"],"unit":"pair","price":37,"stones":"cubic zirconia","remarks":"- About 10mm wide.\n-Nickel-free.","isAvailable":true};
				const file = "/Users/jasonluo/Documents/astro/memoir/src/content/products/serenity-earring-studs.md";
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