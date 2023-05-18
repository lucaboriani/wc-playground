import"./hoisted.d17de7b4.js";const d=[{title:"level 0 A",nodes:[{title:"level 1 A",nodes:[{title:"level 2 A"},{title:"level 2 A",nodes:[{title:"level 3 A"}]}]}]},{title:"level 0 B",nodes:[{title:"level 1 B",nodes:[{title:"level 2 B"}]}]}],r=document.querySelector("expanding-list");r.elements=d;class a extends HTMLElement{static get observedAttributes(){return["elements"]}constructor(){super(),this._elements=[]}initList(){const t=Array.from(this.shadowRoot.querySelectorAll("ul")),e=Array.from(this.shadowRoot.querySelectorAll("li"));t.forEach((o,n)=>{n!==0&&(o.style.display="none")}),e.forEach(o=>{if(o.querySelectorAll("ul").length>0){o.setAttribute("class","closed");const n=o.childNodes[0],s=document.createElement("span");s.textContent=n.textContent,s.style.cursor="pointer",s.onclick=l=>this.showul(l),n.parentNode.insertBefore(s,n),n.parentNode.removeChild(n)}})}connectedCallback(){this.attachShadow({mode:"open"}).appendChild(this.buildStructure(this.elements)),this.initList(),console.log(this.shadowRoot)}attributeChangedCallback(t,e,o){console.log("attributeChangedCallback",t),e!==o&&(console.log(e),console.log(o))}showul(t){const e=t.target.nextElementSibling;e.style.display=="block"?(e.style.display="none",e.parentNode.setAttribute("class","closed")):(e.style.display="block",e.parentNode.setAttribute("class","open"))}buildStructure(t){const e=t.length;if(e>0){const o=document.createElement("ul");for(let n=0;n<e;n++){const s=t[n];if(s){const l=document.createElement("li");if(l.textContent=s.title,o.appendChild(l),s.nodes){const c=this.buildStructure(s.nodes);c&&l.appendChild(c)}}}return o}return null}get elements(){return this._elements}set elements(t){this._elements=t,this.initList()}}customElements.define("expanding-list",a);class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._button=document.createElement("button"),this._button.textContent=this.getAttribute("title");const t=document.createElement("style");t.textContent=`
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
      `,this.shadowRoot.appendChild(t),this.shadowRoot.appendChild(this.button)}onButtonClick(){console.log("on click",this),this.dispatchEvent(new CustomEvent("buttonClick"))}connectedCallback(){console.log("on connect",this),this.button.addEventListener("click",()=>this.onButtonClick())}disconnectedCallback(){console.log("on disconnect",this),this.button.removeEventListener("click",()=>this.onButtonClick())}get button(){return this._button}}customElements.define("custom-button",u);class h extends HTMLElement{constructor(){super(),this.count=0,this.attachShadow({mode:"open"});const t=document.createElement("div");t.className="container";const e=document.createElement("button");e.id="dec",e.textContent="-";const o=document.createElement("span");o.id="count";const n=document.createElement("button");n.id="inc",n.textContent="+";const s=document.createElement("style");s.textContent=`
        * {
          box-sizing:border-box;
        }

        span {
            width: 4rem;
            display: inline-block;
            text-align: center;
        }

        button {
          border: none;
          font-size: 2em;
          border-radius: 10px;
          background-color: #425b4d;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 0.5em;
          cursor:pointer;
        }
        .container {
          display:flex;
          align-items: center;
        }
    `,this.shadowRoot.appendChild(s),t.appendChild(e),t.appendChild(o),t.appendChild(n),this.shadowRoot.appendChild(t)}connectedCallback(){this.shadowRoot.getElementById("inc").onclick=()=>this.inc(),this.shadowRoot.getElementById("dec").onclick=()=>this.dec(),this.update(this.count)}inc(){this.update(++this.count)}dec(){this.update(--this.count)}update(t){this.shadowRoot.getElementById("count").textContent=t}}customElements.define("my-counter",h);
