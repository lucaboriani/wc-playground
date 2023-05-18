```js


export class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    
    this.attachShadow({ mode: 'open' });

    const container = document.createElement('div')
    container.className ='container'
    const dec = document.createElement('button')
    dec.id = 'dec'
    dec.textContent = '-'
    const span = document.createElement('span')
    span.id = 'count'
    const inc = document.createElement('button')
    inc.id = 'inc'
    inc.textContent="+"
    
    const style = document.createElement('style');
    

    style.textContent = `
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
    `;
    
    this.shadowRoot.appendChild(style)

    container.appendChild(dec)
    container.appendChild(span)
    container.appendChild(inc)
    
    
    this.shadowRoot.appendChild(container);
  }

  connectedCallback() {
    this.shadowRoot.getElementById('inc').onclick = () => this.inc();
    this.shadowRoot.getElementById('dec').onclick = () => this.dec();
    this.update(this.count);
  }

  inc() {
    this.update(++this.count);
  }

  dec() {
    this.update(--this.count);
  }

  update(count) {
    this.shadowRoot.getElementById('count').textContent = count;
  }
}

customElements.define('my-counter', MyCounter);
```