"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _utils = require("../utils");

var useCallbackDebounce = function useCallbackDebounce(dFunc, dependencies) {
  var debounceRef = (0, _react.useRef)([]);
  (0, _react.useEffect)(function () {
    debounceRef.current = dependencies;
  }, dependencies);

  for (var _len = arguments.length, dArgs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    dArgs[_key - 2] = arguments[_key];
  }

  var debounceFunc = _utils.msDebounce.apply(void 0, [dFunc].concat(dArgs));

  var callbackDebounce = (0, _react.useCallback)(function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    debounceFunc.apply(void 0, [debounceRef].concat(args));
  }, []);
  return callbackDebounce;
};

var _default = useCallbackDebounce;
exports.default = _default;