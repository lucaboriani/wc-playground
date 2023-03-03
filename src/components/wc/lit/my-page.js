import {LitElement, html} from 'lit';
import './my-header.js';
import './my-article.js';
import './my-footer.js';

export class MyPage extends LitElement {
  static properties = {
    article: {attribute: true},
  };

  constructor() {
    super();
    this.article = {};
    console.log("shgshgshgs")
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
