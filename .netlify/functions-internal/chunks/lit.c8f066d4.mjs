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

				const html = updateImageReferences("<h1 id=\"lit-element\">Lit Element</h1>\n<p><a href=\"https://lit.dev/\">LitElement (Lit)</a> is a simple base class for creating fast, lightweight web components that work in any web page with any framework.</p>\n<p>LitElement uses lit-html to render into shadow DOM, and adds API to manage properties and attributes. Properties are observed by default, and elements update asynchronously when their properties change.</p>");

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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
