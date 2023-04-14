import { h as createVNode, i as spreadAttributes, F as Fragment } from './astro.482c7aac.mjs';
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

				const html = updateImageReferences("<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #FF7B72\">import</span><span style=\"color: #C9D1D9\"> {LitElement, html, css} </span><span style=\"color: #FF7B72\">from</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">'lit'</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">export</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">class</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FFA657\">MyButton</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">extends</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">LitElement</span><span style=\"color: #C9D1D9\"> {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span><span style=\"color: #FF7B72\">static</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FFA657\">properties</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">        text: {attribute: </span><span style=\"color: #79C0FF\">true</span><span style=\"color: #C9D1D9\">},</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  };</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span><span style=\"color: #FF7B72\">static</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FFA657\">styles</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #D2A8FF\">css</span><span style=\"color: #A5D6FF\">`</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">    button {</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">      color: whitesmoke; </span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">      background-color:blue; </span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">      font-size:2em;  </span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">      border: solid 2px whitesmoke;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">      border-radius:.25em;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">      padding: 1em .5em;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">      cursor:pointer;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">      transition: all .3s ease;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">    }</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">    button:hover {</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">        color: black;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">        background-color:whitesmoke;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">    }</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">  `</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span><span style=\"color: #D2A8FF\">render</span><span style=\"color: #C9D1D9\">() {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #FF7B72\">return</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #D2A8FF\">html</span><span style=\"color: #A5D6FF\">`</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">      &#x3C;button @click=\"${</span><span style=\"color: #79C0FF\">this</span><span style=\"color: #A5D6FF\">.</span><span style=\"color: #C9D1D9\">_handleClick</span><span style=\"color: #A5D6FF\">}\"></span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">        ${</span><span style=\"color: #79C0FF\">this</span><span style=\"color: #A5D6FF\">.</span><span style=\"color: #C9D1D9\">text</span><span style=\"color: #A5D6FF\">}</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">      &#x3C;/button></span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">    `</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  }</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span><span style=\"color: #D2A8FF\">connectedCallback</span><span style=\"color: #C9D1D9\">() {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    console.</span><span style=\"color: #D2A8FF\">log</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'on connect'</span><span style=\"color: #C9D1D9\">)</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #79C0FF\">super</span><span style=\"color: #C9D1D9\">.</span><span style=\"color: #D2A8FF\">connectedCallback</span><span style=\"color: #C9D1D9\">();</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  }</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span><span style=\"color: #D2A8FF\">_handleClick</span><span style=\"color: #C9D1D9\">(){</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    console.</span><span style=\"color: #D2A8FF\">log</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'click'</span><span style=\"color: #C9D1D9\">)</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  }</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">}</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">customElements.</span><span style=\"color: #D2A8FF\">define</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'my-button'</span><span style=\"color: #C9D1D9\">, MyButton);</span></span></code></pre>");

				const frontmatter = {};
				const file = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/markdown/useless-button.md";
				const url = undefined;
				function rawContent() {
					return "```js\nimport {LitElement, html, css} from 'lit';\n\nexport class MyButton extends LitElement {\n  static properties = {\n        text: {attribute: true},\n  };\n\n  static styles = css`\n    button {\n      color: whitesmoke; \n      background-color:blue; \n      font-size:2em;  \n      border: solid 2px whitesmoke;\n      border-radius:.25em;\n      padding: 1em .5em;\n      cursor:pointer;\n      transition: all .3s ease;\n    }\n    button:hover {\n        color: black;\n        background-color:whitesmoke;\n    }\n  `;\n  \n  render() {\n    return html`\n      <button @click=\"${this._handleClick}\">\n        ${this.text}\n      </button>\n    `;\n  }\n  connectedCallback() {\n    console.log('on connect')\n    super.connectedCallback();\n  }\n  _handleClick(){\n    console.log('click')\n    \n  }\n}\ncustomElements.define('my-button', MyButton);\n```";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
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
