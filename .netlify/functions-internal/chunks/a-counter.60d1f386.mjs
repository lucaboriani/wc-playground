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

				const html = updateImageReferences("<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">export</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">class</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FFA657\">MyCounter</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">extends</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">HTMLElement</span><span style=\"color: #C9D1D9\"> {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span><span style=\"color: #FF7B72\">constructor</span><span style=\"color: #C9D1D9\">() {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #79C0FF\">super</span><span style=\"color: #C9D1D9\">();</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #79C0FF\">this</span><span style=\"color: #C9D1D9\">.count </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">0</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #79C0FF\">this</span><span style=\"color: #C9D1D9\">.</span><span style=\"color: #D2A8FF\">attachShadow</span><span style=\"color: #C9D1D9\">({ mode: </span><span style=\"color: #A5D6FF\">'open'</span><span style=\"color: #C9D1D9\"> });</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #FF7B72\">const</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">container</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> document.</span><span style=\"color: #D2A8FF\">createElement</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'div'</span><span style=\"color: #C9D1D9\">)</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    container.className </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #A5D6FF\">'container'</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #FF7B72\">const</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">dec</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> document.</span><span style=\"color: #D2A8FF\">createElement</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'button'</span><span style=\"color: #C9D1D9\">)</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    dec.id </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">'dec'</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    dec.textContent </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">'-'</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #FF7B72\">const</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">span</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> document.</span><span style=\"color: #D2A8FF\">createElement</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'span'</span><span style=\"color: #C9D1D9\">)</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    span.id </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">'count'</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #FF7B72\">const</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">inc</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> document.</span><span style=\"color: #D2A8FF\">createElement</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'button'</span><span style=\"color: #C9D1D9\">)</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    inc.id </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">'inc'</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    inc.textContent</span><span style=\"color: #FF7B72\">=</span><span style=\"color: #A5D6FF\">\"+\"</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #FF7B72\">const</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">style</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> document.</span><span style=\"color: #D2A8FF\">createElement</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'style'</span><span style=\"color: #C9D1D9\">);</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    style.textContent </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">`</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">        * {</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">          box-sizing:border-box;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">        }</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">        span {</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">            width: 4rem;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">            display: inline-block;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">            text-align: center;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">        }</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">        button {</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">          border: none;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">          font-size: 2em;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">          border-radius: 10px;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">          background-color: #425b4d;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">          color: white;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">          display: flex;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">          align-items: center;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">          justify-content: center;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">          padding: 0 0.5em;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">          cursor:pointer;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">        }</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">        .container {</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">          display:flex;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">          align-items: center;</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">        }</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">    `</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #79C0FF\">this</span><span style=\"color: #C9D1D9\">.shadowRoot.</span><span style=\"color: #D2A8FF\">appendChild</span><span style=\"color: #C9D1D9\">(style)</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    container.</span><span style=\"color: #D2A8FF\">appendChild</span><span style=\"color: #C9D1D9\">(dec)</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    container.</span><span style=\"color: #D2A8FF\">appendChild</span><span style=\"color: #C9D1D9\">(span)</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    container.</span><span style=\"color: #D2A8FF\">appendChild</span><span style=\"color: #C9D1D9\">(inc)</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #79C0FF\">this</span><span style=\"color: #C9D1D9\">.shadowRoot.</span><span style=\"color: #D2A8FF\">appendChild</span><span style=\"color: #C9D1D9\">(container);</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  }</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span><span style=\"color: #D2A8FF\">connectedCallback</span><span style=\"color: #C9D1D9\">() {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #79C0FF\">this</span><span style=\"color: #C9D1D9\">.shadowRoot.</span><span style=\"color: #D2A8FF\">getElementById</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'inc'</span><span style=\"color: #C9D1D9\">).</span><span style=\"color: #D2A8FF\">onclick</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> () </span><span style=\"color: #FF7B72\">=></span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">this</span><span style=\"color: #C9D1D9\">.</span><span style=\"color: #D2A8FF\">inc</span><span style=\"color: #C9D1D9\">();</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #79C0FF\">this</span><span style=\"color: #C9D1D9\">.shadowRoot.</span><span style=\"color: #D2A8FF\">getElementById</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'dec'</span><span style=\"color: #C9D1D9\">).</span><span style=\"color: #D2A8FF\">onclick</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> () </span><span style=\"color: #FF7B72\">=></span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">this</span><span style=\"color: #C9D1D9\">.</span><span style=\"color: #D2A8FF\">dec</span><span style=\"color: #C9D1D9\">();</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #79C0FF\">this</span><span style=\"color: #C9D1D9\">.</span><span style=\"color: #D2A8FF\">update</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #79C0FF\">this</span><span style=\"color: #C9D1D9\">.count);</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  }</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span><span style=\"color: #D2A8FF\">inc</span><span style=\"color: #C9D1D9\">() {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #79C0FF\">this</span><span style=\"color: #C9D1D9\">.</span><span style=\"color: #D2A8FF\">update</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #FF7B72\">++</span><span style=\"color: #79C0FF\">this</span><span style=\"color: #C9D1D9\">.count);</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  }</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span><span style=\"color: #D2A8FF\">dec</span><span style=\"color: #C9D1D9\">() {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #79C0FF\">this</span><span style=\"color: #C9D1D9\">.</span><span style=\"color: #D2A8FF\">update</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #FF7B72\">--</span><span style=\"color: #79C0FF\">this</span><span style=\"color: #C9D1D9\">.count);</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  }</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span><span style=\"color: #D2A8FF\">update</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #FFA657\">count</span><span style=\"color: #C9D1D9\">) {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #79C0FF\">this</span><span style=\"color: #C9D1D9\">.shadowRoot.</span><span style=\"color: #D2A8FF\">getElementById</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'count'</span><span style=\"color: #C9D1D9\">).textContent </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> count;</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  }</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">}</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">customElements.</span><span style=\"color: #D2A8FF\">define</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'my-counter'</span><span style=\"color: #C9D1D9\">, MyCounter);</span></span></code></pre>");

				const frontmatter = {};
				const file = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/markdown/a-counter.md";
				const url = undefined;
				function rawContent() {
					return "```js\n\n\nexport class MyCounter extends HTMLElement {\n  constructor() {\n    super();\n    this.count = 0;\n    \n    this.attachShadow({ mode: 'open' });\n\n    const container = document.createElement('div')\n    container.className ='container'\n    const dec = document.createElement('button')\n    dec.id = 'dec'\n    dec.textContent = '-'\n    const span = document.createElement('span')\n    span.id = 'count'\n    const inc = document.createElement('button')\n    inc.id = 'inc'\n    inc.textContent=\"+\"\n    \n    const style = document.createElement('style');\n    \n\n    style.textContent = `\n        * {\n          box-sizing:border-box;\n        }\n\n        span {\n            width: 4rem;\n            display: inline-block;\n            text-align: center;\n        }\n\n        button {\n          border: none;\n          font-size: 2em;\n          border-radius: 10px;\n          background-color: #425b4d;\n          color: white;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          padding: 0 0.5em;\n          cursor:pointer;\n        }\n        .container {\n          display:flex;\n          align-items: center;\n        }\n    `;\n    \n    this.shadowRoot.appendChild(style)\n\n    container.appendChild(dec)\n    container.appendChild(span)\n    container.appendChild(inc)\n    \n    \n    this.shadowRoot.appendChild(container);\n  }\n\n  connectedCallback() {\n    this.shadowRoot.getElementById('inc').onclick = () => this.inc();\n    this.shadowRoot.getElementById('dec').onclick = () => this.dec();\n    this.update(this.count);\n  }\n\n  inc() {\n    this.update(++this.count);\n  }\n\n  dec() {\n    this.update(--this.count);\n  }\n\n  update(count) {\n    this.shadowRoot.getElementById('count').textContent = count;\n  }\n}\n\ncustomElements.define('my-counter', MyCounter);\n```";
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
