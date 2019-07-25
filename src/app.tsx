import Taro, { Component, Config, getSetting } from '@tarojs/taro'
import Index from './pages/index/index'

import './app.scss'
import api from './util/api'
import { setGlobal } from './util/global';
import configStore from './store';
import { Provider } from '@tarojs/redux';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

export interface IOpenidRes {
  data: {

    data: {
      openid: string
    }
  }
}

interface IBaseConfig {
  navBottom: {
    url: string,
    img: string,
    selectedImg: string,
    title: string,
    havT: boolean
  }[]
}

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/user/user',
      'pages/user/login/login',
      'pages/refer/refer',
      'pages/order/orderList/orderList',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }
  componentDidMount() {
    //测试延时加载
    //监测授权状态
    Taro.login({
      success: (res) => {
        console.log(res)
        //使用code换取openid
        api.login.getOpenId({ code: res.code }).then((res: IOpenidRes) => {
          console.log(res)
          //获取到openid进行storage设置全局openid
          //使用异步因为react native 不支持同步操作
          setGlobal({
            key: 'openid',
            data: 'sns_wa_' + res.data.data.openid
          })
        })
      }
    })

    getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          //未登录
          console.log('未授权')

        } else {
          Taro.getUserInfo().then(res => {
            //如果已经授权，就进行储存storage
            Taro.setStorage({
              key: 'userInfo',
              data: res.userInfo
            })
          })
        }
      }
    })
    //设置全局变量至storage缓存 Start

    const baseConfig: IBaseConfig = {
      navBottom: [
        {
          url: '/pages/index/index',
          img: '/res/icon/nav-icon-home.png',
          selectedImg: '/res/icon/nav-icon-home-pre.png',
          title: '首页',
          havT: true
        },
        {
          url: '/pages/refer/refer',
          img: '/res/icon/tuijian.png',
          selectedImg: '/res/icon/tuijian.png',
          title: '推荐有奖',
          havT: false
        },
        {
          url: '/pages/order/orderList/orderList',
          img: '/res/icon/nav-icon-order.png',
          selectedImg: '/res/icon/nav-icon-order-pre.png',
          title: '订单',
          havT: true
        },
        {
          url: '/pages/user/user',
          img: '/res/icon/nav-icon-user.png',
          selectedImg: '/res/icon/nav-icon-user-pre.png',
          title: '我的',
          havT: true
        }
      ]
    }
    // 设置navBottom Start


    // 设置navBottom End
    setTimeout(() => {
      setGlobal({
        key: 'baseConfig',
        data: baseConfig
      })
    }, 5000)
    //设置全局变量至storage缓存 End







  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(
  <App />
  , document.getElementById('app'))
