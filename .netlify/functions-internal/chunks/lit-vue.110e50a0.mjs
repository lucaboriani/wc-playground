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

				const html = updateImageReferences("<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #C9D1D9\">&#x3C;</span><span style=\"color: #7EE787\">script</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">setup</span><span style=\"color: #C9D1D9\">></span></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">import</span><span style=\"color: #C9D1D9\"> {reactive, onMounted} </span><span style=\"color: #FF7B72\">from</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">'vue'</span></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">import</span><span style=\"color: #C9D1D9\"> {MyButton} </span><span style=\"color: #FF7B72\">from</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">'../../wc/lit/my-button.js'</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">const</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">state</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #D2A8FF\">reactive</span><span style=\"color: #C9D1D9\">({</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  users : []</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">})</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">const</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">url</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">\"https://jsonplaceholder.typicode.com/users/\"</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">const</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #D2A8FF\">loadUsers</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">async</span><span style=\"color: #C9D1D9\"> () </span><span style=\"color: #FF7B72\">=></span><span style=\"color: #C9D1D9\"> {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span><span style=\"color: #FF7B72\">if</span><span style=\"color: #C9D1D9\">(state.users.</span><span style=\"color: #79C0FF\">length</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">===</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">0</span><span style=\"color: #C9D1D9\">){</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #FF7B72\">const</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">response</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">await</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #D2A8FF\">fetch</span><span style=\"color: #C9D1D9\">(url);</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #FF7B72\">const</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">jsonData</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">await</span><span style=\"color: #C9D1D9\"> response.</span><span style=\"color: #D2A8FF\">json</span><span style=\"color: #C9D1D9\">();</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    state.users </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> [</span><span style=\"color: #FF7B72\">...</span><span style=\"color: #C9D1D9\">jsonData]</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  } </span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">}</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">&#x3C;/</span><span style=\"color: #7EE787\">script</span><span style=\"color: #C9D1D9\">></span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">&#x3C;</span><span style=\"color: #7EE787\">template</span><span style=\"color: #C9D1D9\">></span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  &#x3C;</span><span style=\"color: #7EE787\">div</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">class</span><span style=\"color: #C9D1D9\">=</span><span style=\"color: #A5D6FF\">\"app\"</span><span style=\"color: #C9D1D9\">></span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">      &#x3C;</span><span style=\"color: #7EE787\">div</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">class</span><span style=\"color: #C9D1D9\">=</span><span style=\"color: #A5D6FF\">\"content\"</span><span style=\"color: #C9D1D9\">></span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">        </span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">        Vue component + webcomponent button </span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">       </span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">        &#x3C;</span><span style=\"color: #7EE787\">my-button</span><span style=\"color: #C9D1D9\"> </span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">          </span><span style=\"color: #79C0FF\">text</span><span style=\"color: #C9D1D9\">=</span><span style=\"color: #A5D6FF\">\"load users\"</span><span style=\"color: #C9D1D9\"> </span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">          @</span><span style=\"color: #79C0FF\">click</span><span style=\"color: #C9D1D9\">=</span><span style=\"color: #C9D1D9\">\"</span><span style=\"color: #C9D1D9\">loadUsers</span><span style=\"color: #C9D1D9\">\"</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">        ></span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">        &#x3C;/</span><span style=\"color: #7EE787\">my-button</span><span style=\"color: #C9D1D9\">></span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">        </span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">        &#x3C;</span><span style=\"color: #7EE787\">ul</span><span style=\"color: #C9D1D9\">></span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">          &#x3C;</span><span style=\"color: #7EE787\">li</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">v-for</span><span style=\"color: #C9D1D9\">=</span><span style=\"color: #C9D1D9\">\"</span><span style=\"color: #C9D1D9\">user </span><span style=\"color: #FF7B72\">in</span><span style=\"color: #C9D1D9\"> state.users</span><span style=\"color: #C9D1D9\">\"</span><span style=\"color: #C9D1D9\"> :</span><span style=\"color: #79C0FF\">key</span><span style=\"color: #C9D1D9\">=</span><span style=\"color: #C9D1D9\">\"</span><span style=\"color: #C9D1D9\">user.id</span><span style=\"color: #C9D1D9\">\"</span><span style=\"color: #C9D1D9\">></span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">            &#x3C;</span><span style=\"color: #7EE787\">span</span><span style=\"color: #C9D1D9\">>{{ user.name }}&#x3C;/</span><span style=\"color: #7EE787\">span</span><span style=\"color: #C9D1D9\">></span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">            -</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">            &#x3C;</span><span style=\"color: #7EE787\">span</span><span style=\"color: #C9D1D9\">>{{ user.website }}&#x3C;/</span><span style=\"color: #7EE787\">span</span><span style=\"color: #C9D1D9\">></span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">            &#x3C;</span><span style=\"color: #7EE787\">hr</span><span style=\"color: #C9D1D9\">></span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">          &#x3C;/</span><span style=\"color: #7EE787\">li</span><span style=\"color: #C9D1D9\">></span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">        &#x3C;/</span><span style=\"color: #7EE787\">ul</span><span style=\"color: #C9D1D9\">> </span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">      &#x3C;/</span><span style=\"color: #7EE787\">div</span><span style=\"color: #C9D1D9\">></span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">      </span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    &#x3C;/</span><span style=\"color: #7EE787\">div</span><span style=\"color: #C9D1D9\">></span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">&#x3C;/</span><span style=\"color: #7EE787\">template</span><span style=\"color: #C9D1D9\">></span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">&#x3C;</span><span style=\"color: #7EE787\">style</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">scoped</span><span style=\"color: #C9D1D9\">></span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #79C0FF\">.content</span><span style=\"color: #C9D1D9\">{</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span><span style=\"color: #79C0FF\">flex-grow</span><span style=\"color: #C9D1D9\">: </span><span style=\"color: #79C0FF\">1</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span><span style=\"color: #79C0FF\">padding</span><span style=\"color: #C9D1D9\">: </span><span style=\"color: #79C0FF\">1</span><span style=\"color: #FF7B72\">em</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">}</span></span>\n<span class=\"line\"><span style=\"color: #79C0FF\">.aside</span><span style=\"color: #C9D1D9\">{</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span><span style=\"color: #79C0FF\">margin-left</span><span style=\"color: #C9D1D9\">: </span><span style=\"color: #79C0FF\">1</span><span style=\"color: #FF7B72\">em</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">}</span></span>\n<span class=\"line\"><span style=\"color: #7EE787\">span</span><span style=\"color: #C9D1D9\">{</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span><span style=\"color: #79C0FF\">padding</span><span style=\"color: #C9D1D9\">: </span><span style=\"color: #79C0FF\">.5</span><span style=\"color: #FF7B72\">em</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">}</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">&#x3C;/</span><span style=\"color: #7EE787\">style</span><span style=\"color: #C9D1D9\">></span></span></code></pre>");

				const frontmatter = {};
				const file = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/markdown/lit-vue.md";
				const url = undefined;
				function rawContent() {
					return "```vue\n<script setup>\nimport {reactive, onMounted} from 'vue'\nimport {MyButton} from '../../wc/lit/my-button.js';\n\n\nconst state = reactive({\n  users : []\n})\n\nconst url = \"https://jsonplaceholder.typicode.com/users/\";\n\nconst loadUsers = async () => {\n  if(state.users.length === 0){\n    const response = await fetch(url);\n    const jsonData = await response.json();\n    state.users = [...jsonData]\n  } \n}\n</script>\n\n<template>\n  <div class=\"app\">\n      <div class=\"content\">\n        \n        Vue component + webcomponent button \n       \n        <my-button \n          text=\"load users\" \n          @click=\"loadUsers\"\n        >\n        </my-button>\n        \n        <ul>\n          <li v-for=\"user in state.users\" :key=\"user.id\">\n            <span>{{ user.name }}</span>\n            -\n            <span>{{ user.website }}</span>\n            <hr>\n          </li>\n        </ul> \n      </div>\n      \n    </div>\n</template>\n\n<style scoped>\n\n.content{\n  flex-grow: 1;\n  padding: 1em;\n}\n.aside{\n  margin-left: 1em;\n}\nspan{\n  padding: .5em;\n}\n\n</style>\n```";
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