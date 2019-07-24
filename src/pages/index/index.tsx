import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'
import ReduceAdd from '../../components/common/ReduceAdd/ReduceAdd'

export interface IState {
  number: number
}

export default class Index extends Component<Object, IState> {
  constructor(props) {
    super(props);
    this.state = {
      number: 1
    }
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

  onAction(type: String) {
    if (type === 'add') {

      console.log(type)
      this.setState({
        number: this.state.number + 1
      })
    } else {
      this.setState({
        number: this.state.number - 1
      })
    }
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
    const number = this.state.number;
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <ReduceAdd onAction={this.onAction.bind(this)} number={number} />
        <Button onClick={this.onClick}>goUser</Button>
      </View>
    )
  }
}
