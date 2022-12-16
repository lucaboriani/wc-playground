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
      console.log(this.shadowRoot)
    }
    attributeChangedCallback(attrName, oldVal, newVal){
      console.log('attributeChangedCallback', attrName);  
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