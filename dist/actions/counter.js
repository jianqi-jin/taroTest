"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minus = exports.add = undefined;
exports.asyncAdd = asyncAdd;

var _counter = require("../constants/counter.js");

var add = exports.add = function add() {
  return {
    type: _counter.ADD
  };
}; //actions
var minus = exports.minus = function minus() {
  return {
    type: _counter.MINUS
  };
};
// 异步的 action
function asyncAdd() {
  return function (dispatch) {
    setTimeout(function () {
      dispatch(add());
    }, 2000);
  };
}