import{s as e,i}from"./lit-element.31c19c4b.js";import{x as t}from"./lit-html.3b0a4f52.js";class s extends e{static properties={text:{attribute:!0}};static styles=i`
    header {
      font-size:2em;  
      border-bottom: solid 1px whitesmoke;
      margin-mottom:1em;
      
      top:0;
      width:100%;
    }
  `;render(){return t`
      <header>${this.text}</header>
    `}}customElements.define("my-header",s);class o extends e{static properties={text:{attribute:!0}};static styles=i`
    article {
      font-size:1.5em;  
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      min-height:calc(100vh - 80px);
    }
  `;render(){return t`
      <article>${this.text}</article>
    `}}customElements.define("my-article",o);class c extends e{static styles=i`
        footer {
            padding:1em 2em;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            color:black;
            background-color:whitesmoke;
        }
    `;render(){return t`
        <footer>footer</footer>
        `}}customElements.define("my-footer",c);class a extends e{static properties={article:{attribute:!0}};constructor(){super(),this.article={}}render(){return t`
       <my-header 
        text="${this.article.title}">
       </my-header>
       <my-article 
        text="${this.article.text}">
       </my-article>
       <my-footer></my-footer> 
    `}}customElements.define("my-page",a);export{a as MyPage};
