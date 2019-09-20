import { css, html, LitElement } from 'lit-element';
import '@lion/button/lion-button';
    
export class SimpleWc2 extends LitElement {
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

  render() {
    return html`
      <h1>SIMPLE-WC-2</h1>
      <lion-button>Lion Button</lion-button>
    `;
  }
}

