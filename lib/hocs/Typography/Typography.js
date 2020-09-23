"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTypographyElements = createTypographyElements;
exports.default = exports.withTypography = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Heading = _interopRequireDefault(require("../../Typography/Heading"));

var _Paragraph = _interopRequireDefault(require("../../Typography/Paragraph"));

var _TextSection = _interopRequireDefault(require("../../Typography/TextSection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function excludeClassParamsFromProps(params, props) {
  var propForClasses = Object.values(params);
  var restPropKeys = Object.keys(props).filter(function (propKey) {
    return !propForClasses.includes(propKey);
  });
  var result = {
    classObj: {},
    rest: {}
  }; // populate result rest

  restPropKeys.forEach(function (restPropKey) {
    result.rest[restPropKey] = props[restPropKey];
  }); // populate classObj

  Object.keys(params).forEach(function (keyAsClassName) {
    var propKeyName = params[keyAsClassName];
    var isPropPassed = Boolean(props[propKeyName]);

    if (isPropPassed) {
      var classNameFromKey = keyAsClassName.replace("%".concat(propKeyName), props[propKeyName]);
      result.classObj[classNameFromKey] = true;
    }
  });
  return result;
}

var withTypography = function withTypography(WrappedComponent, params) {
  var WrappedComponentWithTypography = function WrappedComponentWithTypography(_ref) {
    var _objectSpread2;

    var children = _ref.children,
        className = _ref.className,
        truncate = _ref.truncate,
        align = _ref.align,
        size = _ref.size,
        transform = _ref.transform,
        weight = _ref.weight,
        props = _objectWithoutProperties(_ref, ["children", "className", "truncate", "align", "size", "transform", "weight"]);

    var _excludeClassParamsFr = excludeClassParamsFromProps(params, props),
        classObj = _excludeClassParamsFr.classObj,
        rest = _excludeClassParamsFr.rest;

    return (0, _react.createElement)(WrappedComponent, _objectSpread({
      className: (0, _classnames.default)('ms-typography', _objectSpread((_objectSpread2 = {
        'ms-typography--truncate': truncate
      }, _defineProperty(_objectSpread2, "ms-typography--align-".concat(align), align), _defineProperty(_objectSpread2, "ms-typography--size-".concat(size), size), _defineProperty(_objectSpread2, "ms-typography--transform-".concat(transform), transform), _defineProperty(_objectSpread2, "ms-typography--weight-".concat(weight), weight), _objectSpread2), classObj), className)
    }, rest), children);
  };

  WrappedComponentWithTypography.defaultProps = {
    weight: 'normal',
    className: '',
    align: '',
    size: '',
    transform: '',
    truncate: false
  };
  WrappedComponentWithTypography.propTypes = {
    // required
    children: _propTypes.default.node.isRequired,
    weight: _propTypes.default.oneOf(['lightest', 'lighter', 'normal', 'bold', 'bolder', 'boldest']),
    // optional
    className: _propTypes.default.string,
    align: _propTypes.default.oneOf(['', 'center', 'justify', 'right']),
    size: _propTypes.default.oneOf(['', 'xx-small', 'x-small', 'smaller', 'sm', 'md', 'lg', 'larger', 'x-large', 'xx-large']),
    transform: _propTypes.default.oneOf(['', 'capitalize', 'uppercase']),
    truncate: _propTypes.default.bool
  };
  return WrappedComponentWithTypography;
};

exports.withTypography = withTypography;

function createTypographyElements(typographyParams) {
  var Heading = withTypography(_Heading.default, typographyParams);
  var Paragraph = withTypography(_Paragraph.default, typographyParams);
  var TextSection = withTypography(_TextSection.default, typographyParams);
  return {
    Heading: Heading,
    Paragraph: Paragraph,
    TextSection: TextSection
  };
}

var _default = createTypographyElements;
exports.default = _default;