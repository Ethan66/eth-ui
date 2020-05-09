"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;

var _index = _interopRequireDefault(require("./button/index"));

exports.Button = _index["default"];
var components = [_index["default"]];

var install = function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}