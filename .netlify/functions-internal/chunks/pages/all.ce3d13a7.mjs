import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, u as unescapeHTML, F as Fragment, e as defineScriptVars, f as renderSlot, s as spreadAttributes, g as renderHead, _ as __astro_tag_component__ } from '../astro.67ba37b7.mjs';
/* empty css                           *//* empty css                                    *//* empty css                           *//* empty css                          *//* empty css                            */import { useState, useEffect } from 'react';
import axios from 'axios';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
/* empty css                                              */import { map, action, atom } from 'nanostores';
/* empty css                                    */import consumers from 'stream/consumers';
import mongoose from 'mongoose';
import '@lit/reactive-element';
import 'lit-html';
import { LitElement, html, css } from 'lit-element/lit-element.js';
import 'lit-html/is-server.js';
/* empty css                           *//* empty css                               *//* empty css                           */import crypto from 'node:crypto';
import { Auth } from '@auth/core';
import { splitCookiesString, parseString } from 'set-cookie-parser';
import { serialize } from 'cookie';
import GitHub from '@auth/core/providers/github';
/* empty css                                         */import { useSSRContext, reactive, mergeProps, onMounted } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
/* empty css                             */
const authConfig = {
  providers: [
    GitHub({
      clientId: "c15f9107de105aa2a4fd",
      clientSecret: "a63767859c79a9a934b00bbe554667ffb7827e9a"
    })
  ]
};

const actions = [
  "providers",
  "session",
  "csrf",
  "signin",
  "signout",
  "callback",
  "verify-request",
  "error"
];
const getSetCookieCallback = (cook) => {
  if (!cook)
    return;
  const splitCookie = splitCookiesString(cook);
  for (const cookName of [
    "__Secure-next-auth.session-token",
    "next-auth.session-token",
    "next-auth.pkce.code_verifier",
    "__Secure-next-auth.pkce.code_verifier"
  ]) {
    const temp = splitCookie.find((e) => e.startsWith(`${cookName}=`));
    if (temp) {
      return parseString(temp);
    }
  }
  return parseString(splitCookie?.[0] ?? "");
};
function AstroAuthHandler(prefix, options = authConfig) {
  return async ({ request }) => {
    const url = new URL(request.url);
    const action = url.pathname.slice(prefix.length + 1).split("/")[0];
    if (!actions.includes(action) || !url.pathname.startsWith(prefix + "/"))
      return;
    const res = await Auth(request, options);
    if (["callback", "signin", "signout"].includes(action)) {
      const parsedCookie = getSetCookieCallback(res.clone().headers.get("Set-Cookie"));
      if (parsedCookie) {
        res.headers.set(
          "Set-Cookie",
          serialize(parsedCookie.name, parsedCookie.value, parsedCookie)
        );
      }
    }
    return res;
  };
}
function AstroAuth(options = authConfig) {
  const { AUTH_SECRET, AUTH_TRUST_HOST, VERCEL, NODE_ENV } = Object.assign({"PUBLIC_API_BASE":"http://localhost:3000/api","BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":"https://wc-lit-playground.netlify.app/","ASSETS_PREFIX":undefined}, { AUTH_SECRET: "1f40b3033ff15d26850c06101aa26def", AUTH_TRUST_HOST: "true", NODE: process.env.NODE, _: process.env._, NODE_ENV: process.env.NODE_ENV });
  options.secret ??= AUTH_SECRET;
  options.trustHost ??= !!(AUTH_TRUST_HOST ?? VERCEL ?? NODE_ENV !== "production");
  const { prefix = "/api/auth", ...authOptions } = options;
  const handler = AstroAuthHandler(prefix, authOptions);
  return {
    async get(event) {
      return await handler(event);
    },
    async post(event) {
      return await handler(event);
    }
  };
}
async function getSession(req, options = authConfig) {
  options.secret ??= "1f40b3033ff15d26850c06101aa26def";
  options.trustHost ??= true;
  const url = new URL(`${options.prefix}/session`, req.url);
  const response = await Auth(new Request(url, { headers: req.headers }), options);
  const { status = 200 } = response;
  const data = await response.json();
  if (!data || !Object.keys(data).length)
    return null;
  if (status === 200)
    return data;
  throw new Error(data.message);
}

const { get: get$2, post: post$2 } = AstroAuth();

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get: get$2,
  post: post$2
}, Symbol.toStringTag, { value: 'Module' }));

if (!globalThis.crypto) globalThis.crypto = crypto;
if (typeof globalThis.crypto.subtle === "undefined") globalThis.crypto.subtle = crypto.webcrypto.subtle;
if (typeof globalThis.crypto.randomUUID === "undefined") globalThis.crypto.randomUUID = crypto.randomUUID;

const $$Astro$r = createAstro("https://wc-lit-playground.netlify.app/");
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Navigation;
  const pages = [
    {
      link: "/",
      text: "Home"
    },
    {
      link: "/metaframeworks",
      text: "Metaframeworks"
    },
    {
      link: "/web-components",
      text: "Web components"
    },
    {
      link: "/testing",
      text: "Testing"
    },
    ,
    {
      link: "/planets",
      text: "Sw Planets"
    },
    {
      link: "/tasks",
      text: "Tasklist",
      children: [
        {
          link: "/tasks/redotasksreact",
          text: "Redo react"
        },
        {
          link: "/tasks/splitted-tasks-ssr-react",
          text: "Ssr react"
        }
      ]
    }
  ];
  return renderTemplate`
${maybeRenderHead($$result)}<div class="nav-links astro-PUX6A34N">
    <ul class="astro-PUX6A34N">
        ${pages.map((page) => renderTemplate`<li class="astro-PUX6A34N">
                <a${addAttribute(page.link, "href")} class="astro-PUX6A34N">
                    ${page.text}
                </a>
                ${page.children ? renderTemplate`<div class="sublinks astro-PUX6A34N">
                            <ul class="astro-PUX6A34N">
                                ${page.children.map((child) => renderTemplate`<li class="astro-PUX6A34N">
                                    <a${addAttribute(child.link, "href")} class="astro-PUX6A34N">${child.text}</a>
                                </li>`)}
                                
                            </ul>
                        </div>` : null}
            </li>`)}
    </ul>
</div>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/Navigation.astro");

const $$Astro$q = createAstro("https://wc-lit-playground.netlify.app/");
const $$Hamburger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Hamburger;
  return renderTemplate`${maybeRenderHead($$result)}<div class="hamburger">
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
</div>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/Hamburger.astro");

const $$Astro$p = createAstro("https://wc-lit-playground.netlify.app/");
const $$Auth = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Auth;
  const { authConfig: authConfig$1 = authConfig } = Astro2.props;
  let session = await getSession(Astro2.request, authConfig$1);
  return renderTemplate`${maybeRenderHead($$result)}<div>
	${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(Astro2.slots.render("default", [session]))}` })}
</div>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/node_modules/auth-astro/src/components/Auth.astro");

