import { css, html, LitElement } from 'lit-element';
import '@lion/button/lion-button';
    
export class SimpleWc extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: 1px solid lightgrey;
        padding: 10px;
      }
    `
  }

  static get is() { return 'simple-wc'; }

  static get properties() {
    return {
      title: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.title = 'simple-wc'
  }

  render() {
    return html`
      <h2>${this.title}</h2>
      <lion-button>Lion Button</lion-button>
    `;
  }
}

