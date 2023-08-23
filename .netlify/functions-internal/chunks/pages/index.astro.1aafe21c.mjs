/* empty css                           */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, d as renderSlot, e as renderHead, f as addAttribute, m as maybeRenderHead } from '../astro.ef9759fb.mjs';
import 'html-escaper';
import { useState, useEffect, Fragment as Fragment$1 } from 'react';
import { IoMenu, IoClose, IoLogoGithub, IoLogoLinkedin, IoLogoDribbble, IoLogoBehance, IoMail } from 'react-icons/io5/index.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Transition, Dialog } from '@headlessui/react';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

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
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("header", {
      id: "header",
      className: "header dark:bg-gray-900 border-b-1 border-solid border-gray-100 dark:border-gray-50/[.10]",
      children: [/* @__PURE__ */ jsx("h2", {
        className: "hidden",
        children: "Header"
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex justify-between items-center max-w-screen-xl mx-auto py-4 px-4 transition-all",
        children: [/* @__PURE__ */ jsx("img", {
          className: "w-10 md:w-16 transition-all",
          src: "/randyphalla-icon.png",
          alt: "Randy Phalla"
        }), /* @__PURE__ */ jsx("button", {
          className: "header__menu-button p-1 md:hidden border-1 border-solid border-primary hover:bg-primary hover:border-primary",
          "aria-label": "Open menu",
          role: "button",
          onClick: handleMobileMenu,
          children: /* @__PURE__ */ jsx(IoMenu, {
            className: "h-8 w-8 stroke-primary"
          })
        }), /* @__PURE__ */ jsx("nav", {
          className: "header-nav hidden md:block",
          children: /* @__PURE__ */ jsxs("ul", {
            className: "header-nav__list flex justify-between items-center",
            children: [/* @__PURE__ */ jsx("li", {
              className: "header-nav__list-item pr-4",
              children: /* @__PURE__ */ jsx("a", {
                className: "header-nav__list-item-link flex justify-center items-center h-16 dark:text-white font-light text-base tracking-wider",
                onClick: () => scrollToSection("header"),
                role: "button",
                tabIndex: 0,
                "aria-label": "Scroll to top of the page",
                children: "Home"
              })
            }), /* @__PURE__ */ jsx("li", {
              className: "header-nav__list-item pr-4",
              children: /* @__PURE__ */ jsx("a", {
                className: "header-nav__list-item-link flex justify-center items-center h-16 dark:text-white font-light text-base tracking-wider",
                onClick: () => scrollToSection("about"),
                role: "button",
                tabIndex: 0,
                "aria-label": "Scroll to about section",
                children: "About"
              })
            }), /* @__PURE__ */ jsx("li", {
              className: "header-nav__list-item pr-4",
              children: /* @__PURE__ */ jsx("a", {
                className: "header-nav__list-item-link flex justify-center items-center h-16 dark:text-white font-light text-base tracking-wider",
                onClick: () => scrollToSection("skills"),
                role: "button",
                tabIndex: 0,
                "aria-label": "Scroll to skills section",
                children: "Skills"
              })
            }), /* @__PURE__ */ jsx("li", {
              className: "header-nav__list-item pr-4",
              children: /* @__PURE__ */ jsx("a", {
                className: "header-nav__list-item-link flex justify-center items-center h-16 dark:text-white font-light text-base tracking-wider",
                onClick: () => scrollToSection("work"),
                role: "button",
                tabIndex: 0,
                "aria-label": "Scroll to work Experiences section",
                children: "Work Experiences"
              })
            }), /* @__PURE__ */ jsx("li", {
              className: "header-nav__list-item pr-4",
              children: /* @__PURE__ */ jsx("a", {
                className: "header-nav__list-item-link flex justify-center items-center h-16 dark:text-white font-light text-base tracking-wider",
                onClick: () => scrollToSection("education"),
                role: "button",
                tabIndex: 0,
                "aria-label": "Scroll to education section",
                children: "Education"
              })
            }), /* @__PURE__ */ jsx("li", {
              className: "header-nav__list-item",
              children: /* @__PURE__ */ jsx("a", {
                className: "header-nav__list-item-link flex justify-center items-center h-16 dark:text-white font-light text-base tracking-wider",
                onClick: () => scrollToSection("portfolio"),
                role: "button",
                tabIndex: 0,
                "aria-label": "Scroll to projects section",
                children: "Projects"
              })
            })]
          })
        })]
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: `mobile-menu fixed inset-0 bg-gray-900 dark:bg-gray-900 transition-all ${isMobileMenuOpen ? "opacity-100 z-10" : "opacity-0"}`,
      children: [/* @__PURE__ */ jsxs("div", {
        className: "flex justify-between items-center py-4 px-4 border-b-1 border-solid border-gray-50/[.10]",
        children: [/* @__PURE__ */ jsx("img", {
          className: "w-10 md:w-16 transition-all",
          src: "/randyphalla-icon.png",
          alt: "Randy Phalla"
        }), /* @__PURE__ */ jsx("button", {
          className: "mobile-menu-button p-1 md:hidden bg-primary border-1 border-solid border-primary hover:bg-transparent hover:border-white",
          role: "button",
          "aria-label": "Close menu",
          onClick: handleMobileMenu,
          children: /* @__PURE__ */ jsx(IoClose, {
            className: "h-8 w-8 stroke-white text-white"
          })
        })]
      }), /* @__PURE__ */ jsx("nav", {
        className: "mobile-menu-nav flex justify-start justify-items-center p-8",
        children: /* @__PURE__ */ jsxs("ul", {
          className: "relative flex justify-center justify-items-center flex-col",
          children: [/* @__PURE__ */ jsx("li", {
            className: "py-2",
            children: /* @__PURE__ */ jsx("button", {
              className: "text-white text-2xl transition-all hover:text-primary",
              onClick: () => scrollToSection("header"),
              role: "button",
              tabIndex: 0,
              "aria-label": "Scroll to top of the page",
              children: "Home"
            })
          }), /* @__PURE__ */ jsx("li", {
            className: "py-2",
            children: /* @__PURE__ */ jsx("button", {
              className: "text-white text-2xl transition-all hover:text-primary",
              onClick: () => scrollToSection("about"),
              role: "button",
              tabIndex: 0,
              "aria-label": "Scroll to about section",
              children: "About"
            })
          }), /* @__PURE__ */ jsx("li", {
            className: "py-2",
            children: /* @__PURE__ */ jsx("button", {
              className: "text-white text-2xl transition-all hover:text-primary",
              onClick: () => scrollToSection("skills"),
              role: "button",
              tabIndex: 0,
              "aria-label": "Scroll to skills section",
              children: "Skills"
            })
          }), /* @__PURE__ */ jsx("li", {
            className: "py-2",
            children: /* @__PURE__ */ jsx("button", {
              className: "text-white text-2xl transition-all hover:text-primary",
              onClick: () => scrollToSection("work"),
              role: "button",
              tabIndex: 0,
              "aria-label": "Scroll to work Experiences section",
              children: "Work experience"
            })
          }), /* @__PURE__ */ jsx("li", {
            className: "py-2",
            children: /* @__PURE__ */ jsx("button", {
              className: "text-white text-2xl transition-all hover:text-primary",
              onClick: () => scrollToSection("education"),
              role: "button",
              "aria-label": "Scroll to education section",
              children: "Education"
            })
          }), /* @__PURE__ */ jsx("li", {
            className: "py-2",
            children: /* @__PURE__ */ jsx("button", {
              className: "text-white text-2xl transition-all hover:text-primary",
              onClick: () => scrollToSection("portfolio"),
              role: "button",
              "aria-label": "Scroll to projects section",
              children: "Projects"
            })
          })]
        })
      })]
    })]
  });
};
__astro_tag_component__(Header, "@astrojs/react");

