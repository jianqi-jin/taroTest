"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGlobal = exports.setGlobal = exports.globalData = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var globalData = exports.globalData = void 0;
var setGlobal = exports.setGlobal = function setGlobal(option) {
  console.log(option);
  _index2.default.setStorage(option).then(function () {
    exports.globalData = globalData = _extends(_defineProperty({}, option.key, option.data), globalData);
  }).catch(function (e) {
    return console.log(e);
  });
};
var getGlobal = exports.getGlobal = function getGlobal(key) {
  return globalData[key];
};