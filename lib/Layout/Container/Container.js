"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Container = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Layout = require("../../hocs/Layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className,
      gapSize = _ref.gapSize,
      width = _ref.width;
  return (0, _react.createElement)('div', {
    className: "ms-container ms-container--width-".concat(width, " ms-container--gap-").concat(gapSize, " ").concat(className && " ".concat(className))
  }, children);
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