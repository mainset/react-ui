"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ModalBasic = void 0;

var _hocs = require("../hocs");

var ModalBasic = (0, _hocs.createOverlayBasicComponent)({
  BASIC_CLASS_NAME: 'ms-modal'
});
exports.ModalBasic = ModalBasic;
ModalBasic.Actions = {
  initModalByIdToggler: _hocs.initOverlayByIdToggler
};
var _default = ModalBasic;
exports.default = _default;