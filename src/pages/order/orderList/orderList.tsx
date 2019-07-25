import { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import NavBottom from "../../../components/common/NavBottom/NavBottom";


export default class OrderList extends Component {

    render() {
        return (
            <View>
                <View>Im orderList</View>
                <NavBottom selectedIndex={2}></NavBottom>
            </View>
        )
    }
}