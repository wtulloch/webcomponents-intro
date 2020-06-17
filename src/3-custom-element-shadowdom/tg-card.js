export default class TgCard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this._render();
    }

    set titlebarText(value) {
        this.setAttribute('titlebar-text', value);
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
    }


    static get observedAttributes() {
        return ['titlebar-text'];
    }
    attributeChangedCallback(name, oldValue, newValue) {

        if (oldValue !== newValue) {
            this._render();
        }
    }
    _render() {
        this.shadowRoot.innerHTML = `
        <style>
       :host {
           --header-background: darkblue;
           --header-color: white;
            display: flex;
            flex-direction: column;
            border: 1px darkgrey solid;
            width: 300px;
            height: 400px;
            margin: 10px;
            background-color: white;
            box-sizing: border-box;
            transition: 0.4s;
          }
          :host([hidden]) {
              display: none;
          }
          :host(:hover) {
            box-shadow: 3px 3px 10px 3px rgba(54,52,52,0.42);
            -webkit-box-shadow: 3px 3px 10px 3px rgba(54,52,52,0.42);
          }

          .titlebar {
            display: flex;
            background-color: var(--header-background);
            color: var(--header-color);
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

if (!customElements.get('tg-card')) {
    customElements.define('tg-card', TgCard);
}