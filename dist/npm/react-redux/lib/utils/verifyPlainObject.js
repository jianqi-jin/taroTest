"use strict";

var _interopRequireDefault = require("../../../@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = verifyPlainObject;

var _isPlainObject = _interopRequireDefault(require("./isPlainObject.js"));

var _warning = _interopRequireDefault(require("./warning.js"));

function verifyPlainObject(value, displayName, methodName) {
  if (!(0, _isPlainObject["default"])(value)) {
    (0, _warning["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}