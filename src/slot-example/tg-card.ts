import { LitElement, html, css, property, customElement } from 'lit-element';

@customElement('tg-card')
export class TgCard extends LitElement {
    static get styles() {
        return css`
          :host {
              display: flex;
              flex-direction: column;
              max-width: 600px;
              min-height: 800px;
              box-sizing: border-box;
              box-shadow: 3px 3px 10px 3px rgba(54,52,52,0.42);
                 -webkit-box-shadow: 3px 3px 10px 3px rgba(54,52,52,0.42);
          }

          :host([hidden]) {
            display: none;
          }
        .header {
            background-color: #044775;
            color: white;
            min-height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        `;
    }

    render() {
        return html`
            <div class="header">
             <slot name="header"></slot>
            </div>
            <div class="content" >
            <slot name="body"></slot>
            </div>
    </div>
        `;
    }

}