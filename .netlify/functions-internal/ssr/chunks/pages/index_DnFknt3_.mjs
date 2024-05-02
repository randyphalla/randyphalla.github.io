/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderComponent, j as renderSlot, k as renderTransition, l as renderHead, n as fade, m as maybeRenderHead } from '../astro_e0vC0rOT.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect, Fragment as Fragment$1 } from 'react';
import { IoMenu, IoClose, IoLogoGithub, IoLogoLinkedin, IoLogoDribbble, IoLogoBehance, IoMail } from 'react-icons/io5/index.js';
import 'clsx';
import '../index.60d38bcd_l0sNRNKZ.mjs';
import { Transition, Dialog } from '@headlessui/react';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './generic_CUz2MBQO.mjs';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const scrollToSection = (id) => {
    const scrollElement = globalThis.document.getElementById(id);
    scrollElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    });
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };
  useEffect(() => {
    addEventListener("resize", (event) => {
      const windowWidth = event.target;
      const windowInnerWidth = windowWidth.innerWidth;
      if (windowInnerWidth > 768) {
        setMobileMenuOpen(false);
      }
    });
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { id: "header", className: "header dark:bg-gray-900 border-b-1 border-solid border-gray-100 dark:border-gray-50/[.10]", children: [
      /* @__PURE__ */ jsx("h2", { className: "hidden", children: "Header" }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center max-w-screen-xl mx-auto py-4 px-4 transition-all", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "flex transition-opacity hover:opacity-50",
            href: "/",
            "aria-label": "Redirect to home",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                className: "w-10 md:w-16 transition-all",
                src: "/randyphalla-icon.png",
                alt: "Randy Phalla"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "header__menu-button p-1 md:hidden border-1 border-solid border-primary hover:bg-primary hover:border-primary",
            "aria-label": "Open menu",
            role: "button",
            onClick: handleMobileMenu,
            children: /* @__PURE__ */ jsx(IoMenu, { className: "h-8 w-8 stroke-primary" })
          }
        ),
        /* @__PURE__ */ jsx("nav", { className: "header-nav hidden md:block", children: /* @__PURE__ */ jsxs("ul", { className: "header-nav__list flex justify-between items-center", children: [
          /* @__PURE__ */ jsx("li", { className: "header-nav__list-item pr-4", children: /* @__PURE__ */ jsx(
            "a",
            {
              className: "header-nav__list-item-link flex justify-center items-center h-16 dark:text-white font-light text-base tracking-wider",
              onClick: () => scrollToSection("header"),
              role: "button",
              tabIndex: 0,
              "aria-label": "Scroll to top of the page",
              children: "Home"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { className: "header-nav__list-item pr-4", children: /* @__PURE__ */ jsx(
            "a",
            {
              className: "header-nav__list-item-link flex justify-center items-center h-16 dark:text-white font-light text-base tracking-wider",
              onClick: () => scrollToSection("about"),
              role: "button",
              tabIndex: 0,
              "aria-label": "Scroll to about section",
              children: "About"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { className: "header-nav__list-item pr-4", children: /* @__PURE__ */ jsx(
            "a",
            {
              className: "header-nav__list-item-link flex justify-center items-center h-16 dark:text-white font-light text-base tracking-wider",
              onClick: () => scrollToSection("skills"),
              role: "button",
              tabIndex: 0,
              "aria-label": "Scroll to skills section",
              children: "Skills"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { className: "header-nav__list-item pr-4", children: /* @__PURE__ */ jsx(
            "a",
            {
              className: "header-nav__list-item-link flex justify-center items-center h-16 dark:text-white font-light text-base tracking-wider",
              onClick: () => scrollToSection("work"),
              role: "button",
              tabIndex: 0,
              "aria-label": "Scroll to work Experiences section",
              children: "Work Experiences"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { className: "header-nav__list-item pr-4", children: /* @__PURE__ */ jsx(
            "a",
            {
              className: "header-nav__list-item-link flex justify-center items-center h-16 dark:text-white font-light text-base tracking-wider",
              onClick: () => scrollToSection("education"),
              role: "button",
              tabIndex: 0,
              "aria-label": "Scroll to education section",
              children: "Education"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { className: "header-nav__list-item", children: /* @__PURE__ */ jsx(
            "a",
            {
              className: "header-nav__list-item-link flex justify-center items-center h-16 dark:text-white font-light text-base tracking-wider",
              onClick: () => scrollToSection("portfolio"),
              role: "button",
              tabIndex: 0,
              "aria-label": "Scroll to projects section",
              children: "Projects"
            }
          ) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `mobile-menu md:hidden fixed inset-0 bg-gray-900 dark:bg-gray-900 transition-all ${isMobileMenuOpen ? "opacity-100 z-10" : "opacity-0"}`, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-4 px-4 border-b-1 border-solid border-gray-50/[.10]", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "flex transition-opacity hover:opacity-50",
            href: "/",
            "aria-label": "Redirect to home",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                className: "w-10 md:w-16 transition-all",
                src: "/randyphalla-icon.png",
                alt: "Randy Phalla"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "mobile-menu-button p-1 md:hidden bg-primary border-1 border-solid border-primary hover:bg-transparent hover:border-white",
            role: "button",
            "aria-label": "Close menu",
            onClick: handleMobileMenu,
            children: /* @__PURE__ */ jsx(IoClose, { className: "h-8 w-8 stroke-white text-white" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "mobile-menu-nav flex justify-start justify-items-center p-8", children: /* @__PURE__ */ jsxs("ul", { className: "relative flex justify-center justify-items-center flex-col", children: [
        /* @__PURE__ */ jsx("li", { className: "py-2", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "text-white text-2xl text-left transition-all hover:text-primary",
            onClick: () => scrollToSection("header"),
            role: "button",
            tabIndex: 0,
            "aria-label": "Scroll to top of the page",
            children: "Home"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "py-2", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "text-white text-2xl text-lefttransition-all hover:text-primary",
            onClick: () => scrollToSection("about"),
            role: "button",
            tabIndex: 0,
            "aria-label": "Scroll to about section",
            children: "About"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "py-2", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "text-white text-2xl text-left transition-all hover:text-primary",
            onClick: () => scrollToSection("skills"),
            role: "button",
            tabIndex: 0,
            "aria-label": "Scroll to skills section",
            children: "Skills"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "py-2", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "text-white text-2xl text-left transition-all hover:text-primary",
            onClick: () => scrollToSection("work"),
            role: "button",
            tabIndex: 0,
            "aria-label": "Scroll to work Experiences section",
            children: "Work experience"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "py-2", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "text-white text-2xl text-left transition-all hover:text-primary",
            onClick: () => scrollToSection("education"),
            role: "button",
            "aria-label": "Scroll to education section",
            children: "Education"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "py-2", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "text-white text-2xl text-left transition-all hover:text-primary",
            onClick: () => scrollToSection("portfolio"),
            role: "button",
            "aria-label": "Scroll to projects section",
            children: "Projects"
          }
        ) })
      ] }) })
    ] })
  ] });
};

const Footer = () => {
  const scrollToSection = (id) => {
    const scrollElement = globalThis.document.getElementById(id);
    scrollElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    });
  };
  return /* @__PURE__ */ jsxs("footer", { className: "border-t-1 border-solid border-gray-100 dark:border-gray-50/[.10] dark:bg-gray-900", children: [
    /* @__PURE__ */ jsx("h2", { className: "hidden", children: "Footer" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-screen-xl mx-auto py-10 px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex md:grid justify-center md:justify-between items-center flex-col md:flex-row md:grid-cols-3", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "flex transition-opacity hover:opacity-50",
            href: "/",
            onClick: () => scrollToSection("header"),
            "aria-label": "Redirect to home",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                className: "w-10 md:w-16 transition-all",
                src: "/randyphalla-icon.png",
                alt: "Randy Phalla"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs("ul", { className: "mt-5 mb-5 md:mt-0 md:mb-0 flex justify-center md:justify-start items-center md:items-start flex-col md:flex-row", children: [
          /* @__PURE__ */ jsx("li", { className: "mt-2 mb-2 md:mt-0 md: ml-2 mr-2 w-fit", children: /* @__PURE__ */ jsx("a", { href: "https://github.com/randyphalla", target: "_blank", "aria-label": "Redirect to Github", children: /* @__PURE__ */ jsx(IoLogoGithub, { className: "text-4xl md:text-2xl dark:text-white hover:text-gray-600 transition-all" }) }) }),
          /* @__PURE__ */ jsx("li", { className: "mt-2 mb-2 md:mt-0 md: ml-2 mr-2 w-fit", children: /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/randyphalla/", target: "_blank", "aria-label": "Redirect to Linkedin", children: /* @__PURE__ */ jsx(IoLogoLinkedin, { className: "text-4xl md:text-2xl dark:text-white hover:text-gray-600 transition-all" }) }) }),
          /* @__PURE__ */ jsx("li", { className: "mt-2 mb-2 md:mt-0 md: ml-2 mr-2 w-fit", children: /* @__PURE__ */ jsx("a", { href: "https://dribbble.com/randyphalla", target: "_blank", "aria-label": "Redirect to Dribbble", children: /* @__PURE__ */ jsx(IoLogoDribbble, { className: "text-4xl md:text-2xl dark:text-white hover:text-gray-600 transition-all" }) }) }),
          /* @__PURE__ */ jsx("li", { className: "mt-2 mb-2 md:mt-0 md: ml-2 mr-2 w-fit", children: /* @__PURE__ */ jsx("a", { href: "https://www.behance.net/randyphalla", target: "_blank", "aria-label": "Redirect to Behance", children: /* @__PURE__ */ jsx(IoLogoBehance, { className: "text-4xl md:text-2xl dark:text-white hover:text-gray-600 transition-all" }) }) }),
          /* @__PURE__ */ jsx("li", { className: "mt-2 mb-2 md:mt-0 md: ml-2 mr-2 w-fit", children: /* @__PURE__ */ jsx("a", { href: "mailto: randyphalla@gmail.com", "aria-label": "Open email", children: /* @__PURE__ */ jsx(IoMail, { className: "text-4xl md:text-2xl dark:text-white hover:text-gray-600 transition-all" }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-sm md:text-base dark:text-white", children: [
            "Designed and Built by ",
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Randy Phalla" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm md:text-base dark:text-white", children: [
            "Built with ",
            /* @__PURE__ */ jsx("a", { className: "font-bold hover:text-gray-600", href: "https://astro.build/", target: "_blank", "aria-label": "Redirect to Astro", children: "Astro" }),
            ", ",
            /* @__PURE__ */ jsx("a", { className: "font-bold hover:text-gray-600", href: "https://tailwindcss.com/", target: "_blank", "aria-label": "Redirect to Tailwind", children: "Tailwind" }),
            ", and ",
            /* @__PURE__ */ jsx("a", { className: "font-bold hover:text-gray-600", href: "https://reactjs.org/", target: "_blank", "aria-label": "Redirect to React", children: "React" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-7 text-center md:text-left", children: /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base dark:text-white", children: "©2024 Randy Phalla" }) })
    ] })
  ] });
};

const $$Astro$3 = createAstro("https://randyphalla.github.io/");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/randyphalla/Documents/GitHub/portfolio-v2/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://randyphalla.github.io/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"', `> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="I'm a Front-end Developer based in London, Ontario. I graduated from Fanshawe college with an advanced diploma in Graphic Design and a certificate in Interactive Media Specialist. I specialize in responsive design, accessibility, and UI/UX."><meta http-equiv="x-ua-compatible" content="ie=edge"><meta name="theme-color" content="#FF2734"><meta name="robots" content="index,follow"><meta name="googlebot" content="index,follow"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><!-- <meta name="google-site-verification" content="verification_token"> --><meta name="generator"`, "><title>Randy Phalla | ", "</title>", `<!-- Development (Google analytics) --><!-- <script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-7STW1NQ3YR"><\/script>
		<script type="text/partytown">
			window.dataLayer = window.dataLayer || [];
  		function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'G-7STW1NQ3YR');
			gtag('create', 'G-7STW1NQ3YR', {
				'cookieDomain': 'none'
			});
		<\/script> --><!-- Staging (Google analytics) --><!-- <script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-JR03QN772P"><\/script>
		<script type="text/partytown">
			window.dataLayer = window.dataLayer || [];
  		function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'G-JR03QN772P');
		<\/script> -->`, `</head> <body> <h1 class="hidden">Randy Phalla's Portfolio</h1> `, " <main", '> <h2 class="hidden">Main Content</h2> ', " </main> ", " </body></html>"])), addAttribute(renderTransition($$result, "smooz4hq", "none"), "data-astro-transition-scope"), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Header", "client:component-export": "default" }), addAttribute(renderTransition($$result, "6xbvbalr", fade({ duration: "0.3s" })), "data-astro-transition-scope"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", Footer, {}));
}, "/Users/randyphalla/Documents/GitHub/portfolio-v2/src/layouts/Layout.astro", "self");

const $$Astro$1 = createAstro("https://randyphalla.github.io/");
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Banner;
  const { name, role } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-10 md:py-36 dark:bg-gray-900"> <h3 class="hidden">Banner</h3> <div class="max-w-screen-xl mx-auto px-4 text-left"> <h5 class="text-gray-900 dark:text-white font-bold text-6xl md:text-7xl"><span class="gradient-text">${name}</span></h5> <h6 class="mt-2 text-gray-700 dark:text-gray-200 font-medium text-xl">${role}</h6> <p class="mt-2 text-gray-500 dark:text-gray-400 text-base md:max-w-xl	">I specialize in responsive design, accessibility, and user experience.</p> </div> </section>`;
}, "/Users/randyphalla/Documents/GitHub/portfolio-v2/src/components/Banner.astro", void 0);

const PortfolioModal = (props) => {
  const { isOpen, onClose, portfolio } = props;
  return /* @__PURE__ */ jsx(Transition, { appear: true, show: isOpen, as: Fragment$1, children: /* @__PURE__ */ jsxs(Dialog, { as: "div", className: "relative z-10", onClose, children: [
    /* @__PURE__ */ jsx(
      Transition.Child,
      {
        as: Fragment$1,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-25" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 overflow-y-auto", children: /* @__PURE__ */ jsx("div", { className: "min-h-full p-4 flex items-center justify-center text-left", children: /* @__PURE__ */ jsx(
      Transition.Child,
      {
        as: Fragment$1,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 scale-95",
        enterTo: "opacity-100 scale-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-95",
        children: /* @__PURE__ */ jsxs(Dialog.Panel, { className: "flex justify-center items-center flex-col md:flex-row w-full max-w-4xl	transform overflow-hidden p-6 rounded-lg bg-white dark:dark:bg-gray-900 shadow-xl transition-all", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-full md:max-w-sm h-full rounded-lg",
              src: portfolio?.imgSrc,
              alt: portfolio?.imgSrcAlt
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "w-full md:max-w-lg md:pl-6", children: [
            /* @__PURE__ */ jsx(
              Dialog.Title,
              {
                as: "h3",
                className: "mt-5 md:mt-0 dark:text-white font-bold text-2xl md:text-3xl",
                children: portfolio?.title
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "mt-4 dark:text-white text-lg md:text-xl	font-bold", children: "Languges:" }),
            /* @__PURE__ */ jsx(Dialog.Description, { className: "text-gray-600 dark:text-gray-400 text-sm md:text-base", children: portfolio?.languages }),
            portfolio?.siteLink && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("p", { className: "mt-4 dark:text-white text-lg md:text-xl font-bold", children: "Site:" }),
              /* @__PURE__ */ jsx("a", { className: "text-gray-600 dark:text-gray-400 text-sm md:text-base transition-all underline hover:no-underline hover:text-gray-500", href: portfolio?.siteLink, target: "_blank", children: portfolio?.siteLink })
            ] }),
            portfolio?.sites && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("p", { className: "mt-4 dark:text-white text-lg md:text-xl font-bold", children: "Sites:" }),
              /* @__PURE__ */ jsxs("p", { className: "text-gray-600 dark:text-gray-400 text-sm md:text-base", children: [
                "Brands: ",
                /* @__PURE__ */ jsx("a", { className: "transition-all underline hover:no-underline hover:text-gray-500", href: portfolio.sites[0].link, target: "_blank", children: portfolio.sites[0].name }),
                ", ",
                /* @__PURE__ */ jsx("a", { className: "transition-all underline hover:no-underline hover:text-gray-500", href: portfolio.sites[1].link, target: "_blank", children: portfolio.sites[1].name }),
                ", ",
                /* @__PURE__ */ jsx("a", { className: "transition-all underline hover:no-underline hover:text-gray-500", href: portfolio.sites[2].link, target: "_blank", children: portfolio.sites[2].name }),
                ", ",
                /* @__PURE__ */ jsx("a", { className: "transition-all underline hover:no-underline hover:text-gray-500", href: portfolio.sites[3].link, target: "_blank", children: portfolio.sites[3].name }),
                ", ",
                /* @__PURE__ */ jsx("a", { className: "transition-all underline hover:no-underline hover:text-gray-500", href: portfolio.sites[4].link, target: "_blank", children: portfolio.sites[4].name }),
                ", ",
                /* @__PURE__ */ jsx("a", { className: "transition-all underline hover:no-underline hover:text-gray-500", href: portfolio.sites[5].link, target: "_blank", children: portfolio.sites[5].name }),
                ", and ",
                /* @__PURE__ */ jsx("a", { className: "transition-all underline hover:no-underline hover:text-gray-500", href: portfolio.sites[5].link, target: "_blank", children: portfolio.sites[6].name }),
                "."
              ] })
            ] }),
            portfolio?.repoLink && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("p", { className: "mt-4 dark:text-white text-lg md:text-xl font-bold", children: "Repo:" }),
              /* @__PURE__ */ jsx("a", { className: "text-gray-600 dark:text-gray-400 text-sm md:text-base transition-all underline hover:no-underline hover:text-gray-500", href: portfolio?.repoLink, target: "_blank", children: portfolio?.repoLink })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 dark:text-white text-lg md:text-xl font-bold", children: "Project overview:" }),
            /* @__PURE__ */ jsx(Dialog.Description, { className: "text-gray-600 dark:text-gray-400 text-sm md:text-base text-pretty", children: portfolio?.description }),
            portfolio.client && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("p", { className: "mt-4 dark:text-white text-lg md:text-xl font-bold", children: "Client" }),
              /* @__PURE__ */ jsx(Dialog.Description, { className: "text-gray-600 dark:text-gray-400 text-sm md:text-base", children: portfolio?.client })
            ] })
          ] })
        ] })
      }
    ) }) })
  ] }) });
};

const Portfolio = (props) => {
  const { portfolios } = props;
  const [selectedPortfolio, setSelectedPortfolio] = useState(portfolios[0]);
  const [isModalOpen, setModalOpen] = useState(false);
  const handlePortfolioModalOpen = (item) => {
    setModalOpen(!isModalOpen);
    setSelectedPortfolio(item);
  };
  const handleModalClose = () => {
    setModalOpen(!isModalOpen);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { id: "portfolio", className: "py-10 px-4 dark:bg-gray-900", children: [
      /* @__PURE__ */ jsx("h3", { className: "hidden", children: "Projects" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-screen-xl mx-auto", children: [
        /* @__PURE__ */ jsx("h4", { className: "title-gradient title-gradient--projects mb-5 dark:text-white font-bold text-3xl", children: "Projects" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: portfolios && portfolios.map((portfolio) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handlePortfolioModalOpen(portfolio),
            role: "button",
            "aria-label": "Open portfolio modal",
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: "p-4 bg-gray-900 dark:bg-gray-800 hover:bg-gray-700 border-1 border-solid border-gray-900 dark:border-gray-800 hover:border-gray-800 hover:dark:border-gray-700 rounded-lg cursor-pointer transition-all",
                children: [
                  /* @__PURE__ */ jsx("img", { className: "w-full h-full", src: portfolio.imgSrc, alt: portfolio.imgSrcAlt }),
                  /* @__PURE__ */ jsx("h4", { className: "mt-4 text-white dark:text-white font-bold text-base md:text-lg leading-7 md:leading-8 text-left", children: portfolio.title }),
                  portfolio.type && /* @__PURE__ */ jsx("p", { className: "text-gray-400 dark:text-gray-200 text-sm text-left", children: portfolio.type })
                ]
              }
            )
          },
          portfolio.id
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      PortfolioModal,
      {
        isOpen: isModalOpen,
        onClose: handleModalClose,
        portfolio: selectedPortfolio
      }
    )
  ] });
};

const $$Astro = createAstro("https://randyphalla.github.io/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const works = [
    {
      id: 0,
      role: "Front-end Developer",
      href: "https://www.dentsucreative.com/",
      hrefLabel: "Redirect to Dentsu Creative's site",
      company: "Dentsu Creative",
      date: "April 2023 - Present"
    },
    {
      id: 1,
      role: "Full Stack Developer",
      href: "https://devlift.com/",
      hrefLabel: "Redirect to Devlift Media's site",
      company: "Devlift Media",
      date: "Dec 2016 - April 2023"
    },
    {
      id: 2,
      role: "Graphic Design Intern",
      href: "http://www.buzzpr.ca/",
      hrefLabel: "Redirect to BuzzPR's site",
      company: "BuzzPR",
      date: "Aug 2016 - Sept 2016"
    }
  ];
  const educations = [
    {
      id: 0,
      role: "Interactive Media Specialist",
      href: "https://www.fanshawec.ca/programs/ims1-interactive-media-specialist/next",
      hrefLabel: "Redirect to Fanshawe College's site",
      company: "Fanshawe College",
      date: "Sept 2015 - Apr 2016"
    },
    {
      id: 1,
      role: "Graphic Design",
      href: "https://www.fanshawec.ca/programs/grd1-graphic-design/next",
      hrefLabel: "Redirect to Fanshawe College's site",
      company: "Fanshawe College",
      date: "Sept 2011 - Apr 2014"
    }
  ];
  const portfolioItems = [
    {
      id: 0,
      imgSrc: "/portfolio/starwars_thumbnail.png",
      imgSrcAlt: "Starwars",
      title: "Starwars",
      type: "Web",
      description: `
			This project involves retrieving data from an API to construct a web application. The objective was to present a comprehensive list of characters and provide detailed information about each character.
    `,
      siteLink: "https://roaring-liger-fcf8b7.netlify.app/",
      repoLink: "https://github.com/randyphalla/swapi-ajax/tree/development/fetch-api",
      languages: "HTML5, CSS3, Foundation 6, JavaScript and Gulp"
    },
    {
      id: 1,
      imgSrc: "/portfolio/marvel_thumbnail.png",
      imgSrcAlt: "Marvel",
      title: "Marvel",
      type: "Web / Mobile",
      description: `
			This project involves retrieving data from an API to develop a mobile application with the goal of showcasing a comprehensive list of superheroes. The primary objective is to enable users to view detailed information about each superhero by clicking on their respective profiles.
    `,
      siteLink: "https://serene-beijinho-2a498a.netlify.app/",
      repoLink: "https://github.com/randyphalla/marvel-expo-app",
      languages: "React Native, Expo and CSS-in-JS"
    },
    {
      id: 2,
      imgSrc: "/portfolio/pokemon_thumbnail.png",
      imgSrcAlt: "Pokemon",
      title: "Pokemon",
      type: "Web / Mobile",
      description: `
			This project revolves around fetching data from an API to construct a mobile application. The aim is to present a list of Pok\xE9mon and provide detailed information about each Pok\xE9mon upon user interaction.
    `,
      siteLink: "https://lucent-banoffee-173852.netlify.app/",
      repoLink: "https://github.com/randyphalla/pokemon-expo-app",
      languages: "React Native, Expo and CSS-in-JS"
    },
    {
      id: 3,
      imgSrc: "/portfolio/musicbook_thumbnail.png",
      imgSrcAlt: "Musicbook",
      title: "Musicbook",
      type: "Web",
      description: `
			This project entails the development of a music app using PHP and MySQL. Users can register and log in to their accounts, where they gain the ability to favorite or unfavorite artists, albums, songs, and playlists. Additionally, users can create, update, and delete their personalized playlists.
    `,
      repoLink: "https://github.com/randyphalla/musicbook-php-mysql",
      languages: "HTML5, CSS3, Bootstrap v5, PHP and MySQL"
    },
    {
      id: 4,
      imgSrc: "/portfolio/gmlive_thumbnail.png",
      imgSrcAlt: "GM Live",
      title: "GM Live",
      type: "Web",
      description: `
			At Dentsu Creative, our team built a virtual experience that allows participants to interact one-on-one with EV specialists and learn everything about electric vehicles.
		`,
      client: "GM (General Motors)",
      sites: [
        {
          id: 0,
          name: "Chevy",
          link: "https://www.chevrolet.com/live"
        },
        {
          id: 1,
          name: "Cadillac",
          link: "https://www.cadillac.com/live"
        },
        {
          id: 2,
          name: "GMC",
          link: "https://www.gmc.com/live"
        },
        {
          id: 3,
          name: "Buick",
          link: "https://www.buick.com/live"
        },
        {
          id: 4,
          name: "EV US",
          link: "https://evlive.gm.com/livee"
        },
        {
          id: 5,
          name: "EV CAN",
          link: "https://evlive.gm.ca/en/live"
        },
        {
          id: 6,
          name: "Energy",
          link: "https://www.ultiumhome.com/energy-live"
        }
      ],
      languages: "Material UI, TypeScript, React, React Native, Firebase (Firestore & Functions) and Vonage Video API (TokBox OpenTok)"
    }
    // {
    // 	id: 5,
    // 	imgSrc: '',
    // 	imgSrcAlt: 'The Annex',
    // 	title: 'Thn Annex',
    // 	type: 'Web',
    // 	description: '',
    // 	client: '',
    // 	site: 'https://theannex.com/',
    // 	languages: 'HTML5, CSS3, Bootstrap, JavaScript, ReactJS, Storybook',
    // }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Banner", $$Banner, { "name": "Randy Phalla", "role": "Front-end Developer" })} ${maybeRenderHead()}<section id="about" class="py-10 px-4 dark:bg-gray-900 "> <h3 class="hidden">About me</h3> <div class="max-w-screen-xl mx-auto"> <h4 class="title-gradient title-gradient--about mb-5 dark:text-white font-bold text-3xl">About</h4> <div class="flex justify-between items-start flex-col lg:flex-row"> <!-- <img class="hidden lg:block w-full lg:w-80 rounded-lg" src="/me.jpeg" alt="Portrait of Randy Phalla" /> --> ${renderComponent($$result2, "Image", $$Image, { "class": "hidden lg:block w-full lg:w-80 rounded-lg", "src": "/me.jpeg", "alt": "Portrait of Randy Phalla", "loading": "lazy", "decoding": "async", "width": "320", "height": "320" })} <div class="lg:ml-8"> <p class="mb-4 dark:text-white text-base md:text-lg leading-7 md:leading-8 text-pretty">I'm a Front-end Developer based in London, Ontario. I graduated from Fanshawe college with an advanced diploma in Graphic Design and a certificate in Interactive Media Specialist. I specialize in responsive design, accessibility, and UI/UX.</p> <p class="mb-4 dark:text-white text-base md:text-lg leading-7 md:leading-8 text-pretty">I'm currently working at <a class="font-bold hover:text-gray-600 underline underline-offset-2" href="https://www.dentsucreative.com/" target="_blank" aria-label="Redirect to Dentsu Creative's site">Dentsu Creative</a> as a Front-end Developer. I led the frontend team at GM Live. In addition, My responsibilities include building user interfaces, implementing theming, new features into the platform, debugging and problem-solving.</p> <!-- <p class="mb-4 dark:text-white text-base md:text-lg leading-7 md:leading-8 text-pretty">My previous role was at <a class="font-bold hover:text-gray-600 underline underline-offset-2" href="https://devlift.com/" target="_blank" aria-label="Redirect to Devlift Media's site">Devlift Media</a> as a Full Stack Developer. I led front-end and back-end projects with a focus on web apps and mobile development. In addition, I manage projects, build components, structure layouts, theming, review and debug code, deploy products, develop client relationships, collaborate with designers, developers and clients, and mentor junior developers teaching best practices.</p> --> <p class="mb-4 dark:text-white text-base md:text-lg leading-7 md:leading-8 text-pretty">In my previous role at <a class="font-bold hover:text-gray-600 underline underline-offset-2" href="https://devlift.com/" target="_blank" aria-label="Redirect to Devlift Media's site">Devlift Media</a> as a Full Stack Developer, I lead both front-end and back-end projects, emphasizing web applications and mobile development. My responsibilities encompassed project management, component development, layout structuring, theming, code review, debugging, product deployment, mentoring junior developers, and collaboration with designers, developers, and clients.</p> <p class="mb-4 dark:text-white text-base md:text-lg leading-7 md:leading-8 text-pretty">As a developer, it's important to keep up with the ever evolving tech industry. I am always eager to learn new skills and technologies to add to my skill set.</p> <p class="mb-4 dark:text-white text-base md:text-lg leading-7 md:leading-8 text-pretty">Outside of work, I enjoy interactive media, consuming culture through TV and film, and outdoor physical activities.</p> </div> </div> </div> </section> <section id="skills" class="py-10 px-4 dark:bg-gray-900"> <h3 class="hidden">Skills</h3> <div class="max-w-screen-xl mx-auto"> <h4 class="title-gradient title-gradient--skills mb-5 dark:text-white font-bold text-3xl">Skills</h4> <div class=""> <p class="mb-4 text-gray-900 dark:text-white text-base md:text-lg leading-7 md:leading-8"><span class="font-bold">Front-end development:</span> HTML5, CSS3 (SCSS), Responsive Web Design, Accessibility, JavaScript (ES6+), TypeScript, Angular (2+), Ionic, React, React Native, Astro, Gulp, Storybook, Material UI, Storybook, Tailwind, and Bootstrap (3+).</p> <p class="mb-4 text-gray-900 dark:text-white text-base md:text-lg leading-7 mexcellingd:leading-8"><span class="font-bold">Back-end development:</span> Firebase, PHP, MySQL and noSQL.</p> <p class="mb-4 text-gray-900 dark:text-white text-base md:text-lg leading-7 md:leading-8"><span class="font-bold">Project management:</span> Trello and JIRA.</p> <p class="mb-4 text-gray-900 dark:text-white text-base md:text-lg leading-7 md:leading-8"><span class="font-bold">Tools:</span> Adobe (Photoshop, Illustrator & XD), Figma, Sketch, Microsoft (Teams, Excel & Word), GitHub, Sourcetree, and Slack.</p> </div> </div> </section> <section id="work" class="py-10 px-4 dark:bg-gray-900"> <h3 class="hidden">Work Experience</h3> <div class="max-w-screen-xl mx-auto"> <h4 class="title-gradient title-gradient--work dark:text-white mb-5 font-bold text-3xl">Work experience</h4> <div class=""> ${works.map((work) => renderTemplate`<div class="mb-4"> <h4 class="text-gray-900 dark:text-white font-bold text-base md:text-lg leading-7 md:leading-8">${work.role} <a class="ml-1 hover:text-gray-600 hover:underline hover:underline-offset-2"${addAttribute(work.href, "href")} target="_blank"${addAttribute(work.hrefLabel, "aria-label")}>@${work.company}</a></h4> <p class="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-7">${work.date}</p> </div>`)} </div> </div> </section> <section id="education" class="py-10 px-4 dark:bg-gray-900"> <h3 class="hidden">Education</h3> <div class="max-w-screen-xl mx-auto"> <h3 class="title-gradient title-gradient--education mb-5 dark:text-white font-bold text-3xl">Education</h3> <div class=""> ${educations.map((education) => renderTemplate`<div class="mb-4"> <h4 class="text-gray-900 dark:text-white font-bold text-base md:text-lg leading-7 md:leading-8">${education.role} <a class="ml-1 hover:text-gray-600 hover:underline hover:underline-offset-2"${addAttribute(education.href, "href")} target="_blank"${addAttribute(education.hrefLabel, "aria-label")}>@${education.company}</a></h4> <p class="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-7">${education.date}</p> </div>`)} </div> </div> </section> ${renderComponent($$result2, "Portfolio", Portfolio, { "client:load": true, "portfolios": portfolioItems, "client:component-hydration": "load", "client:component-path": "@components/Portfolio", "client:component-export": "default" })} ` })}`;
}, "/Users/randyphalla/Documents/GitHub/portfolio-v2/src/pages/index.astro", void 0);

const $$file = "/Users/randyphalla/Documents/GitHub/portfolio-v2/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, index as i };
