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

				const html = updateImageReferences("<h1 id=\"types-of-tests\">Types of tests</h1>\n<p>from <a href=\"https://gabrieltanner.org/blog/testing-introduction/\">An Introduction to testing in Javascript</a> and <a href=\"https://docs.cypress.io/guides/core-concepts/testing-types#End-to-End-or-Component-Tests\">Testing Types</a> :</p>\n<p>There are a few different types of tests, and it is essential to know how they differ from each other. Most applications will require you to write multiple kinds of tests to get the best result possible.</p>\n<h2 id=\"unit-tests\">Unit tests</h2>\n<p>The purpose of a unit test is to validate the functionality of a relatively small piece of software, independently from other parts. Unit tests are narrow in scope, which allows us to cover all cases to ensure that every single part works correctly.</p>\n<p>The downside to these kinds of tests is that they are not executed on real devices and therefore have lower fidelity than the other types of tests.</p>\n<h2 id=\"integration-tests\">Integration tests</h2>\n<p>Integration tests demonstrate that the different parts of your application work together in a real-life production environment. They verify that two separate modules or components are working together in the way they should.</p>\n<p>These tests are of medium size and have a much higher execution time then Unit tests. They aren’t executed as often but are still vital for checking the health status of your applications. Their fidelity is also a lot higher because they run on real devices and verify the actual interaction between various components of your application.</p>\n<h2 id=\"end-to-end-tests\">End-to-End tests</h2>\n<p>E2E Testing is a technique that tests your app from the web browser through to the back end of your application, as well as testing integrations with third-party APIs and services. These types of tests are great at making sure your entire app is functioning as a cohesive whole.</p>\n<p>E2E tests will also run on real devices just like integration tests and therefore, will again be quite slow in their execution.</p>\n<h2 id=\"component-testing\">Component testing</h2>\n<p>Component tests differ from end-to-end tests in that instead of visiting a URL to pull up an entire app, a component can be “mounted” and tested on its own. This allows you to focus on testing only the component’s functionality and not worrying about other nuances with testing a component as part of the larger application.</p>\n<p>Typically, a component test is written by the developers working on the component. The code for the test lives alongside the component code, and it is common for tests to be coded simultaneously with the component, helping developers verify the required functionality while building it.</p>\n<p>see also <a href=\"https://learn.cypress.io/testing-foundations/the-testing-pyramid\">What is the Testing Pyramid?</a></p>\n<p>Of course there are a lot more of smart things to copy and paste but this should give you an idea :)</p>");

				const frontmatter = {};
				const file = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/markdown/testing/types-of-testing.md";
				const url = undefined;
				function rawContent() {
					return "# Types of tests\n\nfrom [An Introduction to testing in Javascript](https://gabrieltanner.org/blog/testing-introduction/) and [Testing Types](https://docs.cypress.io/guides/core-concepts/testing-types#End-to-End-or-Component-Tests) :\n\nThere are a few different types of tests, and it is essential to know how they differ from each other. Most applications will require you to write multiple kinds of tests to get the best result possible.\n\n## Unit tests\n\nThe purpose of a unit test is to validate the functionality of a relatively small piece of software, independently from other parts. Unit tests are narrow in scope, which allows us to cover all cases to ensure that every single part works correctly.\n\nThe downside to these kinds of tests is that they are not executed on real devices and therefore have lower fidelity than the other types of tests.\n\n## Integration tests\n\nIntegration tests demonstrate that the different parts of your application work together in a real-life production environment. They verify that two separate modules or components are working together in the way they should.\n\nThese tests are of medium size and have a much higher execution time then Unit tests. They aren't executed as often but are still vital for checking the health status of your applications. Their fidelity is also a lot higher because they run on real devices and verify the actual interaction between various components of your application.\n\n## End-to-End tests\n\nE2E Testing is a technique that tests your app from the web browser through to the back end of your application, as well as testing integrations with third-party APIs and services. These types of tests are great at making sure your entire app is functioning as a cohesive whole.\n\nE2E tests will also run on real devices just like integration tests and therefore, will again be quite slow in their execution.\n\n\n## Component testing\n\nComponent tests differ from end-to-end tests in that instead of visiting a URL to pull up an entire app, a component can be \"mounted\" and tested on its own. This allows you to focus on testing only the component's functionality and not worrying about other nuances with testing a component as part of the larger application.\n\nTypically, a component test is written by the developers working on the component. The code for the test lives alongside the component code, and it is common for tests to be coded simultaneously with the component, helping developers verify the required functionality while building it.\n\nsee also [What is the Testing Pyramid?](https://learn.cypress.io/testing-foundations/the-testing-pyramid)\n\n\nOf course there are a lot more of smart things to copy and paste but this should give you an idea :) ";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"types-of-tests","text":"Types of tests"},{"depth":2,"slug":"unit-tests","text":"Unit tests"},{"depth":2,"slug":"integration-tests","text":"Integration tests"},{"depth":2,"slug":"end-to-end-tests","text":"End-to-End tests"},{"depth":2,"slug":"component-testing","text":"Component testing"}];
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
