import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
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
            </View>
        )
    }
}