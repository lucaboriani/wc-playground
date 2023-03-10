import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { defineComponent, h, createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import React, { createElement } from 'react';
import ReactDOM from 'react-dom/server';
import _renderer1 from '@astrojs/lit/server.js';
import { s as server_default, g as deserializeManifest } from './chunks/astro.c04cadd7.mjs';
import { _ as _page0, a as _page1, b as _page2, c as _page3, d as _page4, e as _page5, f as _page6, g as _page7, h as _page8, i as _page10, j as _page11, k as _page12 } from './chunks/pages/all.db6eedb4.mjs';
import { _ as _page9 } from './chunks/prerender.ec686c6b.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
/* empty css                                 *//* empty css                                 *//* empty css                                 *//* empty css                                */import 'axios';
import './chunks/index.38d8fdf6.bd50d6a8.mjs';
import 'react/jsx-runtime';
import 'stream/consumers';
import 'mongoose';
import '@lit/reactive-element';
import 'lit-html';
import 'lit-element/lit-element.js';
import 'lit-html/is-server.js';
/* empty css                                 *//* empty css                                     *//* empty css                                   */
const setup = () => {};

/**
 * Astro passes `children` as a string of HTML, so we need
 * a wrapper `div` to render that content as VNodes.
 *
 * This is the Vue + JSX equivalent of using `<div v-html="value" />`
 */
const StaticHtml$1 = defineComponent({
	props: {
		value: String,
		name: String,
	},
	setup({ name, value }) {
		if (!value) return () => null;
		return () => h('astro-slot', { name, innerHTML: value });
	},
});

function check$1(Component) {
	return !!Component['ssrRender'] || !!Component['__ssrInlineRender'];
}

async function renderToStaticMarkup$1(Component, props, slotted) {
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		slots[key] = () => h(StaticHtml$1, { value, name: key === 'default' ? undefined : key });
	}
	const app = createSSRApp({ render: () => h(Component, props, slots) });
	await setup();
	const html = await renderToString(app);
	return { html };
}

const _renderer3 = {
	check: check$1,
	renderToStaticMarkup: renderToStaticMarkup$1,
};

/**
 * Astro passes `children` as a string of HTML, so we need
 * a wrapper `div` to render that content as VNodes.
 *
 * As a bonus, we can signal to React that this subtree is
 * entirely static and will never change via `shouldComponentUpdate`.
 */
const StaticHtml = ({ value, name }) => {
	if (!value) return null;
	return createElement('astro-slot', {
		name,
		suppressHydrationWarning: true,
		dangerouslySetInnerHTML: { __html: value },
	});
};

/**
 * This tells React to opt-out of re-rendering this subtree,
 * In addition to being a performance optimization,
 * this also allows other frameworks to attach to `children`.
 *
 * See https://preactjs.com/guide/v8/external-dom-mutations
 */
StaticHtml.shouldComponentUpdate = () => false;

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
const reactTypeof = Symbol.for('react.element');

function errorIsComingFromPreactComponent(err) {
	return (
		err.message &&
		(err.message.startsWith("Cannot read property '__H'") ||
			err.message.includes("(reading '__H')"))
	);
}

async function check(Component, props, children) {
	// Note: there are packages that do some unholy things to create "components".
	// Checking the $$typeof property catches most of these patterns.
	if (typeof Component === 'object') {
		const $$typeof = Component['$$typeof'];
		return $$typeof && $$typeof.toString().slice('Symbol('.length).startsWith('react');
	}
	if (typeof Component !== 'function') return false;

	if (Component.prototype != null && typeof Component.prototype.render === 'function') {
		return React.Component.isPrototypeOf(Component) || React.PureComponent.isPrototypeOf(Component);
	}

	let error = null;
	let isReactComponent = false;
	function Tester(...args) {
		try {
			const vnode = Component(...args);
			if (vnode && vnode['$$typeof'] === reactTypeof) {
				isReactComponent = true;
			}
		} catch (err) {
			if (!errorIsComingFromPreactComponent(err)) {
				error = err;
			}
		}

		return React.createElement('div');
	}

	await renderToStaticMarkup(Tester, props, children, {});

	if (error) {
		throw error;
	}
	return isReactComponent;
}

async function getNodeWritable() {
	let nodeStreamBuiltinModuleName = 'stream';
	let { Writable } = await import(/* @vite-ignore */ nodeStreamBuiltinModuleName);
	return Writable;
}

async function renderToStaticMarkup(Component, props, { default: children, ...slotted }, metadata) {
	delete props['class'];
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		const name = slotName(key);
		slots[name] = React.createElement(StaticHtml, { value, name });
	}
	// Note: create newProps to avoid mutating `props` before they are serialized
	const newProps = {
		...props,
		...slots,
	};
	const newChildren = children ?? props.children;
	if (newChildren != null) {
		newProps.children = React.createElement(StaticHtml, { value: newChildren });
	}
	const vnode = React.createElement(Component, newProps);
	let html;
	if (metadata && metadata.hydrate) {
		if ('renderToReadableStream' in ReactDOM) {
			html = await renderToReadableStreamAsync(vnode);
		} else {
			html = await renderToPipeableStreamAsync(vnode);
		}
	} else {
		if ('renderToReadableStream' in ReactDOM) {
			html = await renderToReadableStreamAsync(vnode);
		} else {
			html = await renderToStaticNodeStreamAsync(vnode);
		}
	}
	return { html };
}

async function renderToPipeableStreamAsync(vnode) {
	const Writable = await getNodeWritable();
	let html = '';
	return new Promise((resolve, reject) => {
		let error = undefined;
		let stream = ReactDOM.renderToPipeableStream(vnode, {
			onError(err) {
				error = err;
				reject(error);
			},
			onAllReady() {
				stream.pipe(
					new Writable({
						write(chunk, _encoding, callback) {
							html += chunk.toString('utf-8');
							callback();
						},
						destroy() {
							resolve(html);
						},
					})
				);
			},
		});
	});
}

async function renderToStaticNodeStreamAsync(vnode) {
	const Writable = await getNodeWritable();
	let html = '';
	return new Promise((resolve, reject) => {
		let stream = ReactDOM.renderToStaticNodeStream(vnode);
		stream.on('error', (err) => {
			reject(err);
		});
		stream.pipe(
			new Writable({
				write(chunk, _encoding, callback) {
					html += chunk.toString('utf-8');
					callback();
				},
				destroy() {
					resolve(html);
				},
			})
		);
	});
}

/**
 * Use a while loop instead of "for await" due to cloudflare and Vercel Edge issues
 * See https://github.com/facebook/react/issues/24169
 */
async function readResult(stream) {
	const reader = stream.getReader();
	let result = '';
	const decoder = new TextDecoder('utf-8');
	while (true) {
		const { done, value } = await reader.read();
		if (done) {
			if (value) {
				result += decoder.decode(value);
			} else {
				// This closes the decoder
				decoder.decode(new Uint8Array());
			}

			return result;
		}
		result += decoder.decode(value, { stream: true });
	}
}

async function renderToReadableStreamAsync(vnode) {
	return await readResult(await ReactDOM.renderToReadableStream(vnode));
}

