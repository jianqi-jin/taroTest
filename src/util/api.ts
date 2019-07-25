import Taro from '@tarojs/taro'
const serverUri: string = 'https://oa.yika.co/';
const postI: string = '58'
const header: object = {
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
}

const request = (type: string, data?: object) => {
    return new Promise(resolve => {

        Taro.getStorage({
            key: 'openid'
        }).then(res => {
            console.log(res)
            const openid = res.data
            Taro.request({
                url: serverUri + 'app/ewei_shopv2_api.php?i=' + postI + '&r=' + type +
                    '&openid=' + openid,
                data: data ? data : '',
                header,
                method: data ? 'POST' : 'GET',
                dataType: 'json',
                responseType: 'text',
                success: res => resolve(res)
            })
        }).catch(e => {
            console.log(e)
            const openid = ''
            Taro.request({
                url: serverUri + 'app/ewei_shopv2_api.php?i=' + postI + '&r=' + type +
                    '&openid=' + openid,
                data: data ? data : '',
                header,
                method: data ? 'POST' : 'GET',
                dataType: 'json',
                responseType: 'text',
                success: res => resolve(res)
            })
        })
    })


}
const api = {
    login: {
        //小程序登录相关
        getOpenId: (data: object) => request('wxapp.login', data),
        reg: (data: object) => request('', data)
    },
    order: {
        //订单相关
    },
    good: {
        //商品相关
        getGoodList: (data?: object) => request('senke.index.index', data)

    },
    user: {
        //用户相关
    }
}



export default api