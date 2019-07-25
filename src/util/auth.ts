import Taro from '@tarojs/taro'
// import api from './api';
export const auth = () => {
    //监测授权状态
    Taro.getSetting({
        success(res) {
            if (!res.authSetting['scope.userInfo']) {
                //未登录
                console.log(res.authSetting['scope.userInfo'])
                Taro.navigateTo({
                    url: '/pages/user/login/login'
                })
                return
            } else {
                Taro.getUserInfo().then(res => {
                    //如果已经授权，就进行储存storage
                    Taro.setStorage({
                        key: 'userInfo',
                        data: res.userInfo
                    })
                    //请求后台进行数据储存
                    // api.login.reg(res.userInfo).then((res:any) => {
                    //     console.log(res)
                    // })
                })
            }
        }
    })
}