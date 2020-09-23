"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.msDebounce = void 0;

var _this = void 0;

var msDebounce = function msDebounce(func, delay) {
  var inDebounce;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = _this;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(function () {
      return func.apply(context, args);
    }, delay);
  };
};

exports.msDebounce = msDebounce;