var __freeze$5 = Object.freeze;
var __defProp$5 = Object.defineProperty;
var __template$5 = (cooked, raw) => __freeze$5(__defProp$5(cooked, "raw", { value: __freeze$5(raw || cooked.slice()) }));
var _a$5;
const $$Astro$o = createAstro("https://wc-lit-playground.netlify.app/");
const $$SignIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$SignIn;
  const key = Math.random().toString(36).slice(2, 11);
  const { provider, options, authParams, ...attrs } = Astro2.props;
  attrs.class = `signin-${key} ${attrs.class ?? ""}`;
  return renderTemplate(_a$5 || (_a$5 = __template$5(["", "<button", ">\n	", "\n</button>\n\n\n\n<script>(function(){", "\n	document\n		.querySelector(`.signin-${key}`)\n		?.addEventListener('click', () => signIn(provider, options, authParams))\n})();<\/script>"], ["", "<button", ">\n	", "\n</button>\n\n\n\n<script>(function(){", "\n	document\n		.querySelector(\\`.signin-\\${key}\\`)\n		?.addEventListener('click', () => signIn(provider, options, authParams))\n})();<\/script>"])), maybeRenderHead($$result), spreadAttributes(attrs), renderSlot($$result, $$slots["default"]), defineScriptVars({ provider, options, authParams, key }));
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/node_modules/auth-astro/src/components/SignIn.astro");

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(raw || cooked.slice()) }));
var _a$4;
const $$Astro$n = createAstro("https://wc-lit-playground.netlify.app/");
const $$SignOut = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$SignOut;
  const key = Math.random().toString(36).slice(2, 11);
  const { params, ...attrs } = Astro2.props;
  attrs.class = `signout-${key} ${attrs.class ?? ""}`;
  return renderTemplate(_a$4 || (_a$4 = __template$4(["", "<button", ">\n	", "\n</button>\n\n\n\n<script>(function(){", "\n	document.querySelector(`.signout-${key}`)?.addEventListener('click', () => signOut(params))\n})();<\/script>"], ["", "<button", ">\n	", "\n</button>\n\n\n\n<script>(function(){", "\n	document.querySelector(\\`.signout-\\${key}\\`)?.addEventListener('click', () => signOut(params))\n})();<\/script>"])), maybeRenderHead($$result), spreadAttributes(attrs), renderSlot($$result, $$slots["default"]), defineScriptVars({ params, key }));
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/node_modules/auth-astro/src/components/SignOut.astro");

const $$Astro$m = createAstro("https://wc-lit-playground.netlify.app/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Header;
  const session = await getSession(Astro2.request);
  return renderTemplate`${maybeRenderHead($$result)}<header id="site-header" class="fixed w-full bg-black bg-opacity-50 z-10 top-0 flex justify-between">
    <nav>
        ${renderComponent($$result, "Hamburger", $$Hamburger, {})}
        ${renderComponent($$result, "Navigation", $$Navigation, {})}
    </nav>
    <div class="flex flex-col items-end pr-4 justify-center">
        ${session ? renderTemplate`<div class="flex">
                ${renderComponent($$result, "SignOut", $$SignOut, { "class": "mx-2" }, { "default": ($$result2) => renderTemplate`log out` })}
                <img loading="lazy"${addAttribute(session.user?.image, "src")} class="w-12">
            </div>` : renderTemplate`${renderComponent($$result, "SignIn", $$SignIn, { "provider": "github", "class": "text-red-300 hover:text-red-400" }, { "default": ($$result2) => renderTemplate`
                login
            ` })}`}
    </div>
</header>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/Header.astro");

const $$Astro$l = createAstro("https://wc-lit-playground.netlify.app/");
const $$MFMenuLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$MFMenuLink;
  const { txt, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li class="flex w-full bg-black"><a class="w-full p-1 text-red-400 hover:bg-red-400 hover:text-black"${addAttribute(link, "href")}>${txt}</a></li>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/utility/MFMenuLink.astro");

const $$Astro$k = createAstro("https://wc-lit-playground.netlify.app/");
const $$MetaFrameworksNavigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$MetaFrameworksNavigation;
  const navigation = [
    {
      txt: "Concepts",
      link: "/metaframeworks#meta-frameworks-concepts--typical-features"
    },
    {
      txt: "Rendering",
      link: "/metaframeworks#static-site-generation-andor-server-side-rendering"
    },
    {
      txt: "SSR",
      link: "/metaframeworks#ssr"
    },
    {
      txt: "SSG",
      link: "/metaframeworks#ssg"
    },
    {
      txt: "Hybrid Rendering",
      link: "/metaframeworks#hybrid-rendering"
    },
    {
      txt: "Routing",
      link: "/metaframeworks#routing"
    },
    {
      txt: "Data Fetching",
      link: "/metaframeworks#data-fetching"
    },
    {
      txt: "Most common Meta frameworks",
      link: "/metaframeworks#list-of-most-common-meta-frameworks"
    },
    {
      txt: "Next Generation",
      link: "/metaframeworks#the-new-generation-yess-already"
    }
  ];
  return renderTemplate`${maybeRenderHead($$result)}<ul class="sticky top-20">
    ${navigation.map((el) => renderTemplate`${renderComponent($$result, "MFMenuLink", $$MFMenuLink, { "txt": el.txt, "link": el.link })}`)}
    ${renderSlot($$result, $$slots["default"])}
</ul>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/MetaFrameworksNavigation.astro");

const $$Astro$j = createAstro("https://wc-lit-playground.netlify.app/");
const $$LitNavigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$LitNavigation;
  const navigation = [
    {
      txt: "Vanilla",
      link: "/web-components#vanilla-web-component"
    },
    {
      txt: "Lit",
      link: "/lit"
    },
    {
      txt: "Lit: Composing templates",
      link: "/lit/composing-templates"
    },
    {
      txt: "Use Lit in react",
      link: "/lit/lit-react"
    },
    {
      txt: "Use Lit in Vue",
      link: "/lit/lit-vue"
    }
  ];
  return renderTemplate`${maybeRenderHead($$result)}<ul class="sticky top-20">
    ${navigation.map((el) => renderTemplate`${renderComponent($$result, "MFMenuLink", $$MFMenuLink, { "txt": el.txt, "link": el.link })}`)}
    ${renderSlot($$result, $$slots["default"])}
</ul>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/LitNavigation.astro");

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const $$Astro$i = createAstro("https://wc-lit-playground.netlify.app/");
const $$TestingNavigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$TestingNavigation;
  const navigation = [
    {
      txt: "Intro",
      link: "/testing"
    },
    {
      txt: "Concepts",
      link: "/testing/concepts"
    },
    {
      txt: "Types of testing",
      link: "/testing/types-of-testing"
    },
    {
      txt: "Unit test with Jest",
      link: "/testing/unit-testing-with-jest"
    },
    {
      txt: "End to end testing",
      link: "/testing/end-to-end"
    },
    {
      txt: "End to end testing with Cypress",
      link: "/testing/intro-to-cypress"
    },
    {
      txt: "Components testing",
      link: "/testing/component-test"
    },
    {
      txt: "react - testing library",
      link: "/testing/testing-react-components-react-testing-library"
    },
    {
      txt: "react - cypress",
      link: "/testing/testing-react-components-cypress"
    },
    {
      txt: "vue - testing library",
      link: "/testing/testing-vue-components-vue-testing-library"
    },
    {
      txt: "vue - cypress",
      link: "/testing/testing-vue-components-cypress"
    }
  ];
  return renderTemplate`${maybeRenderHead($$result)}<ul class="sticky top-20">
    ${navigation.map((el) => renderTemplate`${renderComponent($$result, "MFMenuLink", $$MFMenuLink, { "txt": el.txt, "link": el.link })}`)}
    ${renderSlot($$result, $$slots["default"])}
</ul>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/TestingNavigation.astro");

const $$Astro$h = createAstro("https://wc-lit-playground.netlify.app/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito&display=swap">
	${renderHead($$result)}</head>
	<body>
		${renderComponent($$result, "Header", $$Header, {})}
		<div class="container">
			${renderSlot($$result, $$slots["main"])}
			${renderSlot($$result, $$slots["aside"])}
		</div>
		
		
	</body>
</html>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/layouts/Layout.astro");

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$g = createAstro("https://wc-lit-playground.netlify.app/");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Index$3;
  const title = "What is a JavaScript Meta-framework?";
  let posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../markdown/metaframeworks/what-is-a-javascript-meta-framework.md": () => import('../what-is-a-javascript-meta-framework.a0b08db1.mjs')}), () => "../../markdown/metaframeworks/what-is-a-javascript-meta-framework.md");
  let post = posts[0];
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", "\n\n<script async>\n    const h1 = document.querySelector('main h1')\n    h1.classList.add('glitched')\n    h1.setAttribute('title', h1.textContent)\n    Array.from(document.querySelectorAll('main h2'))\n    .forEach(h2 => {\n        h2.classList.add('glitched')\n        h2.setAttribute('title', h2.textContent)\n    })\n<\/script>"])), renderComponent($$result, "Layout", $$Layout, { "title": title }, { "aside": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<aside class="mt-24 grow">
        ${renderComponent($$result2, "MetaFrameworksNavigation", $$MetaFrameworksNavigation, {})}
    </aside>`, "main": ($$result2) => renderTemplate`<main class="max-w-4xl relative grow pt-20">
        ${renderComponent($$result2, "post.Content", post.Content, {})}
	</main>` }));
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/metaframeworks/index.astro");

const $$file$d = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/metaframeworks/index.astro";
const $$url$d = "/metaframeworks";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$d,
  url: $$url$d
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$f = createAstro("https://wc-lit-playground.netlify.app/");
const $$Tab = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Tab;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col grow items-center border border-solid border-slate-100 rounded m-2 p-2 self-start">
    ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/Tab.astro");

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$e = createAstro("https://wc-lit-playground.netlify.app/");
const $$WebComponents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$WebComponents;
  let counter = await Astro2.glob(/* #__PURE__ */ Object.assign({"../markdown/a-counter.md": () => import('../a-counter.8cbc76f4.mjs')}), () => "../markdown/a-counter.md");
  let counterTxt = counter[0];
  let wcTxts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../markdown/web-components.md": () => import('../web-components.b64102d5.mjs')}), () => "../markdown/web-components.md");
  let wcTxt = wcTxts[0];
  let vanillaTxts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../markdown/vanilla-wc.md": () => import('../vanilla-wc.0cc0a76e.mjs')}), () => "../markdown/vanilla-wc.md");
  let vanillaTxt = vanillaTxts[0];
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "\n\n\n\n<script async>\n    document.querySelector('main h1').classList.add('glitched')\n    Array.from(document.querySelectorAll('main h2'))\n    .forEach(h2 => {\n        h2.classList.add('glitched')\n    })\n<\/script>"])), renderComponent($$result, "Layout", $$Layout, { "title": "Web Components", "class": "astro-LSJJWIS5" }, { "aside": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<aside class="aside astro-LSJJWIS5">
        <ul class="sticky top-20 astro-LSJJWIS5">
            ${renderComponent($$result2, "LitNavigation", $$LitNavigation, { "class": "astro-LSJJWIS5" }, { "default": ($$result3) => renderTemplate`
                ${renderComponent($$result3, "Tab", $$Tab, { "class": "astro-LSJJWIS5" }, { "default": ($$result4) => renderTemplate`
                    <h3 class="astro-LSJJWIS5">... The nth counter</h3>
                    <p class="astro-LSJJWIS5">A "beautifully" styled Web component example</p>
                    <p class="instructions astro-LSJJWIS5">
                        ${renderComponent($$result4, "my-counter", "my-counter", { "class": "astro-LSJJWIS5" })}
                        
                    </p>
                ` })}
                
                ${renderComponent($$result3, "Tab", $$Tab, { "class": "astro-LSJJWIS5" }, { "default": ($$result4) => renderTemplate`
                    <h3 class="astro-LSJJWIS5">
                        <span class="font-bold text-3xl astro-LSJJWIS5">shadow dom & encapsulation</span>
                    </h3>
                    <button class="border-1  text-slate-100 border-solid astro-LSJJWIS5">
                        hello
                    </button>
        
                    <h3 class="astro-LSJJWIS5">
                        <span class="astro-LSJJWIS5">A styled but useless Custom button :(</span>
                    </h3>
                    
                    ${renderComponent($$result4, "custom-button", "custom-button", { "title": "a styled button", "class": "astro-LSJJWIS5" })}
                    
                    
                ` })}
                ${renderComponent($$result3, "Tab", $$Tab, { "class": "astro-LSJJWIS5" }, { "default": ($$result4) => renderTemplate`
                    <h3 class="astro-LSJJWIS5">Expanding List example</h3>
                    <p class="instructions astro-LSJJWIS5">
                        ${renderComponent($$result4, "expanding-list", "expanding-list", { "class": "astro-LSJJWIS5" })}
                        
                    </p>
                ` })}
            ` })}
            
        </ul>
        
    </aside>`, "main": ($$result2) => renderTemplate`<main class="max-w-4xl relative grow pt-20 astro-LSJJWIS5">
        ${renderComponent($$result2, "wcTxt.Content", wcTxt.Content, { "class": "astro-LSJJWIS5" })}
        <hr class="astro-LSJJWIS5">
        This code:
        ${renderComponent($$result2, "counterTxt.Content", counterTxt.Content, { "class": "astro-LSJJWIS5" })}	
        <span class="block my-4 astro-LSJJWIS5">produces:</span>
        <div class="my-4 astro-LSJJWIS5">
            ${renderComponent($$result2, "my-counter", "my-counter", { "class": "astro-LSJJWIS5" })}
            
                    
        </div>
        ${renderComponent($$result2, "vanillaTxt.Content", vanillaTxt.Content, { "class": "astro-LSJJWIS5" })}
    </main>` }));
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/web-components.astro");

