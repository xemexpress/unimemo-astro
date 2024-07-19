/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_tfYgqP3C.mjs';
import 'kleur/colors';
import { $ as $$Main, a as $$Layout } from '../chunks/Layout_BjTnNXMf.mjs';
import { $ as $$H1 } from '../chunks/H1_D3wNYO_z.mjs';
import { R as ROUTES } from '../chunks/routes_Be0JyTu8.mjs';
export { renderers } from '../renderers.mjs';

const $$Profile = createComponent(($$result, $$props, $$slots) => {
  const title = "Your Profile";
  const description = "Welcome to your profile page. Share your ideas with us!";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center"> ${renderComponent($$result3, "H1", $$H1, { "title": "Welcome Back" })} <p class="mt-4 mb-8 text-lg text-gray-600 max-w-md">
Have any ideas on how we can enhance our products or services?
                We'd love to hear from you!
</p> <div class="space-y-4"> <a${addAttribute(ROUTES.FEEDBACK, "href")} class="inline-block bg-sky-600 text-white px-6 py-3 rounded-full text-base sm:text-lg hover:bg-sky-700 transition duration-300">
Share Your Ideas
</a> <form action="/api/logout.json" class="block"> <button type="submit" id="logoutBtn" class="w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-full text-base sm:text-lg hover:bg-gray-300 transition duration-300">
Logout
</button> </form> </div> </div> ` })} ` })}`;
}, "/Users/jasonluo/Documents/astro/memoir/src/pages/profile.astro", void 0);

const $$file = "/Users/jasonluo/Documents/astro/memoir/src/pages/profile.astro";
const $$url = "/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Profile,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
