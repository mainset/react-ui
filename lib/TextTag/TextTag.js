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

var TextTag = function TextTag(_ref) {
  var _cn;

  var as = _ref.as,
      className = _ref.className,
      children = _ref.children,
      align = _ref.align,
      size = _ref.size,
      weight = _ref.weight,
      color = _ref.color,
      family = _ref.family,
      props = _objectWithoutProperties(_ref, ["as", "className", "children", "align", "size", "weight", "color", "family"]);

  return _react.default.createElement(as, _objectSpread({
    className: (0, _classnames.default)('ms-text', (_cn = {}, _defineProperty(_cn, "ms-text--align-".concat(align), align), _defineProperty(_cn, "ms-text--color-".concat(color), color), _defineProperty(_cn, "ms-text--family-".concat(family), family), _defineProperty(_cn, "ms-text--size-".concat(size), size), _defineProperty(_cn, "ms-text--weight-".concat(weight), weight), _cn), className)
  }, props), children);
};

TextTag.defaultProps = {
  className: '',
  align: '',
  weight: 'normal'
};
TextTag.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  as: _propTypes.default.oneOf(['h1', 'h2', 'h3', 'p', 'span', 'div', 'a']).isRequired,
  align: _propTypes.default.oneOf(['', 'center', 'right']),
  size: _propTypes.default.oneOf(['xx-small', 'x-small', 'smaller', 'sm', 'md', 'lg', 'larger', 'x-large', 'xx-large']).isRequired,
  weight: _propTypes.default.oneOf(['lighter', 'normal', 'bolder', 'bold']),
  // redefine
  color: _propTypes.default.oneOf(['']),
  family: _propTypes.default.oneOf([''])
};
var _default = TextTag;
exports.default = _default;