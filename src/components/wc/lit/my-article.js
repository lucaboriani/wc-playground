import {LitElement, html, css} from 'lit';

export class MyArticle extends LitElement {
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