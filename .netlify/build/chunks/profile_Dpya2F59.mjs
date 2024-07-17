/* empty css                          */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from './astro/server_By5UoXfJ.mjs';
import 'kleur/colors';
import { $ as $$Main, a as $$Layout } from './Layout_Bov1HE0t.mjs';
import { $ as $$H1 } from './H1_C97Slxu4.mjs';
import { R as ROUTES } from './routes_Be0JyTu8.mjs';

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

export { $$Profile as default, $$file as file, $$url as url };
