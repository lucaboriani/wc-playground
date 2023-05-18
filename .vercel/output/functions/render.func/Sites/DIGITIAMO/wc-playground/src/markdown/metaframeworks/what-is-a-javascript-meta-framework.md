# What is a JavaScript Meta-framework?

***All this text has been copied from [What is a JavaScript Meta-framework](https://www.ombulabs.com/blog/javascript/what-is-a-javascript-meta-framework.html)*** by *Lewis D'Avanzo*

What most developers call JavaScript frameworks (React, Vue, Svelte, etc) can more accurately be thought of as UI Libraries. While they can make writing the front end of websites and apps simpler, they have no opinions at all regarding what goes on further back in the stack. They don’t even have prescribed methods of organizing the folders and files in your projects.

Full-fledged frameworks (think Rails or Django, Laravel or Symphony), on the other hand, will usually be very opinionated and expect the code to be organized in a certain way, with the hope that this will lead to shorter development time by getting rid of analysis paralysis and bikeshedding.

Thankfully, there are libraries available to fill that role in the JavaScript ecosystem. Since most UI libraries are called “frameworks”, these more full-featured libraries have taken to calling themselves “meta-frameworks”.

In a nutshell, they let JavaScript developers focus on the “what” and take care of most of the “how” for you.

## “Do I need a Meta-framework?”

And the answer is every developer’s favorite – “it depends”. 


If you’re building a simple project with only a couple of pages, probably not. But, if you’re making a site or app with any kind of significant complexity, a meta-framework can help manage it by making many organizational decisions for you.

If you can answer “yes” to any of the following questions, they may be the right tool for you:

- Are you building a full-stack application, but need some guidance beyond the front end?
- Is SEO important for your app?
- Can your app be built before deployment? (eg, a static site)
- Do you have non-trivial routing needs?
- Do you have performance needs that a single page application can’t meet?
- Do opinionated tools typically improve development velocity for you and your team? (eg, less time making arbitrary decisions means more time actually building things)

## Meta Frameworks Concepts & typical features

Even though most meta-frameworks differ from each other in various ways, there are certain key features that are similar between them. Below, I’ll go through a list of some of the things offered by the more popular ones.

## Static-Site Generation and/or Server-Side Rendering

When you build a single page application (SPA), your HTML is not built in advance of a client request for your site. Instead, the server will send a mostly blank HTML file that looks something like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- import your app bundle -->
    <script src="./my-js-bundle.js"></script>
  </head>
  <body>
    <!--
      the app bundle will have a reference to this element
      and insert the HTML into the DOM here
    -->
    <div id="root">
  </body>
</html>
```

This kind of website can be sub-optimal if SEO is important to your project. When search engines, like Google, index websites, their bots will look at the HTML served before the JavaScript loads, see a mostly blank page, and move on without correctly categorizing your app. (Google says that this is no longer the case for them, but not all bots will execute JavaScript when indexing).

There are two common solutions this problem – Server-Side Rendering (SSR) and Static Site Generation (SSG). The one you choose will depend on the type of application you’re building.

## SSR

If your app can change based on who visits (like apps where a user logs in), then you might want to go with a server-side rendered app. In this type of app, your pages are built on the server when they are requested, so they arrive at the client as fully-formed HTML files, instead of the mostly blank example above.

## SSG

If your site will look the same to every visitor (ie, no dynamic content – something like a blog or portfolio) then a statically generated site might be the choice for you. In this kind of app, you write your code just like any other JavaScript project, but when you run your build command, the framework will generate a static HTML page for each route that you have defined. This way, you can cut down on the amount of data sent to the client and improve load times for your users.

Speaking of defining routes, it should be noted that you don’t typically write server-specific code with meta-frameworks. Well, if we aren’t defining functions to handle routing, how do these frameworks figure it out for us?


## Hybrid rendering

@todo


## Routing

Traditional websites use server-side routing – the client sends a request to a server for a resource at some URL and the server responds with that resource. The important thing to note is that each page would typically involve a new request to the server.

Modern, JavaScript-based sites will typically use what is called client-side routing. Instead of fetching one page per request, the initial request will fetch the data for every page of the site. Clicking on internal links will trigger a call to the browser’s History API (to change the URL) and then display the associated page. The thing to note here is that this does not involve a new request to the server. Like everything in programming this is a trade-off – you add some additional loading time up front in exchange for faster navigating between pages.

Without a meta-framework, many JavaScript projects will use component-based routing. Consider this React example, using react-router:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MyApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};
```


These kinds of libraries have APIs that are easy to reason about and they get the job done. But they tend to be a little boilerplate-y and it’s another dependency that you have to manage.

The popular trend with meta-frameworks right now is file-based routing. Instead of having a root file where you declare your routes using components, the structure of your folders and files will determine the routes in your site. They will typically live in a specially named folder (usually routes or pages) and have a structure that is something like this:

```
    ──pages
    ├── about
    │   └── index.js
    ├── contact
    │   └── index.js
    └── index.js # the '/' path
```

Most meta-frameworks also support dynamic route names. For example, if you had a blog with a /posts route, you could create a file at ```pages/posts/[id].js``` (note: those are actual brackets in the file name, not a placeholder) and the framework will have some way to let you insert that parameter at build time which would render a URL, such as https://my-cool-blog/posts/1.

This last point is a nice segue into another common feature of JS meta-frameworks…

## Data Fetching

When you have a dynamic route, as in the example above, you might wonder how we fetch the data to let our framework know what post number it should display. In apps with server-side routing, you would have a function that handles requests to /posts/:id that would:

- parse the :id parameter
- fetch the correct resource
- send that resource back to the client

But since many JS meta-frameworks use client-side routing, they’ll provide you with an API to handle fetch requests so that you can populate your site with data at buildtime (SSG) or runtime (SSR).

Next.js, a React meta-framework, uses special functions in page components – getServerSideProps, getStaticPaths, or getStaticProps – where you place your logic to fetch external resources.

This example, based on one from [their docs](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props#using-getserversideprops-to-fetch-data-at-request-time), shows how you’d fetch data when server-side rendering a page:

```js
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://my-cms.com/data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

// automatically available in your page component
const MyApp = ({ data }) => {...};
```

Ok, so the meta-framework will handle routing and data fetching for us – awesome! But that still doesn’t explain how our sites are being served to users. The files in our routes/pages folders only define our UI and API logic. How are these files going to get to our users if we don’t have any server logic?


## “Serverless” Architecture

In web frameworks like Rails or Django, we typically write the server logic that goes with our views. Modern meta-frameworks tend to focus on a newer style of architecture known as “Serverless” (in quotes because there’s still a server – it’s just someone elses and you don’t have to write it yourself). You may have also heard this style referred to as “JAMStack” Architecture (JavaScript, APIs, Markup).

Either way, the main purpose of this style is for the developer to focus solely on what your app is serving to the client, not how. The meta-framework will include the necessary code when building to either handle the requests for you (based on how your `routes/pages` are organized) or serve a single page that uses client-side routing entirely.


## Additional Goodies



Each meta-framework typically provides extra features that attempt to make them stand out from the others. 

Next.js offers framework-specific components like ```<Image />```, which extends the native ```<img />``` tag to include abstractions for lazy-loading and dynamic resizing. 

Nuxt.js uses Vue’s transition component to make custom transitions between pages a breeze. 

SvelteKit has the `sveltekit:prefetch` attribute for links – this tells the framework to fetch data in advance when a user hovers over a link that will need remote data.

And this is just the tip of the iceberg – these meta-frameworks are adding improvements all the time.

---

Okay that was a lot. Not enough ?

## List of Most common Meta-frameworks

- [Svelte](https://svelte.dev/) & [Svelte kit](https://kit.svelte.dev/)
- [React](https://reactjs.org/) & [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/) & [Remix](https://remix.run/)
- [Vue](https://vuejs.org/) & [Nuxt](https://nuxt.com/)

## The new generation (yess, already) 

- [Solid](https://www.solidjs.com/) & [Solid Start](https://start.solidjs.com/getting-started/what-is-solidstart)
- [Astro](https://astro.build/)
- [Qwik](https://qwik.builder.io/)
- [Enhance](https://enhance.dev/docs/)


## Useful links

- [The new wave of Javascript web frameworks](https://frontendmastery.com/posts/the-new-wave-of-javascript-web-frameworks/)  (Make sense of the proliferation of new Javascript web frameworks. A deep dive into the problems at scale and the recent evolution of innovation)

- [Composable Decoupled Frontends aka microfrontends](https://microfrontend.dev/) 

- [12 Days of Enhancing](https://dev.to/macdonst/series/21146) (enhance meta framework)