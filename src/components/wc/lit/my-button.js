import {LitElement, html, css} from 'lit';

export class MyButton extends LitElement {
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
    console.log('on connect')
    super.connectedCallback();
  }
  _handleClick(){
    console.log('click')
    
  }
}
customElements.define('my-button', MyButton);