const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", {
    className: "border-t-1 border-solid border-gray-100 dark:border-gray-50/[.10] dark:bg-gray-900",
    children: [/* @__PURE__ */ jsx("h2", {
      className: "hidden",
      children: "Footer"
    }), /* @__PURE__ */ jsxs("div", {
      className: "max-w-screen-xl mx-auto py-10 px-4",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "flex md:grid justify-center md:justify-between items-center flex-col md:flex-row md:grid-cols-3",
        children: [/* @__PURE__ */ jsx("img", {
          className: "w-16",
          src: "/randyphalla-icon.png",
          alt: "Randy Phalla"
        }), /* @__PURE__ */ jsxs("ul", {
          className: "mt-5 mb-5 md:mt-0 md:mb-0 flex justify-center md:justify-start items-center md:items-start flex-col md:flex-row",
          children: [/* @__PURE__ */ jsx("li", {
            className: "mt-2 mb-2 md:mt-0 md: ml-2 mr-2 w-fit",
            children: /* @__PURE__ */ jsx("a", {
              href: "https://github.com/randyphalla",
              target: "_blank",
              "aria-label": "Redirect to Github",
              children: /* @__PURE__ */ jsx(IoLogoGithub, {
                className: "text-4xl md:text-2xl dark:text-white hover:text-gray-600 transition-all"
              })
            })
          }), /* @__PURE__ */ jsx("li", {
            className: "mt-2 mb-2 md:mt-0 md: ml-2 mr-2 w-fit",
            children: /* @__PURE__ */ jsx("a", {
              href: "https://www.linkedin.com/in/randyphalla/",
              target: "_blank",
              "aria-label": "Redirect to Linkedin",
              children: /* @__PURE__ */ jsx(IoLogoLinkedin, {
                className: "text-4xl md:text-2xl dark:text-white hover:text-gray-600 transition-all"
              })
            })
          }), /* @__PURE__ */ jsx("li", {
            className: "mt-2 mb-2 md:mt-0 md: ml-2 mr-2 w-fit",
            children: /* @__PURE__ */ jsx("a", {
              href: "https://dribbble.com/randyphalla",
              target: "_blank",
              "aria-label": "Redirect to Dribbble",
              children: /* @__PURE__ */ jsx(IoLogoDribbble, {
                className: "text-4xl md:text-2xl dark:text-white hover:text-gray-600 transition-all"
              })
            })
          }), /* @__PURE__ */ jsx("li", {
            className: "mt-2 mb-2 md:mt-0 md: ml-2 mr-2 w-fit",
            children: /* @__PURE__ */ jsx("a", {
              href: "https://www.behance.net/randyphalla",
              target: "_blank",
              "aria-label": "Redirect to Behance",
              children: /* @__PURE__ */ jsx(IoLogoBehance, {
                className: "text-4xl md:text-2xl dark:text-white hover:text-gray-600 transition-all"
              })
            })
          }), /* @__PURE__ */ jsx("li", {
            className: "mt-2 mb-2 md:mt-0 md: ml-2 mr-2 w-fit",
            children: /* @__PURE__ */ jsx("a", {
              href: "mailto: randyphalla@gmail.com",
              "aria-label": "Open email",
              children: /* @__PURE__ */ jsx(IoMail, {
                className: "text-4xl md:text-2xl dark:text-white hover:text-gray-600 transition-all"
              })
            })
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "",
          children: [/* @__PURE__ */ jsxs("p", {
            className: "text-sm md:text-base dark:text-white",
            children: ["Designed and Built by ", /* @__PURE__ */ jsx("span", {
              className: "font-bold",
              children: "Randy Phalla"
            })]
          }), /* @__PURE__ */ jsxs("p", {
            className: "text-sm md:text-base dark:text-white",
            children: ["Built with ", /* @__PURE__ */ jsx("a", {
              className: "font-bold hover:text-gray-600",
              href: "https://astro.build/",
              target: "_blank",
              "aria-label": "Redirect to Astro",
              children: "Astro"
            }), ", ", /* @__PURE__ */ jsx("a", {
              className: "font-bold hover:text-gray-600",
              href: "https://tailwindcss.com/",
              target: "_blank",
              "aria-label": "Redirect to Tailwind",
              children: "Tailwind"
            }), ", and ", /* @__PURE__ */ jsx("a", {
              className: "font-bold hover:text-gray-600",
              href: "https://reactjs.org/",
              target: "_blank",
              "aria-label": "Redirect to React",
              children: "React"
            })]
          })]
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "mt-7 text-center md:text-left",
        children: /* @__PURE__ */ jsx("p", {
          className: "text-sm md:text-base dark:text-white",
          children: "©2023 Randy Phalla"
        })
      })]
    })]
  });
};
__astro_tag_component__(Footer, "@astrojs/react");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://randyphalla.github.io/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="I'm a Full Stack Developer based in London, Ontario. I graduated from Fanshawe college with an advanced diploma in Graphic Design and a certificate in Interactive Media Specialist. I specialize in accessibility, animations and UI/UX."><meta http-equiv="x-ua-compatible" content="ie=edge"><meta name="theme-color" content="#FF2734"><meta name="robots" content="index,follow"><meta name="googlebot" content="index,follow"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><!-- <meta name="google-site-verification" content="verification_token"> --><meta name="generator"`, "><title>Randy Phalla | ", `</title><!-- Development (Google analytics) --><!-- <script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-7STW1NQ3YR"><\/script>
		<script type="text/partytown">
			window.dataLayer = window.dataLayer || [];
  		function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'G-7STW1NQ3YR');
			gtag('create', 'G-7STW1NQ3YR', {
				'cookieDomain': 'none'
			});
		<\/script> --><!-- Staging (Google analytics) --><script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-JR03QN772P"><\/script><script type="text/partytown">
			window.dataLayer = window.dataLayer || [];
  		function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'G-JR03QN772P');
		<\/script>`, `</head><body><h1 class="hidden">Randy Phalla's Portfolio</h1>`, '<main><h2 class="hidden">Main Content</h2>', "</main>", "</body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Header", "client:component-export": "default" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", Footer, {}));
}, "/Users/randyphalla/Documents/GitHub/portfolio-v2/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro("https://randyphalla.github.io/");
const $$Banner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Banner;
  const { name, role } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-10 md:py-36 dark:bg-gray-900"><h3 class="hidden">Banner</h3><div class="max-w-screen-xl mx-auto px-4 text-left"><h4 class="text-gray-900 dark:text-white font-normal text-sm md:text-base">Hey, I'm</h4><h5 class="text-gray-900 dark:text-white font-bold text-6xl md:text-7xl"><span class="gradient-text">${name}</span></h5><h6 class="mt-2 text-gray-900 dark:text-gray-200 font-medium text-2xl md:text-3xl">${role}</h6><p class="mt-2 dark:text-gray-200 text-base md:text-lg">I specialize in accessibility, animations and UI/UX.</p></div></section>`;
}, "/Users/randyphalla/Documents/GitHub/portfolio-v2/src/components/Banner.astro", void 0);

