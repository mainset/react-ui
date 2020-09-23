"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var asSVG = function asSVG(_ref, path) {
  var defaultFill = _ref.fill,
      defaultFillBackground = _ref.fillBackground,
      defaultHeight = _ref.height,
      defaultWidth = _ref.width;
  return function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$fill = _ref2.fill,
        fill = _ref2$fill === void 0 ? defaultFill : _ref2$fill,
        _ref2$fillBackground = _ref2.fillBackground,
        fillBackground = _ref2$fillBackground === void 0 ? defaultFillBackground : _ref2$fillBackground,
        _ref2$height = _ref2.height,
        height = _ref2$height === void 0 ? defaultHeight : _ref2$height,
        _ref2$width = _ref2.width,
        width = _ref2$width === void 0 ? defaultWidth : _ref2$width;

    return path.replace(/%SVGMaker--fill/g, fill).replace(/%SVGMaker--fillBackground/g, fillBackground).replace(/%SVGMaker--height/g, height).replace(/%SVGMaker--width/g, width);
  };
};

var _default = asSVG;
exports.default = _default;