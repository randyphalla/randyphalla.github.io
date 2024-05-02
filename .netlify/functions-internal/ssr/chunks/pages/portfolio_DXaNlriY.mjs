/* empty css                          */
import { f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_e0vC0rOT.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './index_DnFknt3_.mjs';

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section id="" class=""></section> <h3 class="hidden">1</h3> <h4>Portfolio</h4> <section id="" class=""> <h3 class="hidden">2</h3> <h4>Portfolio name</h4> </section> <section id="" class=""> <h3 class="hidden">3</h3> <h4>Portfolio desc</h4> </section> ` })}`;
}, "/Users/randyphalla/Documents/GitHub/portfolio-v2/src/pages/portfolio.astro", void 0);

const $$file = "/Users/randyphalla/Documents/GitHub/portfolio-v2/src/pages/portfolio.astro";
const $$url = "/portfolio";

export { $$Portfolio as default, $$file as file, $$url as url };
