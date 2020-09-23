"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var asLayout = function asLayout(WrappedComponent) {
  var WrappedComponentAsLayout = function WrappedComponentAsLayout(_ref) {
    var _cn;

    var className = _ref.className,
        contentAlignHorizontally = _ref.contentAlignHorizontally,
        contentAlignVertically = _ref.contentAlignVertically,
        contentSpace = _ref.contentSpace,
        contentDirection = _ref.contentDirection,
        hideOn = _ref.hideOn,
        showOn = _ref.showOn,
        rest = _objectWithoutProperties(_ref, ["className", "contentAlignHorizontally", "contentAlignVertically", "contentSpace", "contentDirection", "hideOn", "showOn"]);

    // NOTE: content has column direction when it's spaced vertically
    var isContentDirectionAsColumn = contentSpace && contentSpace.includes('vertically');
    var isContentShouldDisplayAsFlex = contentAlignHorizontally || contentAlignVertically || contentSpace;
    return _react.default.createElement(WrappedComponent, _extends({
      className: (0, _classnames.default)(className, (_cn = {
        'ms-layout--flex': isContentShouldDisplayAsFlex
      }, _defineProperty(_cn, "ms-layout--direction-".concat(isContentDirectionAsColumn ? 'column' : contentDirection), isContentShouldDisplayAsFlex), _defineProperty(_cn, "ms-layout--horizontally-".concat(contentAlignHorizontally), contentAlignHorizontally), _defineProperty(_cn, "ms-layout--vertically-".concat(contentAlignVertically), contentAlignVertically), _defineProperty(_cn, "ms-layout--space-".concat(contentSpace), contentSpace), _defineProperty(_cn, "ms-layout--hidden-".concat(hideOn), hideOn), _defineProperty(_cn, "ms-layout--shown-".concat(showOn), showOn), _cn))
    }, rest));
  };

  WrappedComponentAsLayout.defaultProps = {
    className: '',
    contentDirection: 'row'
  };
  WrappedComponentAsLayout.propTypes = {
    contentAlignHorizontally: _propTypes.default.oneOf(['start', 'center', 'end']),
    contentAlignVertically: _propTypes.default.oneOf(['start', 'center', 'end']),
    contentSpace: _propTypes.default.oneOf(['between-horizontally', 'between-vertically', 'around-horizontally', 'around-vertically', 'vertically']),
    contentDirection: _propTypes.default.oneOf(['row', 'column']),
    hideOn: _propTypes.default.oneOf(['mobile', 'desktop']),
    showOn: _propTypes.default.oneOf(['mobile', 'desktop'])
  };
  return WrappedComponentAsLayout;
};

var _default = asLayout;
exports.default = _default;