/* empty css                          */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from './astro/server_By5UoXfJ.mjs';
import 'kleur/colors';
import { $ as $$Main, a as $$Layout } from './Layout_CeMivRIm.mjs';
import { $ as $$H1 } from './H1_C97Slxu4.mjs';
import { R as ROUTES } from './routes_Be0JyTu8.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  const title = "Login";
  const description = "Log in to your account";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-10"> ${renderComponent($$result3, "H1", $$H1, { "title": "Log In" })} </div> <div class="flex flex-col items-center justify-center min-h-[60vh] px-4"> <form action="/api/login.json" id="loginForm" class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-8"> <div class="mb-4"> <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label> <input type="email" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email"> </div> <div class="mb-6"> <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label> <input type="password" id="password" name="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password"> </div> <div class="flex items-center justify-between"> <button type="submit" class="bg-sky-900 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 w-full">
Sign In
</button> </div> </form> <div class="mt-6 text-center"> <a href="#" class="font-bold text-sky-900 hover:text-sky-800">Forgot Password?</a> </div> <div class="mt-6 text-center"> <p class="text-gray-700">Don't have an account?</p> <a${addAttribute(ROUTES.CREATE_ACCOUNT, "href")} class="font-bold text-sky-900 hover:text-sky-800">Create an account</a> </div> </div> ` })} ` })}`;
}, "/Users/jasonluo/Documents/astro/memoir/src/pages/login.astro", void 0);

const $$file = "/Users/jasonluo/Documents/astro/memoir/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
