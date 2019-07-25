"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minus = exports.add = undefined;
exports.asyncAdd = asyncAdd;

var _index = require("../constants/index.js");

var add = exports.add = function add() {
  return {
    type: _index.ADD
  };
}; //actions
var minus = exports.minus = function minus() {
  return {
    minus: _index.MINUS
  };
};
function asyncAdd() {
  return function (dispatch) {
    setTimeout(function () {
      dispatch(add());
    });
  };
}