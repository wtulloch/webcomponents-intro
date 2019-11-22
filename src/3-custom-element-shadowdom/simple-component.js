export default class SimpleComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    set titlebarText(value) {
        this.setAttribute('titlebar-text', value);
        this._render();
    }

    get titlebarText() {
        return this.getAttribute('titlebar-text');
    }

    get id() {
        return this.getAttribute('id');
    }


    connectedCallback() {
    }

    disconnectedCallback() {
        console.log(`SimpleComponent ${this.id}: disconnectedCallback`);
    }


    static get observedAttributes() {
        return ['titlebar-text'];
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
            flex-direction: column;
            border: 1px darkgrey solid;
            width: 300px;
            height: 400px;
            margin: 10px;
            background-color: white;
          }
          .titlebar {
            display: flex;
            background-color: darkblue;
            color: white;
            min-height: 40px;
            justify-content: center;
            align-items: center;
            flex-grow: 0;
          }
          .content {
              flex-grow: 1;
          }
          </style>
          <div class="titlebar">${this.titlebarText}</div>
          <div class="content"> </div> 
        `;
    }
}

if (!customElements.get('simple-component')) {
    customElements.define('simple-component', SimpleComponent);
}