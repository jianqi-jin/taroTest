import { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
require('./ThemeVeiw.scss')

class ThemeView extends Component{
    render(){
        return (
            <View className='ThemeView'>
                {this.props.children}
            </View>
        )
    }
}

export default ThemeView;