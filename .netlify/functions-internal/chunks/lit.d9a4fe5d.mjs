import { h as createVNode, F as Fragment } from './astro.c4ed0d97.mjs';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const html = "<h1 id=\"lit-element\">Lit Element</h1>\n<p><a href=\"https://lit.dev/\">LitElement (Lit)</a> is a simple base class for creating fast, lightweight web components that work in any web page with any framework.</p>\n<p>LitElement uses lit-html to render into shadow DOM, and adds API to manage properties and attributes. Properties are observed by default, and elements update asynchronously when their properties change.</p>";

				const frontmatter = {};
				const file = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/markdown/lit.md";
				const url = undefined;
				function rawContent() {
					return "# Lit Element\n\n[LitElement (Lit)](https://lit.dev/) is a simple base class for creating fast, lightweight web components that work in any web page with any framework.\n     \n\nLitElement uses lit-html to render into shadow DOM, and adds API to manage properties and attributes. Properties are observed by default, and elements update asynchronously when their properties change.\n            \n\n\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"lit-element","text":"Lit Element"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
