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

				const html = updateImageReferences("<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> {LitElement, html, css} </span><span style=\"color: #F97583\">from</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">'lit'</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #F97583\">export</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">class</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">MyButton</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">extends</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">LitElement</span><span style=\"color: #E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #F97583\">static</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #FFAB70\">properties</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">        text: {attribute: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">},</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  };</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #F97583\">static</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #FFAB70\">styles</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">css</span><span style=\"color: #9ECBFF\">`</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">    button {</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">      color: whitesmoke; </span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">      background-color:blue; </span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">      font-size:2em;  </span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">      border: solid 2px whitesmoke;</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">      border-radius:.25em;</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">      padding: 1em .5em;</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">      cursor:pointer;</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">      transition: all .3s ease;</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">    }</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">    button:hover {</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">        color: black;</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">        background-color:whitesmoke;</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">    }</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">  `</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #B392F0\">render</span><span style=\"color: #E1E4E8\">() {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #F97583\">return</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">html</span><span style=\"color: #9ECBFF\">`</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">      &#x3C;button @click=\"${</span><span style=\"color: #79B8FF\">this</span><span style=\"color: #9ECBFF\">.</span><span style=\"color: #E1E4E8\">_handleClick</span><span style=\"color: #9ECBFF\">}\"></span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">        ${</span><span style=\"color: #79B8FF\">this</span><span style=\"color: #9ECBFF\">.</span><span style=\"color: #E1E4E8\">text</span><span style=\"color: #9ECBFF\">}</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">      &#x3C;/button></span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">    `</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  }</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #B392F0\">connectedCallback</span><span style=\"color: #E1E4E8\">() {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    console.</span><span style=\"color: #B392F0\">log</span><span style=\"color: #E1E4E8\">(</span><span style=\"color: #9ECBFF\">'on connect'</span><span style=\"color: #E1E4E8\">)</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">super</span><span style=\"color: #E1E4E8\">.</span><span style=\"color: #B392F0\">connectedCallback</span><span style=\"color: #E1E4E8\">();</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  }</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #B392F0\">_handleClick</span><span style=\"color: #E1E4E8\">(){</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    console.</span><span style=\"color: #B392F0\">log</span><span style=\"color: #E1E4E8\">(</span><span style=\"color: #9ECBFF\">'click'</span><span style=\"color: #E1E4E8\">)</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  }</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">}</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">customElements.</span><span style=\"color: #B392F0\">define</span><span style=\"color: #E1E4E8\">(</span><span style=\"color: #9ECBFF\">'my-button'</span><span style=\"color: #E1E4E8\">, MyButton);</span></span></code></pre>\n<p>is used like :</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #E1E4E8\"> &#x3C;</span><span style=\"color: #79B8FF\">MyButton</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">text</span><span style=\"color: #F97583\">=</span><span style=\"color: #9ECBFF\">\"some text\"</span><span style=\"color: #E1E4E8\"> /></span></span></code></pre>\n<p>ok maybe this wasn’t the best example :S</p>");

				const frontmatter = {};
				const file = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/markdown/useless-button.md";
				const url = undefined;
				function rawContent() {
					return "```js\nimport {LitElement, html, css} from 'lit';\n\nexport class MyButton extends LitElement {\n  static properties = {\n        text: {attribute: true},\n  };\n\n  static styles = css`\n    button {\n      color: whitesmoke; \n      background-color:blue; \n      font-size:2em;  \n      border: solid 2px whitesmoke;\n      border-radius:.25em;\n      padding: 1em .5em;\n      cursor:pointer;\n      transition: all .3s ease;\n    }\n    button:hover {\n        color: black;\n        background-color:whitesmoke;\n    }\n  `;\n  \n  render() {\n    return html`\n      <button @click=\"${this._handleClick}\">\n        ${this.text}\n      </button>\n    `;\n  }\n  connectedCallback() {\n    console.log('on connect')\n    super.connectedCallback();\n  }\n  _handleClick(){\n    console.log('click')\n    \n  }\n}\ncustomElements.define('my-button', MyButton);\n```\n\nis used like :\n\n```js\n <MyButton text=\"some text\" />\n```\n\nok maybe this wasn't the best example :S";
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