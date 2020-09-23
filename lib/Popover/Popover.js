"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Container
var PopoverContainer = function PopoverContainer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      setVisibleOnHover = _ref.setVisibleOnHover,
      props = _objectWithoutProperties(_ref, ["children", "className", "setVisibleOnHover"]);

  return (0, _react.createElement)('div', _objectSpread({
    className: (0, _classnames.default)(className, 'ms-popover__container', {
      'ms-popover__container--visible-on-hover': setVisibleOnHover
    })
  }, props), children);
};

PopoverContainer.defaultProps = {
  setVisibleOnHover: false
};
PopoverContainer.propTypes = {
  setVisibleOnHover: _propTypes.default.bool
}; // Placeholder

var PopoverPlaceholder = function PopoverPlaceholder(_ref2) {
  var _cn;

  var children = _ref2.children,
      className = _ref2.className,
      hAlign = _ref2.hAlign,
      vAlign = _ref2.vAlign,
      isVisible = _ref2.isVisible,
      position = _ref2.position,
      setWidthInherit = _ref2.setWidthInherit,
      props = _objectWithoutProperties(_ref2, ["children", "className", "hAlign", "vAlign", "isVisible", "position", "setWidthInherit"]);

  return (0, _react.createElement)('div', _objectSpread({
    className: (0, _classnames.default)(className, 'ms-popover__placeholder', "ms-popover__placeholder--position-".concat(position), (_cn = {
      'ms-popover__placeholder--visible': isVisible
    }, _defineProperty(_cn, "ms-popover__placeholder--horizontally-".concat(hAlign), hAlign), _defineProperty(_cn, "ms-popover__placeholder--vertically-".concat(vAlign), vAlign), _defineProperty(_cn, 'ms-popover__placeholder--width-inherit', setWidthInherit), _cn))
  }, props), children);
};

PopoverPlaceholder.defaultProps = {
  isVisible: false,
  position: 'absolute'
};
PopoverPlaceholder.propTypes = {
  isVisible: _propTypes.default.bool,
  position: _propTypes.default.oneOf(['absolute', 'static']),
  hAlign: _propTypes.default.oneOf(['left', 'center', 'right']),
  vAlign: _propTypes.default.oneOf(['top', 'middle', 'bottom'])
};
var _default = {
  Container: PopoverContainer,
  Placeholder: PopoverPlaceholder
};
exports.default = _default;