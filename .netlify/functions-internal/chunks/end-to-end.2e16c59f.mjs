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

				const html = updateImageReferences("<h1 id=\"e2e-testing\">E2E testing</h1>\n<p>End-to-end testing, also known as E2E testing, is a methodology used for ensuring that applications behave as expected and that the flow of data is maintained for all kinds of user tasks and processes. This type of testing approach starts from the end user’s perspective and simulates a real-world scenario. For example, on a sign-up form, you can expect a user to perform one or more of these actions:</p>\n<ul>\n<li>Enter a blank email and password</li>\n<li>Enter a valid email and password</li>\n<li>Enter an invalid email and password</li>\n<li>Click a sign-up button</li>\n</ul>\n<p>You can use end-to-end testing to verify that all these actions work as a user might expect.</p>\n<h1 id=\"why-should-i-care\">Why should I care ?</h1>\n<p>End-to-end testing has been widely adopted because it:</p>\n<ul>\n<li>Helps teams expand their test coverage by adding more detailed test cases than other testing methods like unit and functional testing.</li>\n<li>Ensures the application performs correctly by running the test cases based on the end user’s behavior.</li>\n<li>Helps release teams reduce the time to market by allowing them to automate critical user paths.</li>\n<li>Reduces the overall cost of building and maintaining software by decreasing the time it takes to test software.</li>\n<li>Helps predictably and reliably detect bugs.</li>\n</ul>\n<p>from <a href=\"https://circleci.com/blog/what-is-end-to-end-testing/\">What is end-to-end testing?</a></p>\n<p>E2E Testing is a technique that tests your app from the web browser through to the back end of your application, as well as testing integrations with third-party APIs and services. These types of tests are great at making sure your entire app is functioning as a cohesive whole.</p>\n<p>End-to-end tests are great at verifying your app runs as intended, from the front end to the back end.</p>\n<p>However, end-to-end tests can be more difficult to set up, run, and maintain. <em><strong>There are often infrastructure needs in setting up a backend for testing purposes. Your team will need to develop a strategy on how to handle this complexity</strong></em>.</p>\n<h2 id=\"benefits-of-end-to-end-tests\">Benefits of end-to-end tests:</h2>\n<ul>\n<li>Ensure your app is functioning as a cohesive whole</li>\n<li>Tests match the user experience</li>\n<li>Can be written by developers or QA Teams</li>\n<li>Can be used for integration testing as well</li>\n</ul>\n<h2 id=\"considerations-for-end-to-end-tests\">Considerations for end-to-end tests:</h2>\n<ul>\n<li>More difficult to set up, run, and maintain</li>\n<li>Provision testing infrastructure in CI</li>\n<li>Testing certain scenarios require more setup</li>\n</ul>\n<h2 id=\"common-scenarios-for-end-to-end-tests\">Common scenarios for end-to-end tests:</h2>\n<ul>\n<li>Validating critical workflows like authentication and purchasing</li>\n<li>Ensuring data is persisted and displayed through multiple screens</li>\n<li>Running Smoke Tests and System Checks before deployment</li>\n</ul>\n<p>from <a href=\"https://docs.cypress.io/guides/core-concepts/testing-types#What-is-E2E-Testing\">What is E2E Testing?</a></p>");

				const frontmatter = {};
				const file = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/markdown/testing/end-to-end.md";
				const url = undefined;
				function rawContent() {
					return "# E2E testing\n\nEnd-to-end testing, also known as E2E testing, is a methodology used for ensuring that applications behave as expected and that the flow of data is maintained for all kinds of user tasks and processes. This type of testing approach starts from the end user’s perspective and simulates a real-world scenario. For example, on a sign-up form, you can expect a user to perform one or more of these actions:\n\n- Enter a blank email and password\n- Enter a valid email and password\n- Enter an invalid email and password\n- Click a sign-up button\n\nYou can use end-to-end testing to verify that all these actions work as a user might expect.\n\n# Why should I care ?\n\nEnd-to-end testing has been widely adopted because it:\n\n- Helps teams expand their test coverage by adding more detailed test cases than other testing methods like unit and functional testing.\n- Ensures the application performs correctly by running the test cases based on the end user’s behavior.\n- Helps release teams reduce the time to market by allowing them to automate critical user paths.\n- Reduces the overall cost of building and maintaining software by decreasing the time it takes to test software.\n- Helps predictably and reliably detect bugs.\n\nfrom [What is end-to-end testing?](https://circleci.com/blog/what-is-end-to-end-testing/)\n\n\n\nE2E Testing is a technique that tests your app from the web browser through to the back end of your application, as well as testing integrations with third-party APIs and services. These types of tests are great at making sure your entire app is functioning as a cohesive whole.\n\n\n\nEnd-to-end tests are great at verifying your app runs as intended, from the front end to the back end.\n\nHowever, end-to-end tests can be more difficult to set up, run, and maintain. ***There are often infrastructure needs in setting up a backend for testing purposes. Your team will need to develop a strategy on how to handle this complexity***.\n\n## Benefits of end-to-end tests:\n\n- Ensure your app is functioning as a cohesive whole\n- Tests match the user experience\n- Can be written by developers or QA Teams\n- Can be used for integration testing as well\n\n## Considerations for end-to-end tests:\n- More difficult to set up, run, and maintain\n- Provision testing infrastructure in CI\n- Testing certain scenarios require more setup\n\n## Common scenarios for end-to-end tests:\n- Validating critical workflows like authentication and purchasing\n- Ensuring data is persisted and displayed through multiple screens\n- Running Smoke Tests and System Checks before deployment\n\nfrom [What is E2E Testing?](https://docs.cypress.io/guides/core-concepts/testing-types#What-is-E2E-Testing)\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"e2e-testing","text":"E2E testing"},{"depth":1,"slug":"why-should-i-care","text":"Why should I care ?"},{"depth":2,"slug":"benefits-of-end-to-end-tests","text":"Benefits of end-to-end tests:"},{"depth":2,"slug":"considerations-for-end-to-end-tests","text":"Considerations for end-to-end tests:"},{"depth":2,"slug":"common-scenarios-for-end-to-end-tests","text":"Common scenarios for end-to-end tests:"}];
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
