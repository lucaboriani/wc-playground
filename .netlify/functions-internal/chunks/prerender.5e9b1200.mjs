import { $ as $$Header, a as $$MetaFrameworksNavigation, _ as _export_sfc, b as $$LitNavigation, c as $$TestingNavigation, d as $$Layout, M as MyElement, e as MyButton } from './pages/all.c62ec6a4.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, g as renderHead, d as renderComponent, f as renderSlot, _ as __astro_tag_component__, m as maybeRenderHead } from './astro.67ba37b7.mjs';
/* empty css                          *//* empty css                          */import { useRef, useEffect } from 'react';
import { Application, Texture, Sprite, Point, SimpleRope } from 'pixi.js';
import { jsx } from 'react/jsx-runtime';
import { useSSRContext, ref, onMounted, onUnmounted, mergeProps } from 'vue';
import { BLEND_MODES } from '@pixi/constants';
import { ssrRenderAttrs } from 'vue/server-renderer';
/* empty css                          *//* empty css                          */
const $$Astro$9 = createAstro("https://wc-lit-playground.netlify.app/");
const $$HomeLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$HomeLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito&display=swap">
		<link rel="preload" as="image" href="./thumb-1920-301840.webp">
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

let app$1;
async function initWarp (mount){
    app$1 = new Application({ background: '#000000', resizeTo:mount });
    mount.appendChild(app$1.view);

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
        app$1.stage.addChild(star.sprite);
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

    // Change flight speed every 15 seconds
    /* setInterval(() => {
        warpSpeed = warpSpeed > 0 ? 0 : 1;
    }, 15000); */

    // Listen for animate update
    app$1.ticker.add((delta) => {
        // Simple easing. This should be changed to proper easing function when used for real.
        speed += (warpSpeed - speed) / 20;
        cameraZ += delta * 10 * (speed + baseSpeed);
        for (let i = 0; i < starAmount; i++) {
            const star = stars[i];
            if (star.z < cameraZ) randomizeStar(star);

            // Map star 3d position to 2d with really simple projection
            const z = star.z - cameraZ;
            star.sprite.x = star.x * (fov / z) * app$1.renderer.screen.width + app$1.renderer.screen.width / 2;
            star.sprite.y = star.y * (fov / z) * app$1.renderer.screen.width + app$1.renderer.screen.height / 2;

            // Calculate star scale & rotation.
            const dxCenter = star.sprite.x - app$1.renderer.screen.width / 2;
            const dyCenter = star.sprite.y - app$1.renderer.screen.height / 2;
            const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
            const distanceScale = Math.max(0, (2000 - z) / 2000);
            star.sprite.scale.x = distanceScale * starBaseSize;
            // Star is looking towards center so that y axis is towards center.
            // Scale the star depending on how fast we are moving, what the stretchfactor is and depending on how far away it is from the center.
            star.sprite.scale.y = distanceScale * starBaseSize + distanceScale * speed * starStretch * distanceCenter / app$1.renderer.screen.width;
            star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
        }
    });
}

function start$1(){
    console.log('app start');
    app$1.start();
}

function stop$1(){
    console.log('app stop');
    app$1.stop();
}
function destroy$1(){
    app$1.stop();
    app$1.destroy();
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
/**
 * @jest-environment jsdom
 */

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
    console.log("handleAppIntersection");
    const {
      isIntersecting
    } = entry;
    if (isIntersecting) {
      start$1();
    } else {
      stop$1();
    }
  };
  const handleVisibilityChange = () => {
    console.log("handleVisibilityChange");
    if (document.visibilityState === "visible") {
      const rect = app.current.getBoundingClientRect();
      const isVisible = rect.top + window.innerHeight > 0;
      if (isVisible) {
        start$1();
      }
    } else {
      stop$1();
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
      destroy$1();
    };
  }, []);
  return /* @__PURE__ */ jsx("div", {
    ref: app,
    className: "flex grow pr-2"
  });
};
__astro_tag_component__(PixiStarWarp, "@astrojs/react");

