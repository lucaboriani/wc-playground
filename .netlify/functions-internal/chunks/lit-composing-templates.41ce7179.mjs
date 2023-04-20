import { h as createVNode, i as spreadAttributes, F as Fragment } from './astro.af0e87f3.mjs';
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

				const html = updateImageReferences("<h1 id=\"composing-templates\">Composing Templates</h1>\n<p>In Lit components can be declaratively composed as in js frameworks:</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #FF7B72\">import</span><span style=\"color: #C9D1D9\"> {LitElement, html} </span><span style=\"color: #FF7B72\">from</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">'lit'</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">import</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">'./my-header.js'</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">import</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">'./my-article.js'</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">import</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">'./my-footer.js'</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">export</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">class</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FFA657\">MyPage</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">extends</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">LitElement</span><span style=\"color: #C9D1D9\"> {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span><span style=\"color: #FF7B72\">static</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FFA657\">properties</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    article: {attribute: </span><span style=\"color: #79C0FF\">true</span><span style=\"color: #C9D1D9\">},</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  };</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span><span style=\"color: #FF7B72\">constructor</span><span style=\"color: #C9D1D9\">() {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #79C0FF\">super</span><span style=\"color: #C9D1D9\">();</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #79C0FF\">this</span><span style=\"color: #C9D1D9\">.article </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> {};</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  }</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span><span style=\"color: #D2A8FF\">render</span><span style=\"color: #C9D1D9\">() {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #FF7B72\">return</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #D2A8FF\">html</span><span style=\"color: #A5D6FF\">`</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">       &#x3C;my-header </span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">        text=\"${</span><span style=\"color: #79C0FF\">this</span><span style=\"color: #A5D6FF\">.</span><span style=\"color: #C9D1D9\">article</span><span style=\"color: #A5D6FF\">.</span><span style=\"color: #C9D1D9\">title</span><span style=\"color: #A5D6FF\">}\"></span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">       &#x3C;/my-header></span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">       &#x3C;my-article </span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">        text=\"${</span><span style=\"color: #79C0FF\">this</span><span style=\"color: #A5D6FF\">.</span><span style=\"color: #C9D1D9\">article</span><span style=\"color: #A5D6FF\">.</span><span style=\"color: #C9D1D9\">text</span><span style=\"color: #A5D6FF\">}\"></span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">       &#x3C;/my-article></span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">       &#x3C;my-footer>&#x3C;/my-footer> </span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">    `</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  }</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">}</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">customElements.</span><span style=\"color: #D2A8FF\">define</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'my-page'</span><span style=\"color: #C9D1D9\">, MyPage);</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">...</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">&#x3C;</span><span style=\"color: #7EE787\">MyPage</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #79C0FF\">article</span><span style=\"color: #FF7B72\">={</span><span style=\"color: #C9D1D9\">{</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">        title: </span><span style=\"color: #A5D6FF\">'Composing Templates'</span><span style=\"color: #C9D1D9\">,</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">        text: </span><span style=\"color: #A5D6FF\">'Some awesome text.'</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    }</span><span style=\"color: #FF7B72\">}</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">/></span></span>\n<span class=\"line\"></span></code></pre>");

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
