define(["exports","../node_modules/lit-element/lit-element.js","../node_modules/@lion/button/lion-button.js"],function(_exports,_litElement,_lionButton){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SimpleWc2=void 0;function _templateObject2_3dd90d50daed11e9a5da410a63411485(){var data=babelHelpers.taggedTemplateLiteral(["\n      :host {\n        display: block;\n        border: 1px solid lightgrey;\n        padding: 10px;\n      }\n    "]);_templateObject2_3dd90d50daed11e9a5da410a63411485=function _templateObject2_3dd90d50daed11e9a5da410a63411485(){return data};return data}function _templateObject_3dd90d50daed11e9a5da410a63411485(){var data=babelHelpers.taggedTemplateLiteral(["\n      <h1>SIMPLE-WC-2</h1>\n      <lion-button>Lion Button</lion-button>\n    "]);_templateObject_3dd90d50daed11e9a5da410a63411485=function _templateObject_3dd90d50daed11e9a5da410a63411485(){return data};return data}var SimpleWc2=/*#__PURE__*/function(_LitElement){babelHelpers.inherits(SimpleWc2,_LitElement);function SimpleWc2(){babelHelpers.classCallCheck(this,SimpleWc2);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SimpleWc2).apply(this,arguments))}babelHelpers.createClass(SimpleWc2,[{key:"render",value:function render(){return(0,_litElement.html)(_templateObject_3dd90d50daed11e9a5da410a63411485())}}],[{key:"styles",get:function get(){return(0,_litElement.css)(_templateObject2_3dd90d50daed11e9a5da410a63411485())}},{key:"is",get:function get(){return"simple-wc"}},{key:"properties",get:function get(){return{title:{type:String}}}}]);return SimpleWc2}(_litElement.LitElement);_exports.SimpleWc2=SimpleWc2});