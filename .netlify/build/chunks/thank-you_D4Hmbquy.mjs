/* empty css                          */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from './astro/server_By5UoXfJ.mjs';
import 'kleur/colors';
import { $ as $$Main, a as $$Layout } from './Layout_Bov1HE0t.mjs';
import { $ as $$H1 } from './H1_C97Slxu4.mjs';
import { R as ROUTES } from './routes_Be0JyTu8.mjs';
/* empty css                             */

const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  const title = "Thank You";
  const description = "Thank you for your valuable feedback and time.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-reykoxrt": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-reykoxrt": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="h-[92vh] flex flex-col items-center justify-center px-4 bg-gradient-to-b from-sky-50 to-white" data-astro-cid-reykoxrt> <div class="max-w-2xl mx-auto text-center" data-astro-cid-reykoxrt> <div class="mb-8 transform hover:scale-105 transition-transform duration-300" data-astro-cid-reykoxrt> <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 mx-auto text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-reykoxrt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-reykoxrt></path> </svg> </div> ${renderComponent($$result3, "H1", $$H1, { "title": "Thank You", "data-astro-cid-reykoxrt": true })} <p class="text-gray-600 mb-8 text-lg md:text-xl font-light leading-relaxed" data-astro-cid-reykoxrt>
Your feedback is invaluable to us. It helps shape our future
                    and improve our services.
</p> <a${addAttribute(ROUTES.HOME, "href")} class="inline-block bg-transparent border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105" data-astro-cid-reykoxrt>
Return Home
</a> </div> </div> ` })} ` })} `;
}, "/Users/jasonluo/Documents/astro/memoir/src/pages/thank-you.astro", void 0);

const $$file = "/Users/jasonluo/Documents/astro/memoir/src/pages/thank-you.astro";
const $$url = "/thank-you";

export { $$ThankYou as default, $$file as file, $$url as url };