const _renderer2 = {
	check,
	renderToStaticMarkup,
};

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/spectrum.astro", _page1],["src/pages/planets/index.astro", _page2],["src/pages/planets/[id].astro", _page3],["src/pages/tasks/index.astro", _page4],["src/pages/api/planetsApi.js", _page5],["src/pages/api/tasks/tasks.json.js", _page6],["src/pages/api/tasks/[taskId].json.js", _page7],["src/pages/lit/index.astro", _page8],["src/pages/lit/composing-templates.astro", _page9],["src/pages/lit/lit-basic.astro", _page10],["src/pages/lit/lit-react.astro", _page11],["src/pages/lit/lit-vue.astro", _page12],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),Object.assign({"name":"@astrojs/lit","serverEntrypoint":"@astrojs/lit/server.js","clientEntrypoint":"@astrojs/lit/dist/client.js"}, { ssr: _renderer1 }),Object.assign({"name":"@astrojs/react","clientEntrypoint":"@astrojs/react/client.js","serverEntrypoint":"@astrojs/react/server.js","jsxImportSource":"react"}, { ssr: _renderer2 }),Object.assign({"name":"@astrojs/vue","clientEntrypoint":"@astrojs/vue/client.js","serverEntrypoint":"@astrojs/vue/server.js"}, { ssr: _renderer3 }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"lit/composing-templates/index.html","links":[],"scripts":[],"routeData":{"route":"/lit/composing-templates","type":"page","pattern":"^\\/lit\\/composing-templates\\/?$","segments":[[{"content":"lit","dynamic":false,"spread":false}],[{"content":"composing-templates","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/lit/composing-templates.astro","pathname":"/lit/composing-templates","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/index.fd5e4002.css","_astro/index.e9df5dfe.css"],"scripts":[{"type":"external","value":"_astro/hoisted.94e0feb6.js"},{"stage":"head-inline","children":"/** @license Copyright 2020 Google LLC (BSD-3-Clause) */\n/** Bundled JS generated from \"@astrojs/lit/client-shim.js\" */\nvar N = Object.defineProperty;\nvar i = (t, n) => () => (t && (n = t((t = 0))), n);\nvar b = (t, n) => {\n\tfor (var a in n) N(t, a, { get: n[a], enumerable: !0 });\n};\nfunction s() {\n\tif (d === void 0) {\n\t\tlet t = document.createElement('div');\n\t\t(t.innerHTML = '<div><template shadowroot=\"open\" shadowrootmode=\"open\"></template></div>'),\n\t\t\t(d = !!t.firstElementChild.shadowRoot);\n\t}\n\treturn d;\n}\nvar d,\n\tm = i(() => {});\nvar p,\n\tc,\n\tf,\n\tu = i(() => {\n\t\t(p = (t) => t.parentElement === null),\n\t\t\t(c = (t) => t.tagName === 'TEMPLATE'),\n\t\t\t(f = (t) => t.nodeType === Node.ELEMENT_NODE);\n\t});\nvar h,\n\tE = i(() => {\n\t\tm();\n\t\tu();\n\t\th = (t) => {\n\t\t\tvar n;\n\t\t\tif (s()) return;\n\t\t\tlet a = [],\n\t\t\t\te = t.firstElementChild;\n\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\tif (c(e)) a.push(e), (e = e.content);\n\t\t\t\telse if (e.firstElementChild !== null) e = e.firstElementChild;\n\t\t\t\telse if (f(e) && e.nextElementSibling !== null) e = e.nextElementSibling;\n\t\t\t\telse {\n\t\t\t\t\tlet o;\n\t\t\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\t\t\tif (p(e)) {\n\t\t\t\t\t\t\to = a.pop();\n\t\t\t\t\t\t\tlet r = o.parentElement,\n\t\t\t\t\t\t\t\tl = o.getAttribute('shadowroot');\n\t\t\t\t\t\t\tif (((e = o), l === 'open' || l === 'closed')) {\n\t\t\t\t\t\t\t\tlet y = o.hasAttribute('shadowrootdelegatesfocus');\n\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\tr.attachShadow({ mode: l, delegatesFocus: y }).append(o.content);\n\t\t\t\t\t\t\t\t} catch {}\n\t\t\t\t\t\t\t} else o = void 0;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tlet r = e.nextElementSibling;\n\t\t\t\t\t\t\tif (r != null) {\n\t\t\t\t\t\t\t\t(e = r), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tlet l =\n\t\t\t\t\t\t\t\t(n = e.parentElement) === null || n === void 0 ? void 0 : n.nextElementSibling;\n\t\t\t\t\t\t\tif (l != null) {\n\t\t\t\t\t\t\t\t(e = l), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t(e = e.parentElement), o !== void 0 && (o.parentElement.removeChild(o), (o = void 0));\n\t\t\t\t\t\t}\n\t\t\t\t}\n\t\t};\n\t});\nvar w = i(() => {\n\tE();\n});\nvar v = {};\nb(v, { hasNativeDeclarativeShadowRoots: () => s, hydrateShadowRoots: () => h });\nvar S = i(() => {\n\tm();\n\tw();\n});\nasync function g() {\n\tlet { hydrateShadowRoots: t } = await Promise.resolve().then(() => (S(), v));\n\twindow.addEventListener('DOMContentLoaded', () => t(document.body), { once: true });\n}\nvar x = new DOMParser()\n\t.parseFromString(\n\t\t'<p><template shadowroot=\"open\" shadowrootmode=\"open\"></template></p>',\n\t\t'text/html',\n\t\t{\n\t\t\tincludeShadowRoots: !0,\n\t\t}\n\t)\n\t.querySelector('p');\n(!x || !x.shadowRoot) && g();\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/index.fd5e4002.css"],"scripts":[{"type":"external","value":"_astro/hoisted.84831f1c.js"},{"stage":"head-inline","children":"/** @license Copyright 2020 Google LLC (BSD-3-Clause) */\n/** Bundled JS generated from \"@astrojs/lit/client-shim.js\" */\nvar N = Object.defineProperty;\nvar i = (t, n) => () => (t && (n = t((t = 0))), n);\nvar b = (t, n) => {\n\tfor (var a in n) N(t, a, { get: n[a], enumerable: !0 });\n};\nfunction s() {\n\tif (d === void 0) {\n\t\tlet t = document.createElement('div');\n\t\t(t.innerHTML = '<div><template shadowroot=\"open\" shadowrootmode=\"open\"></template></div>'),\n\t\t\t(d = !!t.firstElementChild.shadowRoot);\n\t}\n\treturn d;\n}\nvar d,\n\tm = i(() => {});\nvar p,\n\tc,\n\tf,\n\tu = i(() => {\n\t\t(p = (t) => t.parentElement === null),\n\t\t\t(c = (t) => t.tagName === 'TEMPLATE'),\n\t\t\t(f = (t) => t.nodeType === Node.ELEMENT_NODE);\n\t});\nvar h,\n\tE = i(() => {\n\t\tm();\n\t\tu();\n\t\th = (t) => {\n\t\t\tvar n;\n\t\t\tif (s()) return;\n\t\t\tlet a = [],\n\t\t\t\te = t.firstElementChild;\n\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\tif (c(e)) a.push(e), (e = e.content);\n\t\t\t\telse if (e.firstElementChild !== null) e = e.firstElementChild;\n\t\t\t\telse if (f(e) && e.nextElementSibling !== null) e = e.nextElementSibling;\n\t\t\t\telse {\n\t\t\t\t\tlet o;\n\t\t\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\t\t\tif (p(e)) {\n\t\t\t\t\t\t\to = a.pop();\n\t\t\t\t\t\t\tlet r = o.parentElement,\n\t\t\t\t\t\t\t\tl = o.getAttribute('shadowroot');\n\t\t\t\t\t\t\tif (((e = o), l === 'open' || l === 'closed')) {\n\t\t\t\t\t\t\t\tlet y = o.hasAttribute('shadowrootdelegatesfocus');\n\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\tr.attachShadow({ mode: l, delegatesFocus: y }).append(o.content);\n\t\t\t\t\t\t\t\t} catch {}\n\t\t\t\t\t\t\t} else o = void 0;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tlet r = e.nextElementSibling;\n\t\t\t\t\t\t\tif (r != null) {\n\t\t\t\t\t\t\t\t(e = r), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tlet l =\n\t\t\t\t\t\t\t\t(n = e.parentElement) === null || n === void 0 ? void 0 : n.nextElementSibling;\n\t\t\t\t\t\t\tif (l != null) {\n\t\t\t\t\t\t\t\t(e = l), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t(e = e.parentElement), o !== void 0 && (o.parentElement.removeChild(o), (o = void 0));\n\t\t\t\t\t\t}\n\t\t\t\t}\n\t\t};\n\t});\nvar w = i(() => {\n\tE();\n});\nvar v = {};\nb(v, { hasNativeDeclarativeShadowRoots: () => s, hydrateShadowRoots: () => h });\nvar S = i(() => {\n\tm();\n\tw();\n});\nasync function g() {\n\tlet { hydrateShadowRoots: t } = await Promise.resolve().then(() => (S(), v));\n\twindow.addEventListener('DOMContentLoaded', () => t(document.body), { once: true });\n}\nvar x = new DOMParser()\n\t.parseFromString(\n\t\t'<p><template shadowroot=\"open\" shadowrootmode=\"open\"></template></p>',\n\t\t'text/html',\n\t\t{\n\t\t\tincludeShadowRoots: !0,\n\t\t}\n\t)\n\t.querySelector('p');\n(!x || !x.shadowRoot) && g();\n"}],"routeData":{"route":"/spectrum","type":"page","pattern":"^\\/spectrum\\/?$","segments":[[{"content":"spectrum","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/spectrum.astro","pathname":"/spectrum","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/index.fd5e4002.css","_astro/index.288ce4c4.css"],"scripts":[{"type":"external","value":"_astro/hoisted.84831f1c.js"},{"stage":"head-inline","children":"/** @license Copyright 2020 Google LLC (BSD-3-Clause) */\n/** Bundled JS generated from \"@astrojs/lit/client-shim.js\" */\nvar N = Object.defineProperty;\nvar i = (t, n) => () => (t && (n = t((t = 0))), n);\nvar b = (t, n) => {\n\tfor (var a in n) N(t, a, { get: n[a], enumerable: !0 });\n};\nfunction s() {\n\tif (d === void 0) {\n\t\tlet t = document.createElement('div');\n\t\t(t.innerHTML = '<div><template shadowroot=\"open\" shadowrootmode=\"open\"></template></div>'),\n\t\t\t(d = !!t.firstElementChild.shadowRoot);\n\t}\n\treturn d;\n}\nvar d,\n\tm = i(() => {});\nvar p,\n\tc,\n\tf,\n\tu = i(() => {\n\t\t(p = (t) => t.parentElement === null),\n\t\t\t(c = (t) => t.tagName === 'TEMPLATE'),\n\t\t\t(f = (t) => t.nodeType === Node.ELEMENT_NODE);\n\t});\nvar h,\n\tE = i(() => {\n\t\tm();\n\t\tu();\n\t\th = (t) => {\n\t\t\tvar n;\n\t\t\tif (s()) return;\n\t\t\tlet a = [],\n\t\t\t\te = t.firstElementChild;\n\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\tif (c(e)) a.push(e), (e = e.content);\n\t\t\t\telse if (e.firstElementChild !== null) e = e.firstElementChild;\n\t\t\t\telse if (f(e) && e.nextElementSibling !== null) e = e.nextElementSibling;\n\t\t\t\telse {\n\t\t\t\t\tlet o;\n\t\t\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\t\t\tif (p(e)) {\n\t\t\t\t\t\t\to = a.pop();\n\t\t\t\t\t\t\tlet r = o.parentElement,\n\t\t\t\t\t\t\t\tl = o.getAttribute('shadowroot');\n\t\t\t\t\t\t\tif (((e = o), l === 'open' || l === 'closed')) {\n\t\t\t\t\t\t\t\tlet y = o.hasAttribute('shadowrootdelegatesfocus');\n\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\tr.attachShadow({ mode: l, delegatesFocus: y }).append(o.content);\n\t\t\t\t\t\t\t\t} catch {}\n\t\t\t\t\t\t\t} else o = void 0;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tlet r = e.nextElementSibling;\n\t\t\t\t\t\t\tif (r != null) {\n\t\t\t\t\t\t\t\t(e = r), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tlet l =\n\t\t\t\t\t\t\t\t(n = e.parentElement) === null || n === void 0 ? void 0 : n.nextElementSibling;\n\t\t\t\t\t\t\tif (l != null) {\n\t\t\t\t\t\t\t\t(e = l), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t(e = e.parentElement), o !== void 0 && (o.parentElement.removeChild(o), (o = void 0));\n\t\t\t\t\t\t}\n\t\t\t\t}\n\t\t};\n\t});\nvar w = i(() => {\n\tE();\n});\nvar v = {};\nb(v, { hasNativeDeclarativeShadowRoots: () => s, hydrateShadowRoots: () => h });\nvar S = i(() => {\n\tm();\n\tw();\n});\nasync function g() {\n\tlet { hydrateShadowRoots: t } = await Promise.resolve().then(() => (S(), v));\n\twindow.addEventListener('DOMContentLoaded', () => t(document.body), { once: true });\n}\nvar x = new DOMParser()\n\t.parseFromString(\n\t\t'<p><template shadowroot=\"open\" shadowrootmode=\"open\"></template></p>',\n\t\t'text/html',\n\t\t{\n\t\t\tincludeShadowRoots: !0,\n\t\t}\n\t)\n\t.querySelector('p');\n(!x || !x.shadowRoot) && g();\n"}],"routeData":{"route":"/planets","type":"page","pattern":"^\\/planets\\/?$","segments":[[{"content":"planets","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/planets/index.astro","pathname":"/planets","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/index.fd5e4002.css","_astro/_id_.54f21ee5.css"],"scripts":[{"type":"external","value":"_astro/hoisted.84831f1c.js"},{"stage":"head-inline","children":"/** @license Copyright 2020 Google LLC (BSD-3-Clause) */\n/** Bundled JS generated from \"@astrojs/lit/client-shim.js\" */\nvar N = Object.defineProperty;\nvar i = (t, n) => () => (t && (n = t((t = 0))), n);\nvar b = (t, n) => {\n\tfor (var a in n) N(t, a, { get: n[a], enumerable: !0 });\n};\nfunction s() {\n\tif (d === void 0) {\n\t\tlet t = document.createElement('div');\n\t\t(t.innerHTML = '<div><template shadowroot=\"open\" shadowrootmode=\"open\"></template></div>'),\n\t\t\t(d = !!t.firstElementChild.shadowRoot);\n\t}\n\treturn d;\n}\nvar d,\n\tm = i(() => {});\nvar p,\n\tc,\n\tf,\n\tu = i(() => {\n\t\t(p = (t) => t.parentElement === null),\n\t\t\t(c = (t) => t.tagName === 'TEMPLATE'),\n\t\t\t(f = (t) => t.nodeType === Node.ELEMENT_NODE);\n\t});\nvar h,\n\tE = i(() => {\n\t\tm();\n\t\tu();\n\t\th = (t) => {\n\t\t\tvar n;\n\t\t\tif (s()) return;\n\t\t\tlet a = [],\n\t\t\t\te = t.firstElementChild;\n\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\tif (c(e)) a.push(e), (e = e.content);\n\t\t\t\telse if (e.firstElementChild !== null) e = e.firstElementChild;\n\t\t\t\telse if (f(e) && e.nextElementSibling !== null) e = e.nextElementSibling;\n\t\t\t\telse {\n\t\t\t\t\tlet o;\n\t\t\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\t\t\tif (p(e)) {\n\t\t\t\t\t\t\to = a.pop();\n\t\t\t\t\t\t\tlet r = o.parentElement,\n\t\t\t\t\t\t\t\tl = o.getAttribute('shadowroot');\n\t\t\t\t\t\t\tif (((e = o), l === 'open' || l === 'closed')) {\n\t\t\t\t\t\t\t\tlet y = o.hasAttribute('shadowrootdelegatesfocus');\n\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\tr.attachShadow({ mode: l, delegatesFocus: y }).append(o.content);\n\t\t\t\t\t\t\t\t} catch {}\n\t\t\t\t\t\t\t} else o = void 0;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tlet r = e.nextElementSibling;\n\t\t\t\t\t\t\tif (r != null) {\n\t\t\t\t\t\t\t\t(e = r), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tlet l =\n\t\t\t\t\t\t\t\t(n = e.parentElement) === null || n === void 0 ? void 0 : n.nextElementSibling;\n\t\t\t\t\t\t\tif (l != null) {\n\t\t\t\t\t\t\t\t(e = l), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t(e = e.parentElement), o !== void 0 && (o.parentElement.removeChild(o), (o = void 0));\n\t\t\t\t\t\t}\n\t\t\t\t}\n\t\t};\n\t});\nvar w = i(() => {\n\tE();\n});\nvar v = {};\nb(v, { hasNativeDeclarativeShadowRoots: () => s, hydrateShadowRoots: () => h });\nvar S = i(() => {\n\tm();\n\tw();\n});\nasync function g() {\n\tlet { hydrateShadowRoots: t } = await Promise.resolve().then(() => (S(), v));\n\twindow.addEventListener('DOMContentLoaded', () => t(document.body), { once: true });\n}\nvar x = new DOMParser()\n\t.parseFromString(\n\t\t'<p><template shadowroot=\"open\" shadowrootmode=\"open\"></template></p>',\n\t\t'text/html',\n\t\t{\n\t\t\tincludeShadowRoots: !0,\n\t\t}\n\t)\n\t.querySelector('p');\n(!x || !x.shadowRoot) && g();\n"}],"routeData":{"route":"/planets/[id]","type":"page","pattern":"^\\/planets\\/([^/]+?)\\/?$","segments":[[{"content":"planets","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/planets/[id].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/index.fd5e4002.css","_astro/index.95b18a08.css"],"scripts":[{"type":"external","value":"_astro/hoisted.84831f1c.js"},{"stage":"head-inline","children":"/** @license Copyright 2020 Google LLC (BSD-3-Clause) */\n/** Bundled JS generated from \"@astrojs/lit/client-shim.js\" */\nvar N = Object.defineProperty;\nvar i = (t, n) => () => (t && (n = t((t = 0))), n);\nvar b = (t, n) => {\n\tfor (var a in n) N(t, a, { get: n[a], enumerable: !0 });\n};\nfunction s() {\n\tif (d === void 0) {\n\t\tlet t = document.createElement('div');\n\t\t(t.innerHTML = '<div><template shadowroot=\"open\" shadowrootmode=\"open\"></template></div>'),\n\t\t\t(d = !!t.firstElementChild.shadowRoot);\n\t}\n\treturn d;\n}\nvar d,\n\tm = i(() => {});\nvar p,\n\tc,\n\tf,\n\tu = i(() => {\n\t\t(p = (t) => t.parentElement === null),\n\t\t\t(c = (t) => t.tagName === 'TEMPLATE'),\n\t\t\t(f = (t) => t.nodeType === Node.ELEMENT_NODE);\n\t});\nvar h,\n\tE = i(() => {\n\t\tm();\n\t\tu();\n\t\th = (t) => {\n\t\t\tvar n;\n\t\t\tif (s()) return;\n\t\t\tlet a = [],\n\t\t\t\te = t.firstElementChild;\n\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\tif (c(e)) a.push(e), (e = e.content);\n\t\t\t\telse if (e.firstElementChild !== null) e = e.firstElementChild;\n\t\t\t\telse if (f(e) && e.nextElementSibling !== null) e = e.nextElementSibling;\n\t\t\t\telse {\n\t\t\t\t\tlet o;\n\t\t\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\t\t\tif (p(e)) {\n\t\t\t\t\t\t\to = a.pop();\n\t\t\t\t\t\t\tlet r = o.parentElement,\n\t\t\t\t\t\t\t\tl = o.getAttribute('shadowroot');\n\t\t\t\t\t\t\tif (((e = o), l === 'open' || l === 'closed')) {\n\t\t\t\t\t\t\t\tlet y = o.hasAttribute('shadowrootdelegatesfocus');\n\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\tr.attachShadow({ mode: l, delegatesFocus: y }).append(o.content);\n\t\t\t\t\t\t\t\t} catch {}\n\t\t\t\t\t\t\t} else o = void 0;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tlet r = e.nextElementSibling;\n\t\t\t\t\t\t\tif (r != null) {\n\t\t\t\t\t\t\t\t(e = r), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tlet l =\n\t\t\t\t\t\t\t\t(n = e.parentElement) === null || n === void 0 ? void 0 : n.nextElementSibling;\n\t\t\t\t\t\t\tif (l != null) {\n\t\t\t\t\t\t\t\t(e = l), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t(e = e.parentElement), o !== void 0 && (o.parentElement.removeChild(o), (o = void 0));\n\t\t\t\t\t\t}\n\t\t\t\t}\n\t\t};\n\t});\nvar w = i(() => {\n\tE();\n});\nvar v = {};\nb(v, { hasNativeDeclarativeShadowRoots: () => s, hydrateShadowRoots: () => h });\nvar S = i(() => {\n\tm();\n\tw();\n});\nasync function g() {\n\tlet { hydrateShadowRoots: t } = await Promise.resolve().then(() => (S(), v));\n\twindow.addEventListener('DOMContentLoaded', () => t(document.body), { once: true });\n}\nvar x = new DOMParser()\n\t.parseFromString(\n\t\t'<p><template shadowroot=\"open\" shadowrootmode=\"open\"></template></p>',\n\t\t'text/html',\n\t\t{\n\t\t\tincludeShadowRoots: !0,\n\t\t}\n\t)\n\t.querySelector('p');\n(!x || !x.shadowRoot) && g();\n"}],"routeData":{"route":"/tasks","type":"page","pattern":"^\\/tasks\\/?$","segments":[[{"content":"tasks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tasks/index.astro","pathname":"/tasks","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"/** @license Copyright 2020 Google LLC (BSD-3-Clause) */\n/** Bundled JS generated from \"@astrojs/lit/client-shim.js\" */\nvar N = Object.defineProperty;\nvar i = (t, n) => () => (t && (n = t((t = 0))), n);\nvar b = (t, n) => {\n\tfor (var a in n) N(t, a, { get: n[a], enumerable: !0 });\n};\nfunction s() {\n\tif (d === void 0) {\n\t\tlet t = document.createElement('div');\n\t\t(t.innerHTML = '<div><template shadowroot=\"open\" shadowrootmode=\"open\"></template></div>'),\n\t\t\t(d = !!t.firstElementChild.shadowRoot);\n\t}\n\treturn d;\n}\nvar d,\n\tm = i(() => {});\nvar p,\n\tc,\n\tf,\n\tu = i(() => {\n\t\t(p = (t) => t.parentElement === null),\n\t\t\t(c = (t) => t.tagName === 'TEMPLATE'),\n\t\t\t(f = (t) => t.nodeType === Node.ELEMENT_NODE);\n\t});\nvar h,\n\tE = i(() => {\n\t\tm();\n\t\tu();\n\t\th = (t) => {\n\t\t\tvar n;\n\t\t\tif (s()) return;\n\t\t\tlet a = [],\n\t\t\t\te = t.firstElementChild;\n\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\tif (c(e)) a.push(e), (e = e.content);\n\t\t\t\telse if (e.firstElementChild !== null) e = e.firstElementChild;\n\t\t\t\telse if (f(e) && e.nextElementSibling !== null) e = e.nextElementSibling;\n\t\t\t\telse {\n\t\t\t\t\tlet o;\n\t\t\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\t\t\tif (p(e)) {\n\t\t\t\t\t\t\to = a.pop();\n\t\t\t\t\t\t\tlet r = o.parentElement,\n\t\t\t\t\t\t\t\tl = o.getAttribute('shadowroot');\n\t\t\t\t\t\t\tif (((e = o), l === 'open' || l === 'closed')) {\n\t\t\t\t\t\t\t\tlet y = o.hasAttribute('shadowrootdelegatesfocus');\n\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\tr.attachShadow({ mode: l, delegatesFocus: y }).append(o.content);\n\t\t\t\t\t\t\t\t} catch {}\n\t\t\t\t\t\t\t} else o = void 0;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tlet r = e.nextElementSibling;\n\t\t\t\t\t\t\tif (r != null) {\n\t\t\t\t\t\t\t\t(e = r), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tlet l =\n\t\t\t\t\t\t\t\t(n = e.parentElement) === null || n === void 0 ? void 0 : n.nextElementSibling;\n\t\t\t\t\t\t\tif (l != null) {\n\t\t\t\t\t\t\t\t(e = l), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t(e = e.parentElement), o !== void 0 && (o.parentElement.removeChild(o), (o = void 0));\n\t\t\t\t\t\t}\n\t\t\t\t}\n\t\t};\n\t});\nvar w = i(() => {\n\tE();\n});\nvar v = {};\nb(v, { hasNativeDeclarativeShadowRoots: () => s, hydrateShadowRoots: () => h });\nvar S = i(() => {\n\tm();\n\tw();\n});\nasync function g() {\n\tlet { hydrateShadowRoots: t } = await Promise.resolve().then(() => (S(), v));\n\twindow.addEventListener('DOMContentLoaded', () => t(document.body), { once: true });\n}\nvar x = new DOMParser()\n\t.parseFromString(\n\t\t'<p><template shadowroot=\"open\" shadowrootmode=\"open\"></template></p>',\n\t\t'text/html',\n\t\t{\n\t\t\tincludeShadowRoots: !0,\n\t\t}\n\t)\n\t.querySelector('p');\n(!x || !x.shadowRoot) && g();\n"}],"routeData":{"route":"/api/planetsapi","type":"endpoint","pattern":"^\\/api\\/planetsApi$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"planetsApi","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/planetsApi.js","pathname":"/api/planetsApi","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"/** @license Copyright 2020 Google LLC (BSD-3-Clause) */\n/** Bundled JS generated from \"@astrojs/lit/client-shim.js\" */\nvar N = Object.defineProperty;\nvar i = (t, n) => () => (t && (n = t((t = 0))), n);\nvar b = (t, n) => {\n\tfor (var a in n) N(t, a, { get: n[a], enumerable: !0 });\n};\nfunction s() {\n\tif (d === void 0) {\n\t\tlet t = document.createElement('div');\n\t\t(t.innerHTML = '<div><template shadowroot=\"open\" shadowrootmode=\"open\"></template></div>'),\n\t\t\t(d = !!t.firstElementChild.shadowRoot);\n\t}\n\treturn d;\n}\nvar d,\n\tm = i(() => {});\nvar p,\n\tc,\n\tf,\n\tu = i(() => {\n\t\t(p = (t) => t.parentElement === null),\n\t\t\t(c = (t) => t.tagName === 'TEMPLATE'),\n\t\t\t(f = (t) => t.nodeType === Node.ELEMENT_NODE);\n\t});\nvar h,\n\tE = i(() => {\n\t\tm();\n\t\tu();\n\t\th = (t) => {\n\t\t\tvar n;\n\t\t\tif (s()) return;\n\t\t\tlet a = [],\n\t\t\t\te = t.firstElementChild;\n\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\tif (c(e)) a.push(e), (e = e.content);\n\t\t\t\telse if (e.firstElementChild !== null) e = e.firstElementChild;\n\t\t\t\telse if (f(e) && e.nextElementSibling !== null) e = e.nextElementSibling;\n\t\t\t\telse {\n\t\t\t\t\tlet o;\n\t\t\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\t\t\tif (p(e)) {\n\t\t\t\t\t\t\to = a.pop();\n\t\t\t\t\t\t\tlet r = o.parentElement,\n\t\t\t\t\t\t\t\tl = o.getAttribute('shadowroot');\n\t\t\t\t\t\t\tif (((e = o), l === 'open' || l === 'closed')) {\n\t\t\t\t\t\t\t\tlet y = o.hasAttribute('shadowrootdelegatesfocus');\n\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\tr.attachShadow({ mode: l, delegatesFocus: y }).append(o.content);\n\t\t\t\t\t\t\t\t} catch {}\n\t\t\t\t\t\t\t} else o = void 0;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tlet r = e.nextElementSibling;\n\t\t\t\t\t\t\tif (r != null) {\n\t\t\t\t\t\t\t\t(e = r), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tlet l =\n\t\t\t\t\t\t\t\t(n = e.parentElement) === null || n === void 0 ? void 0 : n.nextElementSibling;\n\t\t\t\t\t\t\tif (l != null) {\n\t\t\t\t\t\t\t\t(e = l), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t(e = e.parentElement), o !== void 0 && (o.parentElement.removeChild(o), (o = void 0));\n\t\t\t\t\t\t}\n\t\t\t\t}\n\t\t};\n\t});\nvar w = i(() => {\n\tE();\n});\nvar v = {};\nb(v, { hasNativeDeclarativeShadowRoots: () => s, hydrateShadowRoots: () => h });\nvar S = i(() => {\n\tm();\n\tw();\n});\nasync function g() {\n\tlet { hydrateShadowRoots: t } = await Promise.resolve().then(() => (S(), v));\n\twindow.addEventListener('DOMContentLoaded', () => t(document.body), { once: true });\n}\nvar x = new DOMParser()\n\t.parseFromString(\n\t\t'<p><template shadowroot=\"open\" shadowrootmode=\"open\"></template></p>',\n\t\t'text/html',\n\t\t{\n\t\t\tincludeShadowRoots: !0,\n\t\t}\n\t)\n\t.querySelector('p');\n(!x || !x.shadowRoot) && g();\n"}],"routeData":{"route":"/api/tasks/tasks.json","type":"endpoint","pattern":"^\\/api\\/tasks\\/tasks\\.json$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"tasks","dynamic":false,"spread":false}],[{"content":"tasks.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/tasks/tasks.json.js","pathname":"/api/tasks/tasks.json","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"/** @license Copyright 2020 Google LLC (BSD-3-Clause) */\n/** Bundled JS generated from \"@astrojs/lit/client-shim.js\" */\nvar N = Object.defineProperty;\nvar i = (t, n) => () => (t && (n = t((t = 0))), n);\nvar b = (t, n) => {\n\tfor (var a in n) N(t, a, { get: n[a], enumerable: !0 });\n};\nfunction s() {\n\tif (d === void 0) {\n\t\tlet t = document.createElement('div');\n\t\t(t.innerHTML = '<div><template shadowroot=\"open\" shadowrootmode=\"open\"></template></div>'),\n\t\t\t(d = !!t.firstElementChild.shadowRoot);\n\t}\n\treturn d;\n}\nvar d,\n\tm = i(() => {});\nvar p,\n\tc,\n\tf,\n\tu = i(() => {\n\t\t(p = (t) => t.parentElement === null),\n\t\t\t(c = (t) => t.tagName === 'TEMPLATE'),\n\t\t\t(f = (t) => t.nodeType === Node.ELEMENT_NODE);\n\t});\nvar h,\n\tE = i(() => {\n\t\tm();\n\t\tu();\n\t\th = (t) => {\n\t\t\tvar n;\n\t\t\tif (s()) return;\n\t\t\tlet a = [],\n\t\t\t\te = t.firstElementChild;\n\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\tif (c(e)) a.push(e), (e = e.content);\n\t\t\t\telse if (e.firstElementChild !== null) e = e.firstElementChild;\n\t\t\t\telse if (f(e) && e.nextElementSibling !== null) e = e.nextElementSibling;\n\t\t\t\telse {\n\t\t\t\t\tlet o;\n\t\t\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\t\t\tif (p(e)) {\n\t\t\t\t\t\t\to = a.pop();\n\t\t\t\t\t\t\tlet r = o.parentElement,\n\t\t\t\t\t\t\t\tl = o.getAttribute('shadowroot');\n\t\t\t\t\t\t\tif (((e = o), l === 'open' || l === 'closed')) {\n\t\t\t\t\t\t\t\tlet y = o.hasAttribute('shadowrootdelegatesfocus');\n\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\tr.attachShadow({ mode: l, delegatesFocus: y }).append(o.content);\n\t\t\t\t\t\t\t\t} catch {}\n\t\t\t\t\t\t\t} else o = void 0;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tlet r = e.nextElementSibling;\n\t\t\t\t\t\t\tif (r != null) {\n\t\t\t\t\t\t\t\t(e = r), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tlet l =\n\t\t\t\t\t\t\t\t(n = e.parentElement) === null || n === void 0 ? void 0 : n.nextElementSibling;\n\t\t\t\t\t\t\tif (l != null) {\n\t\t\t\t\t\t\t\t(e = l), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t(e = e.parentElement), o !== void 0 && (o.parentElement.removeChild(o), (o = void 0));\n\t\t\t\t\t\t}\n\t\t\t\t}\n\t\t};\n\t});\nvar w = i(() => {\n\tE();\n});\nvar v = {};\nb(v, { hasNativeDeclarativeShadowRoots: () => s, hydrateShadowRoots: () => h });\nvar S = i(() => {\n\tm();\n\tw();\n});\nasync function g() {\n\tlet { hydrateShadowRoots: t } = await Promise.resolve().then(() => (S(), v));\n\twindow.addEventListener('DOMContentLoaded', () => t(document.body), { once: true });\n}\nvar x = new DOMParser()\n\t.parseFromString(\n\t\t'<p><template shadowroot=\"open\" shadowrootmode=\"open\"></template></p>',\n\t\t'text/html',\n\t\t{\n\t\t\tincludeShadowRoots: !0,\n\t\t}\n\t)\n\t.querySelector('p');\n(!x || !x.shadowRoot) && g();\n"}],"routeData":{"route":"/api/tasks/[taskid]","type":"endpoint","pattern":"^\\/api\\/tasks\\/([^/]+?)\\.json$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"tasks","dynamic":false,"spread":false}],[{"content":"taskId","dynamic":true,"spread":false},{"content":".json","dynamic":false,"spread":false}]],"params":["taskId"],"component":"src/pages/api/tasks/[taskId].json.js","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/index.fd5e4002.css","_astro/index.e9954ef8.css"],"scripts":[{"type":"external","value":"_astro/hoisted.84831f1c.js"},{"stage":"head-inline","children":"/** @license Copyright 2020 Google LLC (BSD-3-Clause) */\n/** Bundled JS generated from \"@astrojs/lit/client-shim.js\" */\nvar N = Object.defineProperty;\nvar i = (t, n) => () => (t && (n = t((t = 0))), n);\nvar b = (t, n) => {\n\tfor (var a in n) N(t, a, { get: n[a], enumerable: !0 });\n};\nfunction s() {\n\tif (d === void 0) {\n\t\tlet t = document.createElement('div');\n\t\t(t.innerHTML = '<div><template shadowroot=\"open\" shadowrootmode=\"open\"></template></div>'),\n\t\t\t(d = !!t.firstElementChild.shadowRoot);\n\t}\n\treturn d;\n}\nvar d,\n\tm = i(() => {});\nvar p,\n\tc,\n\tf,\n\tu = i(() => {\n\t\t(p = (t) => t.parentElement === null),\n\t\t\t(c = (t) => t.tagName === 'TEMPLATE'),\n\t\t\t(f = (t) => t.nodeType === Node.ELEMENT_NODE);\n\t});\nvar h,\n\tE = i(() => {\n\t\tm();\n\t\tu();\n\t\th = (t) => {\n\t\t\tvar n;\n\t\t\tif (s()) return;\n\t\t\tlet a = [],\n\t\t\t\te = t.firstElementChild;\n\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\tif (c(e)) a.push(e), (e = e.content);\n\t\t\t\telse if (e.firstElementChild !== null) e = e.firstElementChild;\n\t\t\t\telse if (f(e) && e.nextElementSibling !== null) e = e.nextElementSibling;\n\t\t\t\telse {\n\t\t\t\t\tlet o;\n\t\t\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\t\t\tif (p(e)) {\n\t\t\t\t\t\t\to = a.pop();\n\t\t\t\t\t\t\tlet r = o.parentElement,\n\t\t\t\t\t\t\t\tl = o.getAttribute('shadowroot');\n\t\t\t\t\t\t\tif (((e = o), l === 'open' || l === 'closed')) {\n\t\t\t\t\t\t\t\tlet y = o.hasAttribute('shadowrootdelegatesfocus');\n\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\tr.attachShadow({ mode: l, delegatesFocus: y }).append(o.content);\n\t\t\t\t\t\t\t\t} catch {}\n\t\t\t\t\t\t\t} else o = void 0;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tlet r = e.nextElementSibling;\n\t\t\t\t\t\t\tif (r != null) {\n\t\t\t\t\t\t\t\t(e = r), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tlet l =\n\t\t\t\t\t\t\t\t(n = e.parentElement) === null || n === void 0 ? void 0 : n.nextElementSibling;\n\t\t\t\t\t\t\tif (l != null) {\n\t\t\t\t\t\t\t\t(e = l), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t(e = e.parentElement), o !== void 0 && (o.parentElement.removeChild(o), (o = void 0));\n\t\t\t\t\t\t}\n\t\t\t\t}\n\t\t};\n\t});\nvar w = i(() => {\n\tE();\n});\nvar v = {};\nb(v, { hasNativeDeclarativeShadowRoots: () => s, hydrateShadowRoots: () => h });\nvar S = i(() => {\n\tm();\n\tw();\n});\nasync function g() {\n\tlet { hydrateShadowRoots: t } = await Promise.resolve().then(() => (S(), v));\n\twindow.addEventListener('DOMContentLoaded', () => t(document.body), { once: true });\n}\nvar x = new DOMParser()\n\t.parseFromString(\n\t\t'<p><template shadowroot=\"open\" shadowrootmode=\"open\"></template></p>',\n\t\t'text/html',\n\t\t{\n\t\t\tincludeShadowRoots: !0,\n\t\t}\n\t)\n\t.querySelector('p');\n(!x || !x.shadowRoot) && g();\n"}],"routeData":{"route":"/lit","type":"page","pattern":"^\\/lit\\/?$","segments":[[{"content":"lit","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/lit/index.astro","pathname":"/lit","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/index.fd5e4002.css"],"scripts":[{"type":"external","value":"_astro/hoisted.84831f1c.js"},{"stage":"head-inline","children":"/** @license Copyright 2020 Google LLC (BSD-3-Clause) */\n/** Bundled JS generated from \"@astrojs/lit/client-shim.js\" */\nvar N = Object.defineProperty;\nvar i = (t, n) => () => (t && (n = t((t = 0))), n);\nvar b = (t, n) => {\n\tfor (var a in n) N(t, a, { get: n[a], enumerable: !0 });\n};\nfunction s() {\n\tif (d === void 0) {\n\t\tlet t = document.createElement('div');\n\t\t(t.innerHTML = '<div><template shadowroot=\"open\" shadowrootmode=\"open\"></template></div>'),\n\t\t\t(d = !!t.firstElementChild.shadowRoot);\n\t}\n\treturn d;\n}\nvar d,\n\tm = i(() => {});\nvar p,\n\tc,\n\tf,\n\tu = i(() => {\n\t\t(p = (t) => t.parentElement === null),\n\t\t\t(c = (t) => t.tagName === 'TEMPLATE'),\n\t\t\t(f = (t) => t.nodeType === Node.ELEMENT_NODE);\n\t});\nvar h,\n\tE = i(() => {\n\t\tm();\n\t\tu();\n\t\th = (t) => {\n\t\t\tvar n;\n\t\t\tif (s()) return;\n\t\t\tlet a = [],\n\t\t\t\te = t.firstElementChild;\n\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\tif (c(e)) a.push(e), (e = e.content);\n\t\t\t\telse if (e.firstElementChild !== null) e = e.firstElementChild;\n\t\t\t\telse if (f(e) && e.nextElementSibling !== null) e = e.nextElementSibling;\n\t\t\t\telse {\n\t\t\t\t\tlet o;\n\t\t\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\t\t\tif (p(e)) {\n\t\t\t\t\t\t\to = a.pop();\n\t\t\t\t\t\t\tlet r = o.parentElement,\n\t\t\t\t\t\t\t\tl = o.getAttribute('shadowroot');\n\t\t\t\t\t\t\tif (((e = o), l === 'open' || l === 'closed')) {\n\t\t\t\t\t\t\t\tlet y = o.hasAttribute('shadowrootdelegatesfocus');\n\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\tr.attachShadow({ mode: l, delegatesFocus: y }).append(o.content);\n\t\t\t\t\t\t\t\t} catch {}\n\t\t\t\t\t\t\t} else o = void 0;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tlet r = e.nextElementSibling;\n\t\t\t\t\t\t\tif (r != null) {\n\t\t\t\t\t\t\t\t(e = r), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tlet l =\n\t\t\t\t\t\t\t\t(n = e.parentElement) === null || n === void 0 ? void 0 : n.nextElementSibling;\n\t\t\t\t\t\t\tif (l != null) {\n\t\t\t\t\t\t\t\t(e = l), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t(e = e.parentElement), o !== void 0 && (o.parentElement.removeChild(o), (o = void 0));\n\t\t\t\t\t\t}\n\t\t\t\t}\n\t\t};\n\t});\nvar w = i(() => {\n\tE();\n});\nvar v = {};\nb(v, { hasNativeDeclarativeShadowRoots: () => s, hydrateShadowRoots: () => h });\nvar S = i(() => {\n\tm();\n\tw();\n});\nasync function g() {\n\tlet { hydrateShadowRoots: t } = await Promise.resolve().then(() => (S(), v));\n\twindow.addEventListener('DOMContentLoaded', () => t(document.body), { once: true });\n}\nvar x = new DOMParser()\n\t.parseFromString(\n\t\t'<p><template shadowroot=\"open\" shadowrootmode=\"open\"></template></p>',\n\t\t'text/html',\n\t\t{\n\t\t\tincludeShadowRoots: !0,\n\t\t}\n\t)\n\t.querySelector('p');\n(!x || !x.shadowRoot) && g();\n"}],"routeData":{"route":"/lit/lit-basic","type":"page","pattern":"^\\/lit\\/lit-basic\\/?$","segments":[[{"content":"lit","dynamic":false,"spread":false}],[{"content":"lit-basic","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/lit/lit-basic.astro","pathname":"/lit/lit-basic","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/index.fd5e4002.css","_astro/lit-react.c2ffbec1.css"],"scripts":[{"type":"external","value":"_astro/hoisted.84831f1c.js"},{"stage":"head-inline","children":"/** @license Copyright 2020 Google LLC (BSD-3-Clause) */\n/** Bundled JS generated from \"@astrojs/lit/client-shim.js\" */\nvar N = Object.defineProperty;\nvar i = (t, n) => () => (t && (n = t((t = 0))), n);\nvar b = (t, n) => {\n\tfor (var a in n) N(t, a, { get: n[a], enumerable: !0 });\n};\nfunction s() {\n\tif (d === void 0) {\n\t\tlet t = document.createElement('div');\n\t\t(t.innerHTML = '<div><template shadowroot=\"open\" shadowrootmode=\"open\"></template></div>'),\n\t\t\t(d = !!t.firstElementChild.shadowRoot);\n\t}\n\treturn d;\n}\nvar d,\n\tm = i(() => {});\nvar p,\n\tc,\n\tf,\n\tu = i(() => {\n\t\t(p = (t) => t.parentElement === null),\n\t\t\t(c = (t) => t.tagName === 'TEMPLATE'),\n\t\t\t(f = (t) => t.nodeType === Node.ELEMENT_NODE);\n\t});\nvar h,\n\tE = i(() => {\n\t\tm();\n\t\tu();\n\t\th = (t) => {\n\t\t\tvar n;\n\t\t\tif (s()) return;\n\t\t\tlet a = [],\n\t\t\t\te = t.firstElementChild;\n\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\tif (c(e)) a.push(e), (e = e.content);\n\t\t\t\telse if (e.firstElementChild !== null) e = e.firstElementChild;\n\t\t\t\telse if (f(e) && e.nextElementSibling !== null) e = e.nextElementSibling;\n\t\t\t\telse {\n\t\t\t\t\tlet o;\n\t\t\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\t\t\tif (p(e)) {\n\t\t\t\t\t\t\to = a.pop();\n\t\t\t\t\t\t\tlet r = o.parentElement,\n\t\t\t\t\t\t\t\tl = o.getAttribute('shadowroot');\n\t\t\t\t\t\t\tif (((e = o), l === 'open' || l === 'closed')) {\n\t\t\t\t\t\t\t\tlet y = o.hasAttribute('shadowrootdelegatesfocus');\n\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\tr.attachShadow({ mode: l, delegatesFocus: y }).append(o.content);\n\t\t\t\t\t\t\t\t} catch {}\n\t\t\t\t\t\t\t} else o = void 0;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tlet r = e.nextElementSibling;\n\t\t\t\t\t\t\tif (r != null) {\n\t\t\t\t\t\t\t\t(e = r), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tlet l =\n\t\t\t\t\t\t\t\t(n = e.parentElement) === null || n === void 0 ? void 0 : n.nextElementSibling;\n\t\t\t\t\t\t\tif (l != null) {\n\t\t\t\t\t\t\t\t(e = l), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t(e = e.parentElement), o !== void 0 && (o.parentElement.removeChild(o), (o = void 0));\n\t\t\t\t\t\t}\n\t\t\t\t}\n\t\t};\n\t});\nvar w = i(() => {\n\tE();\n});\nvar v = {};\nb(v, { hasNativeDeclarativeShadowRoots: () => s, hydrateShadowRoots: () => h });\nvar S = i(() => {\n\tm();\n\tw();\n});\nasync function g() {\n\tlet { hydrateShadowRoots: t } = await Promise.resolve().then(() => (S(), v));\n\twindow.addEventListener('DOMContentLoaded', () => t(document.body), { once: true });\n}\nvar x = new DOMParser()\n\t.parseFromString(\n\t\t'<p><template shadowroot=\"open\" shadowrootmode=\"open\"></template></p>',\n\t\t'text/html',\n\t\t{\n\t\t\tincludeShadowRoots: !0,\n\t\t}\n\t)\n\t.querySelector('p');\n(!x || !x.shadowRoot) && g();\n"}],"routeData":{"route":"/lit/lit-react","type":"page","pattern":"^\\/lit\\/lit-react\\/?$","segments":[[{"content":"lit","dynamic":false,"spread":false}],[{"content":"lit-react","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/lit/lit-react.astro","pathname":"/lit/lit-react","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/index.fd5e4002.css","_astro/lit-vue.baa9df2f.css"],"scripts":[{"type":"external","value":"_astro/hoisted.cf9af221.js"},{"stage":"head-inline","children":"/** @license Copyright 2020 Google LLC (BSD-3-Clause) */\n/** Bundled JS generated from \"@astrojs/lit/client-shim.js\" */\nvar N = Object.defineProperty;\nvar i = (t, n) => () => (t && (n = t((t = 0))), n);\nvar b = (t, n) => {\n\tfor (var a in n) N(t, a, { get: n[a], enumerable: !0 });\n};\nfunction s() {\n\tif (d === void 0) {\n\t\tlet t = document.createElement('div');\n\t\t(t.innerHTML = '<div><template shadowroot=\"open\" shadowrootmode=\"open\"></template></div>'),\n\t\t\t(d = !!t.firstElementChild.shadowRoot);\n\t}\n\treturn d;\n}\nvar d,\n\tm = i(() => {});\nvar p,\n\tc,\n\tf,\n\tu = i(() => {\n\t\t(p = (t) => t.parentElement === null),\n\t\t\t(c = (t) => t.tagName === 'TEMPLATE'),\n\t\t\t(f = (t) => t.nodeType === Node.ELEMENT_NODE);\n\t});\nvar h,\n\tE = i(() => {\n\t\tm();\n\t\tu();\n\t\th = (t) => {\n\t\t\tvar n;\n\t\t\tif (s()) return;\n\t\t\tlet a = [],\n\t\t\t\te = t.firstElementChild;\n\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\tif (c(e)) a.push(e), (e = e.content);\n\t\t\t\telse if (e.firstElementChild !== null) e = e.firstElementChild;\n\t\t\t\telse if (f(e) && e.nextElementSibling !== null) e = e.nextElementSibling;\n\t\t\t\telse {\n\t\t\t\t\tlet o;\n\t\t\t\t\tfor (; e !== t && e !== null; )\n\t\t\t\t\t\tif (p(e)) {\n\t\t\t\t\t\t\to = a.pop();\n\t\t\t\t\t\t\tlet r = o.parentElement,\n\t\t\t\t\t\t\t\tl = o.getAttribute('shadowroot');\n\t\t\t\t\t\t\tif (((e = o), l === 'open' || l === 'closed')) {\n\t\t\t\t\t\t\t\tlet y = o.hasAttribute('shadowrootdelegatesfocus');\n\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\tr.attachShadow({ mode: l, delegatesFocus: y }).append(o.content);\n\t\t\t\t\t\t\t\t} catch {}\n\t\t\t\t\t\t\t} else o = void 0;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tlet r = e.nextElementSibling;\n\t\t\t\t\t\t\tif (r != null) {\n\t\t\t\t\t\t\t\t(e = r), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tlet l =\n\t\t\t\t\t\t\t\t(n = e.parentElement) === null || n === void 0 ? void 0 : n.nextElementSibling;\n\t\t\t\t\t\t\tif (l != null) {\n\t\t\t\t\t\t\t\t(e = l), o !== void 0 && o.parentElement.removeChild(o);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t(e = e.parentElement), o !== void 0 && (o.parentElement.removeChild(o), (o = void 0));\n\t\t\t\t\t\t}\n\t\t\t\t}\n\t\t};\n\t});\nvar w = i(() => {\n\tE();\n});\nvar v = {};\nb(v, { hasNativeDeclarativeShadowRoots: () => s, hydrateShadowRoots: () => h });\nvar S = i(() => {\n\tm();\n\tw();\n});\nasync function g() {\n\tlet { hydrateShadowRoots: t } = await Promise.resolve().then(() => (S(), v));\n\twindow.addEventListener('DOMContentLoaded', () => t(document.body), { once: true });\n}\nvar x = new DOMParser()\n\t.parseFromString(\n\t\t'<p><template shadowroot=\"open\" shadowrootmode=\"open\"></template></p>',\n\t\t'text/html',\n\t\t{\n\t\t\tincludeShadowRoots: !0,\n\t\t}\n\t)\n\t.querySelector('p');\n(!x || !x.shadowRoot) && g();\n"}],"routeData":{"route":"/lit/lit-vue","type":"page","pattern":"^\\/lit\\/lit-vue\\/?$","segments":[[{"content":"lit","dynamic":false,"spread":false}],[{"content":"lit-vue","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/lit/lit-vue.astro","pathname":"/lit/lit-vue","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true,"contentDir":"file:///Users/zp/Sites/DIGITIAMO/wc-playground/src/content/"},"pageMap":null,"propagation":[],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","/Users/zp/Sites/DIGITIAMO/wc-playground/src/markdown/lit.md":"chunks/lit.266a8658.mjs","/Users/zp/Sites/DIGITIAMO/wc-playground/src/markdown/useless-button.md":"chunks/useless-button.ca7eba83.mjs","astro:scripts/before-hydration.js":"_astro/astro_scripts/before-hydration.js.09223277.js","/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/react/callApi/App.jsx":"_astro/App.b2e85bd4.js","/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/vue/CallApi/App.vue":"_astro/App.3cfa847d.js","/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/wc/lit/my-page":"_astro/my-page.1c88b978.js","/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/react/tasks/Tasks":"_astro/Tasks.a4b55084.js","@astrojs/lit/dist/client.js":"_astro/client.7b2c67e7.js","/astro/hoisted.js?q=2":"_astro/hoisted.84831f1c.js","/astro/hoisted.js?q=1":"_astro/hoisted.cf9af221.js","/astro/hoisted.js?q=0":"_astro/hoisted.94e0feb6.js","@astrojs/vue/client.js":"_astro/client.bad252a6.js","@astrojs/react/client.js":"_astro/client.38423ee9.js"},"assets":["/_astro/_id_.54f21ee5.css","/_astro/index.95b18a08.css","/_astro/index.e9954ef8.css","/_astro/index.fd5e4002.css","/_astro/index.288ce4c4.css","/_astro/index.e9df5dfe.css","/_astro/lit-react.c2ffbec1.css","/_astro/lit-vue.baa9df2f.css","/favicon.svg","/_astro/App.3cfa847d.js","/_astro/App.b2e85bd4.js","/_astro/Tasks.a4b55084.js","/_astro/client.38423ee9.js","/_astro/client.7b2c67e7.js","/_astro/client.bad252a6.js","/_astro/hoisted.84831f1c.js","/_astro/hoisted.94e0feb6.js","/_astro/hoisted.cf9af221.js","/_astro/index.45a47ed6.js","/_astro/index.e3b0c442.4730ea24.js","/_astro/jsx-runtime.73bdaf71.js","/_astro/lit-element.d2bb8516.js","/_astro/lit-html.e0ebe6ea.js","/_astro/menu.6401ea2b.js","/_astro/my-button.0658c7f1.js","/_astro/my-page.1c88b978.js","/_astro/runtime-core.esm-bundler.840ba9f6.js","/_astro/astro_scripts/before-hydration.js.09223277.js","/lit/composing-templates/index.html"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
