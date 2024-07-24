/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_tfYgqP3C.mjs';
import 'kleur/colors';
import { $ as $$Main, a as $$Layout } from '../chunks/Layout_BmkXWlNO.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = "Page Not Found";
  const description = "404: This isn't the page you're looking for...";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="text-center py-12"> <p class="text-2xl mb-6">
This isn't the page you're looking for...
</p> <a href="/" class="inline-block bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded transition duration-300">
Return to home page
</a> </div> ` })} ` })}`;
}, "/Users/jasonluo/Documents/astro/memoir/src/pages/404.astro", void 0);

const $$file = "/Users/jasonluo/Documents/astro/memoir/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