const $$file$c = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/web-components.astro";
const $$url$c = "/web-components";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WebComponents,
  file: $$file$c,
  url: $$url$c
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$d = createAstro("https://wc-lit-playground.netlify.app/");
const $$PleaseLogin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$PleaseLogin;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "React Task List" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="max-w-4xl relative grow pt-20">
		<h1 class="text-red-400 text-3xl mb-2">The page you have requested is protected</h1>
        <h2>please login to access content</h2>
	</main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/please-login.astro");

const $$file$b = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/please-login.astro";
const $$url$b = "/please-login";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PleaseLogin,
  file: $$file$b,
  url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$c = createAstro("https://wc-lit-playground.netlify.app/");
const $$Spectrum = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Spectrum;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spectrum" }, { "default": ($$result2) => renderTemplate(_a$1 || (_a$1 = __template$1(["\n    ", '\n    <script src="https://jspm.dev/@spectrum-web-components/bundle/elements.js" type="module" async><\/script>\n<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-global.css">\n  <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-medium.css">\n  <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-light.css">\n  <link rel="stylesheet" href="node_modules/@spectrum-css/page/dist/index-vars.css">\n  <link rel="stylesheet" href="node_modules/@spectrum-css/button/dist/index-vars.css">\n'])), renderComponent($$result2, "sp-theme", "sp-theme", { "scale": "large", "color": "dark" }, { "default": () => renderTemplate`
        
        ${renderComponent($$result2, "sp-action-group", "sp-action-group", { "size": "m" }, { "default": () => renderTemplate`
    ${renderComponent($$result2, "sp-action-button", "sp-action-button", {}, { "default": () => renderTemplate`Edit` })}
    ${renderComponent($$result2, "sp-action-button", "sp-action-button", {}, { "default": () => renderTemplate`
        ${renderComponent($$result2, "sp-icon-edit", "sp-icon-edit", { "slot": "icon" })}
        Edit
    ` })}
    ${renderComponent($$result2, "sp-action-button", "sp-action-button", {}, { "default": () => renderTemplate`
        ${renderComponent($$result2, "sp-icon-edit", "sp-icon-edit", { "slot": "icon" })}
    ` })}
    ${renderComponent($$result2, "sp-action-button", "sp-action-button", { "hold-affordance": true }, { "default": () => renderTemplate`
        ${renderComponent($$result2, "sp-icon-edit", "sp-icon-edit", { "slot": "icon" })}
    ` })}
` })}
    ` })) })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/spectrum.astro");

const $$file$a = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/spectrum.astro";
const $$url$a = "/spectrum";

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Spectrum,
  file: $$file$a,
  url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

async function getPlanets() {
    let data = await fetch("https://swapi.dev/api/planets");
    let planetsData = await data.json();
   
    return planetsData.results
}

async function getPlanet(slug) {
    let data = await fetch("https://swapi.dev/api/planets/" + slug);
    let results = await data.json();
      
    return results
}

const _page13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  getPlanet,
  getPlanets
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$b = createAstro("https://wc-lit-playground.netlify.app/");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Index$2;
  let results = await getPlanets();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "all planets", "class": "astro-HZQST4HH" }, { "aside": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<aside class="aside astro-HZQST4HH">
        <ul class="astro-HZQST4HH">
            <li class="astro-HZQST4HH">
                <a href="./lit/lit-basic" class="astro-HZQST4HH">
                    lit: basic
                </a>
            </li>
            
        </ul>
    </aside>`, "main": ($$result2) => renderTemplate`<main class="main astro-HZQST4HH">
        <h1 class="astro-HZQST4HH">
            All Planets
        </h1>
        <ul class="astro-HZQST4HH">
            ${results.map((planet, index) => renderTemplate`<li class="astro-HZQST4HH">
                        <a${addAttribute(`/planets/${index + 1}`, "href")} class="astro-HZQST4HH">${planet.name}</a> 
                    </li>`)}
        </ul>
    </main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/planets/index.astro");

const $$file$9 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/planets/index.astro";
const $$url$9 = "/planets";

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$9,
  url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro("https://wc-lit-playground.netlify.app/");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let planet = await getPlanet(id);
  const excluded = ["residents", "films", "created", "edited", "url"];
  const fields = Object.keys(planet).filter((key) => {
    if (!excluded.includes(key)) {
      return key;
    }
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": planet.name, "class": "astro-SOMDCPLR" }, { "asied": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<aside class="aside astro-SOMDCPLR">
        <ul class="astro-SOMDCPLR">
            <li class="astro-SOMDCPLR">
                <a href="./lit/lit-basic" class="astro-SOMDCPLR">
                    lit: basic
                </a>
            </li>
            
        </ul>
    </aside>`, "main": ($$result2) => renderTemplate`<main class="main astro-SOMDCPLR">
        <h1 class="astro-SOMDCPLR">
            ${planet.name}
        </h1>
        <div class="astro-SOMDCPLR">
            ${fields.map((key) => renderTemplate`<div class="astro-SOMDCPLR">
                        <span class="astro-SOMDCPLR">${key.replace("_", " ")}</span> 
                        <span class="astro-SOMDCPLR">${planet[key]}</span>
                    </div>`)}
        </div>
    </main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/planets/[id].astro");

const $$file$8 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/planets/[id].astro";
const $$url$8 = "/planets/[id]";

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file$8,
  url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$9 = createAstro("https://wc-lit-playground.netlify.app/");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../markdown/testing/component-test.md": () => import('../component-test.97a1c034.mjs'),"../../markdown/testing/concepts.md": () => import('../concepts.4d2850c6.mjs'),"../../markdown/testing/end-to-end.md": () => import('../end-to-end.86bf106b.mjs'),"../../markdown/testing/intro-to-cypress.md": () => import('../intro-to-cypress.da8fdff2.mjs'),"../../markdown/testing/intro.md": () => import('../intro.bc44a5af.mjs'),"../../markdown/testing/testing-react-components-cypress.md": () => import('../testing-react-components-cypress.c6247714.mjs'),"../../markdown/testing/testing-react-components-react-testing-library.md": () => import('../testing-react-components-react-testing-library.8d8b83f3.mjs'),"../../markdown/testing/testing-vue-components-cypress.md": () => import('../testing-vue-components-cypress.8f6ba812.mjs'),"../../markdown/testing/testing-vue-components-vue-testing-library.md": () => import('../testing-vue-components-vue-testing-library.817883d4.mjs'),"../../markdown/testing/types-of-testing.md": () => import('../types-of-testing.d47b85c5.mjs'),"../../markdown/testing/unit-testing-with-jest.md": () => import('../unit-testing-with-jest.78975c8f.mjs')}), () => "../../markdown/testing/*.md");
  const post = posts.find(
    (post2) => post2.file.split("/").pop().slice(0, -3) === slug
  );
  return renderTemplate(_a || (_a = __template(["", "\n<script async>\n    const h1 = document.querySelector('main h1')\n    h1.classList.add('glitched')\n    h1.setAttribute('title', h1.textContent)\n    Array.from(document.querySelectorAll('main h2'))\n    .forEach(h2 => {\n        h2.classList.add('glitched')\n        h2.setAttribute('title', h2.textContent)\n    })\n<\/script>"])), renderComponent($$result, "Layout", $$Layout, { "title": slug }, { "aside": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<aside class="mt-24 grow">
        ${renderComponent($$result2, "TestingNavigation", $$TestingNavigation, {})}
    </aside>`, "main": ($$result2) => renderTemplate`<main class="max-w-4xl relative grow pt-20">
       ${renderComponent($$result2, "post.Content", post.Content, {})}
	</main>` }));
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/testing/[slug].astro");

