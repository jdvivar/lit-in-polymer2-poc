define(["exports","../node_modules/lit-element/lit-element.js","../node_modules/@lion/button/lion-button.js"],function(_exports,_litElement,_lionButton){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SimpleWc1=void 0;function _templateObject2_8cfb0d60db8411e9b5a51f5668d59e13(){var data=babelHelpers.taggedTemplateLiteral(["\n      :host {\n        display: block;\n        border: 1px solid lightgrey;\n        padding: 10px;\n      }\n    "]);_templateObject2_8cfb0d60db8411e9b5a51f5668d59e13=function _templateObject2_8cfb0d60db8411e9b5a51f5668d59e13(){return data};return data}function _templateObject_8cfb0d60db8411e9b5a51f5668d59e13(){var data=babelHelpers.taggedTemplateLiteral(["\n      <h1>SIMPLE-WC-1</h1>\n      <lion-button>Lion Button</lion-button>\n    "]);_templateObject_8cfb0d60db8411e9b5a51f5668d59e13=function _templateObject_8cfb0d60db8411e9b5a51f5668d59e13(){return data};return data}var SimpleWc1=/*#__PURE__*/function(_LitElement){babelHelpers.inherits(SimpleWc1,_LitElement);function SimpleWc1(){babelHelpers.classCallCheck(this,SimpleWc1);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SimpleWc1).apply(this,arguments))}babelHelpers.createClass(SimpleWc1,[{key:"render",value:function render(){return(0,_litElement.html)(_templateObject_8cfb0d60db8411e9b5a51f5668d59e13())}}],[{key:"styles",get:function get(){return(0,_litElement.css)(_templateObject2_8cfb0d60db8411e9b5a51f5668d59e13())}},{key:"is",get:function get(){return"simple-wc"}},{key:"properties",get:function get(){return{title:{type:String}}}}]);return SimpleWc1}(_litElement.LitElement);_exports.SimpleWc1=SimpleWc1});