const PortfolioModal = (props) => {
  const {
    isOpen,
    onClose,
    portfolio
  } = props;
  return /* @__PURE__ */ jsx(Transition, {
    appear: true,
    show: isOpen,
    as: Fragment$1,
    children: /* @__PURE__ */ jsxs(Dialog, {
      as: "div",
      className: "relative z-10",
      onClose,
      children: [/* @__PURE__ */ jsx(Transition.Child, {
        as: Fragment$1,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ jsx("div", {
          className: "fixed inset-0 bg-black bg-opacity-25"
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "fixed inset-0 overflow-y-auto",
        children: /* @__PURE__ */ jsx("div", {
          className: "min-h-full p-4 flex items-center justify-center text-left",
          children: /* @__PURE__ */ jsx(Transition.Child, {
            as: Fragment$1,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: /* @__PURE__ */ jsxs(Dialog.Panel, {
              className: "flex justify-center items-center flex-col md:flex-row w-full max-w-4xl	transform overflow-hidden p-6 rounded-lg bg-white dark:dark:bg-gray-900 shadow-xl transition-all",
              children: [/* @__PURE__ */ jsx("img", {
                className: "w-full md:max-w-sm h-full rounded-lg",
                src: portfolio?.imgSrc,
                alt: portfolio?.imgSrcAlt
              }), /* @__PURE__ */ jsxs("div", {
                className: "w-full md:max-w-lg md:pl-6",
                children: [/* @__PURE__ */ jsx(Dialog.Title, {
                  as: "h3",
                  className: "mt-5 md:mt-0 dark:text-white font-bold text-2xl md:text-3xl",
                  children: portfolio?.title
                }), /* @__PURE__ */ jsx("p", {
                  className: "mt-4 dark:text-white text-lg md:text-xl	font-bold",
                  children: "Languges:"
                }), /* @__PURE__ */ jsx(Dialog.Description, {
                  className: "text-gray-600 dark:text-gray-400 text-sm md:text-base",
                  children: portfolio?.languages
                }), portfolio?.siteLink && /* @__PURE__ */ jsxs(Fragment, {
                  children: [/* @__PURE__ */ jsx("p", {
                    className: "mt-4 dark:text-white text-lg md:text-xl font-bold",
                    children: "Site:"
                  }), /* @__PURE__ */ jsx("a", {
                    className: "text-gray-600 dark:text-gray-400 text-sm md:text-base transition-all hover:text-gray-500",
                    href: portfolio?.siteLink,
                    target: "_blank",
                    children: portfolio?.siteLink
                  })]
                }), portfolio?.repoLink && /* @__PURE__ */ jsxs(Fragment, {
                  children: [/* @__PURE__ */ jsx("p", {
                    className: "mt-4 dark:text-white text-lg md:text-xl font-bold",
                    children: "Repo:"
                  }), /* @__PURE__ */ jsx("a", {
                    className: "text-gray-600 dark:text-gray-400 text-sm md:text-base transition-all hover:text-gray-500",
                    href: portfolio?.repoLink,
                    target: "_blank",
                    children: portfolio?.repoLink
                  })]
                }), /* @__PURE__ */ jsx("p", {
                  className: "mt-4 dark:text-white text-lg md:text-xl font-bold",
                  children: "Project overview:"
                }), /* @__PURE__ */ jsx(Dialog.Description, {
                  className: "text-gray-600 dark:text-gray-400 text-sm md:text-base",
                  children: portfolio?.description
                })]
              })]
            })
          })
        })
      })]
    })
  });
};
__astro_tag_component__(PortfolioModal, "@astrojs/react");

const Portfolio = (props) => {
  const {
    portfolios
  } = props;
  const [selectedPortfolio, setSelectedPortfolio] = useState(portfolios[0]);
  const [isModalOpen, setModalOpen] = useState(false);
  const handlePortfolioModalOpen = (item) => {
    setModalOpen(!isModalOpen);
    setSelectedPortfolio(item);
  };
  const handleModalClose = () => {
    setModalOpen(!isModalOpen);
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("section", {
      id: "portfolio",
      className: "py-10 px-4 dark:bg-gray-900",
      children: [/* @__PURE__ */ jsx("h3", {
        className: "hidden",
        children: "Projects"
      }), /* @__PURE__ */ jsxs("div", {
        className: "max-w-screen-xl mx-auto",
        children: [/* @__PURE__ */ jsx("h4", {
          className: "title-gradient title-gradient--projects mb-5 dark:text-white font-bold text-3xl",
          children: "Projects"
        }), /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
          children: portfolios && portfolios.map((portfolio) => /* @__PURE__ */ jsx("button", {
            onClick: () => handlePortfolioModalOpen(portfolio),
            role: "button",
            "aria-label": "Open portfolio modal",
            children: /* @__PURE__ */ jsxs("div", {
              className: "p-4 bg-gray-900 dark:bg-gray-800 hover:bg-gray-700 border-1 border-solid border-gray-900 dark:border-gray-800 hover:border-gray-800 hover:dark:border-gray-700 rounded-lg cursor-pointer transition-all",
              children: [/* @__PURE__ */ jsx("img", {
                className: "w-full h-full",
                src: portfolio.imgSrc,
                alt: portfolio.imgSrcAlt
              }), /* @__PURE__ */ jsx("h4", {
                className: "mt-2 text-white dark:text-white font-bold text-base md:text-lg leading-7 md:leading-8",
                children: portfolio.title
              }), portfolio.type && /* @__PURE__ */ jsx("p", {
                className: "mt-2 text-gray-400 dark:text-gray-200 text-sm",
                children: portfolio.type
              })]
            })
          }, portfolio.id))
        })]
      })]
    }), /* @__PURE__ */ jsx(PortfolioModal, {
      isOpen: isModalOpen,
      onClose: handleModalClose,
      portfolio: selectedPortfolio
    })]
  });
};
__astro_tag_component__(Portfolio, "@astrojs/react");