const $$file$7 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/testing/[slug].astro";
const $$url$7 = "/testing/[slug]";

const _page9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const Task$1 = ({
  task,
  styles,
  updateTask,
  editTask,
  deleteTask
}) => {
  return /* @__PURE__ */ jsxs("div", {
    className: "cursor-pointer group flex items-center w-full p-2 m-2 mt-0 border-b hover:bg-red-400 hover:text-black hover:border-black",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "flex align-center grow",
      children: [/* @__PURE__ */ jsx("input", {
        type: "checkbox",
        className: "cursor-pointer text-xl outline-0 px-2",
        checked: task.completed,
        onChange: () => updateTask(task._id)
      }), /* @__PURE__ */ jsx("p", {
        className: task.completed ? "grow px-2 line-through text-red-300 group-hover:text-black" : "grow px-2 text-red-400 group-hover:text-gray-800",
        children: task.task
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex",
      children: [/* @__PURE__ */ jsx("button", {
        onClick: () => editTask(task._id),
        className: "outline-none bg-transparent text-slate-100 group-hover:text-black text-xl cursor-pointer px-2",
        children: "✎"
      }), /* @__PURE__ */ jsx("button", {
        onClick: () => deleteTask(task._id),
        className: "outline-none bg-transparent text-slate-100 group-hover:text-black text-xl cursor-pointer px-2",
        children: "✖"
      })]
    })]
  });
};
__astro_tag_component__(Task$1, "@astrojs/react");

const Form = ({
  task,
  styles,
  addTask,
  handleChange
}) => {
  return /* @__PURE__ */ jsxs("form", {
    onSubmit: (e) => {
      e.preventDefault();
      addTask(task);
    },
    className: "flex w-full items-center h-10 mb-5",
    children: [/* @__PURE__ */ jsx("input", {
      className: "pl-2 grow outline-0 text-slate-800",
      style: {
        height: "inherit"
      },
      type: "text",
      placeholder: "Task to be done...",
      onChange: handleChange,
      value: task.task
    }), /* @__PURE__ */ jsx("button", {
      type: "submit",
      className: "text-xl font-bold cursor-pointer w-24 bg-red-400 hover:bg-red-500 text-black",
      style: {
        height: "inherit"
      },
      children: task._id ? "Update" : "Add"
    })]
  });
};
__astro_tag_component__(Form, "@astrojs/react");

