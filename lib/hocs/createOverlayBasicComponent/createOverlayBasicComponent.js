"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initOverlayByIdToggler = initOverlayByIdToggler;
exports.createOverlayBasicComponent = createOverlayBasicComponent;
exports.OverlayProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// * Helpers
var initialState = {
  isOverlayVisibleById: {// TODO: Add isShownByDefault prop support
  }
};
var OverlayContext = (0, _react.createContext)(initialState);
var overlayHook = {
  isInitialized: false
};

function initOverlayByIdToggler(overlayId, cb) {
  return function () {
    overlayHook.toggleOverlay({
      isOverlayVisibleById: _objectSpread({}, overlayHook.overlay.isOverlayVisibleById, _defineProperty({}, overlayId, !overlayHook.overlay.isOverlayVisibleById[overlayId]))
    });
    if (cb) cb();
  };
} // * Provider


var OverlayProvider = function OverlayProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      overlay = _useState2[0],
      toggleOverlay = _useState2[1];

  overlayHook = {
    overlay: overlay,
    toggleOverlay: toggleOverlay
  };

  var overlayContextProvideValue = _objectSpread({}, overlay, {
    actions: {
      initOverlayByIdToggler: initOverlayByIdToggler
    }
  });

  return _react.default.createElement(OverlayContext.Provider, {
    value: overlayContextProvideValue
  }, children);
};

exports.OverlayProvider = OverlayProvider;
OverlayProvider.propTypes = {
  children: _propTypes.default.node.isRequired
};

function createOverlayBasicComponent(_ref2) {
  var BASIC_CLASS_NAME = _ref2.BASIC_CLASS_NAME,
      cnBuilderProps = _ref2.cnBuilderProps;
  var classNamePrefix = "".concat(BASIC_CLASS_NAME, "-");

  var OverlayBasicComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(OverlayBasicComponent, _Component);

    function OverlayBasicComponent(props) {
      var _this;

      _classCallCheck(this, OverlayBasicComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(OverlayBasicComponent).call(this, props));
      _this.overlayRoot = window && window.document.getElementById("".concat(BASIC_CLASS_NAME, "-root")); // this.overlayElement = document.createElement('div');
      // populate component dynamic class name obj

      _this.dynamicClassName = {};
      if (cnBuilderProps) cnBuilderProps.forEach(function (_ref3) {
        var propKey = _ref3.propKey,
            modifier = _ref3.modifier,
            options = _ref3.options,
            defaultValue = _ref3.defaultValue;
        var isPropBool = typeof options === 'boolean';
        var modifierPrefix = modifier || propKey;
        var modifierValue = isPropBool ? '' : "-".concat(props[propKey] || defaultValue);
        var className = "".concat(BASIC_CLASS_NAME, "--").concat(modifierPrefix).concat(modifierValue);
        _this.dynamicClassName[className] = props[propKey] || defaultValue;
      });
      return _this;
    } // componentDidMount() {
    //   this.overlayRoot.appendChild(this.overlayElement);
    // }
    // componentWillUnmount() {
    //   this.overlayRoot.removeChild(this.overlayElement);
    // }


    _createClass(OverlayBasicComponent, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            id = _this$props.id,
            children = _this$props.children,
            className = _this$props.className;
        var componentClassName = classNamePrefix + id;
        return _react.default.createElement(OverlayContext.Consumer, null, function (_ref4) {
          var isOverlayVisibleById = _ref4.isOverlayVisibleById;
          return isOverlayVisibleById[id] && _this2.overlayRoot ? (0, _reactDom.createPortal)(_react.default.createElement("div", {
            id: id,
            className: (0, _classnames.default)(BASIC_CLASS_NAME, _this2.dynamicClassName, componentClassName, className)
          }, children), _this2.overlayRoot // this.overlayElement,
          ) : null;
        });
      }
    }]);

    return OverlayBasicComponent;
  }(_react.Component);

  _defineProperty(OverlayBasicComponent, "config", {
    classNamePrefix: classNamePrefix
  });

  OverlayBasicComponent.defaultProps = {
    className: ''
  };
  OverlayBasicComponent.propTypes = {
    children: _propTypes.default.node.isRequired,
    id: _propTypes.default.string.isRequired,
    className: _propTypes.default.string
  }; // * Shared

  OverlayBasicComponent.Consumer = OverlayContext.Consumer;
  return OverlayBasicComponent;
}