"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Row = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Layout = require("../../hocs/Layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Row = function Row(_ref) {
  var children = _ref.children,
      className = _ref.className,
      noGutters = _ref.noGutters,
      withHorizontalScroll = _ref.withHorizontalScroll,
      props = _objectWithoutProperties(_ref, ["children", "className", "noGutters", "withHorizontalScroll"]);

  return (0, _react.createElement)('div', _objectSpread({
    className: (0, _classnames.default)('ms-row', {
      'ms-row--no-gutters': noGutters,
      'ms-row--with-scroll': withHorizontalScroll
    }, className)
  }, props), children);
};

exports.Row = Row;
Row.defaultProps = {
  className: '',
  noGutters: false,
  withHorizontalScroll: false
};
Row.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  noGutters: _propTypes.default.bool,
  withHorizontalScroll: _propTypes.default.bool
};

var _default = (0, _Layout.asLayout)(Row);

exports.default = _default;