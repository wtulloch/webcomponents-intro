export default class SimpleComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
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


    connectedCallback() {
        console.log(`SimpleComponent ${this.id}: connectedCallback`)
        this._render();
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
        this.shadowRoot.innerHTML = `
        <style>
       :host {
            display: flex;
            border: 1px black solid;
            flex-grow: 0;
            width: 250px;
            height: 250px;
            margin: 10px;
            background-color: white;
            padding: 20px;
            align-items: center;
            justify-items: center;
          }
          </style>
            <p>${this.placeholder}</p>
        
        `;
    }
}

if (!customElements.get('simple-component')) {
    customElements.define('simple-component', SimpleComponent);
}