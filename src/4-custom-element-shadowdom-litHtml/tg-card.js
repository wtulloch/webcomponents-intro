import {html, render} from 'lit-html';
export default class TgCard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        
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
        this._render();
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
       const template = html `
        <style>
       :host {
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

        render(template, this);
    }
}

if (!customElements.get('tg-card')) {
    customElements.define('tg-card', TgCard);
}