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

var Spacer = function Spacer() {
  return (0, _react.createElement)('div', {
    className: 'ms-list__spacer'
  });
};

var createListElements = function createListElements(_ref) {
  var baseClassName = _ref.baseClassName;

  var List = function List(_ref2) {
    var children = _ref2.children,
        className = _ref2.className,
        direction = _ref2.direction,
        justify = _ref2.justify,
        type = _ref2.type,
        props = _objectWithoutProperties(_ref2, ["children", "className", "direction", "justify", "type"]);

    return (0, _react.createElement)('ul', _objectSpread({
      className: (0, _classnames.default)(className, baseClassName, "ms-list ms-list--direction-".concat(direction), "ms-list--type-".concat(type), _defineProperty({}, "ms-list--justify-".concat(justify), justify))
    }, props), children);
  };

  List.defaultProps = {
    className: '',
    direction: 'horizontal',
    justify: '',
    type: 'unstyled'
  };
  List.propTypes = {
    children: _propTypes.default.node.isRequired,
    className: _propTypes.default.string,
    direction: _propTypes.default.oneOf(['horizontal', 'vertical']),
    justify: _propTypes.default.oneOf(['', 'center', 'end']),
    type: _propTypes.default.oneOf(['unstyled', 'oredered'
    /* 'unordered', */
    ])
  };
  return {
    List: List,
    Spacer: Spacer
  };
};

var _default = createListElements;
exports.default = _default;