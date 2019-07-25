import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import NavBottom from '../../components/common/NavBottom/NavBottom'
import './user.scss'

export default class User extends Component {
    constructor() {
        super()
    }
    config = {
        navigationBarTitleText: '我的'
    }


    render() {
        return (
            <View className='user'>
                <Text>user</Text>
                <NavBottom selectedIndex={3}></NavBottom>
            </View>
        )
    }
}