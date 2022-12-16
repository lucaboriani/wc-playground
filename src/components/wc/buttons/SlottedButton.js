

export class SlottedButton extends HTMLElement {
    constructor() {
      super();
      
      const template = document.getElementById(
        "slotted-button"
      ).content;

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.cloneNode(true));
      
      const style = document.createElement('style');
      
  
      style.textContent = `
          * {
              font-size: 1.3em;
          }
          button {
              min-width: 4rem;
              padding: 1rem;
              border: none;
              border-radius: 5px;
              background-color: blue;
              color: whitesmoke;
              cursor:pointer;
              display:flex;
              align-items:center;
              justify-content:center;
          }
      `;
      this.shadowRoot.appendChild(style)
    }
    onButtonClick(){
        
        this.dispatchEvent(new CustomEvent('buttonClick'))
    }
    connectedCallback() {
        this.button.addEventListener('click',()=>this.onButtonClick())
    }
    disconnectedCallback(){
        this.button.removeEventListener('click',()=>this.onButtonClick())
    }
    get button(){
        return this.shadowRoot.querySelector('button')
    }
}
  
customElements.define('slotted-button', SlottedButton);