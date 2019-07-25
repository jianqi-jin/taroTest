'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serverUri = 'https://oa.yika.co/';
var postI = '58';
var header = {
  'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
};
var request = function request(type, data) {
  return new Promise(function (resolve) {
    _index2.default.getStorage({
      key: 'openid'
    }).then(function (res) {
      console.log(res);
      var openid = res.data;
      _index2.default.request({
        url: "https://oa.yika.co/app/ewei_shopv2_api.php?i=58&r=" + type + '&openid=' + openid,
        data: data ? data : '',
        header: header,
        method: data ? 'POST' : 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function success(res) {
          return resolve(res);
        }
      });
    }).catch(function (e) {
      console.log(e);
      var openid = '';
      _index2.default.request({
        url: "https://oa.yika.co/app/ewei_shopv2_api.php?i=58&r=" + type + '&openid=' + openid,
        data: data ? data : '',
        header: header,
        method: data ? 'POST' : 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function success(res) {
          return resolve(res);
        }
      });
    });
  });
};
var api = {
  login: {
    //小程序登录相关
    getOpenId: function getOpenId(data) {
      return request('wxapp.login', data);
    },
    reg: function reg(data) {
      return request('', data);
    }
  },
  order: {
    //订单相关
  },
  good: {
    //商品相关
    getGoodList: function getGoodList(data) {
      return request('senke.index.index', data);
    }
  },
  user: {
    //用户相关
  }
};
exports.default = api;