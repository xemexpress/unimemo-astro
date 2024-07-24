/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_tfYgqP3C.mjs';
import 'kleur/colors';
import { $ as $$Main, a as $$Layout } from '../chunks/Layout_BmkXWlNO.mjs';
import { $ as $$H1 } from '../chunks/H1_D3wNYO_z.mjs';
import { R as ROUTES } from '../chunks/routes_Be0JyTu8.mjs';
export { renderers } from '../renderers.mjs';

const $$Create = createComponent(($$result, $$props, $$slots) => {
  const title = "Create Account";
  const description = "Create a new account";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-10"> ${renderComponent($$result3, "H1", $$H1, { "title": "Create Account" })} </div> <div class="flex flex-col items-center justify-center min-h-[60vh] px-4"> <form action="/api/create.json" id="createAccountForm" class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-8"> <div class="mb-4"> <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label> <input type="email" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email"> </div> <div class="mb-6"> <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label> <input type="password" id="password" name="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Create a password"> </div> <div class="flex items-center justify-between"> <button type="submit" class="bg-sky-900 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 w-full">
Create Account
</button> </div> </form> <div class="mt-6 text-center"> <p class="text-gray-700">Already have an account?</p> <a${addAttribute(ROUTES.LOGIN, "href")} class="font-bold text-sky-900 hover:text-sky-800">Log in</a> </div> </div> ` })} ` })}`;
}, "/Users/jasonluo/Documents/astro/memoir/src/pages/create.astro", void 0);

const $$file = "/Users/jasonluo/Documents/astro/memoir/src/pages/create.astro";
const $$url = "/create";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Create,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
