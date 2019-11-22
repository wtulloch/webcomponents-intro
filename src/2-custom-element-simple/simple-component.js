export default class SimpleComponent extends HTMLElement {

    constructor() {
        super();
        console.log(`SimpleComponent ${this.id} :constructor`);
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
        return [];
    }
    attributeChangedCallback(name, oldValue, newValue) {

        if (oldValue !== newValue) {
            console.log(`SimpleComponent: ${name} has changed`);
            this._render();
        }
    }
    _render() {
        this.innerHTML = `
        <div>
            <p>${this.placeholder}</p>
        </div>
        `;
    }
}

if (!customElements.get('simple-component')) {
    customElements.define('simple-component', SimpleComponent);
}