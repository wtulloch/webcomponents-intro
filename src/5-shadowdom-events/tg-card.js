import {LitElement, html, css} from 'lit-element';
import {TgCheckbox} from './tg-checkbox';

export default class TgCard extends LitElement {

    static get styles() {
        return css `
        :host {
            display: flex;
            flex-direction: column;
            border: 1px darkgrey solid;
            width: 300px;
            height: 400px;
            margin: 10px;
            background-color: white;
            box-sizing: border-box;
            box-shadow: 3px 3px 10px 3px rgba(54,52,52,0.42);
            -webkit-box-shadow: 3px 3px 10px 3px rgba(54,52,52,0.42);
          }
          :host([hidden]) {
              display: none;
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
              padding: 5px;
          }
          .footer {
            display: flex;
            box-sizing: border-box;
            align-items: flex-end;
            justify-content: flex-end;
            flex-direction: row;
            padding-bottom: 3px;
            padding-right: 3px;
          }
          button {
            display: inline-block;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            margin: 5px;
            text-decoration: none;
            background: #0069ed;
            color: #ffffff;
            font-family: sans-serif;
            font-size: 1rem;
            cursor: pointer;
            text-align: center;
            transition: background 250ms ease-in-out, 
                        transform 150ms ease;
            -webkit-appearance: none;
            -moz-appearance: none;
        }
        
        button:hover,
        button:focus {
            background: #0053ba;
        }
        
        button:focus {
            outline: 1px solid #fff;
            
        }
        
        button:active {
            transform: scale(0.99);
        }
        `;
    }

    static get properties() {
        return {
            titlebarText: {type: String, attribute: 'titlebar-text', reflect: true},
            items: {type: Array}
        }
    }
    constructor() {
        super();
        this.titlebarText = "placeholder";
        this.items = []
        
    }

    connectedCallback() {
        super.connectedCallback();
        
    }

    render() {
        return html `
        <div class="titlebar">
     ${this.titlebarText}</div>
        <div class="content">
        ${this.items.map(i => html `<tg-checkbox @update-item="${this._itemUpdated}" .item="${i}"></tg-checkbox>`)}
      </div> 
      <div class="footer">
          <button id="submit" @click="${this._onClick}">Post</button>
        </div>
      `;
    }
   

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    _onClick(e) {
       const event = new CustomEvent('tg-submitted', {detail:this.items});
       this.dispatchEvent(event);
    }

    _itemUpdated(e) {
        const updatedItem = e.detail;
      let oldItem = this.items.find( i => i.id === updatedItem.id);
      oldItem.state = updatedItem.state;
    }
}

if (!customElements.get('tg-card')) {
    customElements.define('tg-card', TgCard);
}