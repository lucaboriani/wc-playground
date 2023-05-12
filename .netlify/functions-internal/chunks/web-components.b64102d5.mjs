import { j as createVNode, s as spreadAttributes, F as Fragment } from './astro.67ba37b7.mjs';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'html-escaper';
import 'string-width';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h1 id=\"web-components\">Web Components</h1>\n<p>Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.</p>\n<h2 id=\"concepts-and-usage\">Concepts and usage</h2>\n<p>As developers, we all know that reusing code as much as possible is a good idea. This has traditionally not been so easy for custom markup structures — think of the complex HTML (and associated style and script) you’ve sometimes had to write to render custom UI controls, and how using them multiple times can turn your page into a mess if you are not careful.</p>\n<p>Web Components aims to solve such problems — it consists of three main technologies, which can be used together to create versatile custom elements with encapsulated functionality that can be reused wherever you like without fear of code collisions.</p>\n<ul>\n<li>\n<p>Custom elements: A set of JavaScript APIs that allow you to define custom elements and their behavior, which can then be used as desired in your user interface.</p>\n</li>\n<li>\n<p>Shadow DOM: A set of JavaScript APIs for attaching an encapsulated\n“shadow” DOM tree to an element — which is rendered separately from the main document DOM — and controlling associated functionality. In this way, you can keep an element’s features private, so they can be scripted and styled without the fear of collision with other parts of the document.</p>\n</li>\n<li>\n<p>HTML templates: The <code>&#x3C;template></code> and <code>&#x3C;slot></code> elements enable you to write markup templates that are not displayed in the rendered page. These can then be reused multiple times as the basis of a custom element’s structure.</p>\n</li>\n</ul>\n<p>The basic approach for implementing a web component generally looks something like this:</p>\n<ul>\n<li>\n<p>Create a class in which you specify your web component functionality, using the class syntax.</p>\n</li>\n<li>\n<p>Register your new custom element using the CustomElementRegistry.define() method, passing it the element name to be defined, the class or function in which its functionality is specified, and optionally, what element it inherits from.</p>\n</li>\n<li>\n<p>If required, attach a shadow DOM to the custom element using Element.attachShadow() method. Add child elements, event listeners, etc., to the shadow DOM using regular DOM methods.</p>\n</li>\n<li>\n<p>If required, define an HTML template using <code>&#x3C;template></code> and <code>&#x3C;slot></code>. Again use regular DOM methods to clone the template and attach it to your shadow DOM.</p>\n</li>\n</ul>\n<p>Use your custom element wherever you like on your page, just like you would any regular HTML element.</p>");

				const frontmatter = {};
				const file = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/markdown/web-components.md";
				const url = undefined;
				function rawContent() {
					return "# Web Components\n\nWeb Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.\n\n## Concepts and usage\n\nAs developers, we all know that reusing code as much as possible is a good idea. This has traditionally not been so easy for custom markup structures — think of the complex HTML (and associated style and script) you've sometimes had to write to render custom UI controls, and how using them multiple times can turn your page into a mess if you are not careful.\n\nWeb Components aims to solve such problems — it consists of three main technologies, which can be used together to create versatile custom elements with encapsulated functionality that can be reused wherever you like without fear of code collisions.\n\n- Custom elements: A set of JavaScript APIs that allow you to define custom elements and their behavior, which can then be used as desired in your user interface.\n\n- Shadow DOM: A set of JavaScript APIs for attaching an encapsulated \n\"shadow\" DOM tree to an element — which is rendered separately from the main document DOM — and controlling associated functionality. In this way, you can keep an element's features private, so they can be scripted and styled without the fear of collision with other parts of the document.\n\n- HTML templates: The `<template>` and `<slot>` elements enable you to write markup templates that are not displayed in the rendered page. These can then be reused multiple times as the basis of a custom element's structure.\n\nThe basic approach for implementing a web component generally looks something like this:\n\n- Create a class in which you specify your web component functionality, using the class syntax.\n\n- Register your new custom element using the CustomElementRegistry.define() method, passing it the element name to be defined, the class or function in which its functionality is specified, and optionally, what element it inherits from.\n\n- If required, attach a shadow DOM to the custom element using Element.attachShadow() method. Add child elements, event listeners, etc., to the shadow DOM using regular DOM methods.\n\n- If required, define an HTML template using `<template>` and `<slot>`. Again use regular DOM methods to clone the template and attach it to your shadow DOM.\n\nUse your custom element wherever you like on your page, just like you would any regular HTML element.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"web-components","text":"Web Components"},{"depth":2,"slug":"concepts-and-usage","text":"Concepts and usage"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
