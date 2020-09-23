"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Spacing = function Spacing(_ref) {
  var as = _ref.as,
      className = _ref.className,
      children = _ref.children,
      type = _ref.type,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["as", "className", "children", "type", "size"]);

  return _react.default.createElement(as, _objectSpread({
    className: (0, _classnames.default)('ms-spcng', "ms-spcng-".concat(type, "--").concat(size), className)
  }, props), children);
};

Spacing.defaultProps = {
  as: 'span',
  className: ''
};
Spacing.propTypes = {
  as: _propTypes.default.oneOf(['span', 'div']),
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  type: _propTypes.default.oneOf(['m', // margin
  'p', // padding
  // margin
  'mt', // top
  'mr', // right
  'mb', // bottom
  'ml', // left
  'mv', // vertical
  'mh', // horizontal
  // padding
  'pt', // top
  'pr', // right
  'pb', // bottom
  'pl', // left
  'pv', // vertical
  'ph']).isRequired,
  size: _propTypes.default.number.isRequired
};
var _default = Spacing;
exports.default = _default;