import Taro, { Component } from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import { auth } from "../../../util/auth";

export interface IProps {
    user: string
}
export interface IState {
    user: string
}

export default class Login extends Component<IProps, IState>{
    constructor(props) {
        super(props);
        this.state = this.props;
    }

    config = {
        navigationBarTitleText: '授权登录'
    }

    onBtnUserClick(e) {
        console.log(e)
        // Taro.setStorageSync('userInfo', e.detail.userInfo);
        auth()

    }
    componentWillMount() {
        //获取参数
        const user: string = this.$router.params.user;
        this.setState({
            user
        })
    }
    render() {
        return (
            <View>
                Login
                <Button onGetUserInfo={this.onBtnUserClick} open-type='getUserInfo'>授权</Button>
            </View>
        )
    }
}

