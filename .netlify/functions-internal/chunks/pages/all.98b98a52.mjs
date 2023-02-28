import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot, _ as __astro_tag_component__ } from '../astro.c4ed0d97.mjs';
import 'html-escaper';
/* empty css                           *//* empty css                           *//* empty css                          */import { useState } from 'react';
import axios from 'axios';
import { s as styles } from '../index.38d8fdf6.be9cd15e.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import consumers from 'stream/consumers';
import mongoose from 'mongoose';
import '@lit/reactive-element';
import 'lit-html';
import { LitElement, html, css } from 'lit-element/lit-element.js';
import 'lit-html/is-server.js';
/* empty css                           *//* empty css                               *//* empty css                           */import { useSSRContext, reactive, onMounted, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
/* empty css                             */
const $$Astro$d = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Navigation;
  const pages = [
    {
      link: "/",
      text: "Home"
    },
    {
      link: "/lit",
      text: "LIT",
      children: [
        {
          link: "/lit/lit-basic/",
          text: "Lit basic"
        },
        {
          link: "/lit/composing-templates",
          text: "Composing templates"
        },
        {
          link: "/lit/lit-react",
          text: "using lit and react"
        },
        {
          link: "/lit/lit-vue",
          text: "using lit and vue"
        }
      ]
    },
    {
      link: "/planets",
      text: "Sw Planets"
    },
    {
      link: "/tasks",
      text: "Tasklist"
    }
  ];
  return renderTemplate`
${maybeRenderHead($$result)}<div class="nav-links astro-PUX6A34N">
    <ul class="astro-PUX6A34N">
        ${pages.map((page) => renderTemplate`<li class="astro-PUX6A34N">
                <a${addAttribute(page.link, "href")} class="astro-PUX6A34N">
                    ${page.text}
                </a>
                ${page.children ? renderTemplate`<div class="sublinks astro-PUX6A34N">
                            <ul class="astro-PUX6A34N">
                                ${page.children.map((child) => renderTemplate`<li class="astro-PUX6A34N">
                                    <a${addAttribute(child.link, "href")} class="astro-PUX6A34N">${child.text}</a>
                                </li>`)}
                                
                            </ul>
                        </div>` : null}
            </li>`)}
    </ul>
</div>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/Navigation.astro");

const $$Astro$c = createAstro();
const $$Hamburger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Hamburger;
  return renderTemplate`${maybeRenderHead($$result)}<div class="hamburger">
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
</div>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/Hamburger.astro");

const $$Astro$b = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="header">
    <nav>
        ${renderComponent($$result, "Hamburger", $$Hamburger, {})}
        ${renderComponent($$result, "Navigation", $$Navigation, {})}
    </nav>
</header>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/Header.astro");

const $$Astro$a = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito">
	${renderHead($$result)}</head>
	<body>
		${renderComponent($$result, "Header", $$Header, {})}
		<div class="container">
			${renderSlot($$result, $$slots["main"])}
			${renderSlot($$result, $$slots["aside"])}
		</div>
		
		
	</body>
</html>`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/layouts/Layout.astro");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$9 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to The playground", "class": "astro-J7PV25F6" }, { "main": ($$result2) => renderTemplate(_a$1 || (_a$1 = __template$1(["", '<main class="main astro-J7PV25F6">\n		<h1 class="astro-J7PV25F6">Welcome to the Playground</h1>\n		<section id="cont" class="astro-J7PV25F6">\n			<div class="tab astro-J7PV25F6">\n				<h2 class="astro-J7PV25F6">... the nth counter</h2>\n				<p class="instructions astro-J7PV25F6">\n					', '\n					<script type="module" src="./src/components/wc/counter.js"><\/script>\n				</p>\n			</div>\n			<div class="tab astro-J7PV25F6">\n				<h2 class="astro-J7PV25F6">\n					<span class="astro-J7PV25F6">a normal button (browser default styles)</span>\n				</h2>\n				<button class="astro-J7PV25F6">\n					hello\n				</button>\n\n				<h2 class="astro-J7PV25F6">\n					<span class="astro-J7PV25F6">A styled but useless Custom button :(</span>\n				</h2>\n				\n				', '\n				<script type="module" src="./src/components/wc/buttons/CustomButton.js"><\/script>\n				<small class="astro-J7PV25F6">shadow dom - encapsulation</small>\n			</div>\n			<div class="tab astro-J7PV25F6">\n				<h2 class="astro-J7PV25F6">Expanding List example</h2>\n				<p class="instructions astro-J7PV25F6">\n					', '\n					<script type="module" src="./src/components/wc/expandingList.js"><\/script>\n				</p>\n			</div>\n		</section>\n	</main>'])), maybeRenderHead($$result2), renderComponent($$result2, "my-counter", "my-counter", { "class": "astro-J7PV25F6" }), renderComponent($$result2, "custom-button", "custom-button", { "title": "a styled button", "class": "astro-J7PV25F6" }), renderComponent($$result2, "expanding-list", "expanding-list", { "class": "astro-J7PV25F6" })) })}
`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/index.astro");

const $$file$9 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/index.astro";
const $$url$9 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$3,
    file: $$file$9,
    url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$8 = createAstro();
const $$Spectrum = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Spectrum;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spectrum" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["", '<script src="https://jspm.dev/@spectrum-web-components/bundle/elements.js" type="module" async><\/script><link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-global.css"><link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-medium.css"><link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-light.css"><link rel="stylesheet" href="node_modules/@spectrum-css/page/dist/index-vars.css"><link rel="stylesheet" href="node_modules/@spectrum-css/button/dist/index-vars.css">'])), renderComponent($$result2, "sp-theme", "sp-theme", { "scale": "large", "color": "dark" }, { "default": () => renderTemplate`
        
        ${renderComponent($$result2, "sp-action-group", "sp-action-group", { "size": "m" }, { "default": () => renderTemplate`
    ${renderComponent($$result2, "sp-action-button", "sp-action-button", {}, { "default": () => renderTemplate`Edit` })}
    ${renderComponent($$result2, "sp-action-button", "sp-action-button", {}, { "default": () => renderTemplate`
        ${renderComponent($$result2, "sp-icon-edit", "sp-icon-edit", { "slot": "icon" })}
        Edit
    ` })}
    ${renderComponent($$result2, "sp-action-button", "sp-action-button", {}, { "default": () => renderTemplate`
        ${renderComponent($$result2, "sp-icon-edit", "sp-icon-edit", { "slot": "icon" })}
    ` })}
    ${renderComponent($$result2, "sp-action-button", "sp-action-button", { "hold-affordance": true }, { "default": () => renderTemplate`
        ${renderComponent($$result2, "sp-icon-edit", "sp-icon-edit", { "slot": "icon" })}
    ` })}
` })}
    ` })) })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/spectrum.astro");

const $$file$8 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/spectrum.astro";
const $$url$8 = "/spectrum";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Spectrum,
    file: $$file$8,
    url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

async function getPlanets() {
    let data = await fetch("https://swapi.dev/api/planets");
    let planetsData = await data.json();
   
    return planetsData.results
}

async function getPlanet(slug) {
    let data = await fetch("https://swapi.dev/api/planets/" + slug);
    let results = await data.json();
      
    return results
}

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    getPlanet,
    getPlanets
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$2;
  let results = await getPlanets();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "all planets", "class": "astro-HZQST4HH" }, { "aside": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<aside class="aside astro-HZQST4HH">
        <ul class="astro-HZQST4HH">
            <li class="astro-HZQST4HH">
                <a href="./lit/lit-basic" class="astro-HZQST4HH">
                    lit: basic
                </a>
            </li>
            
        </ul>
    </aside>`, "main": ($$result2) => renderTemplate`<main class="main astro-HZQST4HH">
        <h1 class="astro-HZQST4HH">
            All Planets
        </h1>
        <ul class="astro-HZQST4HH">
            ${results.map((planet, index) => renderTemplate`<li class="astro-HZQST4HH">
                        <a${addAttribute(`/planets/${index + 1}`, "href")} class="astro-HZQST4HH">${planet.name}</a> 
                    </li>`)}
        </ul>
    </main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/planets/index.astro");

const $$file$7 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/planets/index.astro";
const $$url$7 = "/planets";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$7,
    url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let planet = await getPlanet(id);
  const excluded = ["residents", "films", "created", "edited", "url"];
  const fields = Object.keys(planet).filter((key) => {
    if (!excluded.includes(key)) {
      return key;
    }
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": planet.name, "class": "astro-SOMDCPLR" }, { "asied": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<aside class="aside astro-SOMDCPLR">
        <ul class="astro-SOMDCPLR">
            <li class="astro-SOMDCPLR">
                <a href="./lit/lit-basic" class="astro-SOMDCPLR">
                    lit: basic
                </a>
            </li>
            
        </ul>
    </aside>`, "main": ($$result2) => renderTemplate`<main class="main astro-SOMDCPLR">
        <h1 class="astro-SOMDCPLR">
            ${planet.name}
        </h1>
        <div class="astro-SOMDCPLR">
            ${fields.map((key) => renderTemplate`<div class="astro-SOMDCPLR">
                        <span class="astro-SOMDCPLR">${key.replace("_", " ")}</span> 
                        <span class="astro-SOMDCPLR">${planet[key]}</span>
                    </div>`)}
        </div>
    </main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/planets/[id].astro");

const $$file$6 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/planets/[id].astro";
const $$url$6 = "/planets/[id]";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file$6,
    url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const Task$1 = ({
  task,
  styles,
  updateTask,
  editTask,
  deleteTask
}) => {
  return /* @__PURE__ */ jsxs("div", {
    className: styles.task_container,
    children: [/* @__PURE__ */ jsx("input", {
      type: "checkbox",
      className: styles.check_box,
      checked: task.completed,
      onChange: () => updateTask(task._id)
    }), /* @__PURE__ */ jsx("p", {
      className: task.completed ? styles.task_text + " " + styles.line_through : styles.task_text,
      style: {
        color: "#333"
      },
      children: task.task
    }), /* @__PURE__ */ jsx("button", {
      onClick: () => editTask(task._id),
      className: styles.edit_task,
      children: "✎"
    }), /* @__PURE__ */ jsx("button", {
      onClick: () => deleteTask(task._id),
      className: styles.remove_task,
      children: "✖"
    })]
  });
};
__astro_tag_component__(Task$1, "@astrojs/react");

const Form = ({
  task,
  styles,
  addTask,
  handleChange
}) => {
  return /* @__PURE__ */ jsxs("form", {
    onSubmit: (e) => {
      e.preventDefault();
      addTask(e);
    },
    className: styles.form_container,
    children: [/* @__PURE__ */ jsx("input", {
      className: styles.input,
      type: "text",
      placeholder: "Task to be done...",
      onChange: handleChange,
      value: task.task
    }), /* @__PURE__ */ jsx("button", {
      type: "submit",
      className: styles.submit_btn,
      children: task._id ? "Update" : "Add"
    })]
  });
};
__astro_tag_component__(Form, "@astrojs/react");

const url = "http://localhost:3000/api/tasks";
function ReactTasks(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [task, setTask] = useState({
    task: ""
  });
  const handleChange = ({
    currentTarget: input
  }) => {
    input.value === "" ? setTask({
      task: ""
    }) : setTask((prev) => ({
      ...prev,
      task: input.value
    }));
  };
  const addTask = async (e) => {
    e.preventDefault();
    try {
      if (task._id) {
        const {
          data
        } = await axios.post(url + "/" + task._id + ".json", {
          task: task.task
        });
        const originalTasks = [...tasks];
        const index = originalTasks.findIndex((t) => t._id === task._id);
        originalTasks[index] = data.data;
        setTasks(originalTasks);
        setTask({
          task: ""
        });
      } else {
        const {
          data
        } = await axios.post(url + ".json", {
          task: task.task
        });
        setTasks((prev) => [...prev, data.data]);
        setTask({
          task: ""
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const editTask = (id) => {
    const currentTask = tasks.filter((task2) => task2._id === id);
    setTask(currentTask[0]);
  };
  const updateTask = async (id) => {
    try {
      const originalTasks = [...tasks];
      const index = originalTasks.findIndex((t) => t._id === id);
      const {
        data
      } = await axios.post(url + "/" + id + ".json", {
        completed: !originalTasks[index].completed
      });
      originalTasks[index] = data.data;
      setTasks(originalTasks);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTask = async (id) => {
    try {
      const {
        data
      } = await axios.delete(url + "/" + id + ".json");
      setTasks((prev) => prev.filter((task2) => task2._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return /* @__PURE__ */ jsxs("main", {
    className: styles.main,
    children: [/* @__PURE__ */ jsx("h1", {
      className: styles.heading,
      children: "Yess, another TodoList :( "
    }), /* @__PURE__ */ jsxs("div", {
      className: styles.container,
      children: [/* @__PURE__ */ jsx(Form, {
        task,
        styles,
        addTask,
        handleChange
      }), tasks.map((task2) => /* @__PURE__ */ jsx(Task$1, {
        task: task2,
        styles,
        updateTask,
        editTask,
        deleteTask
      }, task2._id)), tasks.length === 0 && /* @__PURE__ */ jsx("h2", {
        className: styles.no_tasks,
        children: "No tasks"
      })]
    })]
  });
}
__astro_tag_component__(ReactTasks, "@astrojs/react");

const $$Astro$5 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$1;
  let tasks = [];
  try {
    const response = await fetch("http://localhost:3000/api/tasks.json");
    tasks = await response.json();
  } catch (error) {
    console.log(error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lit React", "class": "astro-ENZ3LIWP" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="main astro-ENZ3LIWP">
		<h1 class="astro-ENZ3LIWP">React Task List</h1>
        ${renderComponent($$result2, "ReactTasks", ReactTasks, { "client:load": true, "tasks": tasks, "client:component-hydration": "load", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/react/tasks/Tasks", "client:component-export": "default", "class": "astro-ENZ3LIWP" })}
	</main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/tasks/index.astro");

const $$file$5 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/tasks/index.astro";
const $$url$5 = "/tasks";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$5,
    url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

mongoose.set('strictQuery', true);

const taskSchema = new mongoose.Schema({
	task: { type: String, required: true },
	completed: { type: Boolean, default: false },
});

const Task = mongoose.models?.Task || mongoose.model("Task", taskSchema);

const DB_URL = "mongodb+srv://zerodigi:t3ach15fun77@cluster0.jfmeid4.mongodb.net/myTodos?retryWrites=true&w=majority"
	;

let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const options = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		};

		cached.promise = mongoose.connect(DB_URL, options)
			.then((mongoose) => {
			return mongoose;
		});
	}
	cached.conn = await cached.promise;
	return cached.conn;
};

/**
 * Gets all Tasks
 * @returns Response
 */
async function get$1() {
	try {
		await dbConnect();
		const tasks = await Task.find();
		const body =tasks.map(task => {
			return {
				task: task.task,
				_id: task._id.toString(),
				completed:task.completed
			} 
		});
		return  new Response(JSON.stringify(body), {
			status: 200,
			ok: true
		}); 
	} catch (error) {
		console.log(error.message);
	  throw new Error(error.message);
	}
}
/**
 * Creates a new task
 * 
 * @param {Object} Astro context Object 
 * @returns Response
 */
async function post$1({ params, request }) {
	let result, message;
	let data = await consumers.json(request.body);
	try {
		await dbConnect();
		result = await new Task(data).save();
		message = 'Task Created Successfully';
		return new Response(JSON.stringify({ 
			data: result, 
			message: message 
		}), {
			status: 200,
			headers: {
				"Content-Type": "application/json"
			}
		});
	} catch (error) {
		return new Response(JSON.stringify({error:error, message:'could not save Task'}), {
			status: 500,
			headers: {
			  "Content-Type": "application/json"
			}
		});	
	}
}

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    get: get$1,
    post: post$1
}, Symbol.toStringTag, { value: 'Module' }));

/* export default async (req, res) => {
	const { method } = req;
	const { id } = req.query;

	// Connect to database
	await dbConnect();

	if (method === "PUT") {
		try {
			const result = await Task.findByIdAndUpdate(
				id,
				{ $set: req.body },
				{ new: true }
			);

			res
				.status(200)
				.json({ data: result, message: "Task Updated Successfully" });
		} catch (error) {
			res.status(500).json({ message: "Internal Server Error" });
			console.log(error);
		}
	}

	if (method === "DELETE") {
		try {
			await Task.findByIdAndDelete(id);
			res.status(200).json({ message: "Task Deleted Successfully" });
		} catch (error) {
			res.status(500).json({ message: "Internal Server Error" });
			console.log(error);
		}
	}
}; */

async function get({ params }) {
	const id = params.taskId;
	let task;
	await dbConnect();
	try {
		task = await Task.findById(id);
	} catch (error) {
		return new Response(JSON.stringify({error:'resource not found'}), {
			status: 400,
			headers: {
			  "Content-Type": "application/json"
			}
		});	
	}
	
	return new Response(JSON.stringify(task), {
		status: 200,
		headers: {
			"Content-Type": "application/json"
		}
	});
}

async function post({ params, request }) {
	const id = params.taskId;
	let result, message;
	let data = await consumers.json(request.body);
	try {
		await dbConnect();
		if(id){
			// update
			result = await Task.findByIdAndUpdate(
				id,
				{ $set: data },
				{ new: true }
			);
			message = 'Task Updated Successfully';
		} else {
			throw new Error('this route requires an id')
		}
		
		return new Response(JSON.stringify({ 
			data: result, 
			message: message 
		}), {
			status: 200,
			headers: {
				"Content-Type": "application/json"
			}
		});
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify({error:error, message:'could not update resource'}), {
			status: 500,
			headers: {
			  "Content-Type": "application/json"
			}
		});	
	}
}

async function del({ params, request }) {
	const id = params.taskId;
	await dbConnect();
	try {
		await Task.findByIdAndDelete(id);
		return new Response(JSON.stringify({ 
			message: "Task Deleted Successfully" 
		}), {
			status: 200,
			headers: {
				"Content-Type": "application/json"
			}
		});
		
	} catch (error) {
		return new Response(JSON.stringify({error:error,message:'could not delete resource'}), {
			status: 500,
			headers: {
			  "Content-Type": "application/json"
			}
		});	
	}
}

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    del,
    get,
    post
}, Symbol.toStringTag, { value: 'Module' }));

const tagName = 'my-element';

class MyElement extends LitElement {
  render() {
    return html` <p>Hello world! From my-element</p> `;
  }
}

customElements.define(tagName, MyElement);

class MyButton extends LitElement {
  static properties = {
        text: {attribute: true},
  };

  static styles = css`
    button {
      color: whitesmoke; 
      background-color:blue; 
      font-size:2em;  
      border: solid 2px whitesmoke;
      border-radius:.25em;
      padding: 1em .5em;
      cursor:pointer;
      transition: all .3s ease;
    }
    button:hover {
        color: black;
        background-color:whitesmoke;
    }
  `;
  
  render() {
    return html`
      <button @click="${this._handleClick}">
        ${this.text}
      </button>
    `;
  }
  connectedCallback() {
    console.log('on connect');
    super.connectedCallback();
  }
  _handleClick(){
    console.log('click');
    
  }
}
customElements.define('my-button', MyButton);

const $$Astro$4 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index;
  let posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../markdown/lit.md": () => import('../lit.d9a4fe5d.mjs')}), () => "../../markdown/lit.md");
  let post = posts[0];
  let markdownUseless = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../markdown/useless-button.md": () => import('../useless-button.036e1244.mjs')}), () => "../../markdown/useless-button.md");
  let useless = markdownUseless[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lit Basic", "class": "astro-TODWRKOZ" }, { "aside": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<aside class="aside astro-TODWRKOZ">
        <ul class="astro-TODWRKOZ">
            <li class="astro-TODWRKOZ">
                <a href="./lit/lit-basic" class="astro-TODWRKOZ">
                    lit: basic
                </a>
            </li>
            <li class="astro-TODWRKOZ">
                <a href="./lit/composing-templates" class="astro-TODWRKOZ">
                    lit : composing templates
                </a>
            </li>
            <li class="astro-TODWRKOZ">
                <a href="./lit/lit-react" class="astro-TODWRKOZ">
                    lit : use lit in react
                </a>
            </li>
            <li class="astro-TODWRKOZ">
                <a href="./lit/lit-vue" class="astro-TODWRKOZ">
                    lit : use lit in vue
                </a>
            </li>
        </ul>
    </aside>`, "main": ($$result2) => renderTemplate`<main class="main astro-TODWRKOZ">
        ${renderComponent($$result2, "post.Content", post.Content, { "class": "astro-TODWRKOZ" })}
        <h2 class="astro-TODWRKOZ">Lit Basics:</h2>
		<p class="astro-TODWRKOZ">
			a dummy element...
		</p>
       ${renderComponent($$result2, "MyElement", MyElement, { "class": "astro-TODWRKOZ" })}
       <hr class="astro-TODWRKOZ">
       <p class="astro-TODWRKOZ">
        ...and a useless button
        </p>
        ${renderComponent($$result2, "MyButton", MyButton, { "text": "some text", "class": "astro-TODWRKOZ" })}
        ${renderComponent($$result2, "useless.Content", useless.Content, { "class": "astro-TODWRKOZ" })}
      
    </main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/index.astro");

const $$file$4 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/index.astro";
const $$url$4 = "/lit";

const _page8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file$4,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

class MyHeader extends LitElement {
  static properties = {
        text: {attribute: true},
  };

  static styles = css`
    header {
      font-size:2em;  
      border-bottom: solid 1px whitesmoke;
      margin-mottom:1em;
      
      top:0;
      width:100%;
    }
  `;
  render() {
    return html`
      <header>${this.text}</header>
    `;
  }
}
customElements.define('my-header', MyHeader);

class MyArticle extends LitElement {
  static properties = {
        text: {attribute: true},
  }; 
  static styles = css`
    article {
      font-size:1.5em;  
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      min-height:calc(100vh - 80px);
    }
  `; 
  render() {
    return html`
      <article>${this.text}</article>
    `;
  }
}
customElements.define('my-article', MyArticle);

class MyFooter extends LitElement {
    static styles = css`
        footer {
            padding:1em 2em;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            color:black;
            background-color:whitesmoke;
        }
    `;   
    render() {
        return html`
        <footer>footer</footer>
        `;
    }
}
customElements.define('my-footer', MyFooter);

class MyPage extends LitElement {
  static properties = {
    article: {attribute: true},
  };

  constructor() {
    super();
    this.article = {};
  }
  
  render() {
    return html`
       <my-header 
        text="${this.article.title}">
       </my-header>
       <my-article 
        text="${this.article.text}">
       </my-article>
       <my-footer></my-footer> 
    `;
  }
}
customElements.define('my-page', MyPage);

const $$Astro$3 = createAstro();
const $$ComposingTemplates = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ComposingTemplates;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Composing templates" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "MyPage", MyPage, { "article": {
    title: "Composing Templates",
    text: "Some awesome text."
  } })}` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/composing-templates.astro");

const $$file$3 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/composing-templates.astro";
const $$url$3 = "/lit/composing-templates";

const _page9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ComposingTemplates,
    file: $$file$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$LitBasic = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LitBasic;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lit Basic" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main>
		<h1>Lit Basic</h1>
		<p>
			${renderComponent($$result2, "MyElement", MyElement, {})}
		</p>
       
        ${renderComponent($$result2, "MyButton", MyButton, { "text": "some text" })}
		
	</main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/lit-basic.astro");

const $$file$2 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/lit-basic.astro";
const $$url$2 = "/lit/lit-basic";

const _page10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$LitBasic,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

function App$1() {
  const [planetsData, setPlanetsData] = useState([]);
  const getPlanetsData = async () => {
    const jsonData = await getPlanets();
    setPlanetsData([...jsonData]);
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "App",
    style: {
      display: "flex"
    },
    children: [/* @__PURE__ */ jsxs("div", {
      style: {
        flexGrow: 1
      },
      children: [/* @__PURE__ */ jsx("h2", {
        children: "React component + webcomponent button"
      }), planetsData.length > 0 && /* @__PURE__ */ jsx("h3", {
        children: "A nice nerd list:"
      }), planetsData.map((planet, index) => /* @__PURE__ */ jsx(PlanetDetail, {
        planet,
        slug: index + 1
      }, planet.name.replace(" ", "-")))]
    }), /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx("my-button", {
        text: "get planets",
        onClick: (e) => getPlanetsData()
      })
    })]
  });
}
const PlanetDetail = ({
  planet,
  slug
}) => {
  const {
    name,
    climate,
    gravity,
    population,
    terrain
  } = planet;
  return /* @__PURE__ */ jsxs("ul", {
    children: [/* @__PURE__ */ jsx("li", {
      children: /* @__PURE__ */ jsxs("a", {
        href: `/planets/${slug}`,
        children: [/* @__PURE__ */ jsx("h2", {
          children: name
        }), /* @__PURE__ */ jsxs("div", {
          style: {
            display: "flex"
          },
          children: [/* @__PURE__ */ jsx("img", {
            src: "https://via.placeholder.com/300x180?text=" + name.replace(" ", "+")
          }), /* @__PURE__ */ jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column"
            },
            children: [/* @__PURE__ */ jsx("span", {
              children: "Climate:"
            }), /* @__PURE__ */ jsx("span", {
              children: climate
            }), /* @__PURE__ */ jsx("span", {
              children: "Gravity:"
            }), /* @__PURE__ */ jsx("span", {
              children: gravity
            }), /* @__PURE__ */ jsx("span", {
              children: "Population:"
            }), /* @__PURE__ */ jsx("span", {
              children: population
            }), /* @__PURE__ */ jsx("span", {
              children: "terrain:"
            }), /* @__PURE__ */ jsx("span", {
              children: terrain
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("hr", {})]
  });
};
__astro_tag_component__(App$1, "@astrojs/react");

const $$Astro$1 = createAstro();
const $$LitReact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LitReact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lit React", "class": "astro-4EPOLKAZ" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="main astro-4EPOLKAZ">
		<h1 class="astro-4EPOLKAZ">Lit React</h1>
        ${renderComponent($$result2, "App", App$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/react/callApi/App.jsx", "client:component-export": "App", "class": "astro-4EPOLKAZ" })}
	</main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/lit-react.astro");

const $$file$1 = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/lit-react.astro";
const $$url$1 = "/lit/lit-react";

const _page11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$LitReact,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {
  __name: 'App',
  setup(__props, { expose }) {
  expose();

const state = reactive({
  users : []
});

const url = "https://jsonplaceholder.typicode.com/users/";

const loadUsers = async () => {
  if(state.users.length === 0){
    const response = await fetch(url);
    const jsonData = await response.json();
    state.users = [...jsonData];
  } 
};

const __returned__ = { state, url, loadUsers, reactive, onMounted, get MyButton() { return MyButton } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "app" }, _attrs))} data-v-e4a9c6cc><div class="content" data-v-e4a9c6cc><h2 data-v-e4a9c6cc> Vue component + webcomponent button </h2><ul data-v-e4a9c6cc><!--[-->`);
  ssrRenderList($setup.state.users, (user) => {
    _push(`<li data-v-e4a9c6cc><span data-v-e4a9c6cc>${
      ssrInterpolate(user.name)
    }</span> - <span data-v-e4a9c6cc>${
      ssrInterpolate(user.website)
    }</span><hr data-v-e4a9c6cc></li>`);
  });
  _push(`<!--]--></ul></div><div class="aside" data-v-e4a9c6cc><my-button text="load users" data-v-e4a9c6cc></my-button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/vue/CallApi/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const App = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-e4a9c6cc"]]);

const $$Astro = createAstro();
const $$LitVue = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LitVue;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lit vue" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="main">
		<h1>Lit vue</h1>
        ${renderComponent($$result2, "App", App, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/zp/Sites/DIGITIAMO/wc-playground/src/components/vue/CallApi/App.vue", "client:component-export": "default" })}
	</main>` })}`;
}, "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/lit-vue.astro");

const $$file = "/Users/zp/Sites/DIGITIAMO/wc-playground/src/pages/lit/lit-vue.astro";
const $$url = "/lit/lit-vue";

const _page12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$LitVue,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d, _page5 as e, _page6 as f, _page7 as g, _page8 as h, _page9 as i, _page10 as j, _page11 as k, _page12 as l };
