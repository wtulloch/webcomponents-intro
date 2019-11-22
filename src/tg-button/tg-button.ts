import {LitElement, html, css, customElement} from 'lit-element';

@customElement('tg-button')
export class TgButton extends LitElement {
     static get styles() {
        return css `
        :host {
            display: inline-block;
            --background-base: #0069ed;
            --background-hover: #0053ba;
            --text-color: white;
        }
        button {
            display: inline-block;
            border: none;
            padding: 1rem 2rem;
            border-radius: 5px;
            margin: 5px;
            text-decoration: none;
            background: var(--background-base);
            color: var(--text-color);
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
            background: var(--background-hover);
        }
        
        button:focus {
            outline: 1px solid #fff;
            outline-offset: -4px;
        }
        
        button:active {
            transform: scale(0.99);
        }   
        `;

        
    }

    render() {
        return html `
        <button><slot></slot></button>
        `
    }
}