import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import ThemeView from "../../common/ThemeView/ThemeView";
import "./NavBottom.scss"

interface IProps {
    selectedIndex: number
}
interface IState {
    navBottom: {
        title: string,
        url: string,
        img: string,
        selectedImg: string,
        havT: boolean

    }[]
}

export default class NavBottom extends Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = props;
    }

    componentDidMount() {
        //从storage中读取配置信息
        Taro.getStorage({
            key: 'baseConfig'
        }).then((res: any) => {
            console.log(res)
            this.setState({
                navBottom: res.data.navBottom
            })
        })
    }
    onItemClick(item) {
        Taro.redirectTo({
            url: item.url
        })
    }
    componentWillReceiveProps(e){
        console.log(e)
    }
    render() {
        let navBottom = this.state.navBottom;
        return (
            <ThemeView>
                <View className='navBottomBox'>
                    {navBottom.map(item => (
                        <View className='navItem' onClick={this.onItemClick.bind(this, item)} key={item.title}>
                            <View className={item.havT ? 'icon' : 'icon iconNoTitle'}><Image src={item.img} /></View>
                            {item.havT && <View >{item.title}</View>}
                        </View>)
                    )}
                </View>
            </ThemeView>
        )
    }

}