"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hocs = require("../hocs");

var SidebarBasic = (0, _hocs.createOverlayBasicComponent)({
  BASIC_CLASS_NAME: 'ms-sidebar',
  cnBuilderProps: [{
    propKey: 'align',
    options: ['top', 'right', 'bottom', 'left'],
    defaultValue: 'right'
  }, {
    propKey: 'position',
    options: ['absolute', 'fixed']
  }]
});
SidebarBasic.Actions = {
  initSidebarByIdToggler: _hocs.initOverlayByIdToggler
};
var _default = SidebarBasic;
exports.default = _default;