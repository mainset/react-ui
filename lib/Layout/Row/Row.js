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

var Row = function Row(_ref) {
  var children = _ref.children,
      className = _ref.className,
      noGutters = _ref.noGutters,
      withHorizontalScroll = _ref.withHorizontalScroll;
  return (0, _react.createElement)('div', {
    className: (0, _classnames.default)('ms-row', {
      'ms-row--no-gutters': noGutters,
      'ms-row--with-scroll': withHorizontalScroll
    }, className)
  }, children);
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