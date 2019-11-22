import {html, property, customElement, LitElement,css} from 'lit-element';
import  './tg-input.css';
@customElement('tg-input')
export class TgInput extends LitElement {
    

  static get styles () {
    return css `
    :host {
      display: flex;
      flex-direction: column;
      font-family: roboto;
      font-size: 1.1rem;
    }
    label {
      margin-right: 0.3rem;
      margin-bottom: 0.4rem;
    }
    `;
  }
  @property({type: String, reflect: true})
  placeholder: String = "placeholder";
    constructor() {
      super();  
    }
    render(){
      return html `
        <label>input label</label>
        <input type="text" placeholder="placeholder text" />
      `;
    }
}