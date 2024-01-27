/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_o2LUuqrp.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Layout } from './index_Dgvf7CUy.mjs';

const $$Astro = createAstro("https://randyphalla.github.io/");
const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Portfolio;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section id="" class=""></section> <h3 class="hidden">1</h3> <h4>Portfolio</h4> <section id="" class=""> <h3 class="hidden">2</h3> <h4>Portfolio name</h4> </section> <section id="" class=""> <h3 class="hidden">3</h3> <h4>Portfolio desc</h4> </section> ` })}`;
}, "/Users/randyphalla/Documents/GitHub/portfolio-v2/src/pages/portfolio.astro", void 0);

const $$file = "/Users/randyphalla/Documents/GitHub/portfolio-v2/src/pages/portfolio.astro";
const $$url = "/portfolio";

export { $$Portfolio as default, $$file as file, $$url as url };
