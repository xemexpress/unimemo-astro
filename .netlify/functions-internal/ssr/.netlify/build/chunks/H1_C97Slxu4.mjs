import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_By5UoXfJ.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://unimemo.netlify.app/");
const $$H1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$H1;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-5xl max-sm:text-2xl max-lg:text-4xl text-sky-900 font-bold mb-5 max-sm:text-center"> ${title} </h1>`;
}, "/Users/jasonluo/Documents/astro/memoir/src/components/H1.astro", void 0);

export { $$H1 as $ };
