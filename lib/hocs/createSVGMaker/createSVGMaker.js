"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function createSVGMaker(SVGS) {
  var SVGMaker = function SVGMaker(_ref) {
    var className = _ref.className,
        name = _ref.name,
        props = _objectWithoutProperties(_ref, ["className", "name"]);

    return (0, _react.createElement)('span', {
      className: "ms-svg-maker".concat(className && " ".concat(className)),
      dangerouslySetInnerHTML: {
        __html: SVGS[name](props)
      }
    });
  };

  var availableSVGNames = Object.keys(SVGS);
  SVGMaker.defaultProps = {
    className: ''
  };
  SVGMaker.propTypes = {
    className: _propTypes.default.string,
    name: _propTypes.default.oneOf(availableSVGNames).isRequired
  };
  return SVGMaker;
}

var _default = createSVGMaker;
exports.default = _default;