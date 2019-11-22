import {LitElement, html, css} from 'lit-element';

export class TgCheckbox extends LitElement {
    static get styles() {
        return css `
        :host {
            display: flex;
            flex-direction: row;
            margin-top: 5px;
            margin-bottom: 10px;
        }
        checkbox {
            flex-grow: 0;
            margin: 5px;
        }
        label {
            flex-grow: 1;
        }
        `;
    }

    static get properties() {
        return {
            item: {type: Object}
        }
    }

    render() {
        return html `
        <input type='checkbox' id="${this.item.id}" @change="${this._onChange}" value="${this.item.name}" ?checked="${this.item.state}" />
    <label for="${this.item.id}">${this.item.name}</label>
    
        `
    }

    _onChange(e) {
       e.stopPropagation();
       this.item.state = e.target.checked;
       
       const event = new CustomEvent('update-item',{detail: this.item});
       this.dispatchEvent(event);
    }
}

if (!customElements.get('tg-checkbox')) {
    customElements.define('tg-checkbox', TgCheckbox);
}