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

				const html = updateImageReferences("<h1 id=\"composing-templates\">Composing Templates</h1>\n<p>In Lit components can be declaratively composed as in js frameworks:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> {LitElement, html} </span><span style=\"color: #F97583\">from</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">'lit'</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">'./my-header.js'</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">'./my-article.js'</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">'./my-footer.js'</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #F97583\">export</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">class</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">MyPage</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">extends</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">LitElement</span><span style=\"color: #E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #F97583\">static</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #FFAB70\">properties</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    article: {attribute: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">},</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  };</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #F97583\">constructor</span><span style=\"color: #E1E4E8\">() {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">super</span><span style=\"color: #E1E4E8\">();</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">this</span><span style=\"color: #E1E4E8\">.article </span><span style=\"color: #F97583\">=</span><span style=\"color: #E1E4E8\"> {};</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  }</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #B392F0\">render</span><span style=\"color: #E1E4E8\">() {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #F97583\">return</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">html</span><span style=\"color: #9ECBFF\">`</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">       &#x3C;my-header </span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">        text=\"${</span><span style=\"color: #79B8FF\">this</span><span style=\"color: #9ECBFF\">.</span><span style=\"color: #E1E4E8\">article</span><span style=\"color: #9ECBFF\">.</span><span style=\"color: #E1E4E8\">title</span><span style=\"color: #9ECBFF\">}\"></span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">       &#x3C;/my-header></span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">       &#x3C;my-article </span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">        text=\"${</span><span style=\"color: #79B8FF\">this</span><span style=\"color: #9ECBFF\">.</span><span style=\"color: #E1E4E8\">article</span><span style=\"color: #9ECBFF\">.</span><span style=\"color: #E1E4E8\">text</span><span style=\"color: #9ECBFF\">}\"></span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">       &#x3C;/my-article></span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">       &#x3C;my-footer>&#x3C;/my-footer> </span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">    `</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  }</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">}</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">customElements.</span><span style=\"color: #B392F0\">define</span><span style=\"color: #E1E4E8\">(</span><span style=\"color: #9ECBFF\">'my-page'</span><span style=\"color: #E1E4E8\">, MyPage);</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #F97583\">...</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">&#x3C;</span><span style=\"color: #79B8FF\">MyPage</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #B392F0\">article</span><span style=\"color: #F97583\">=</span><span style=\"color: #E1E4E8\">{{</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">        title: </span><span style=\"color: #9ECBFF\">'Composing Templates'</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">        text: </span><span style=\"color: #9ECBFF\">'Some awesome text.'</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    }}</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">/></span></span>\n<span class=\"line\"></span></code></pre>");

				const frontmatter = {};
				const file = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/markdown/lit-composing-templates.md";
				const url = undefined;
				function rawContent() {
					return "# Composing Templates\n\nIn Lit components can be declaratively composed as in js frameworks:\n\n```js\nimport {LitElement, html} from 'lit';\nimport './my-header.js';\nimport './my-article.js';\nimport './my-footer.js';\n\nexport class MyPage extends LitElement {\n  static properties = {\n    article: {attribute: true},\n  };\n\n  constructor() {\n    super();\n    this.article = {};\n  }\n  \n  render() {\n    return html`\n       <my-header \n        text=\"${this.article.title}\">\n       </my-header>\n       <my-article \n        text=\"${this.article.text}\">\n       </my-article>\n       <my-footer></my-footer> \n    `;\n  }\n}\ncustomElements.define('my-page', MyPage);\n\n...\n\n<MyPage\n    article={{\n        title: 'Composing Templates',\n        text: 'Some awesome text.'\n    }}\n/>\n\n```\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"composing-templates","text":"Composing Templates"}];
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
