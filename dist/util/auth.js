'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = undefined;

var _index = require('../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import api from './api';
var auth = exports.auth = function auth() {
  //监测授权状态
  _index2.default.getSetting({
    success: function success(res) {
      if (!res.authSetting['scope.userInfo']) {
        //未登录
        console.log(res.authSetting['scope.userInfo']);
        _index2.default.navigateTo({
          url: '/pages/user/login/login'
        });
        return;
      } else {
        _index2.default.getUserInfo().then(function (res) {
          //如果已经授权，就进行储存storage
          _index2.default.setStorage({
            key: 'userInfo',
            data: res.userInfo
          });
          //请求后台进行数据储存
          // api.login.reg(res.userInfo).then((res:any) => {
          //     console.log(res)
          // })
        });
      }
    }
  });
};