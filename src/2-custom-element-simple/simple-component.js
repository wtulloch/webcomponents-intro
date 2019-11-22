const template = document.createElement('template');
template.innerHTML = `
<div>
    <p></p>
</div>
`

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
        
        const clearEl = this.firstChild;
        if(clearEl) {
            this.removeChild(clearEl);
        }

        const clone = template.content.cloneNode(true);
        this.appendChild(clone);
        this.querySelector('p').innerHTML = this.placeholder;
    }
}

if (!customElements.get('simple-component')) {
    customElements.define('simple-component', SimpleComponent);
}