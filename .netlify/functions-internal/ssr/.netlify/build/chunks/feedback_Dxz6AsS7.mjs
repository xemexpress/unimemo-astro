/* empty css                          */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_By5UoXfJ.mjs';
import 'kleur/colors';
import { $ as $$Main, a as $$Layout } from './Layout_Bov1HE0t.mjs';
import { $ as $$H1 } from './H1_C97Slxu4.mjs';

const $$Feedback = createComponent(($$result, $$props, $$slots) => {
  const title = "Help Us Improve";
  const description = "Share your thoughts to shape our future";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-10"> ${renderComponent($$result3, "H1", $$H1, { "title": "Your Voice Shapes Our Future" })} </div> <div class="bg-gradient-to-b from-sky-50 to-white px-4 py-8 md:py-12"> <div class="max-w-3xl mx-auto"> <p class="text-center text-gray-600 mb-8 text-sm md:text-base">
Your insights drive our innovation. Help us improve!
</p> <form action="/api/feedback.json" id="feedbackForm" class="w-full bg-white shadow-lg rounded-lg px-4 sm:px-8 py-6 sm:py-8 mb-6 transition-all duration-300 hover:shadow-xl"> <div class="mb-6"> <label for="experience" class="flex items-center text-gray-700 text-sm font-semibold mb-2"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path> </svg>
What stood out to you recently?
</label> <textarea id="experience" name="experience" class="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 min-h-[100px]" placeholder="Share a recent experience..."></textarea> </div> <div class="mb-6"> <label for="improvement" class="flex items-center text-gray-700 text-sm font-semibold mb-2"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg>
How can we enhance this?
</label> <textarea id="improvement" name="improvement" class="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 min-h-[100px]" placeholder="Your ideas for improvement..."></textarea> </div> <div class="mb-6"> <label for="newIdeas" class="flex items-center text-gray-700 text-sm font-semibold mb-2"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path> </svg>
Any new ideas for us?
</label> <textarea id="newIdeas" name="newIdeas" class="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 min-h-[100px]" placeholder="Share your innovative ideas..."></textarea> </div> <div class="flex items-center justify-center"> <button type="submit" class="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-all duration-300 w-full sm:w-auto text-sm sm:text-base flex items-center justify-center"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path> </svg> <span class="hidden sm:inline">Submit Feedback</span> <span class="sm:hidden">Submit</span> </button> </div> </form> <p class="text-xs sm:text-sm text-gray-500 mt-4 text-center max-w-md mx-auto">
Your anonymous feedback helps us improve. Thank you!
</p> </div> </div> ` })} ` })}`;
}, "/Users/jasonluo/Documents/astro/memoir/src/pages/feedback.astro", void 0);

const $$file = "/Users/jasonluo/Documents/astro/memoir/src/pages/feedback.astro";
const $$url = "/feedback";

export { $$Feedback as default, $$file as file, $$url as url };
