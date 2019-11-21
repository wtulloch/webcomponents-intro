export default class SimpleComponent extends HTMLElement {
    
    constructor(){
        super();
        console.log('SimpleComponent:constructor');
    }

    set placeholder(value) {
        this.setAttribute('placeholder', value);
    }

    get placeholder() {
       return this.getAttribute('placeholder');
    }

   static get observedAttributes() {
        return ['placeholder'];
    }

    connectedCallback() {
        console.log("SimpleComponent: connectedCallback")
       
        this._render();
    }

    disconnectedCallback() {
        console.log("SimpleComponent: disconnectedCallback");
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
            <p>The placeholder is: ${this.getAttribute('placeholder')}</p>
        </div>
        `;
    }

   
}

if (!customElements.get('simple-component')) {
    customElements.define('simple-component', SimpleComponent);
}