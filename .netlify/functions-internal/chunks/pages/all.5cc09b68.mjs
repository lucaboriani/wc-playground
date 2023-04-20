/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot, _ as __astro_tag_component__ } from '../astro.482c7aac.mjs';
import 'html-escaper';
/* empty css                           */import { useRef, useEffect, useState } from 'react';
import { Application, Texture, Sprite } from 'pixi.js';
import { jsx, jsxs } from 'react/jsx-runtime';
/* empty css                                    *//* empty css                           *//* empty css                          */import axios from 'axios';
/* empty css                           */import { useSSRContext, ref, mergeProps, reactive, onMounted } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
/* empty css                                               */import { useStore } from '@nanostores/react';
/* empty css                                              */import { map, action, atom } from 'nanostores';
/* empty css                                    */import consumers from 'stream/consumers';
import mongoose from 'mongoose';
import '@lit/reactive-element';
import 'lit-html';
import { LitElement, html, css } from 'lit-element/lit-element.js';
import 'lit-html/is-server.js';
/* empty css                           *//* empty css                               *//* empty css                                         *//* empty css                             */
const $$Astro$p = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Navigation;
  const pages = [
    {
      link: "/",
      text: "Home"
    },
    {
      link: "/web-components",
      text: "Web components",
      children: [
        {
          link: "/lit",
          text: "LIT"
        },
        {
          link: "/lit/composing-templates",
          text: "Composing templates"
        },
        {
          link: "/lit/lit-react",
          text: "using lit and react"
        },
        {
          link: "/lit/lit-vue",
          text: "using lit and vue"
        }
      ]
    },
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

const $$Astro$o = createAstro();
const $$Hamburger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Hamburger;
  return renderTemplate`${maybeRenderHead($$result)}<div class="hamburger">
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
</div>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/Hamburger.astro");

const $$Astro$n = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="fixed w-full h-20 bg-black z-10 top-0">
    <nav>
        ${renderComponent($$result, "Hamburger", $$Hamburger, {})}
        ${renderComponent($$result, "Navigation", $$Navigation, {})}
    </nav>
</header>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/Header.astro");

const $$Astro$m = createAstro();
const $$HomeLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$HomeLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito">
	${renderHead($$result)}</head>
	<body>
		${renderComponent($$result, "Header", $$Header, {})}
		<div class="container">
			${renderSlot($$result, $$slots["main"])}
			${renderSlot($$result, $$slots["aside"])}
		</div>
		
		
	</body>
</html>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/layouts/HomeLayout.astro");

let app;
async function initWarp (mount){
    app = new Application({ background: '#000000', resizeTo:mount });
    mount.appendChild(app.view);

    // Get the texture for star.
    const starTexture = await Texture.from('/star.png');

    const starAmount = 1000;
    let cameraZ = 0;
    const fov = 20;
    const baseSpeed = 0.025;
    let speed = 0;
    let warpSpeed = 0;
    const starStretch = 5;
    const starBaseSize = 0.05;

    // Create the stars
    const stars = [];
    for (let i = 0; i < starAmount; i++) {
        const star = {
            sprite: new Sprite(starTexture),
            z: 0,
            x: 0,
            y: 0,
        };
        star.sprite.anchor.x = 0.5;
        star.sprite.anchor.y = 0.7;
        randomizeStar(star, true);
        app.stage.addChild(star.sprite);
        stars.push(star);
    }

    function randomizeStar(star, initial) {
        star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;

        // Calculate star positions with radial random coordinate so no star hits the camera.
        const deg = Math.random() * Math.PI * 2;
        const distance = Math.random() * 50 + 1;
        star.x = Math.cos(deg) * distance;
        star.y = Math.sin(deg) * distance;
    }

    // Change flight speed every 5 seconds
   /*  setInterval(() => {
        warpSpeed = warpSpeed > 0 ? 0 : 1;
    }, 15000); */

    // Listen for animate update
    app.ticker.add((delta) => {
        // Simple easing. This should be changed to proper easing function when used for real.
        speed += (warpSpeed - speed) / 20;
        cameraZ += delta * 10 * (speed + baseSpeed);
        for (let i = 0; i < starAmount; i++) {
            const star = stars[i];
            if (star.z < cameraZ) randomizeStar(star);

            // Map star 3d position to 2d with really simple projection
            const z = star.z - cameraZ;
            star.sprite.x = star.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;
            star.sprite.y = star.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;

            // Calculate star scale & rotation.
            const dxCenter = star.sprite.x - app.renderer.screen.width / 2;
            const dyCenter = star.sprite.y - app.renderer.screen.height / 2;
            const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
            const distanceScale = Math.max(0, (2000 - z) / 2000);
            star.sprite.scale.x = distanceScale * starBaseSize;
            // Star is looking towards center so that y axis is towards center.
            // Scale the star depending on how fast we are moving, what the stretchfactor is and depending on how far away it is from the center.
            star.sprite.scale.y = distanceScale * starBaseSize + distanceScale * speed * starStretch * distanceCenter / app.renderer.screen.width;
            star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
        }
    });
}

function start(){
    app.start();
}

function stop(){
    app.stop();
}
function destroy(){
    app.stop();
    app.destroy();
}

// @ts-ckeck
/**
 * @jest-environment jsdom
 */
/**
 *
 * @param {Function} callback
 * @param {Object} options
 * @returns IntersectionObserver
 */
function createObserver (callback, options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.01
}) {
  // eslint-disable-next-line no-undef
  return new IntersectionObserver(callback, options)
}

const callbacksRegistry = new Map();

/**
 *
 * @param {Array} entries
 */
const intersectionCallback = (entries, observer) => {
  entries.forEach(async (entry) => {
    const { target } = entry;
    const entryCallback = callbacksRegistry.get(target);
    entryCallback(entry);
  });
};

// @ts-ckeck

let observer;

const IntersectionHandler = {
  init (options) {
    observer = createObserver(intersectionCallback, options);
    return this
  },
  /**
   *
   * @param {HTMLElement} element
   * @param {Object} callbacks
   */
  observe (element, callback) {
    callbacksRegistry.set(element, callback);
    observer.observe(element);
  },
  /**
   *
   * @param {HTMLElement} element
   */
  unobserve (element) {
    callbacksRegistry.delete(element);
    observer.unobserve(element);
  },
  /**
   *
   * @returns IntersectionObserver
   */
  getObserver () {
    return observer
  },
  /**
   *
   * @returns Map
   */
  getRegistry () {
    return callbacksRegistry
  },
  clear () {
    const keys = Array.from(callbacksRegistry.keys());
    keys.forEach(key => this.unobserve(key));
    callbacksRegistry.clear();
  }
};
// prevent object to be modified externally
Object.freeze(IntersectionHandler);

const PixiStarWarp = () => {
  const app = useRef(null);
  const handleAppIntersection = (entry) => {
    const {
      isIntersecting
    } = entry;
    if (isIntersecting) {
      start();
    } else {
      stop();
    }
  };
  const handleVisibilityChange = () => {
    if (document.visibilityState === "visible") {
      const rect = app.current.getBoundingClientRect();
      const isVisible = rect.top + window.innerHeight > 0;
      if (isVisible) {
        start();
      }
    } else {
      stop();
    }
  };
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.01
    };
    IntersectionHandler.init(options);
    IntersectionHandler.observe(app.current, handleAppIntersection);
    initWarp(app.current);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      IntersectionHandler.unobserve(app.current);
      destroy();
    };
  }, []);
  return /* @__PURE__ */ jsx("div", {
    ref: app,
    className: "flex grow pr-2"
  });
};
__astro_tag_component__(PixiStarWarp, "@astrojs/react");

const $$Astro$l = createAstro();
const $$MetaFrameworks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$MetaFrameworks;
  return renderTemplate`${maybeRenderHead($$result)}<section class="flex my-20 astro-2KDK7KGM">
    ${renderComponent($$result, "PixiStarWarp", PixiStarWarp, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/react/pixi/PixiStarWarp", "client:component-export": "default", "class": "astro-2KDK7KGM" })}
    <div class="flex flex-col astro-2KDK7KGM">
        <h2 class="text-4xl text-red-400 mb-2 glitched astro-2KDK7KGM" title="Meta Frameworks"><a href="#" class="astro-2KDK7KGM">Meta Frameworks</a></h2>
        <ul class="astro-2KDK7KGM">
            <li class="my-1 flex flex-col astro-2KDK7KGM">
                <h3 class="text-3xl astro-2KDK7KGM">Concepts</h3>
                <ul class="pl-8 astro-2KDK7KGM">
                    <li class="astro-2KDK7KGM">File based routing</li>
                    <li class="astro-2KDK7KGM">Dynamic routes</li>
                    <li class="astro-2KDK7KGM">API routes</li>
                    <li class="astro-2KDK7KGM">Static site generation(SSG)</li>
                    <li class="astro-2KDK7KGM">Single page applications (SPA)</li>
                    <li class="astro-2KDK7KGM">Server rendered applications (SSR)</li>
                    <li class="astro-2KDK7KGM">Hybryd rendering</li>
                </ul>
            </li>
            <li class="my-1 flex flex-col astro-2KDK7KGM">
                <h3 class="text-3xl astro-2KDK7KGM">The <em class="astro-2KDK7KGM">family</em></h3>
                <ul class="pl-8 astro-2KDK7KGM">
                    <li class="astro-2KDK7KGM">Svelte kit</li>
                    <li class="astro-2KDK7KGM">Nextjs</li>
                    <li class="astro-2KDK7KGM">Nuxt</li>
                    <li class="astro-2KDK7KGM">Astro</li>
                    <li class="astro-2KDK7KGM">Solid Start</li>
                    <li class="astro-2KDK7KGM">Qwik</li>
                    <li class="astro-2KDK7KGM">Enhance</li>
                </ul>
            </li>
            <li class="my-1 flex flex-col astro-2KDK7KGM">
              <h3 class="text-3xl astro-2KDK7KGM">Advantages</h3>
              <ul class="pl-8 astro-2KDK7KGM">
                <li class="astro-2KDK7KGM">...performance is hard</li>
                <li class="astro-2KDK7KGM">A lot comes out of the box</li>
                <li class="astro-2KDK7KGM">Consolidated Dx</li>
                <li class="astro-2KDK7KGM">Lots of research</li>
            </ul>
            </li>
            <li class="my-1 flex flex-col astro-2KDK7KGM">
              <h3 class="text-3xl astro-2KDK7KGM">Caveats</h3>
            </li>
        </ul>	
    </div>
    	
</section>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/MetaFrameworks.astro");

const $$Astro$k = createAstro();
const $$TheAstroFramework = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$TheAstroFramework;
  return renderTemplate`${maybeRenderHead($$result)}<section class="flex my-20 items-start astro-CBDCXJLI">
    <div class="flex flex-col astro-CBDCXJLI">
        <h2 class="text-4xl text-red-400 mb-2 glitched astro-CBDCXJLI" title="A Closer look to Astro"><a href="#" class="astro-CBDCXJLI">A Closer look to Astro</a></h2>
        <ul class="astro-CBDCXJLI">
          <li class="my-1 flex flex-col astro-CBDCXJLI">
            <h3 class="text-3xl astro-CBDCXJLI">Concepts</h3>
            <ul class="pl-8 astro-CBDCXJLI">
                <li class="astro-CBDCXJLI">Astro Components</li>
                <li class="astro-CBDCXJLI">Add Scripts and styles</li>
                <li class="astro-CBDCXJLI">Ui frameworks integration & Islands Architecture</li>
                <li class="astro-CBDCXJLI">Tailwind integration</li>
                <li class="astro-CBDCXJLI">Add Markdown Content</li>
                <li class="astro-CBDCXJLI">Add Components in markrown</li>
                <li class="astro-CBDCXJLI"><a href="/planets" class="hover:text-emerald-500 astro-CBDCXJLI">Call external APIS</a></li>
                <li class="astro-CBDCXJLI">Call JSON routes</li>
                <li class="astro-CBDCXJLI">Call Server endpoints</li>
                <li class="astro-CBDCXJLI">Adapters</li>
                <li class="astro-CBDCXJLI"><a href="/tasks" class="hover:text-emerald-500 astro-CBDCXJLI">Server side vs Client side: a simple todo list</a></li>
                <li class="astro-CBDCXJLI">State Management and component Development</li>
                <li class="astro-CBDCXJLI">Testing with playwright</li>
            </ul>
          </li>
        </ul>	
    </div>
    <div class="flex self-center items-center align-center grow astro-CBDCXJLI">
      <a class="w-full astro-CBDCXJLI" href="https://docs.astro.build/en/getting-started/" target="_blank">
        <img class="h-80 relative mx-auto cursor-pointer astro-CBDCXJLI" src="/favicon.svg" id="astro-logo">
      </a>
    </div>
    
</section>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/TheAstroFramework.astro");

const $$Astro$j = createAstro();
const $$Animations = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Animations;
  return renderTemplate`${maybeRenderHead($$result)}<section class="flex my-20 justify-between astro-CZAKUKW7">
    <div id="stars-container" class="mt-12 astro-CZAKUKW7">
        <div id="stars" class="astro-CZAKUKW7"></div>
        <div id="stars2" class="astro-CZAKUKW7"></div>
        <div id="stars3" class="astro-CZAKUKW7"></div>
    </div>
    <div class="flex flex-col grow astro-CZAKUKW7">
        <h2 class="text-4xl text-red-400 mb-2 glitched min-w-[340px] astro-CZAKUKW7" title="Animations and VFX"><a href="#" class="astro-CZAKUKW7">Animations and VFX</a></h2>
        <ul class="pl-4 astro-CZAKUKW7">
            <li class="my-1 flex flex-col astro-CZAKUKW7">
                <h3 class="text-3xl astro-CZAKUKW7">CSS</h3>
                <ul class="pl-8 astro-CZAKUKW7">
                    <li class="astro-CZAKUKW7">Filters</li>
                    <li class="astro-CZAKUKW7">Animations</li>
                    <li class="astro-CZAKUKW7">Transitions</li>
                </ul>
            </li>
            <li class="my-1 flex flex-col astro-CZAKUKW7">
                <h3 class="text-3xl astro-CZAKUKW7">JS</h3>
                <ul class="pl-8 astro-CZAKUKW7">
                    <li class="astro-CZAKUKW7">GSAP Animations</li>
                    <li class="astro-CZAKUKW7">PIXI.JS : vfx and Games</li>
                </ul>
            </li>
        </ul>	
    </div>
    	
</section>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/Animations.astro");

const $$Astro$i = createAstro();
const $$WebComponents$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$WebComponents$1;
  return renderTemplate`${maybeRenderHead($$result)}<section class="flex my-20 items-start astro-P5TQ2D6U">
    <div class="flex flex-col astro-P5TQ2D6U">
        <h2 class="text-4xl text-red-400 mb-2 glitched astro-P5TQ2D6U" title="Web Components"><a href="#" class="astro-P5TQ2D6U">Web Components</a></h2>
        <ul class="astro-P5TQ2D6U">
          <li class="my-1 flex flex-col astro-P5TQ2D6U">
            <h3 class="text-3xl astro-P5TQ2D6U">Concepts</h3>
            <ul class="pl-8 astro-P5TQ2D6U">
                <li class="astro-P5TQ2D6U">Custom elements</li>
                <li class="astro-P5TQ2D6U">Template elements</li>
                <li class="astro-P5TQ2D6U">Shadow dom</li>
               </ul>
          </li>
          <li class="my-1 flex flex-col astro-P5TQ2D6U">
            <h3 class="text-3xl astro-P5TQ2D6U">Writing web Components</h3>
            <ul class="pl-8 astro-P5TQ2D6U">
                <li class="astro-P5TQ2D6U">Vanilla js</li>
                <li class="astro-P5TQ2D6U"><a href="/lit" class="astro-P5TQ2D6U">Lit</a></li>
            </ul>
          </li>
          <li class="my-1 flex flex-col astro-P5TQ2D6U">
            <h3 class="text-3xl astro-P5TQ2D6U">Use Cases</h3>
            <ul class="pl-8 astro-P5TQ2D6U">
                <li class="astro-P5TQ2D6U">Micro frontends</li>
                <li class="astro-P5TQ2D6U">Large Design systems</li>
                <li class="astro-P5TQ2D6U">Frontend Migrations</li>
            </ul>
          </li>
        </ul>	
    </div>
    <div class="flex self-center items-center align-center grow astro-P5TQ2D6U">
      
    </div>
    
</section>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/WebComponents.astro");

const $$Astro$h = createAstro();
const $$Intro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Intro;
  return renderTemplate`${maybeRenderHead($$result)}<div class="w-screen h-screen astro-U43OZX4M" id="splash"></div>
<h1 id="intro" class="astro-U43OZX4M"><img height="160" width="160" class="w-40 relative mx-auto astro-U43OZX4M" src="/favicon.svg"> Frankenstein Experiment</h1>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/Intro.astro");

const $$Astro$g = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate`${renderComponent($$result, "HomeLayout", $$HomeLayout, { "title": "Welcome to The playground" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="w-full relative grow pt-20">
		${renderComponent($$result2, "Intro", $$Intro, {})}
		<div id="cont" class="flex flex-col mt-20 mx-20 min-h-screen">
			<h1 class="self-start text-red-400 glitch">Here youll' find a few goodies</h1>
			<h2>Made with different styles and techniques </h2>
			<p>As it's built with 
				<a href="https://astro.build/" target="_blank">Astro</a>
				and you can literally throw almost <em class="text-2xl"> Whatever</em> at it !
			</p>

			${renderComponent($$result2, "MetaFrameworks", $$MetaFrameworks, {})}
			${renderComponent($$result2, "TheAstroFramework", $$TheAstroFramework, {})}
			${renderComponent($$result2, "Animations", $$Animations, {})}
			${renderComponent($$result2, "WebComponents", $$WebComponents$1, {})}
			<h2 class="self-start text-3xl"> <a href="#">Testing!</a></h2>
			<h2 class="self-start text-3xl"> <a href="#">State Management</a></h2>
			
				
		</div>
	</main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/index.astro");

const $$file$c = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/index.astro";
const $$url$c = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$3,
    file: $$file$c,
    url: $$url$c
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$f = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito">
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

const $$Astro$e = createAstro();
const $$Tab = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Tab;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col grow items-center border border-solid border-slate-100 rounded m-2 p-2 self-start">
    ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/Tab.astro");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1, _b, _c;
const $$Astro$d = createAstro();
const $$WebComponents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$WebComponents;
  let counter = await Astro2.glob(/* #__PURE__ */ Object.assign({"../markdown/a-counter.md": () => import('../a-counter.ef725d8d.mjs')}), () => "../markdown/a-counter.md");
  let counterTxt = counter[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Web Components", "class": "astro-LSJJWIS5" }, { "aside": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<aside class="aside astro-LSJJWIS5">
        <ul class="astro-LSJJWIS5">
            <li class="astro-LSJJWIS5">
                <a href="./lit/composing-templates" class="astro-LSJJWIS5">
                    lit : composing templates
                </a>
            </li>
            <li class="astro-LSJJWIS5">
                <a href="./lit/lit-react" class="astro-LSJJWIS5">
                    lit : use lit in react
                </a>
            </li>
            <li class="astro-LSJJWIS5">
                <a href="./lit/lit-vue" class="astro-LSJJWIS5">
                    lit : use lit in vue
                </a>
            </li>
        </ul>
    </aside>`, "main": ($$result2) => renderTemplate`<main class="max-w-4xl relative grow pt-20 astro-LSJJWIS5">
        <h1 class="astro-LSJJWIS5">Web Components</h1>
        <p class="astro-LSJJWIS5">What the hell is that and why should you care</p>
        <div class="flex astro-LSJJWIS5">
            ${renderComponent($$result2, "Tab", $$Tab, { "class": "astro-LSJJWIS5" }, { "default": ($$result3) => renderTemplate(_a$1 || (_a$1 = __template$1(['<h3 class="astro-LSJJWIS5">... The nth counter</h3><p class="astro-LSJJWIS5">A "beautifully" styled Web component example</p><p class="instructions astro-LSJJWIS5">\n                    ', '\n                    <script type="module" src="./src/components/wc/counter.js"><\/script>\n                </p>'])), renderComponent($$result3, "my-counter", "my-counter", { "class": "astro-LSJJWIS5" })) })}
            ${renderComponent($$result2, "counterTxt.Content", counterTxt.Content, { "class": "astro-LSJJWIS5" })}
        </div>
        <div class="flex astro-LSJJWIS5">
            ${renderComponent($$result2, "Tab", $$Tab, { "class": "astro-LSJJWIS5" }, { "default": ($$result3) => renderTemplate(_b || (_b = __template$1([`<h3 class="astro-LSJJWIS5">
                    We'll get to know the existence of <span class="astro-LSJJWIS5">shadow dom - encapsulation</span>
                </h3><button class="border-1  text-slate-100 border-solid astro-LSJJWIS5">
                    hello
                </button><h3 class="astro-LSJJWIS5">
                    <span class="astro-LSJJWIS5">A styled but useless Custom button :(</span>
                </h3>`, '<script type="module" src="./src/components/wc/buttons/CustomButton.js"><\/script>'])), renderComponent($$result3, "custom-button", "custom-button", { "title": "a styled button", "class": "astro-LSJJWIS5" })) })}
            ${renderComponent($$result2, "Tab", $$Tab, { "class": "astro-LSJJWIS5" }, { "default": ($$result3) => renderTemplate(_c || (_c = __template$1(['<h3 class="astro-LSJJWIS5">Expanding List example</h3><p class="instructions astro-LSJJWIS5">\n                    ', '\n                    <script type="module" src="./src/components/wc/expandingList.js"><\/script>\n                </p>'])), renderComponent($$result3, "expanding-list", "expanding-list", { "class": "astro-LSJJWIS5" })) })}
        </div>	
      
    </main>` })}
`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/web-components.astro");

const $$file$b = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/web-components.astro";
const $$url$b = "/web-components";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$WebComponents,
    file: $$file$b,
    url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$c = createAstro();
const $$Spectrum = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Spectrum;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spectrum" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["", '<script src="https://jspm.dev/@spectrum-web-components/bundle/elements.js" type="module" async><\/script><link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-global.css"><link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-medium.css"><link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-light.css"><link rel="stylesheet" href="node_modules/@spectrum-css/page/dist/index-vars.css"><link rel="stylesheet" href="node_modules/@spectrum-css/button/dist/index-vars.css">'])), renderComponent($$result2, "sp-theme", "sp-theme", { "scale": "large", "color": "dark" }, { "default": () => renderTemplate`
        
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

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

const _page9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    getPlanet,
    getPlanets
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$b = createAstro();
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

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$9,
    url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro();
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

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file$8,
    url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const Task$2 = ({
  task,
  styles,
  updateTask,
  editTask,
  deleteTask
}) => {
  return /* @__PURE__ */ jsxs("div", {
    className: "flex items-center w-full p-2 m-2 mt-0 border-solid border-slate-900 border-2 rounded-xl",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "flex align-center grow",
      children: [/* @__PURE__ */ jsx("input", {
        type: "checkbox",
        className: "cursor-pointer text-xl outline-0 px-2",
        checked: task.completed,
        onChange: () => updateTask(task._id)
      }), /* @__PURE__ */ jsx("p", {
        className: task.completed ? "grow px-2 line-through text-slate-800" : "grow px-2 text-slate-900",
        children: task.task
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex",
      children: [/* @__PURE__ */ jsx("button", {
        onClick: () => editTask(task._id),
        className: "outline-none bg-transparent text-black text-xl cursor-pointer px-2",
        children: "✎"
      }), /* @__PURE__ */ jsx("button", {
        onClick: () => deleteTask(task._id),
        className: "outline-none bg-transparent text-black text-xl cursor-pointer px-2",
        children: "✖"
      })]
    })]
  });
};
__astro_tag_component__(Task$2, "@astrojs/react");

const Form$1 = ({
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
      className: "pl-2 grow outline-0 rounded-tl rounded-bl border-solid border-2 border-slate-800 text-slate-800",
      style: {
        height: "inherit"
      },
      type: "text",
      placeholder: "Task to be done...",
      onChange: handleChange,
      value: task.task
    }), /* @__PURE__ */ jsx("button", {
      type: "submit",
      className: "text-xl font-bold cursor-pointer w-24 bg-slate-600 text-white rounded-tr rounded-br border-solid border-2 border-slate-900",
      style: {
        height: "inherit"
      },
      children: task._id ? "Update" : "Add"
    })]
  });
};
__astro_tag_component__(Form$1, "@astrojs/react");

