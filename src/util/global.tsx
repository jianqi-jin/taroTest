
import Taro from '@tarojs/taro'

interface IOption {
    key: string,
    data: string | object
}

export let globalData: {
    baseConfig: {
        navBottom: {
            url: string,
            img: string,
            selectedImg: string,
            title: string,
            havT: boolean
        }[]
    }
}

export const setGlobal = (option: IOption) => {
    console.log(option)
    Taro.setStorage(option).then(() => {
        globalData = { [option.key]: option.data, ...globalData }
    }).catch(e => console.log(e))
}

export const getGlobal = (key: string) => globalData[key]

