import {LitElement, html, css} from 'lit';

export class MyFooter extends LitElement {
    static styles = css`
        footer {
            padding:1em 2em;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            color:black;
            background-color:whitesmoke;
        }
    `;   
    render() {
        return html`
        <footer>footer</footer>
        `;
    }
}
customElements.define('my-footer', MyFooter);