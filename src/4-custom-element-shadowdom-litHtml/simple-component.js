import {html, render} from 'lit-html/lit-html.js';
export default class SimpleComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this._render();
    }

    set placeholder(value) {
        this.setAttribute('placeholder', value);
    }

    get placeholder() {
        return this.getAttribute('placeholder');
    }

    get id() {
        return this.getAttribute('id');
    }


    disconnectedCallback() {
        console.log(`SimpleComponent ${this.id}: disconnectedCallback`);
    }


    static get observedAttributes() {
        return ['placeholder'];
    }
    attributeChangedCallback(name, oldValue, newValue) {

        if (oldValue !== newValue) {
            console.log(`SimpleComponent: ${name} has changed`);
            this._render();
        }
    }
    _render() {
        const toRender = html `
        <style>
        :host {
             display: block;
             border: 1px black solid;
             flex-grow: 0;
             width: 250px;
             height: 250px;
             margin: 10px;
             background-color: darksalmon;
             padding: 20px;
           }
           </style>
         <div>
             <p>${this.placeholder}</p>
         </div>
        `
       render( toRender, this);
    }
}

if (!customElements.get('simple-component')) {
    customElements.define('simple-component', SimpleComponent);
}