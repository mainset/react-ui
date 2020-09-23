"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Container = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Layout = require("../../hocs/Layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className,
      gapSize = _ref.gapSize,
      width = _ref.width,
      props = _objectWithoutProperties(_ref, ["children", "className", "gapSize", "width"]);

  return (0, _react.createElement)('div', _objectSpread({
    className: "ms-container ms-container--width-".concat(width, " ms-container--gap-").concat(gapSize, " ").concat(className && " ".concat(className))
  }, props), children);
};

exports.Container = Container;
Container.defaultProps = {
  className: '',
  gapSize: '',
  width: 'wide'
};
Container.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  gapSize: _propTypes.default.oneOf(['', 'wide']),
  width: _propTypes.default.oneOf(['full', 'wide', 'narrow'])
};

var _default = (0, _Layout.asLayout)(Container);

exports.default = _default;