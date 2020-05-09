"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = _default;

var _createClass = _interopRequireDefault(require("../mixins/create-class"));

/**
 * Create a component with common options
 */
var install = function install(Vue) {
  Vue.component(this.name, this);
};

function _default(component) {
  component.name = 'lnzi-' + component.name;
  component.install = component.install || install;
  component.mixins = component.mixins || [];
  component.mixins.push(_createClass["default"]);
  return component;
}