const $$Astro = createAstro("https://randyphalla.github.io/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
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
      This project is about fetching data from a server and build a web application. The goal was to display a list of character and display the detail of that character.
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
      This project is about fetching data from a server and build a mobile application. The goal was to display a list of superheroes and display the detail of that superhero on click.
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
      This project is about fetching data from a server and build a mobile application. The goal was to display a list of Pok\xE9mon's and display the details of that Pok\xE9mon on click.
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
      This project is about creating music app using PHP & MySQL. Users are able to create a user account and login with your new account, users have the ability to favorite/unfavorite their artists, albums, songs, playlist and users and able to create, update and delete their own playlist.
    `,
      // siteLink: '',
      repoLink: "https://github.com/randyphalla/musicbook-php-mysql",
      languages: "HTML5, CSS3, Bootstrap v5, PHP and MySQL"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Banner, { "name": "Randy Phalla", "role": "Front-end Developer" })}${maybeRenderHead()}<section id="about" class="py-10 px-4 dark:bg-gray-900 "><h3 class="hidden">About me</h3><div class="max-w-screen-xl mx-auto"><h4 class="title-gradient title-gradient--about mb-5 dark:text-white font-bold text-3xl">About</h4><div class="flex justify-between items-start flex-col lg:flex-row"><img class="hidden lg:block w-full lg:w-80 rounded-lg" src="/me.jpeg" alt="Portrait of Randy Phalla"><div class="lg:ml-8"><p class="mb-4 dark:text-white text-base md:text-lg leading-7 md:leading-8">I'm a Front-end Developer based in London, Ontario. I graduated from Fanshawe college with an advanced diploma in Graphic Design and a certificate in Interactive Media Specialist. I specialize in accessibility, animations and UI/UX.</p><p class="mb-4 dark:text-white text-base md:text-lg leading-7 md:leading-8">I'm currently working at <a class="font-bold hover:text-gray-600 underline underline-offset-2" href="https://www.dentsucreative.com/" target="_blank" aria-label="Redirect to Dentsu Creative's site">Dentsu Creative</a> as a Front-end Developer.</p><p class="mb-4 dark:text-white text-base md:text-lg leading-7 md:leading-8">My previous role was at <a class="font-bold hover:text-gray-600 underline underline-offset-2" href="https://devlift.com/" target="_blank" aria-label="Redirect to Devlift Media's site">Devlift Media</a> as a Full Stack Developer. I lead front-end and back-end projects with a focus on web apps and mobile development. In addition, I manage projects, build components, structure layouts, theming, review and debug code, deploy products, develop client relationships, collaborate with designers, developers and clients, and mentor junior developers teaching best practices.</p><p class="mb-4 dark:text-white text-base md:text-lg leading-7 md:leading-8">As a developer, it's important to keep up with the ever evolving tech industry. I am always eager to learn new skills and technologies to add to my skill set.</p><p class="mb-4 dark:text-white text-base md:text-lg leading-7 md:leading-8">Outside of work, I enjoy interactive media, consuming culture through TV and film, and outdoor physical activities.</p></div></div></div></section><section id="skills" class="py-10 px-4 dark:bg-gray-900"><h3 class="hidden">Skills</h3><div class="max-w-screen-xl mx-auto"><h4 class="title-gradient title-gradient--skills mb-5 dark:text-white font-bold text-3xl">Skills</h4><div class=""><p class="mb-4 text-gray-900 dark:text-white text-base md:text-lg leading-7 md:leading-8"><span class="font-bold">Front-end development:</span> HTML5, CSS3 (SCSS), Responsive Web Design, Accessibility, JavaScript (ES6+), TypeScript, Angular (2+), Ionic, React/React Native, Astro, Gulp, Storybook, Material UI, Storybook, Tailwind, and Bootstrap (3+).</p><p class="mb-4 text-gray-900 dark:text-white text-base md:text-lg leading-7 md:leading-8"><span class="font-bold">Back-end development:</span> Firebase, PHP and MySQL.</p><p class="mb-4 text-gray-900 dark:text-white text-base md:text-lg leading-7 md:leading-8"><span class="font-bold">Project management:</span> Trello and JIRA.</p><p class="mb-4 text-gray-900 dark:text-white text-base md:text-lg leading-7 md:leading-8"><span class="font-bold">Tools:</span> Adobe (Photoshop, Illustrator & XD), Figma, Sketch, Microsoft (Teams, Excel & Word), Github, Sourcetree, and Slack.</p></div></div></section><section id="work" class="py-10 px-4 dark:bg-gray-900"><h3 class="hidden">Work Experience</h3><div class="max-w-screen-xl mx-auto"><h4 class="title-gradient title-gradient--work dark:text-white mb-5 font-bold text-3xl">Work experience</h4><div class="">${works.map((work) => renderTemplate`<div class="mb-4"><h4 class="text-gray-900 dark:text-white font-bold text-base md:text-lg leading-7 md:leading-8">${work.role}<a class="hover:text-gray-600 hover:underline hover:underline-offset-2"${addAttribute(work.href, "href")} target="_blank"${addAttribute(work.hrefLabel, "aria-label")}>@${work.company}</a></h4><p class="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-7">${work.date}</p></div>`)}</div></div></section><section id="education" class="py-10 px-4 dark:bg-gray-900"><h3 class="hidden">Education</h3><div class="max-w-screen-xl mx-auto"><h3 class="title-gradient title-gradient--education mb-5 dark:text-white font-bold text-3xl">Education</h3><div class="">${educations.map((education) => renderTemplate`<div class="mb-4"><h4 class="text-gray-900 dark:text-white font-bold text-base md:text-lg leading-7 md:leading-8">${education.role}<a class="hover:text-gray-600 hover:underline hover:underline-offset-2"${addAttribute(education.href, "href")} target="_blank"${addAttribute(education.hrefLabel, "aria-label")}>@${education.company}</a></h4><p class="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-7">${education.date}</p></div>`)}</div></div></section>${renderComponent($$result2, "Portfolio", Portfolio, { "client:load": true, "portfolios": portfolioItems, "client:component-hydration": "load", "client:component-path": "@components/Portfolio", "client:component-export": "default" })}` })}`;
}, "/Users/randyphalla/Documents/GitHub/portfolio-v2/src/pages/index.astro", void 0);

const $$file = "/Users/randyphalla/Documents/GitHub/portfolio-v2/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
