"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Col = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Layout = require("../../hocs/Layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Col = function Col(_ref) {
  var _cn;

  var children = _ref.children,
      className = _ref.className,
      size = _ref.size,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      offset = _ref.offset,
      noSpacing = _ref.noSpacing,
      props = _objectWithoutProperties(_ref, ["children", "className", "size", "xs", "sm", "md", "lg", "xl", "offset", "noSpacing"]);

  return (0, _react.createElement)('div', _objectSpread({
    className: (0, _classnames.default)('ms-col', (_cn = {}, _defineProperty(_cn, "ms-col--offset-".concat(offset), offset), _defineProperty(_cn, "ms-col--size-".concat(size), size && !(xs || sm || md || lg || xl)), _defineProperty(_cn, "ms-col--xs-".concat(xs), xs), _defineProperty(_cn, "ms-col--sm-".concat(sm), sm), _defineProperty(_cn, "ms-col--md-".concat(md), md), _defineProperty(_cn, "ms-col--lg-".concat(lg), lg), _defineProperty(_cn, "ms-col--xl-".concat(xl), xl), _defineProperty(_cn, 'ms-col--no-spacing', noSpacing), _cn), className)
  }, props), children);
};

exports.Col = Col;
var colSizes = ['full', 'unset', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
Col.defaultProps = {
  children: null,
  className: '',
  size: 'full',
  noSpacing: false
};
Col.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf(colSizes),
  xs: _propTypes.default.oneOf(colSizes),
  sm: _propTypes.default.oneOf(colSizes),
  md: _propTypes.default.oneOf(colSizes),
  lg: _propTypes.default.oneOf(colSizes),
  xl: _propTypes.default.oneOf(colSizes),
  offset: _propTypes.default.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  noSpacing: _propTypes.default.bool
};

var _default = (0, _Layout.asLayout)(Col);

exports.default = _default;