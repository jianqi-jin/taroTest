import { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import NavBottom from '../../components/common/NavBottom/NavBottom'
export default class Refer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View>Im refer</View>
                <NavBottom selectedIndex={3}></NavBottom>
            </View>
        )
    }
}