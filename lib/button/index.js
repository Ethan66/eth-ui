"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _create = _interopRequireDefault(require("../utils/create"));

var _default = (0, _create["default"])({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(_vm.tag, {
      tag: "component",
      "class": _vm.createClass([_vm.type, _vm.size, {
        block: _vm.block,
        'lnzi-common--bg': _vm.type === 'default',
        'lnzi-common--cr': _vm.type === 'plain',
        'lnzi-common--br': _vm.type === 'plain'
      }]),
      style: [{
        width: _vm.width
      }, {
        height: _vm.height
      }, {
        borderRadius: _vm.borderRadius
      }, _vm.styleObj],
      attrs: {
        "type": _vm.nativeType,
        "disabled": _vm.disabled
      },
      on: {
        "click": _vm.onClick
      }
    }, [_c('span', {
      "class": _vm.createClass('text')
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2)]);
  },
  name: 'button',
  props: {
    text: String,
    nativeType: String,
    disabled: String,
    block: Boolean,
    width: String,
    height: String,
    borderRadius: String,
    styleObj: String,
    tag: {
      type: String,
      "default": 'button'
    },
    type: {
      type: String,
      "default": 'default'
    },
    size: {
      type: String,
      "default": 'normal'
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  }
});

exports["default"] = _default;