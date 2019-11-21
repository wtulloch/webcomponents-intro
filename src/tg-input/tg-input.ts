import {html, property, customElement, LitElement,css} from 'lit-element';

@customElement('tg-input')
export class TgInput extends LitElement {
    
  static get styles () {
    return css `
    :host {
      display: block;
    }
    `
  }
    constructor() {
      super();  
    }

    

    render(){
      return html `
        <label>input label</label> <input type="text" placeholder="placeholder text" />
      `;
    }
}