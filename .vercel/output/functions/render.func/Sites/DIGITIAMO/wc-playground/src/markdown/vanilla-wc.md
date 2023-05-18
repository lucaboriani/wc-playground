## Vanilla Web Component

I'm a big fan of vanilla js, everything you can do with js frameworks can, and actually *is accomplished* with it.


*Class definition*

```js
// Create a class for the element
export class ExpandingList extends HTMLElement {
    static get observedAttributes() {
      return ['elements'];
    }
    constructor() {
      super();
      this._elements = []
       
    }
    initList(){
      const uls = Array.from(this.shadowRoot.querySelectorAll('ul'));
      const lis = Array.from(this.shadowRoot.querySelectorAll('li'));
      uls.forEach((ul, indx) => {
        if(indx !== 0)ul.style.display = 'none';
      });
      lis.forEach(li => {
        
        if (li.querySelectorAll('ul').length > 0) {
          li.setAttribute('class', 'closed');
          const childText = li.childNodes[0];
          const newSpan = document.createElement('span');
          newSpan.textContent = childText.textContent;
          newSpan.style.cursor = 'pointer';

          newSpan.onclick = (e)=>this.showul(e);
          
          childText.parentNode.insertBefore(newSpan, childText);
          childText.parentNode.removeChild(childText);
        }
      });
    }
    connectedCallback() {
      
      this.attachShadow({mode: 'open'})
        .appendChild(this.buildStructure(this.elements)) 
      this.initList() 
    }
    attributeChangedCallback(attrName, oldVal, newVal){
      if(oldVal !== newVal) {
        console.log(oldVal)
        console.log(newVal)
        
      }
    }
    // li click handler
    showul (e) {
      // next sibling to the span should be the ul
      const nextul = e.target.nextElementSibling;
  
      // Toggle visible state and update class attribute on ul
      if (nextul.style.display == 'block') {
        nextul.style.display = 'none';
        nextul.parentNode.setAttribute('class', 'closed');
      } else {
        nextul.style.display = 'block';
        nextul.parentNode.setAttribute('class', 'open');
      }
    }
    buildStructure (_data) {
        const l = _data.length
        if(l > 0){
            const ul = document.createElement('ul')
            for (let i=0; i < l; i++) {
                const current = _data[i]
                if(current) {
                  const li = document.createElement('li')
                  li.textContent = current.title
                  ul.appendChild(li)
                  if(current.nodes) {
                    const subUl = this.buildStructure(current.nodes)
                    if(subUl){
                      li.appendChild(subUl)
                    }
                  }
                }
            }
            return ul
        }

        return null
    }
    get elements() {
      return this._elements
    }
    set elements(newVal) {
      this._elements = newVal;
      this.initList()
    }
}
  
  // Define the new element
customElements.define('expanding-list', ExpandingList);
```

Usage:

```js
import { ExpandingList } from "../components/wc/expandingList"

    const data = [
        //...
    ]
	const list = document.querySelector('expanding-list') as ExpandingList
    

    // HERE WE PASS DATA TO THE COMPONENT 
    // see the class' static get observedAttributes()
    list.elements = data

```
But, as we see in the above "Expanding list" example, things can get quite complicated soon. 

Besides Vanilla javascript, there are options to help developers in coding web components (there are many, many, many more) such as :

- [Lit](/lit)
- [Lit documentation](https://lit.dev/)
- [Developing Components: Lit Code Examples](https://open-wc.org/guides/developing-components/code-examples/#lit-html-and-lit-element)
- [build web components with Vue](https://vuejs.org/guide/extras/web-components.html#building-custom-elements-with-vue)
- [build web components with Svelte](https://blog.logrocket.com/build-web-components-svelte/)
- [Web Components in Svelte - video + links with demo and code](https://phptuts.github.io/svelte-docs/webcomponents/)




 