import {LitElement, html, css} from 'lit';

export class MyHeader extends LitElement {
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