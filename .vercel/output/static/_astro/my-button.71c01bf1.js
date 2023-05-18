import{s as e,i as t}from"./lit-element.31c19c4b.js";import{x as o}from"./lit-html.3b0a4f52.js";class r extends e{static properties={text:{attribute:!0}};static styles=t`
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
  `;render(){return o`
      <button @click="${this._handleClick}">
        ${this.text}
      </button>
    `}connectedCallback(){console.log("on connect"),super.connectedCallback()}_handleClick(){console.log("click")}}customElements.define("my-button",r);export{r as MyButton};