const $$Astro$8 = createAstro("https://wc-lit-playground.netlify.app/");
const $$MetaFrameworks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$MetaFrameworks;
  return renderTemplate`${maybeRenderHead($$result)}<section class="flex my-20 astro-2KDK7KGM">
    ${renderComponent($$result, "PixiStarWarp", PixiStarWarp, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/react/pixi/PixiStarWarp", "client:component-export": "default", "class": "astro-2KDK7KGM" })}
    <div class="flex flex-col min-w-[360px] astro-2KDK7KGM">
        <h2 class="text-4xl text-red-400 mb-2 glitched astro-2KDK7KGM" title="Meta Frameworks"><a href="/metaframeworks" class="astro-2KDK7KGM">Meta Frameworks</a></h2>
        <ul class="astro-2KDK7KGM">
            <li class="my-1 flex flex-col astro-2KDK7KGM">
                ${renderComponent($$result, "MetaFrameworksNavigation", $$MetaFrameworksNavigation, { "class": "astro-2KDK7KGM" })}
            </li>
            <li class="my-2 flex flex-col astro-2KDK7KGM">
              <h3 class="text-2xl astro-2KDK7KGM">Advantages</h3>
              <ul class="pl-8 astro-2KDK7KGM">
                <li class="astro-2KDK7KGM">...performance is hard</li>
                <li class="astro-2KDK7KGM">A lot comes out of the box</li>
                <li class="astro-2KDK7KGM">Consolidated Dx</li>
                <li class="astro-2KDK7KGM">Lots of research</li>
            </ul>
            </li>
            <li class="my-2 flex flex-col astro-2KDK7KGM">
              <h3 class="text-2xl astro-2KDK7KGM">Caveats</h3>
            </li>
        </ul>	
    </div>
    	
</section>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/MetaFrameworks.astro");

const $$Astro$7 = createAstro("https://wc-lit-playground.netlify.app/");
const $$TheAstroFramework = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
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
                <li class="astro-CBDCXJLI">
                  <a href="/tasks" class="hover:text-emerald-500 astro-CBDCXJLI">
                    Server side vs Client side: a simple todo list
                  </a></li>
                <li class="astro-CBDCXJLI">State Management and component Development</li>
                <li class="astro-CBDCXJLI">Testing with playwright</li>
            </ul>
          </li>
        </ul>	
    </div>
    <div class="flex self-center items-center align-center grow astro-CBDCXJLI">
      <a class="w-full astro-CBDCXJLI" href="https://docs.astro.build/en/getting-started/" target="_blank">
        <img loading="lazy" height="320" width="320" class="h-80 relative mx-auto cursor-pointer astro-CBDCXJLI" src="/favicon.svg" id="astro-logo" alt="astro logo">
      </a>
    </div>
    
</section>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/TheAstroFramework.astro");

const $$Astro$6 = createAstro("https://wc-lit-playground.netlify.app/");
const $$Animations = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
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

let app;
async function initTrail (mount){
    app = new Application({ background: '#000000', resizeTo:mount });
    mount.appendChild(app.view);
    

    // Get the texture for rope.
    const trailTexture = Texture.from('/trail.png');
    const historyX = [];
    const historyY = [];
    // historySize determines how long the trail will be.
    const historySize = 20;
    // ropeSize determines how smooth the trail will be.
    const ropeSize = 100;
    const points = [];

    // Create history array.
    for (let i = 0; i < historySize; i++) {
        historyX.push(0);
        historyY.push(0);
    }
    // Create rope points.
    for (let i = 0; i < ropeSize; i++) {
        points.push(new Point(0, 0));
    }

    // Create the rope
    const rope = new SimpleRope(trailTexture, points);

    // Set the blendmode
    rope.blendmode = BLEND_MODES.ADD;

    app.stage.addChild(rope);


    let mouseposition = null;
    //app.stage.interactive = true;
    app.stage.eventMode = 'static';
    app.stage.hitArea = app.screen;
    app.stage.on('mousemove', (event) => {
        mouseposition = mouseposition || { x: 0, y: 0 };
        mouseposition.x = event.global.x;
        mouseposition.y = event.global.y;
    });

    // Listen for animate update
    app.ticker.add(() => {
        if (!mouseposition) return;

        // Update the mouse values to history
        historyX.pop();
        historyX.unshift(mouseposition.x);
        historyY.pop();
        historyY.unshift(mouseposition.y);
        // Update the points to correspond with history.
        for (let i = 0; i < ropeSize; i++) {
            const p = points[i];

            // Smooth the curve with cubic interpolation to prevent sharp edges.
            const ix = cubicInterpolation(historyX, i / ropeSize * historySize);
            const iy = cubicInterpolation(historyY, i / ropeSize * historySize);

            p.x = ix;
            p.y = iy;
        }
    });

    /**
     * Cubic interpolation based on https://github.com/osuushi/Smooth.js
     */
    function clipInput(k, arr) {
        if (k < 0) k = 0;
        if (k > arr.length - 1) k = arr.length - 1;
        return arr[k];
    }

    function getTangent(k, factor, array) {
        return factor * (clipInput(k + 1, array) - clipInput(k - 1, array)) / 2;
    }

    function cubicInterpolation(array, t, tangentFactor) {
        if (tangentFactor == null) tangentFactor = 1;

        const k = Math.floor(t);
        const m = [getTangent(k, tangentFactor, array), getTangent(k + 1, tangentFactor, array)];
        const p = [clipInput(k, array), clipInput(k + 1, array)];
        t -= k;
        const t2 = t * t;
        const t3 = t * t2;
        return (2 * t3 - 3 * t2 + 1) * p[0] + (t3 - 2 * t2 + t) * m[0] + (-2 * t3 + 3 * t2) * p[1] + (t3 - t2) * m[1];
    }
}

function start(){
    console.log('app start');
    app.start();
}

function stop(){
    console.log('app stop');
    app.stop();
}
function destroy(){
    app.stop();
    app.destroy();
}

const _sfc_main = {
  __name: 'VueMouseTrail',
  setup(__props, { expose: __expose }) {
  __expose();

const app = ref(null);

const handleAppIntersection = (entry) => {
        console.log('handleAppIntersection');
        const { isIntersecting } = entry;
        if(isIntersecting){
            start();
        } else {
            stop();
        }
    };
const handleVisibilityChange = () => {
    console.log('handleVisibilityChange');
    if (document.visibilityState === "visible") {
        const rect = app.current.getBoundingClientRect();
        const isVisible = (rect.top + window.innerHeight) > 0; 
        if(isVisible){
            start();
        }
    } else {
        stop();
    }
};

onMounted(()=>{
    console.log(app.value);
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.01
    };

    IntersectionHandler.init(options);
    
    IntersectionHandler.observe(app.value, handleAppIntersection);
    initTrail(app.value); 
    document.addEventListener("visibilitychange", handleVisibilityChange);
});

onUnmounted(()=>{
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    IntersectionHandler.unobserve(app.current);
    destroy();
});


const __returned__ = { app, handleAppIntersection, handleVisibilityChange, ref, onMounted, onUnmounted, get initTrail() { return initTrail }, get start() { return start }, get stop() { return stop }, get destroy() { return destroy }, get IntersectionHandler() { return IntersectionHandler } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "app",
    class: "flex grow pr-2 h-96"
  }, _attrs))}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/vue/pixi/VueMouseTrail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const VueMouseTrail = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Astro$5 = createAstro("https://wc-lit-playground.netlify.app/");
const $$WebComponents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$WebComponents;
  return renderTemplate`${maybeRenderHead($$result)}<section class="flex my-20 items-start astro-P5TQ2D6U">
    <div class="flex flex-col astro-P5TQ2D6U">
        <h2 class="text-4xl text-red-400 mb-2 glitched astro-P5TQ2D6U" title="Web Components"><a href="/web-components" class="astro-P5TQ2D6U">Web Components</a></h2>
        <ul class="astro-P5TQ2D6U">
          <li class="my-1 flex flex-col astro-P5TQ2D6U">
            ${renderComponent($$result, "LitNavigation", $$LitNavigation, { "class": "astro-P5TQ2D6U" }, { "default": ($$result2) => renderTemplate`
              <h3 class="text-2xl astro-P5TQ2D6U">Use Cases</h3>
              <ul class="pl-8 astro-P5TQ2D6U">
                  <li class="astro-P5TQ2D6U">Micro frontends</li>
                  <li class="astro-P5TQ2D6U">Large Design systems</li>
                  <li class="astro-P5TQ2D6U">Frontend Migrations</li>
              </ul>
            ` })}
          </li>
          
        </ul>	
    </div>
    <div class="flex h-full grow astro-P5TQ2D6U">
      ${renderComponent($$result, "VueMouseTrail", VueMouseTrail, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/vue/pixi/VueMouseTrail.vue", "client:component-export": "default", "class": "astro-P5TQ2D6U" })}
    </div>
    
</section>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/WebComponents.astro");

const $$Astro$4 = createAstro("https://wc-lit-playground.netlify.app/");
const $$Intro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Intro;
  return renderTemplate`${maybeRenderHead($$result)}<div class="w-screen h-screen astro-U43OZX4M" id="splash">
	<img id="frank" loading="eager" class="w-screen h-screen object-cover astro-U43OZX4M" src="./thumb-1920-301840.webp" alt="Frank">
	<h1 id="intro" class="astro-U43OZX4M"><img loading="eager" height="160" width="160" class="w-40 relative mx-auto astro-U43OZX4M" src="/favicon.svg" alt="Astro logo"> Frankenstein Experiment</h1>
</div>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/Intro.astro");

const $$Astro$3 = createAstro("https://wc-lit-playground.netlify.app/");
const $$Testing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Testing;
  return renderTemplate`${maybeRenderHead($$result)}<section class="flex my-20 justify-between h-screen items-center astro-TPPTILVU">
    <div class="flex items-center justify-center grow astro-TPPTILVU">
      <div class="loader astro-TPPTILVU">
        <div class="outer astro-TPPTILVU"></div>
        <div class="middle astro-TPPTILVU"></div>
        <div class="inner astro-TPPTILVU"></div>
      </div>
    </div>
    <div class="flex flex-col  astro-TPPTILVU">
        <h2 class="text-4xl text-red-400 mb-2 glitched min-w-[340px] astro-TPPTILVU" title="Testing"><a href="#" class="astro-TPPTILVU">Testing</a></h2>
        ${renderComponent($$result, "TestingNavigation", $$TestingNavigation, { "class": "astro-TPPTILVU" })}
    </div>
    	
</section>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/Testing.astro");

const $$Astro$2 = createAstro("https://wc-lit-playground.netlify.app/");
const prerender$2 = true;
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "HomeLayout", $$HomeLayout, { "title": "Welcome to The playground", "class": "astro-J7PV25F6" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="w-full relative grow astro-J7PV25F6">
		${renderComponent($$result2, "Intro", $$Intro, { "class": "astro-J7PV25F6" })}
		<div id="cont" class="flex flex-col mt-20 mx-20 min-h-screen astro-J7PV25F6">
			<h1 class="self-start text-red-400 glitch astro-J7PV25F6">Here youll' find a few goodies</h1>
			<h2 class="astro-J7PV25F6">Made with different styles and techniques </h2>
			<p class="astro-J7PV25F6">As it's built with 
				<a href="https://astro.build/" target="_blank" class="astro-J7PV25F6">Astro</a>
				and you can literally throw almost <em class="text-2xl astro-J7PV25F6"> Whatever</em> at it !
			</p>

			${renderComponent($$result2, "MetaFrameworks", $$MetaFrameworks, { "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "TheAstroFramework", $$TheAstroFramework, { "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "Animations", $$Animations, { "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "WebComponents", $$WebComponents, { "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "Testing", $$Testing, { "class": "astro-J7PV25F6" })}	
		</div>
		<footer class="w-screen mt-8 border-solid border-2 border-black border-t-2 border-t-red-400 astro-J7PV25F6">
			<img id="feets" class="h-[24rem] object-cover w-full img astro-J7PV25F6" loading="lazy" src="./Peter-Boyle-Feet-4902348.webp" alt="Frank jr">
		</footer>
	</main>` })}
`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/index.astro");

const $$file$2 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/index.astro";
const $$url$2 = "";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$2,
	prerender: prerender$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://wc-lit-playground.netlify.app/");
const prerender$1 = true;
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { slug } = Astro2.params;
  const content = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../markdown/testing/intro.md": () => import('./intro.bc44a5af.mjs')}), () => "../../markdown/testing/intro.md");
  const post = content[0];
  return renderTemplate(_a || (_a = __template(["", "\n<script async>\n    const h2 = document.querySelector('main h2')\n    h2.classList.add('glitched')\n    h2.setAttribute('title', h1.textContent)\n    Array.from(document.querySelectorAll('main h3'))\n    .forEach(h3 => {\n        h3.classList.add('glitched')\n        h3.setAttribute('title', h3.textContent)\n    })\n<\/script>"])), renderComponent($$result, "Layout", $$Layout, { "title": slug }, { "aside": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<aside class="mt-24 grow">
        ${renderComponent($$result2, "TestingNavigation", $$TestingNavigation, {})}
    </aside>`, "main": ($$result2) => renderTemplate`<main class="max-w-4xl relative grow pt-20">
        ${renderComponent($$result2, "post.Content", post.Content, {})}
	</main>` }));
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/testing/index.astro");

const $$file$1 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/testing/index.astro";
const $$url$1 = "/testing";

const _page8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	prerender: prerender$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://wc-lit-playground.netlify.app/");
const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../markdown/lit.md": () => import('./lit.c8f066d4.mjs')}), () => "../../markdown/lit.md");
  let post = posts[0];
  let markdownUseless = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../markdown/useless-button.md": () => import('./useless-button.c54f2f95.mjs')}), () => "../../markdown/useless-button.md");
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

const $$file = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/index.astro";
const $$url = "/lit";

const _page16 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page1 as _, _page8 as a, _page16 as b };
