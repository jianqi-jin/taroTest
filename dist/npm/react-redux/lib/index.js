"use strict";

var _interopRequireDefault = require("../../@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;

var _Provider = _interopRequireDefault(require("./components/Provider.js"));

exports.Provider = _Provider["default"];

var _connectAdvanced = _interopRequireDefault(require("./components/connectAdvanced.js"));

exports.connectAdvanced = _connectAdvanced["default"];

var _Context = require("./components/Context.js");

exports.ReactReduxContext = _Context.ReactReduxContext;

var _connect = _interopRequireDefault(require("./connect/connect.js"));

exports.connect = _connect["default"];

var _useDispatch = require("./hooks/useDispatch.js");

exports.useDispatch = _useDispatch.useDispatch;

var _useSelector = require("./hooks/useSelector.js");

exports.useSelector = _useSelector.useSelector;

var _useStore = require("./hooks/useStore.js");

exports.useStore = _useStore.useStore;

var _batch = require("./utils/batch.js");

var _reactBatchedUpdates = require("./utils/reactBatchedUpdates.js");

exports.batch = _reactBatchedUpdates.unstable_batchedUpdates;

var _shallowEqual = _interopRequireDefault(require("./utils/shallowEqual.js"));

exports.shallowEqual = _shallowEqual["default"];
(0, _batch.setBatch)(_reactBatchedUpdates.unstable_batchedUpdates);