const base$4 = "http://localhost:3000/api";
const url$5 = base$4 + "/tasks";
function ReactTasks(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [task, setTask] = useState({
    task: ""
  });
  const handleChange = ({
    currentTarget: input
  }) => {
    input.value === "" ? setTask({
      task: ""
    }) : setTask((prev) => ({
      ...prev,
      task: input.value
    }));
  };
  const addTask = async (e) => {
    try {
      if (task._id) {
        const {
          data
        } = await axios.post(url$5 + "/tasks/" + task._id + ".json", {
          task: task.task
        });
        const originalTasks = [...tasks];
        const index = originalTasks.findIndex((t) => t._id === task._id);
        originalTasks[index] = data.data;
        setTasks(originalTasks);
        setTask({
          task: ""
        });
      } else {
        const {
          data
        } = await axios.post(url$5 + "/tasks.json", {
          task: task.task
        });
        console.log(data);
        const insertedId = data.data.insertedId;
        task._id = insertedId;
        setTasks((prev) => [...prev, task]);
        setTask({
          task: ""
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const editTask = (id) => {
    const currentTask = tasks.filter((task2) => task2._id === id);
    setTask(currentTask[0]);
  };
  const updateTask = async (id) => {
    try {
      const originalTasks = [...tasks];
      const index = originalTasks.findIndex((t) => t._id === id);
      const {
        data
      } = await axios.post(url$5 + "/" + id + ".json", {
        completed: !originalTasks[index].completed
      });
      originalTasks[index] = data.data;
      setTasks(originalTasks);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTask = async (id) => {
    try {
      const {
        data
      } = await axios.delete(url$5 + "/" + id + ".json");
      setTasks((prev) => prev.filter((task2) => task2._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col w-full  justify-center bg-black  rounded-xl",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "text-3xl text-slate-100 m-2",
      children: "Yess, another TodoList :( "
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col w-full items-center  p-2 rounded-xl box-border mb-5",
      children: [/* @__PURE__ */ jsx(Form, {
        task,
        addTask,
        handleChange
      }), tasks.map((task2) => /* @__PURE__ */ jsx(Task$1, {
        task: task2,
        updateTask,
        editTask,
        deleteTask
      }, task2._id)), tasks.length === 0 && /* @__PURE__ */ jsx("h2", {
        className: "flex items-center justify-center capitalize rounded-xl bg-slate-300 text-slate-800 text-2xl h-16",
        children: "No tasks"
      })]
    })]
  });
}
__astro_tag_component__(ReactTasks, "@astrojs/react");

const $$Astro$8 = createAstro("https://wc-lit-playground.netlify.app/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index$1;
  const session = await getSession(Astro2.request);
  if (!session?.user) {
    return Astro2.redirect("/please-login");
  }
  let tasks = [];
  try {
    const base = "production" === "development" ? "http://localhost:3000" : "https://wc-lit-playground.netlify.app/";
    const response = await fetch(base + "/api/tasks/tasks.json");
    const data = await response.json();
    tasks = data.documents;
  } catch (error) {
    console.log(error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "React Task List" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="max-w-4xl relative grow pt-20">
		<h1 class="text-red-400 text-3xl mb-2">React Task List</h1>
        ${renderComponent($$result2, "ReactTasks", ReactTasks, { "client:load": true, "tasks": tasks, "client:component-hydration": "load", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/react/tasks/Tasks", "client:component-export": "default" })}
	</main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/tasks/index.astro");

const $$file$6 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/tasks/index.astro";
const $$url$6 = "/tasks";

const _page10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro("https://wc-lit-playground.netlify.app/");
const $$TasksLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TasksLayout;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute("flex flex-col w-full  justify-center bg-black  rounded-xl", "class")}>
    <h1${addAttribute("text-3xl text-slate-100 m-2", "class")}>Yess, another TodoList :( </h1>
    <div${addAttribute("flex flex-col w-full items-center  p-2 rounded-xl box-border mb-5", "class")}>
        ${renderSlot($$result, $$slots["default"])}
    </div>
</div>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/layouts/TasksLayout.astro");

const base$3 = "http://localhost:3000/api";
const url$4 = base$3 + '/tasks';
const addTask = async (task) => {
    try {
        if (task._id) {
            const { data } = await axios.post(url$4 + "/" + task._id + '.json', {
                task: task.task,
            });
            return data
        } else {
            const { data } = await axios.post(url$4 + "/tasks.json", {
                task: task.task,
            });
            return data
        }
        
    } catch (error) {
        console.log(error);
    }
};

const base$2 = "http://localhost:3000/api";
const url$3 = base$2 + '/tasks';
const updateTask = async (id, completed) => {
    try {
        const { data } = await axios.post(url$3 + "/" + id + ".json", {
            completed: !completed,
        });
        return data
    } catch (error) {
        console.log(error);
    }
};

const base$1 = "http://localhost:3000/api";
const url$2 = base$1 + '/tasks';
const deleteTask = async (id) => {
    try {
        await axios.delete(url$2 + "/" + id + ".json");
        return id
    } catch (error) {
        console.log(error);
    }
};

const base = "http://localhost:3000/api";
const url$1 = base + '/tasks';
const loadTasks = async () => {
    try {
        const { data } = await axios.get(url$1 +'/tasks.json');
        return data
    } catch (error) {
        console.log(error);
    }
};

/**
 * @typedef {Object} TaskItem
 * @property {string} _id
 * @property {string} task
 * @property {Boolean} completed
 */

/** @type {import('nanostores').MapStore<Record<string, TaskItem>>} */
const taskItems = map({});

const initTaskItems = action(
    taskItems, 
    'initTaskItems', 
    async (store, tasks) => {
        Object.values(tasks).forEach(task => {
            store.setKey(
                task._id,
                { 
                    _id:task._id, 
                    task:task.task, 
                    completed: task.completed 
                }
            );
        });
        return store.get()
    }
);


const itemSelected = atom({task:''});

const selectTaskItem = (id) =>{
    itemSelected.set(taskItems.get()[id]);
};

const postTaskItem = action(
    taskItems, 
    'postTaskItem', 
    async (store, taskData) => {
        const { insertedId } = await addTask(taskData);
        const { task } = taskData;
        const existingEntry = store.get()[insertedId];
        if (existingEntry) {
            store.setKey(insertedId, {
                ...existingEntry,
                task: task,
                completed: existingEntry.completed,
            });
        } else {
            store.setKey(insertedId,{ 
                insertedId, 
                task, 
                completed: false 
            });
        }
        return store.get()
    }
);

const updateTaskItem = action(
    taskItems, 
    'updateTaskItem',
    async (store, taskData) => {
        const { data } = await updateTask(taskData._id, taskData.completed); 
        const { _id, task, completed } = data;
        const existingEntry = store.get()[_id];
        if (existingEntry) {
            store.setKey(_id, {
                ...existingEntry,
                task: task,
                completed: completed,
            });
        } 
        
        return store.get()
    } 
);
const deleteTaskItem = action(
    taskItems,
    'deleteTaskItem',
    async (store, id) => {
        await deleteTask(id); 
        const entries = {...store.get()};
        const existingEntry = entries[id];
        if (existingEntry) {
            delete entries[id];
            store.set(entries);
        } 
        return store.get()
    } 
);

action(
    taskItems,
    'loadTaskItems',
    async (store) => {
        const data = await loadTasks();
        
        data.forEach(task => {
            taskItems.setKey(
                task._id,
                { 
                    _id:task._id, 
                    task:task.task, 
                    completed: task.completed 
                }
            );
        });
        return store.get()
    } 
);

const FormTextInput = () => {
  const $itemSelected = useStore(itemSelected);
  const handleChange = ({
    currentTarget: input
  }) => {
    if (input.value === "") {
      itemSelected.set({
        task: ""
      });
    } else {
      itemSelected.set({
        ...$itemSelected,
        task: input.value
      });
    }
  };
  return /* @__PURE__ */ jsx("input", {
    className: "pl-2 grow outline-0 text-slate-800",
    style: {
      height: "inherit"
    },
    type: "text",
    placeholder: "Task to be done...",
    onChange: handleChange,
    value: $itemSelected.task
  });
};
__astro_tag_component__(FormTextInput, "@astrojs/react");

const FormRedo = ({
  tasks
}) => {
  const $itemSelected = useStore(itemSelected);
  useEffect(() => {
    initTaskItems(tasks);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postTaskItem($itemSelected);
      itemSelected.set({
        task: ""
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return /* @__PURE__ */ jsxs("form", {
    onSubmit: handleSubmit,
    className: "flex w-full items-center h-10 mb-5",
    children: [/* @__PURE__ */ jsx(FormTextInput, {}), /* @__PURE__ */ jsx("button", {
      type: "submit",
      className: "text-xl font-bold cursor-pointer w-24 bg-red-400 hover:bg-red-500 text-black",
      style: {
        height: "inherit"
      },
      children: $itemSelected._id ? "Update" : "Add"
    })]
  });
};
__astro_tag_component__(FormRedo, "@astrojs/react");

const TaskRedo = (props) => {
  const $taskItems = useStore(taskItems);
  const [task, setTask] = useState(props.task);
  const toggleComplete = async () => {
    try {
      await updateTaskItem({
        _id: task._id,
        completed: $taskItems[task._id].completed
      });
      setTask(taskItems.get()[task._id]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async () => {
    await deleteTaskItem(task._id);
    window.location.reload();
  };
  const handleSelect = () => {
    selectTaskItem(task._id);
    setTask(itemSelected.get());
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "cursor-pointer group flex items-center w-full p-2 m-2 mt-0 border-b hover:bg-red-400 hover:text-black hover:border-black",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "flex align-center grow",
      children: [/* @__PURE__ */ jsx("input", {
        type: "checkbox",
        className: "cursor-pointer text-xl outline-0 px-2",
        checked: task.completed,
        onChange: toggleComplete
      }), /* @__PURE__ */ jsx("p", {
        className: task.completed ? "grow px-2 line-through text-red-300 group-hover:text-black" : "grow px-2 text-red-400 group-hover:text-gray-800",
        children: task.task
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex",
      children: [/* @__PURE__ */ jsx("button", {
        onClick: handleSelect,
        className: "outline-none bg-transparent text-slate-100 group-hover:text-black text-xl cursor-pointer px-2",
        children: "✎"
      }), /* @__PURE__ */ jsx("button", {
        onClick: handleDelete,
        className: "outline-none bg-transparent text-slate-100 group-hover:text-black text-xl cursor-pointer px-2",
        children: "✖"
      })]
    })]
  });
};
__astro_tag_component__(TaskRedo, "@astrojs/react");

const $$Astro$6 = createAstro("https://wc-lit-playground.netlify.app/");
const $$NoTasks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$NoTasks;
  return renderTemplate`${maybeRenderHead($$result)}<h2${addAttribute("flex items-center justify-center capitalize rounded-xl bg-slate-300 text-slate-800 text-2xl p-4", "class")}>
    No tasks
</h2>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/NoTasks.astro");

const $$Astro$5 = createAstro("https://wc-lit-playground.netlify.app/");
const $$SplittedTasksSsrReact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SplittedTasksSsrReact;
  const session = await getSession(Astro2.request);
  if (!session?.user) {
    return Astro2.redirect("/please-login");
  }
  let tasks = [];
  try {
    const base = "production" === "development" ? "http://localhost:3000" : "https://wc-lit-playground.netlify.app/";
    const response = await fetch(base + "/api/tasks/tasks.json");
    const data = await response.json();
    tasks = data.documents;
  } catch (error) {
    console.log(error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ssr Task List", "class": "astro-JJMTFIXG" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="max-w-4xl relative grow pt-20 astro-JJMTFIXG">
		<h1 class="text-red-400 text-3xl mb-2 astro-JJMTFIXG">Ssr Task List</h1>
		${renderComponent($$result2, "TasksLayout", $$TasksLayout, { "class": "astro-JJMTFIXG" }, { "default": ($$result3) => renderTemplate`
			${renderComponent($$result3, "FormRedo", FormRedo, { "tasks": tasks, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/react/tasks/FormRedo", "client:component-export": "default", "class": "astro-JJMTFIXG" })}
			${tasks.map((task) => renderTemplate`${renderComponent($$result3, "TaskRedo", TaskRedo, { "task": task, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/react/tasks/TaskRedo", "client:component-export": "default", "class": "astro-JJMTFIXG" })}`)}${tasks.length === 0 && renderTemplate`${renderComponent($$result3, "NoTasks", $$NoTasks, { "class": "astro-JJMTFIXG" })}`}` })}
	</main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/tasks/splitted-tasks-ssr-react.astro");

const $$file$5 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/tasks/splitted-tasks-ssr-react.astro";
const $$url$5 = "/tasks/splitted-tasks-ssr-react";

const _page11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SplittedTasksSsrReact,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

function ReactTasksRedo({
  tasks
}) {
  const $taskItems = useStore(taskItems);
  const $itemSelected = useStore(itemSelected);
  useEffect(() => {
    const num = Object.keys($taskItems).length;
    if (num === 0) {
      initTaskItems(tasks);
    }
  }, [$taskItems]);
  const handleChange = ({
    currentTarget: input
  }) => {
    if (input.value === "") {
      itemSelected.set({
        task: ""
      });
    } else {
      itemSelected.set({
        ...$taskItems[$itemSelected._id],
        task: input.value
      });
    }
  };
  const addTask = async (task) => {
    try {
      await postTaskItem(task);
    } catch (error) {
      console.log(error);
    }
  };
  const editTask = (id) => selectTaskItem(id);
  const updateTask = async (id) => {
    try {
      await updateTaskItem({
        _id: id,
        completed: $taskItems[id].completed
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTask = async (id) => {
    try {
      await deleteTaskItem(id);
    } catch (error) {
      console.log(error);
    }
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col w-full  justify-center bg-black  rounded-xl",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "text-3xl text-slate-100 m-2",
      children: "Yess, another TodoList :( "
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col w-full items-center  p-2 rounded-xl box-border mb-5",
      children: [/* @__PURE__ */ jsx(Form, {
        task: $itemSelected,
        addTask,
        handleChange
      }), Object.keys($taskItems).length < tasks.length ? tasks.map((task) => /* @__PURE__ */ jsx(Task$1, {
        task,
        updateTask,
        editTask,
        deleteTask
      }, task._id)) : Object.values($taskItems).map((task) => /* @__PURE__ */ jsx(Task$1, {
        task,
        updateTask,
        editTask,
        deleteTask
      }, task._id)), Object.values($taskItems).length === 0 && tasks.length === 0 && /* @__PURE__ */ jsx("h2", {
        className: "flex items-center justify-center capitalize rounded-xl bg-slate-300 text-slate-800 text-2xl h-16",
        children: "No tasks"
      })]
    })]
  });
}
__astro_tag_component__(ReactTasksRedo, "@astrojs/react");

const $$Astro$4 = createAstro("https://wc-lit-playground.netlify.app/");
const $$Redotasksreact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Redotasksreact;
  const session = await getSession(Astro2.request);
  if (!session?.user) {
    return Astro2.redirect("/please-login");
  }
  let tasks;
  try {
    const base = "production" === "development" ? "http://localhost:3000" : "https://wc-lit-playground.netlify.app/";
    const response = await fetch(base + "/api/tasks/tasks.json");
    const data = await response.json();
    tasks = data.documents;
  } catch (error) {
    console.log(error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Redo React task list", "class": "astro-R4ZUZJJS" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="max-w-4xl relative grow pt-20 astro-R4ZUZJJS">
		<h1 class="astro-R4ZUZJJS">Redo Task List</h1>
        ${renderComponent($$result2, "ReactTasksRedo", ReactTasksRedo, { "client:load": true, "tasks": tasks, "client:component-hydration": "load", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/react/tasks/TasksRedo", "client:component-export": "default", "class": "astro-R4ZUZJJS" })}
	</main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/tasks/redotasksreact.astro");

const $$file$4 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/tasks/redotasksreact.astro";
const $$url$4 = "/tasks/redotasksreact";

const _page12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Redotasksreact,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const headers$1 = {
	"Content-Type": "application/json",
	"api-key":"hiJnLwzYEMs2Dl6vnCA7HtjfOOOptRfpXERqzl4rIuqq4Fv1cTHCOBmpTyzcAPSs"
};
/**
 * Gets all Tasks
 * @returns Response
 */
async function get$1() {
	console.log('CALLED GET', "https://eu-central-1.aws.data.mongodb-api.com/app/data-vpvke/endpoint/data/v1" + '/action/find');
	let responseBody;
	let responseStatus;
	let isResponseOk;

	try {
		const dbParams = {
			dataSource: "Cluster0",
			database: "myTodos",
			collection: "tasks"
		};
		const url = "https://eu-central-1.aws.data.mongodb-api.com/app/data-vpvke/endpoint/data/v1" + '/action/find';
		const apiResponse = await fetch(url, {
			headers: headers$1,
			method: "POST",
			body: JSON.stringify(dbParams)	
		});
		const apiData = await apiResponse.json();
		responseStatus = 200;
		isResponseOk = true;
		responseBody = apiData;
		console.log('apiData');
		console.log(apiData);
		
	} catch (error) {
		responseBody = { error:error };
		responseStatus = 500;
		isResponseOk = false;
	}

	return  new Response(JSON.stringify(responseBody), {
		status: responseStatus,
		ok: isResponseOk
	}); 
}
/**
 * Creates a new task
 * 
 * @param {Object} Astro context Object 
 * @returns Response
 */
async function post$1({ params, request }) {
	console.log('POST CALLED', "https://eu-central-1.aws.data.mongodb-api.com/app/data-vpvke/endpoint/data/v1" + '/action/insertOne');
	let responseBody;
	let responseStatus;
	let isResponseOk;
	let data = await consumers.json(request.body);
	console.log(data);
	try {
		const url = "https://eu-central-1.aws.data.mongodb-api.com/app/data-vpvke/endpoint/data/v1" + '/action/insertOne';
		const dbParams = {
			dataSource: "Cluster0",
			database: "myTodos",
			collection: "tasks",
			document:data
		};
		
		const apiResponse = await fetch(url, {
			headers: headers$1,
			method: "POST",
			body: JSON.stringify(dbParams)	
		});

		const apiResponseData = await apiResponse.json();
		responseBody = { 
			data: apiResponseData, 
			message: 'Task Created Successfully' 
		};

		responseStatus = 200;
		isResponseOk = true;
	} catch (error) {
		responseStatus = 500;
		isResponseOk = false;
		responseBody = { 
			error:error, 
			message: 'could not save Task' 
		};
		
	}
	return new Response(JSON.stringify(responseBody), {
		status: responseStatus,
		ok: isResponseOk,
		headers: {
			"Content-Type": "application/json"
		}
	});
}

const _page14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get: get$1,
  post: post$1
}, Symbol.toStringTag, { value: 'Module' }));

mongoose.set('strictQuery', true);

const taskSchema = new mongoose.Schema({
	task: { type: String, required: true },
	completed: { type: Boolean, default: false },
});

const Task = mongoose.models?.Task || mongoose.model("Task", taskSchema);

const DB_URL = "mongodb+srv://zerodigi:t3ach15fun77@cluster0.jfmeid4.mongodb.net/myTodos?retryWrites=true&w=majority";

let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const options = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		};

		cached.promise = mongoose.connect(DB_URL, options)
			.then((mongoose) => {
			return mongoose;
		});
	}
	cached.conn = await cached.promise;
	return cached.conn;
};

const headers = {
	"Content-Type": "application/json",
	"api-key":"hiJnLwzYEMs2Dl6vnCA7HtjfOOOptRfpXERqzl4rIuqq4Fv1cTHCOBmpTyzcAPSs"
};

async function get({ params }) {
	const id = params.taskId;
	let apiData;
	
	try {
		
		const dbParams = {
			dataSource: "Cluster0",
			database: "myTodos",
			collection: "tasks",
			filter: {
				_id: { $oid: id }
			}
		};
		const url = "https://eu-central-1.aws.data.mongodb-api.com/app/data-vpvke/endpoint/data/v1" + '/action/findOne';
		const apiResponse = await fetch(url, {
			headers: headers,
			method: "POST",
			body: JSON.stringify(dbParams)	
		});
		apiData = await apiResponse.json();
		console.log(apiData);
	} catch (error) {
		return new Response(JSON.stringify({error:'resource not found'}), {
			status: 400,
			headers: {
			  "Content-Type": "application/json"
			}
		});	
	}
	
	return new Response(JSON.stringify(apiData.document), {
		status: 200,
		headers: {
			"Content-Type": "application/json"
		}
	});
}

async function post({ params, request }) {
	const id = params.taskId;
	let result, message;
	let data = await consumers.json(request.body);
	try {
		await dbConnect();
		if(id){
			// update
			result = await Task.findByIdAndUpdate(
				id,
				{ $set: data },
				{ new: true }
			);
			message = 'Task Updated Successfully';
		} else {
			throw new Error('this route requires an id')
		}
		
		return new Response(JSON.stringify({ 
			data: result, 
			message: message 
		}), {
			status: 200,
			headers: {
				"Content-Type": "application/json"
			}
		});
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify({error:error, message:'could not update resource'}), {
			status: 500,
			headers: {
			  "Content-Type": "application/json"
			}
		});	
	}
}

async function del({ params, request }) {
	const id = params.taskId;
	await dbConnect();
	try {
		await Task.findByIdAndDelete(id);
		return new Response(JSON.stringify({ 
			message: "Task Deleted Successfully" 
		}), {
			status: 200,
			headers: {
				"Content-Type": "application/json"
			}
		});
		
	} catch (error) {
		return new Response(JSON.stringify({error:error,message:'could not delete resource'}), {
			status: 500,
			headers: {
			  "Content-Type": "application/json"
			}
		});	
	}
}

const _page15 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  del,
  get,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const tagName = 'my-element';

class MyElement extends LitElement {
  render() {
    return html` <p>Hello world! From my-element</p> `;
  }
}

customElements.define(tagName, MyElement);

class MyButton extends LitElement {
  static properties = {
        text: {attribute: true},
  };

  static styles = css`
    button {
      color: whitesmoke; 
      background-color:blue; 
      font-size:2em;  
      border: solid 2px whitesmoke;
      border-radius:.25em;
      padding: 1em .5em;
      cursor:pointer;
      transition: all .3s ease;
    }
    button:hover {
        color: black;
        background-color:whitesmoke;
    }
  `;
  
  render() {
    return html`
      <button @click="${this._handleClick}">
        ${this.text}
      </button>
    `;
  }
  connectedCallback() {
    console.log('on connect');
    super.connectedCallback();
  }
  _handleClick(){
    console.log('click');
    
  }
}
customElements.define('my-button', MyButton);

const $$Astro$3 = createAstro("https://wc-lit-playground.netlify.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index;
  let posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../markdown/lit.md": () => import('../lit.c8f066d4.mjs')}), () => "../../markdown/lit.md");
  let post = posts[0];
  let markdownUseless = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../markdown/useless-button.md": () => import('../useless-button.c54f2f95.mjs')}), () => "../../markdown/useless-button.md");
  let useless = markdownUseless[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lit Elements", "class": "astro-TODWRKOZ" }, { "aside": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<aside class="mt-24 grow astro-TODWRKOZ">
        ${renderComponent($$result2, "LitNavigation", $$LitNavigation, { "class": "astro-TODWRKOZ" })}
    </aside>`, "main": ($$result2) => renderTemplate`<main class="max-w-4xl relative grow pt-20 astro-TODWRKOZ">
        ${renderComponent($$result2, "post.Content", post.Content, { "class": "astro-TODWRKOZ" })}
        <h2 class="astro-TODWRKOZ">Lit Basics:</h2>
		<p class="astro-TODWRKOZ">
			a dummy element...
		</p>
       ${renderComponent($$result2, "MyElement", MyElement, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/wc/lit/my-element", "client:component-export": "MyElement", "class": "astro-TODWRKOZ" })}
       <hr class="astro-TODWRKOZ">
       <p class="astro-TODWRKOZ">
        ...and a useless button
        </p>
        ${renderComponent($$result2, "MyButton", MyButton, { "text": "some text", "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/wc/lit/my-button", "client:component-export": "MyButton", "class": "astro-TODWRKOZ" })}
        ${renderComponent($$result2, "useless.Content", useless.Content, { "class": "astro-TODWRKOZ" })}
    </main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/index.astro");

const $$file$3 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/index.astro";
const $$url$3 = "/lit";

const _page16 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://wc-lit-playground.netlify.app/");
const $$LitBasic = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LitBasic;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lit Basic" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="max-w-4xl relative grow pt-20">
		<h1>Lit Basic</h1>
		<p>
			${renderComponent($$result2, "MyElement", MyElement, {})}
		</p>
       
        ${renderComponent($$result2, "MyButton", MyButton, { "text": "some text" })}
		
	</main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/lit-basic.astro");

const $$file$2 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/lit-basic.astro";
const $$url$2 = "/lit/lit-basic";

const _page18 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LitBasic,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

function App$1() {
  const [planetsData, setPlanetsData] = useState([]);
  const getPlanetsData = async () => {
    const jsonData = await getPlanets();
    setPlanetsData([...jsonData]);
  };
  return /* @__PURE__ */ jsx("div", {
    className: "App",
    children: /* @__PURE__ */ jsxs("div", {
      style: {
        flexGrow: 1
      },
      children: [/* @__PURE__ */ jsx("h2", {
        children: "React component + webcomponent button"
      }), /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx("my-button", {
          text: "get planets",
          onClick: (e) => getPlanetsData()
        })
      }), planetsData.length > 0 && /* @__PURE__ */ jsx("h3", {
        children: "A nice nerd list:"
      }), planetsData.map((planet, index) => /* @__PURE__ */ jsx(PlanetDetail, {
        planet,
        slug: index + 1
      }, planet.name.replace(" ", "-")))]
    })
  });
}
const PlanetDetail = ({
  planet,
  slug
}) => {
  const {
    name,
    climate,
    gravity,
    population,
    terrain
  } = planet;
  return /* @__PURE__ */ jsxs("ul", {
    children: [/* @__PURE__ */ jsx("li", {
      children: /* @__PURE__ */ jsxs("a", {
        href: `/planets/${slug}`,
        children: [/* @__PURE__ */ jsx("h2", {
          children: name
        }), /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx("img", {
            loading: "lazy",
            src: "https://via.placeholder.com/300x180?text=" + name.replace(" ", "+")
          }), /* @__PURE__ */ jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column"
            },
            children: [/* @__PURE__ */ jsx("span", {
              children: "Climate:"
            }), /* @__PURE__ */ jsx("span", {
              children: climate
            }), /* @__PURE__ */ jsx("span", {
              children: "Gravity:"
            }), /* @__PURE__ */ jsx("span", {
              children: gravity
            }), /* @__PURE__ */ jsx("span", {
              children: "Population:"
            }), /* @__PURE__ */ jsx("span", {
              children: population
            }), /* @__PURE__ */ jsx("span", {
              children: "terrain:"
            }), /* @__PURE__ */ jsx("span", {
              children: terrain
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("hr", {})]
  });
};
__astro_tag_component__(App$1, "@astrojs/react");

const $$Astro$1 = createAstro("https://wc-lit-playground.netlify.app/");
const $$LitReact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LitReact;
  let posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../markdown/lit-react.md": () => import('../lit-react.d72d597b.mjs')}), () => "../../markdown/lit-react.md");
  let post = posts[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lit React", "class": "astro-4EPOLKAZ" }, { "aside": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<aside class="mt-24 grow astro-4EPOLKAZ">
        ${renderComponent($$result2, "LitNavigation", $$LitNavigation, { "class": "astro-4EPOLKAZ" })}
		${renderComponent($$result2, "App", App$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/react/callApi/App.jsx", "client:component-export": "App", "class": "astro-4EPOLKAZ" })}
    </aside>`, "main": ($$result2) => renderTemplate`<main class="max-w-4xl relative grow pt-20 astro-4EPOLKAZ">
		<h1 class="glitched astro-4EPOLKAZ">Lit And React</h1>
		Example usage
		${renderComponent($$result2, "post.Content", post.Content, { "class": "astro-4EPOLKAZ" })}
       
	</main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/lit-react.astro");

const $$file$1 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/lit-react.astro";
const $$url$1 = "/lit/lit-react";

const _page19 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LitReact,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const url = "https://jsonplaceholder.typicode.com/users/";


const _sfc_main = {
  __name: 'App',
  setup(__props, { expose: __expose }) {
  __expose();

const state = reactive({
  users : []
});

const loadUsers = async () => {
  if(state.users.length === 0){
    const response = await fetch(url);
    const jsonData = await response.json();
    state.users = [...jsonData];
  } 
};

const __returned__ = { state, url, loadUsers, reactive, onMounted, get MyButton() { return MyButton } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "app" }, _attrs))} data-v-6bbc60c9><div class="content" data-v-6bbc60c9><p data-v-6bbc60c9>Vue component + webcomponent button </p><my-button text="load users" data-v-6bbc60c9></my-button><ul data-v-6bbc60c9><!--[-->`);
  ssrRenderList($setup.state.users, (user) => {
    _push(`<li data-v-6bbc60c9><span data-v-6bbc60c9>${
      ssrInterpolate(user.name)
    }</span> - <span data-v-6bbc60c9>${
      ssrInterpolate(user.website)
    }</span><hr data-v-6bbc60c9></li>`);
  });
  _push(`<!--]--></ul></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/vue/CallApi/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const App = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-6bbc60c9"]]);

const $$Astro = createAstro("https://wc-lit-playground.netlify.app/");
const $$LitVue = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LitVue;
  let posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../markdown/lit-vue.md": () => import('../lit-vue.47fa831a.mjs')}), () => "../../markdown/lit-vue.md");
  let post = posts[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lit vue" }, { "aside": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<aside class="mt-24 grow">
        ${renderComponent($$result2, "LitNavigation", $$LitNavigation, {})}
		${renderComponent($$result2, "App", App, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/vue/CallApi/App.vue", "client:component-export": "default" })}
    </aside>`, "main": ($$result2) => renderTemplate`<main class="main">
		<h1>Lit and Vue</h1>
		Example usage
		${renderComponent($$result2, "post.Content", post.Content, {})}
	</main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/lit-vue.astro");

const $$file = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/lit-vue.astro";
const $$url = "/lit/lit-vue";

const _page20 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LitVue,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, _export_sfc as _, $$MetaFrameworksNavigation as a, $$LitNavigation as b, $$TestingNavigation as c, $$Layout as d, _page0 as e, _page2 as f, _page3 as g, _page4 as h, _page5 as i, _page6 as j, _page7 as k, _page9 as l, _page10 as m, _page11 as n, _page12 as o, _page13 as p, _page14 as q, _page15 as r, _page16 as s, _page18 as t, _page19 as u, _page20 as v };
