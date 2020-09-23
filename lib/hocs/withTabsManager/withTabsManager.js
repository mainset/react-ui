"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var withTabsManager = function withTabsManager(WrappedComponent, TabsWrapper, ContentWrapper) {
  return function (_ref) {
    var tabs = _ref.children,
        props = _objectWithoutProperties(_ref, ["children"]);

    var initialTabId = _react.Children.count(tabs) > 1 ? tabs[0].props.tabId : tabs.props.tabId;

    var _useState = (0, _react.useState)(initialTabId),
        _useState2 = _slicedToArray(_useState, 2),
        activeTabId = _useState2[0],
        setActiveTab = _useState2[1];

    var initActiveTabSetter = (0, _react.useCallback)(function (nextActiveTabId) {
      return function () {
        setActiveTab(nextActiveTabId);
      };
    }, []);

    var tabsWithControl = _react.Children.map(tabs, function (child) {
      var childProps = _objectSpread({}, child.props);

      var tabId = childProps.tabId,
          rest = _objectWithoutProperties(childProps, ["tabId"]);

      var isActive = activeTabId === childProps.tabId;
      delete rest.children;
      return (0, _react.createElement)(child.type, _objectSpread({
        onClick: initActiveTabSetter(tabId),
        isActive: isActive
      }, rest));
    });

    var activeTabChildren = _react.Children.toArray(tabs).find(function (tab) {
      return tab.props.tabId === activeTabId;
    }).props.children;

    return _react.default.createElement(WrappedComponent, props, TabsWrapper ? _react.default.createElement(TabsWrapper, null, tabsWithControl) : tabsWithControl, ContentWrapper ? _react.default.createElement(ContentWrapper, null, activeTabChildren) : activeTabChildren);
  };
};

var _default = withTabsManager;
exports.default = _default;