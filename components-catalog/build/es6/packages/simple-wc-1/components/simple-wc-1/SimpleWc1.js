import{css,html,LitElement}from"../../node_modules/lit-element/lit-element.js";import"../../node_modules/@lion/button/lion-button.js";export class SimpleWc1 extends LitElement{static get styles(){return css`
      :host {
        display: block;
        border: 1px solid lightgrey;
        padding: 10px;
      }
    `}static get is(){return"simple-wc"}static get properties(){return{title:{type:String}}}render(){return html`
      <h1>SIMPLE-WC-1</h1>
      <lion-button>Lion Button</lion-button>
    `}}