import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'
import ReduceAdd from '../../components/common/ReduceAdd/ReduceAdd'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '1'
    };
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */


  onClick = (e) => {
    console.log(e)
    Taro.navigateTo({
      url: '/pages/user/user'
    })
  }
  config: Config = {
    navigationBarTitleText: '首页'
  }
  componentWillMount() {
    console.log('Will')
  }

  componentDidMount() {
    console.log('Will')
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <ReduceAdd />
        <Button onClick={this.onClick}>goUser</Button>
      </View>
    )
  }
}
