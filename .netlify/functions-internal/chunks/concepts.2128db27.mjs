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

				const html = updateImageReferences("<h1 id=\"concepts\">Concepts</h1>\n<h2 id=\"testing-workflow\">Testing Workflow</h2>\n<p>Developing features and fixing bugs should be test driven.</p>\n<p>An example of building out a front-end facing feature may go like this:</p>\n<ol>\n<li>Check user requirements in the ticket/issue you’re assigned to.</li>\n<li>Write a failing component test for a features required in the user story.</li>\n<li>Build the piece of the component needed so that the failing test passes.</li>\n<li>Repeat steps 2-3 until the component satisfies the user requirements.</li>\n<li>Write out all CSS required for the feature to be design complete.</li>\n<li>Add a screenshot test.</li>\n<li>Write an E2E test to ensure all pieces and integrations work together.</li>\n<li>Add performance tests if necessary to ensure the feature doesn’t introduce regressions on performance.</li>\n</ol>\n<p>An example of building out a feature/change to the CLI may go like this:</p>\n<ol>\n<li>Check user requirements in the ticket/issue you’re assigned to.</li>\n<li>Write a failing unit/integration test for the feature required in the user story.1. Write the logic for the new feature/change.</li>\n<li>Capture/update a snapshot test for any changes to the printed console output.</li>\n</ol>\n<p>from <a href=\"https://github.com/cypress-io/cypress/blob/develop/guides/testing-strategy-and-styleguide.md\">CYPRESS TESTING STRATEGY + STYLE GUIDE</a></p>\n<h2 id=\"aaa-arrange-act-assert\">AAA (Arrange-Act-Assert)</h2>\n<p>Tests should be composed using a pattern that makes them easy to write, reason about, and expand.</p>\n<p>One pattern is the AAA (Arrange-Act-Assert)</p>\n<p>Which encourages the organization of the test code in a way that allows the most readability and flexibility.</p>\n<p>In step one, the Arrange step, you have to perform some setup for your test.</p>\n<p>In step two, the Act step, you perform some action.</p>\n<p>In step three, you Assert.  In this step, you assert that the thing you acted upon in step two did what you expected.</p>\n<p>here a sample of AAA using <a href=\"https://jestjs.io/\">jest</a></p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #8B949E\">/**</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * @jest-environment jsdom</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> */</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">import</span><span style=\"color: #C9D1D9\"> { emptyNode } </span><span style=\"color: #FF7B72\">from</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">'../emptyNode'</span><span style=\"color: #C9D1D9\"> </span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\"> </span><span style=\"color: #D2A8FF\">describe</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'emptyNode'</span><span style=\"color: #C9D1D9\">, () </span><span style=\"color: #FF7B72\">=></span><span style=\"color: #C9D1D9\"> {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #D2A8FF\">test</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'create a structure of nested elements and empty it'</span><span style=\"color: #C9D1D9\">, () </span><span style=\"color: #FF7B72\">=></span><span style=\"color: #C9D1D9\"> {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">      </span><span style=\"color: #8B949E\">// arrange</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">      </span><span style=\"color: #FF7B72\">const</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">container</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> document.</span><span style=\"color: #D2A8FF\">createElement</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'div'</span><span style=\"color: #C9D1D9\">)</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">      container.innerHTML </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">`</span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">        &#x3C;div></span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">          &#x3C;ul></span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">            &#x3C;li>test&#x3C;/li></span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">            &#x3C;li>test2&#x3C;/li></span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">          &#x3C;/ul></span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">        &#x3C;/div></span></span>\n<span class=\"line\"><span style=\"color: #A5D6FF\">      `</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">      document.body.</span><span style=\"color: #D2A8FF\">appendChild</span><span style=\"color: #C9D1D9\">(container)</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">      </span><span style=\"color: #8B949E\">// act</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">      </span><span style=\"color: #D2A8FF\">emptyNode</span><span style=\"color: #C9D1D9\">(container)</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">      </span><span style=\"color: #8B949E\">// assert</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">      </span><span style=\"color: #D2A8FF\">expect</span><span style=\"color: #C9D1D9\">(container.children.</span><span style=\"color: #79C0FF\">length</span><span style=\"color: #C9D1D9\">).</span><span style=\"color: #D2A8FF\">toBe</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #79C0FF\">0</span><span style=\"color: #C9D1D9\">)</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    })</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  })</span></span></code></pre>\n<h3 id=\"lifecycle\">Lifecycle:</h3>\n<p>When testing, you often execute multiple tests after each other and have some setup work that needs to happen before the tests run. Most frameworks provide helper functions to handle these scenarios.</p>\n<p>Here is an example of lifecycle methods in the Jest testing framework.</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #C9D1D9\"> </span><span style=\"color: #D2A8FF\">beforeEach</span><span style=\"color: #C9D1D9\">(() </span><span style=\"color: #FF7B72\">=></span><span style=\"color: #C9D1D9\"> {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    IntersectionHandler.</span><span style=\"color: #D2A8FF\">init</span><span style=\"color: #C9D1D9\">({})</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    document.body.innerHTML </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">''</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\"> })</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\"> </span><span style=\"color: #D2A8FF\">afterEach</span><span style=\"color: #C9D1D9\">(() </span><span style=\"color: #FF7B72\">=></span><span style=\"color: #C9D1D9\"> {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">     IntersectionHandler.</span><span style=\"color: #D2A8FF\">clear</span><span style=\"color: #C9D1D9\">()</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">     jest.</span><span style=\"color: #D2A8FF\">clearAllMocks</span><span style=\"color: #C9D1D9\">()</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\"> })</span></span></code></pre>\n<h2 id=\"matchers\">Matchers:</h2>\n<p>Matchers let you validate the results and values of your tests in different ways and are used to make sure that the results of the test match your expectations.</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #D2A8FF\">expect</span><span style=\"color: #C9D1D9\">(container.children.</span><span style=\"color: #79C0FF\">length</span><span style=\"color: #C9D1D9\">).</span><span style=\"color: #D2A8FF\">toBe</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #79C0FF\">0</span><span style=\"color: #C9D1D9\">)</span></span></code></pre>\n<p>Here the <strong>expect()</strong> function checks if the result meets the conditions defined by the matcher.</p>\n<h2 id=\"mocking\">Mocking:</h2>\n<p>An object under a test might have dependencies on other objects or services. To isolate the behavior of an object, you want to replace the other objects it interacts with by mocks that simulate the behavior of the real objects.</p>\n<p>Mocks help your tests to avoid test unreliability (flakiness) and improve the speed of your tests. They are also useful if the real objects are impractical to incorporate into tests.</p>\n<p>In short, mocking is creating objects or services that simulate the behavior of real objects.</p>\n<p>Here an example basic mock of an <strong>IntersectionObserver</strong> (a browser API that isn’t currently covered by jest’s dom implementation) using jest :</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #C9D1D9\">    Object.</span><span style=\"color: #D2A8FF\">defineProperty</span><span style=\"color: #C9D1D9\">(window, </span><span style=\"color: #A5D6FF\">'IntersectionObserver'</span><span style=\"color: #C9D1D9\">, {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">      writable: </span><span style=\"color: #79C0FF\">true</span><span style=\"color: #C9D1D9\">,</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">      value: jest.</span><span style=\"color: #D2A8FF\">fn</span><span style=\"color: #C9D1D9\">().</span><span style=\"color: #D2A8FF\">mockImplementation</span><span style=\"color: #C9D1D9\">(() </span><span style=\"color: #FF7B72\">=></span><span style=\"color: #C9D1D9\"> ({</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">          observe: jest.</span><span style=\"color: #D2A8FF\">fn</span><span style=\"color: #C9D1D9\">(),</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">          unobserve: jest.</span><span style=\"color: #D2A8FF\">fn</span><span style=\"color: #C9D1D9\">(),</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">      })),</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    });</span></span></code></pre>\n<p>place it in a ”<strong>mocks</strong>” folder and use it in your test files:</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #8B949E\">/**</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * @jest-environment jsdom</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> */</span></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">import</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">'./../__mocks__/IntersectionObserver.mock'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">import</span><span style=\"color: #C9D1D9\">  IntersectionHandler </span><span style=\"color: #FF7B72\">from</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">\"../IntersectionHandler\"</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">const</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">testCallbacks1</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> jest.</span><span style=\"color: #D2A8FF\">fn</span><span style=\"color: #C9D1D9\">()</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  </span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #D2A8FF\">beforeEach</span><span style=\"color: #C9D1D9\">(() </span><span style=\"color: #FF7B72\">=></span><span style=\"color: #C9D1D9\"> {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #8B949E\">// arrange</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    document.body.innerHTML </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">''</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    IntersectionHandler.</span><span style=\"color: #D2A8FF\">init</span><span style=\"color: #C9D1D9\">({})</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">})</span></span>\n<span class=\"line\"><span style=\"color: #D2A8FF\">afterEach</span><span style=\"color: #C9D1D9\">(() </span><span style=\"color: #FF7B72\">=></span><span style=\"color: #C9D1D9\"> {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #8B949E\">// arrange</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    IntersectionHandler.</span><span style=\"color: #D2A8FF\">clear</span><span style=\"color: #C9D1D9\">()</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    jest.</span><span style=\"color: #D2A8FF\">clearAllMocks</span><span style=\"color: #C9D1D9\">()</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">})</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #D2A8FF\">describe</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'checking  methods of handler : '</span><span style=\"color: #C9D1D9\">, ()</span><span style=\"color: #FF7B72\">=></span><span style=\"color: #C9D1D9\">{</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #D2A8FF\">test</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">'init'</span><span style=\"color: #C9D1D9\">, ()</span><span style=\"color: #FF7B72\">=></span><span style=\"color: #C9D1D9\">{</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">        </span><span style=\"color: #8B949E\">// act</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">        </span><span style=\"color: #FF7B72\">const</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">handler</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> IntersectionHandler.</span><span style=\"color: #D2A8FF\">init</span><span style=\"color: #C9D1D9\">({})</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">        </span><span style=\"color: #8B949E\">// assert</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">        </span><span style=\"color: #D2A8FF\">expect</span><span style=\"color: #C9D1D9\">(handler).</span><span style=\"color: #D2A8FF\">toBe</span><span style=\"color: #C9D1D9\">(IntersectionHandler)</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    })</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">})</span></span></code></pre>\n<p>Please note that without the mock and the initial comment</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #8B949E\">/**</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * @jest-environment jsdom</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> */</span></span></code></pre>\n<p>the test would fail as behind the scenes “IntersectionHandler.init({})” constructs a new IntersectionObserver, and our mock relies on the window object provided by jsdom</p>");

				const frontmatter = {};
				const file = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/markdown/testing/concepts.md";
				const url = undefined;
				function rawContent() {
					return "# Concepts\n\n## Testing Workflow\nDeveloping features and fixing bugs should be test driven. \n\nAn example of building out a front-end facing feature may go like this:\n\n1. Check user requirements in the ticket/issue you’re assigned to.\n1. Write a failing component test for a features required in the user story.\n1. Build the piece of the component needed so that the failing test passes.\n1. Repeat steps 2-3 until the component satisfies the user requirements.\n1. Write out all CSS required for the feature to be design complete. \n1. Add a screenshot test. \n1. Write an E2E test to ensure all pieces and integrations work together. \n1. Add performance tests if necessary to ensure the feature doesn’t introduce regressions on performance. \n\nAn example of building out a feature/change to the CLI may go like this:\n\n1. Check user requirements in the ticket/issue you’re assigned to.\n1. Write a failing unit/integration test for the feature required in the user story.1. Write the logic for the new feature/change.\n1. Capture/update a snapshot test for any changes to the printed console output. \n\nfrom [CYPRESS TESTING STRATEGY + STYLE GUIDE](https://github.com/cypress-io/cypress/blob/develop/guides/testing-strategy-and-styleguide.md)\n\n\n\n## AAA (Arrange-Act-Assert)\n\nTests should be composed using a pattern that makes them easy to write, reason about, and expand.\n\nOne pattern is the AAA (Arrange-Act-Assert)\n\nWhich encourages the organization of the test code in a way that allows the most readability and flexibility.\n\nIn step one, the Arrange step, you have to perform some setup for your test. \n\nIn step two, the Act step, you perform some action.\n\nIn step three, you Assert.  In this step, you assert that the thing you acted upon in step two did what you expected.\n\nhere a sample of AAA using [jest](https://jestjs.io/) \n\n```js\n/**\n * @jest-environment jsdom\n */\n import { emptyNode } from '../emptyNode' \n describe('emptyNode', () => {\n    test('create a structure of nested elements and empty it', () => {\n      // arrange\n      const container = document.createElement('div')\n      container.innerHTML = `\n        <div>\n          <ul>\n            <li>test</li>\n            <li>test2</li>\n          </ul>\n        </div>\n      `\n      document.body.appendChild(container)\n      // act\n      emptyNode(container)\n      // assert\n      expect(container.children.length).toBe(0)\n    })\n  })\n```\n### Lifecycle:\n\nWhen testing, you often execute multiple tests after each other and have some setup work that needs to happen before the tests run. Most frameworks provide helper functions to handle these scenarios.\n\nHere is an example of lifecycle methods in the Jest testing framework.\n\n```js\n beforeEach(() => {\n    IntersectionHandler.init({})\n    document.body.innerHTML = ''\n })\n afterEach(() => {\n     IntersectionHandler.clear()\n     jest.clearAllMocks()\n })\n```\n\n## Matchers:\n\nMatchers let you validate the results and values of your tests in different ways and are used to make sure that the results of the test match your expectations.\n\n```js\n    expect(container.children.length).toBe(0)\n```\n\nHere the **expect()** function checks if the result meets the conditions defined by the matcher. \n\n## Mocking:\n\nAn object under a test might have dependencies on other objects or services. To isolate the behavior of an object, you want to replace the other objects it interacts with by mocks that simulate the behavior of the real objects.\n\nMocks help your tests to avoid test unreliability (flakiness) and improve the speed of your tests. They are also useful if the real objects are impractical to incorporate into tests.\n\nIn short, mocking is creating objects or services that simulate the behavior of real objects.\n\n\nHere an example basic mock of an **IntersectionObserver** (a browser API that isn't currently covered by jest's dom implementation) using jest :\n\n```js\n    Object.defineProperty(window, 'IntersectionObserver', {\n      writable: true,\n      value: jest.fn().mockImplementation(() => ({\n          observe: jest.fn(),\n          unobserve: jest.fn(),\n      })),\n    });\n```\n\nplace it in a \"__mocks__\" folder and use it in your test files:\n\n```js\n/**\n * @jest-environment jsdom\n */\nimport './../__mocks__/IntersectionObserver.mock'\n\nimport  IntersectionHandler from \"../IntersectionHandler\";\n\nconst testCallbacks1 = jest.fn()\n  \n\nbeforeEach(() => {\n    // arrange\n    document.body.innerHTML = ''\n    IntersectionHandler.init({})\n})\nafterEach(() => {\n    // arrange\n    IntersectionHandler.clear()\n    jest.clearAllMocks()\n})\n\ndescribe('checking  methods of handler : ', ()=>{\n    test('init', ()=>{\n        // act\n        const handler = IntersectionHandler.init({})\n        // assert\n        expect(handler).toBe(IntersectionHandler)\n    })\n})\n```\nPlease note that without the mock and the initial comment \n```js\n/**\n * @jest-environment jsdom\n */\n```\n the test would fail as behind the scenes \"IntersectionHandler.init({})\" constructs a new IntersectionObserver, and our mock relies on the window object provided by jsdom\n\n\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"concepts","text":"Concepts"},{"depth":2,"slug":"testing-workflow","text":"Testing Workflow"},{"depth":2,"slug":"aaa-arrange-act-assert","text":"AAA (Arrange-Act-Assert)"},{"depth":3,"slug":"lifecycle","text":"Lifecycle:"},{"depth":2,"slug":"matchers","text":"Matchers:"},{"depth":2,"slug":"mocking","text":"Mocking:"}];
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