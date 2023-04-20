import { h as createVNode, i as spreadAttributes, F as Fragment } from './astro.cc494cb9.mjs';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h1 id=\"what-is-component-testing\">What is Component Testing?</h1>\n<p>Component tests differ from end-to-end tests in that instead of visiting a URL to pull up an entire app, a component can be “mounted” and tested on its own. This allows you to focus on testing only the component’s functionality and not worrying about other nuances with testing a component as part of the larger application.</p>\n<p>Typically, a component test is written by the developers working on the component. The code for the test lives alongside the component code, and it is common for tests to be coded simultaneously with the component, helping developers verify the required functionality while building it.</p>\n<h2 id=\"benefits-of-component-tests\">Benefits of component tests:</h2>\n<ul>\n<li>Easier to test components in isolation</li>\n<li>Fast and reliable</li>\n<li>Easy to set up specific scenarios in tests</li>\n<li>Don’t rely on any external system to run</li>\n</ul>\n<h2 id=\"considerations-for-component-tests\">Considerations for component tests:</h2>\n<ul>\n<li>Do not ensure overall app quality</li>\n<li>Do not call into external APIs/Services</li>\n<li>Usually written by developers working on the component</li>\n</ul>\n<h2 id=\"common-scenarios-for-component-tests\">Common scenarios for component tests:</h2>\n<ul>\n<li>Testing a date picker works properly for a variety of scenarios</li>\n<li>That a form shows and hides specific sections based on input</li>\n<li>Testing components coming out of a design system</li>\n<li>Testing logic not tied to a component (like unit tests!)</li>\n</ul>\n<p>from <a href=\"https://docs.cypress.io/guides/core-concepts/testing-types\">Testing types</a></p>\n<h1 id=\"testing-libraries\">Testing libraries</h1>\n<p>Built on top of <a href=\"https://testing-library.com/docs/dom-testing-library/intro/\">Dom testing Library</a> :</p>\n<ul>\n<li><a href=\"../testing-react-components-react-testing-library\">React testing Library</a></li>\n<li><a href=\"../testing-vue-components-vue-testing-library\">Vue testing Library</a></li>\n<li>@todo svelte testing Library</li>\n</ul>\n<h1 id=\"component-testing-with-cypress\">Component testing with Cypress</h1>\n<p>Cypress Component Testing provides a component workbench for you to quickly build and test components from multiple front-end UI libraries</p>\n<h2 id=\"quick-example\">Quick Example</h2>\n<p>React:</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #FF7B72\">import</span><span style=\"color: #C9D1D9\"> Button </span><span style=\"color: #FF7B72\">from</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">'./Button'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #D2A8FF\">it</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'uses custom text for the button label'</span><span style=\"color: #C9D1D9\">, () </span><span style=\"color: #FF7B72\">=></span><span style=\"color: #C9D1D9\"> {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  cy.</span><span style=\"color: #D2A8FF\">mount</span><span style=\"color: #C9D1D9\">(&#x3C;</span><span style=\"color: #7EE787\">Button</span><span style=\"color: #C9D1D9\">>Click me!&#x3C;/</span><span style=\"color: #7EE787\">Button</span><span style=\"color: #C9D1D9\">>)</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  cy.</span><span style=\"color: #D2A8FF\">get</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'button'</span><span style=\"color: #C9D1D9\">).</span><span style=\"color: #D2A8FF\">should</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'contains.text'</span><span style=\"color: #C9D1D9\">, </span><span style=\"color: #A5D6FF\">'Click me!'</span><span style=\"color: #C9D1D9\">)</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">})</span></span></code></pre>\n<p>Vue:</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #FF7B72\">import</span><span style=\"color: #C9D1D9\"> Button </span><span style=\"color: #FF7B72\">from</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">'./Button.vue'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #D2A8FF\">it</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'uses custom text for the button label'</span><span style=\"color: #C9D1D9\">, () </span><span style=\"color: #FF7B72\">=></span><span style=\"color: #C9D1D9\"> {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  cy.</span><span style=\"color: #D2A8FF\">mount</span><span style=\"color: #C9D1D9\">(Button, {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    slots: {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">      default: </span><span style=\"color: #A5D6FF\">'Click me!'</span><span style=\"color: #C9D1D9\">,</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    },</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  })</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  cy.</span><span style=\"color: #D2A8FF\">get</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'button'</span><span style=\"color: #C9D1D9\">).</span><span style=\"color: #D2A8FF\">should</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'contains.text'</span><span style=\"color: #C9D1D9\">, </span><span style=\"color: #A5D6FF\">'Click me!'</span><span style=\"color: #C9D1D9\">)</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">})</span></span></code></pre>");

				const frontmatter = {};
				const file = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/markdown/testing/component-test.md";
				const url = undefined;
				function rawContent() {
					return "# What is Component Testing?\n\nComponent tests differ from end-to-end tests in that instead of visiting a URL to pull up an entire app, a component can be \"mounted\" and tested on its own. This allows you to focus on testing only the component's functionality and not worrying about other nuances with testing a component as part of the larger application.\n\nTypically, a component test is written by the developers working on the component. The code for the test lives alongside the component code, and it is common for tests to be coded simultaneously with the component, helping developers verify the required functionality while building it.\n\n## Benefits of component tests:\n- Easier to test components in isolation\n- Fast and reliable\n- Easy to set up specific scenarios in tests\n- Don't rely on any external system to run\n\n## Considerations for component tests:\n- Do not ensure overall app quality\n- Do not call into external APIs/Services\n- Usually written by developers working on the component\n\n## Common scenarios for component tests:\n- Testing a date picker works properly for a variety of scenarios\n- That a form shows and hides specific sections based on input\n- Testing components coming out of a design system\n- Testing logic not tied to a component (like unit tests!)\n\nfrom [Testing types](https://docs.cypress.io/guides/core-concepts/testing-types)\n\n\n# Testing libraries\n\nBuilt on top of [Dom testing Library](https://testing-library.com/docs/dom-testing-library/intro/) :\n\n- [React testing Library](../testing-react-components-react-testing-library)\n- [Vue testing Library](../testing-vue-components-vue-testing-library)\n- @todo svelte testing Library\n\n# Component testing with Cypress\n\nCypress Component Testing provides a component workbench for you to quickly build and test components from multiple front-end UI libraries\n\n\n\n## Quick Example\n\nReact:\n```js\nimport Button from './Button'\n\nit('uses custom text for the button label', () => {\n  cy.mount(<Button>Click me!</Button>)\n  cy.get('button').should('contains.text', 'Click me!')\n})\n```\n\nVue:\n```js\nimport Button from './Button.vue'\n\nit('uses custom text for the button label', () => {\n  cy.mount(Button, {\n    slots: {\n      default: 'Click me!',\n    },\n  })\n  cy.get('button').should('contains.text', 'Click me!')\n})\n```\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"what-is-component-testing","text":"What is Component Testing?"},{"depth":2,"slug":"benefits-of-component-tests","text":"Benefits of component tests:"},{"depth":2,"slug":"considerations-for-component-tests","text":"Considerations for component tests:"},{"depth":2,"slug":"common-scenarios-for-component-tests","text":"Common scenarios for component tests:"},{"depth":1,"slug":"testing-libraries","text":"Testing libraries"},{"depth":1,"slug":"component-testing-with-cypress","text":"Component testing with Cypress"},{"depth":2,"slug":"quick-example","text":"Quick Example"}];
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
