

export class CustomButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._button = document.createElement('button')
      this._button.textContent = this.getAttribute('title')
      
      const style = document.createElement('style');   
      style.textContent = `
          * {
              font-size: 1.5em;
          }
          button {
              min-width: 4rem;
              height: 4rem;
              padding: 1rem;
              border: none;
              border-radius: 10px;
              background-color: whitesmoke;
              color: #333;
              cursor:pointer;
          }
      `;
      this.shadowRoot.appendChild(style)
      this.shadowRoot.appendChild(this.button);
    }
    onButtonClick(){
        console.log('on click', this)
        this.dispatchEvent(new CustomEvent('buttonClick'))
    }
    connectedCallback() {
        console.log('on connect', this)
        this.button.addEventListener('click',()=>this.onButtonClick())
    }
    disconnectedCallback(){
        console.log('on disconnect', this)
        this.button.removeEventListener('click',()=>this.onButtonClick())
    }
    get button(){
        return this._button
    }
  }
  
  customElements.define('custom-button', CustomButton);