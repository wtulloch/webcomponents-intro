import {LitElement, html, css, property, customElement} from 'lit-element';

@customElement('tg-card')
export class TgCard extends LitElement {
    static get styles () {
        return css `
          :host {
              display: flex;
              flex-direction: column;
              max-width: 600px;
              min-height: 800px;
          }
        `;
    }
    
    render() {
        return html `
            <div>
             <slot name="header"></slot>
            </div>
            <div>
            <slot name="body"></slot>
            </div>
    </div>
        `;
    }
    
}