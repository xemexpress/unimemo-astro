import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DWADJ5vz.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"sku":"112646101","images":["./images/112646101.jpg"],"tags":["new"],"unit":"piece","price":117,"remarks":"- Text: I Love you to the moon & back\n- Openable design.\n- About 13mm wide.\n- Nickel-free","isAvailable":true};
				const file = "/Users/jasonluo/Documents/astro/memoir/src/content/products/112646101.md";
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