const base$4 = "http://localhost:3000/api";
const url$4 = base$4 + "/tasks";
function ReactTasks(props) {
  console.log(props);
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
    e.preventDefault();
    try {
      if (task._id) {
        const {
          data
        } = await axios.post(url$4 + "/" + task._id + ".json", {
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
        } = await axios.post(url$4 + ".json", {
          task: task.task
        });
        setTasks((prev) => [...prev, data.data]);
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
      } = await axios.post(url$4 + "/" + id + ".json", {
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
      } = await axios.delete(url$4 + "/" + id + ".json");
      setTasks((prev) => prev.filter((task2) => task2._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col w-full items-center justify-center bg-slate-700 rounded-xl",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "text-3xl text-slate-100 m-2",
      children: "Yess, another TodoList :( "
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col w-full items-center md:max-w-xl p-2 rounded-xl bg-slate-400 box-border mb-5",
      children: [/* @__PURE__ */ jsx(Form$1, {
        task,
        addTask,
        handleChange
      }), tasks.map((task2) => /* @__PURE__ */ jsx(Task$2, {
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

const $$Astro$9 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Index$1;
  let tasks = [];
  try {
    const response = await fetch("http://localhost:3000/api/tasks/tasks.json");
    const data = await response.json();
    tasks = data.documents;
  } catch (error) {
    console.log(error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "React Task List", "class": "astro-ENZ3LIWP" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="max-w-4xl relative grow pt-20 astro-ENZ3LIWP">
		<h1 class="astro-ENZ3LIWP">React Task List</h1>
        ${renderComponent($$result2, "ReactTasks", ReactTasks, { "client:load": true, "tasks": tasks, "client:component-hydration": "load", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/react/tasks/Tasks", "client:component-export": "default", "class": "astro-ENZ3LIWP" })}
	</main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/tasks/index.astro");

const $$file$7 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/tasks/index.astro";
const $$url$7 = "/tasks";

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$7,
    url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro();
const $$TasksLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$TasksLayout;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute("flex flex-col w-full items-center justify-center bg-slate-700 rounded-xl", "class")}>
    <h1${addAttribute("text-3xl text-slate-100 m-2", "class")}>Yess, another TodoList :( </h1>
    <div${addAttribute("flex flex-col w-full items-center md:max-w-xl p-2 rounded-xl bg-slate-400 box-border mb-5", "class")}>
        ${renderSlot($$result, $$slots["default"])}
    </div>
</div>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/layouts/TasksLayout.astro");

function noop() { }
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function subscribe(store, ...callbacks) {
    if (store == null) {
        return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;
/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 */
function escape(value, is_attr = false) {
    const str = String(value);
    const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
    pattern.lastIndex = 0;
    let escaped = '';
    let last = 0;
    while (pattern.test(str)) {
        const i = pattern.lastIndex - 1;
        const ch = str[i];
        escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : (ch === '"' ? '&quot;' : '&lt;'));
        last = i + 1;
    }
    return escaped + str.substring(last);
}
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(context || (parent_component ? parent_component.$$.context : [])),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, $$slots, context);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    const assignment = (boolean && value === true) ? '' : `="${escape(value, true)}"`;
    return ` ${name}${assignment}`;
}

const base$3 = "http://localhost:3000/api";
const url$3 = base$3 + '/tasks';
const addTask = async (task) => {
    try {
        if (task._id) {
            const { data } = await axios.post(url$3 + "/" + task._id + '.json', {
                task: task.task,
            });
            return data
        } else {
            const { data } = await axios.post(url$3 + "/tasks.json", {
                task: task.task,
            });
            return data
        }
        
    } catch (error) {
        console.log(error);
    }
};

const base$2 = "http://localhost:3000/api";
const url$2 = base$2 + '/tasks';
const updateTask = async (id, completed) => {
    try {
        const { data } = await axios.post(url$2 + "/" + id + ".json", {
            completed: !completed,
        });
        return data
    } catch (error) {
        console.log(error);
    }
};

const base$1 = "http://localhost:3000/api";
const url$1 = base$1 + '/tasks';
const deleteTask = async (id) => {
    try {
        await axios.delete(url$1 + "/" + id + ".json");
        return id
    } catch (error) {
        console.log(error);
    }
};

const base = "http://localhost:3000/api";
const url = base + '/tasks';
const loadTasks = async () => {
    try {
        const { data } = await axios.get(url +'/tasks.json');
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

/* src/components/svelte/tasks/FormTextInput.svelte generated by Svelte v3.57.0 */

const FormTextInput$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $itemSelected, $$unsubscribe_itemSelected;
	$$unsubscribe_itemSelected = subscribe(itemSelected, value => $itemSelected = value);

	$$unsubscribe_itemSelected();
	return `<input${add_attribute("class", 'pl-2 grow outline-0 rounded-tl rounded-bl border-solid border-2 border-slate-800 text-slate-800', 0)} style="height: inherit" type="text" placeholder="Task to be done..."${add_attribute("value", $itemSelected.task, 0)}>`;
});

/* src/components/svelte/tasks/Form.svelte generated by Svelte v3.57.0 */

const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $itemSelected, $$unsubscribe_itemSelected;
	$$unsubscribe_itemSelected = subscribe(itemSelected, value => $itemSelected = value);
	let { tasks } = $$props;

	if ($$props.tasks === void 0 && $$bindings.tasks && tasks !== void 0) $$bindings.tasks(tasks);
	$$unsubscribe_itemSelected();

	return `<form class="flex w-full items-center h-10 mb-5">${validate_component(FormTextInput$1, "FormTextInput").$$render($$result, {}, {}, {})}
    <button type="submit" class="text-xl font-bold cursor-pointer w-24 bg-slate-600 text-white rounded-tr rounded-br border-solid border-2 border-slate-900" style="height: inherit">${escape($itemSelected._id ? "Update" : "Add")}</button></form>`;
});

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$1 = {
  __name: 'Task',
  props: {
  task: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props;



const item = ref(props.task);
// state handled on client
const toggleComplete = async () => {
    try {
        await updateTaskItem({
            _id:item.value._id, 
            completed:item.value.completed
        });
        item.value = taskItems.get()[item.value._id];
        
    } catch (error) {
        console.log(error);
    }
};
// state handled on server
const handleDelete = async () => {
    await deleteTaskItem(item.value._id);
    window.location.reload();
};
// state handled on client, have to find something "smarter..."
const handleSelect = () => {
    selectTaskItem(item.value._id);
    item.value = itemSelected.get();
};

const __returned__ = { props, item, toggleComplete, handleDelete, handleSelect, ref, get itemSelected() { return itemSelected }, get taskItems() { return taskItems }, get selectTaskItem() { return selectTaskItem }, get updateTaskItem() { return updateTaskItem }, get deleteTaskItem() { return deleteTaskItem } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    ssrRenderAttrs(mergeProps({ class: "flex items-center w-full p-2 m-2 mt-0 border-solid border-slate-900 border-2 rounded-xl" }, _attrs))
  }><div class="flex align-center grow"><input type="checkbox" class="cursor-pointer text-xl outline-0 px-2"${
    (ssrIncludeBooleanAttr($setup.item.completed)) ? " checked" : ""
  }><p class="${
    ssrRenderClass($setup.item.completed 
                ? 'grow px-2 line-through text-slate-800'
                : 'grow px-2 text-slate-900')
  }">${
    ssrInterpolate($props.task.task)
  }</p></div><div class="flex"><button class="outline-none bg-transparent text-black text-xl cursor-pointer px-2"> ✎ </button><button class="outline-none bg-transparent text-black text-xl cursor-pointer px-2"> ✖ </button></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/vue/tasks/Task.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const Task$1 = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1]]);

const $$Astro$7 = createAstro();
const $$NoTasks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$NoTasks;
  return renderTemplate`${maybeRenderHead($$result)}<h2${addAttribute("flex items-center justify-center capitalize rounded-xl bg-slate-300 text-slate-800 text-2xl p-4", "class")}>
    No tasks
</h2>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/NoTasks.astro");

const $$Astro$6 = createAstro();
const $$MultiFrameworkSsrTasks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MultiFrameworkSsrTasks;
  let tasks = [];
  try {
    const response = await fetch("http://localhost:3000/api/tasks/tasks.json");
    const data = await response.json();
    tasks = data.documents;
    console.log(tasks);
  } catch (error) {
    console.log(error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ssr Task List", "class": "astro-P6HUAIOB" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="max-w-4xl relative grow pt-20 astro-P6HUAIOB">
		<h1 class="astro-P6HUAIOB">Ssr Task List</h1>
		${renderComponent($$result2, "TasksLayout", $$TasksLayout, { "class": "astro-P6HUAIOB" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Form", Form, { "tasks": tasks, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/svelte/tasks/Form.svelte", "client:component-export": "default", "class": "astro-P6HUAIOB" })}${tasks.map((task) => renderTemplate`${renderComponent($$result3, "Task", Task$1, { "task": task, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/vue/tasks/Task.vue", "client:component-export": "default", "class": "astro-P6HUAIOB" })}`)}${tasks.length === 0 && renderTemplate`${renderComponent($$result3, "NoTasks", $$NoTasks, { "class": "astro-P6HUAIOB" })}`}` })}
	</main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/tasks/multi-framework-ssr-tasks.astro");

const $$file$6 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/tasks/multi-framework-ssr-tasks.astro";
const $$url$6 = "/tasks/multi-framework-ssr-tasks";

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$MultiFrameworkSsrTasks,
    file: $$file$6,
    url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

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
    className: "pl-2 grow outline-0 rounded-tl rounded-bl border-solid border-2 border-slate-800 text-slate-800",
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
      className: "text-xl font-bold cursor-pointer w-24 bg-slate-600 text-white rounded-tr rounded-br border-solid border-2 border-slate-900",
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
    className: "flex items-center w-full p-2 m-2 mt-0 border-solid border-slate-900 border-2 rounded-xl",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "flex align-center grow",
      children: [/* @__PURE__ */ jsx("input", {
        type: "checkbox",
        className: "cursor-pointer text-xl outline-0 px-2",
        checked: task.completed,
        onChange: toggleComplete
      }), /* @__PURE__ */ jsx("p", {
        className: task.completed ? "grow px-2 line-through text-slate-800" : "grow px-2 text-slate-900",
        children: task.task
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex",
      children: [/* @__PURE__ */ jsx("button", {
        onClick: handleSelect,
        className: "outline-none bg-transparent text-black text-xl cursor-pointer px-2",
        children: "✎"
      }), /* @__PURE__ */ jsx("button", {
        onClick: handleDelete,
        className: "outline-none bg-transparent text-black text-xl cursor-pointer px-2",
        children: "✖"
      })]
    })]
  });
};
__astro_tag_component__(TaskRedo, "@astrojs/react");

const $$Astro$5 = createAstro();
const $$SplittedTasksSsrReact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SplittedTasksSsrReact;
  let tasks = [];
  let url = location.protocol + "//" + location.hostname;
  try {
    const response = await fetch(url + "/api/tasks/tasks.json");
    const data = await response.json();
    tasks = data.documents;
  } catch (error) {
    console.log(error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ssr Task List", "class": "astro-JJMTFIXG" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="max-w-4xl relative grow pt-20 astro-JJMTFIXG">
		<h1 class="astro-JJMTFIXG">Ssr Task List</h1>
		${renderComponent($$result2, "TasksLayout", $$TasksLayout, { "class": "astro-JJMTFIXG" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "FormRedo", FormRedo, { "tasks": tasks, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/react/tasks/FormRedo", "client:component-export": "default", "class": "astro-JJMTFIXG" })}${tasks.map((task) => renderTemplate`${renderComponent($$result3, "TaskRedo", TaskRedo, { "task": task, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/react/tasks/TaskRedo", "client:component-export": "default", "class": "astro-JJMTFIXG" })}`)}${tasks.length === 0 && renderTemplate`${renderComponent($$result3, "NoTasks", $$NoTasks, { "class": "astro-JJMTFIXG" })}`}` })}
	</main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/tasks/splitted-tasks-ssr-react.astro");

const $$file$5 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/tasks/splitted-tasks-ssr-react.astro";
const $$url$5 = "/tasks/splitted-tasks-ssr-react";

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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
    className: "flex flex-col w-full items-center justify-center bg-slate-700 rounded-xl",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "text-3xl text-slate-100 m-2",
      children: "Yess, another TodoList :( "
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col w-full items-center md:max-w-xl p-2 rounded-xl bg-slate-400 box-border mb-5",
      children: [/* @__PURE__ */ jsx(Form$1, {
        task: $itemSelected,
        addTask,
        handleChange
      }), Object.keys($taskItems).length < tasks.length ? tasks.map((task) => /* @__PURE__ */ jsx(Task$2, {
        task,
        updateTask,
        editTask,
        deleteTask
      }, task._id)) : Object.values($taskItems).map((task) => /* @__PURE__ */ jsx(Task$2, {
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

const $$Astro$4 = createAstro();
const $$Redotasksreact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Redotasksreact;
  let tasks;
  try {
    const response = await fetch("http://localhost:3000/api/tasks/tasks.json");
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

const _page8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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
	let responseBody;
	let responseStatus;
	let isResponseOk;
	let data = await consumers.json(request.body);
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

const _page10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

const _page11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

const $$Astro$3 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index;
  let posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../markdown/lit.md": () => import('../lit.644ed784.mjs')}), () => "../../markdown/lit.md");
  let post = posts[0];
  let markdownUseless = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../markdown/useless-button.md": () => import('../useless-button.210cdd0e.mjs')}), () => "../../markdown/useless-button.md");
  let useless = markdownUseless[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lit Elements", "class": "astro-TODWRKOZ" }, { "aside": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<aside class="aside astro-TODWRKOZ">
        <ul class="astro-TODWRKOZ">
            <li class="astro-TODWRKOZ">
                <a href="./lit/composing-templates" class="astro-TODWRKOZ">
                    lit : composing templates
                </a>
            </li>
            <li class="astro-TODWRKOZ">
                <a href="./lit/lit-react" class="astro-TODWRKOZ">
                    lit : use lit in react
                </a>
            </li>
            <li class="astro-TODWRKOZ">
                <a href="./lit/lit-vue" class="astro-TODWRKOZ">
                    lit : use lit in vue
                </a>
            </li>
        </ul>
    </aside>`, "main": ($$result2) => renderTemplate`<main class="main astro-TODWRKOZ">
        ${renderComponent($$result2, "post.Content", post.Content, { "class": "astro-TODWRKOZ" })}
        <h2 class="astro-TODWRKOZ">Lit Basics:</h2>
		<p class="astro-TODWRKOZ">
			a dummy element...
		</p>
       ${renderComponent($$result2, "MyElement", MyElement, { "class": "astro-TODWRKOZ" })}
       <hr class="astro-TODWRKOZ">
       <p class="astro-TODWRKOZ">
        ...and a useless button
        </p>
        ${renderComponent($$result2, "MyButton", MyButton, { "text": "some text", "class": "astro-TODWRKOZ" })}
        ${renderComponent($$result2, "useless.Content", useless.Content, { "class": "astro-TODWRKOZ" })}
      
    </main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/index.astro");

const $$file$3 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/index.astro";
const $$url$3 = "/lit";

const _page12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$LitBasic = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LitBasic;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lit Basic" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="main">
		<h1>Lit Basic</h1>
		<p>
			${renderComponent($$result2, "MyElement", MyElement, {})}
		</p>
       
        ${renderComponent($$result2, "MyButton", MyButton, { "text": "some text" })}
		
	</main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/lit-basic.astro");

const $$file$2 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/lit-basic.astro";
const $$url$2 = "/lit/lit-basic";

const _page14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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
  return /* @__PURE__ */ jsxs("div", {
    className: "App",
    style: {
      display: "flex"
    },
    children: [/* @__PURE__ */ jsxs("div", {
      style: {
        flexGrow: 1
      },
      children: [/* @__PURE__ */ jsx("h2", {
        children: "React component + webcomponent button"
      }), planetsData.length > 0 && /* @__PURE__ */ jsx("h3", {
        children: "A nice nerd list:"
      }), planetsData.map((planet, index) => /* @__PURE__ */ jsx(PlanetDetail, {
        planet,
        slug: index + 1
      }, planet.name.replace(" ", "-")))]
    }), /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx("my-button", {
        text: "get planets",
        onClick: (e) => getPlanetsData()
      })
    })]
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
          style: {
            display: "flex"
          },
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

const $$Astro$1 = createAstro();
const $$LitReact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LitReact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lit React", "class": "astro-4EPOLKAZ" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="main astro-4EPOLKAZ">
		<h1 class="astro-4EPOLKAZ">Lit React</h1>
        ${renderComponent($$result2, "App", App$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/react/callApi/App.jsx", "client:component-export": "App", "class": "astro-4EPOLKAZ" })}
	</main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/lit-react.astro");

const $$file$1 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/lit-react.astro";
const $$url$1 = "/lit/lit-react";

const _page15 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$LitReact,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const _sfc_main = {
  __name: 'App',
  setup(__props, { expose }) {
  expose();

const state = reactive({
  users : []
});

const url = "https://jsonplaceholder.typicode.com/users/";

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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "app" }, _attrs))} data-v-e4a9c6cc><div class="content" data-v-e4a9c6cc><h2 data-v-e4a9c6cc> Vue component + webcomponent button </h2><ul data-v-e4a9c6cc><!--[-->`);
  ssrRenderList($setup.state.users, (user) => {
    _push(`<li data-v-e4a9c6cc><span data-v-e4a9c6cc>${
      ssrInterpolate(user.name)
    }</span> - <span data-v-e4a9c6cc>${
      ssrInterpolate(user.website)
    }</span><hr data-v-e4a9c6cc></li>`);
  });
  _push(`<!--]--></ul></div><div class="aside" data-v-e4a9c6cc><my-button text="load users" data-v-e4a9c6cc></my-button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/vue/CallApi/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const App = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-e4a9c6cc"]]);

const $$Astro = createAstro();
const $$LitVue = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LitVue;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lit vue" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="main">
		<h1>Lit vue</h1>
        ${renderComponent($$result2, "App", App, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/vue/CallApi/App.vue", "client:component-export": "default" })}
	</main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/lit-vue.astro");

const $$file = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/lit-vue.astro";
const $$url = "/lit/lit-vue";

const _page16 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$LitVue,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d, _page5 as e, _page6 as f, _page7 as g, _page8 as h, _page9 as i, _page10 as j, _page11 as k, _page12 as l, _page14 as m, _page15 as n, _page16 as o };
