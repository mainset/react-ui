"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createTypographyElements", {
  enumerable: true,
  get: function get() {
    return _Typography.default;
  }
});
Object.defineProperty(exports, "withTypography", {
  enumerable: true,
  get: function get() {
    return _Typography.withTypography;
  }
});

var _Typography = _interopRequireWildcard(require("./Typography"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }