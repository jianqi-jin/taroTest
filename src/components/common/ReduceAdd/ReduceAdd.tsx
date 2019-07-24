import { View, Button } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';



class ReduceAdd extends Component {
    constructor(props) {
        super(props);

    }

    static options = {
        addGlobalClass: true
    }

    onClick = (type: string) => {
        console.log(type)
    }

    render() {
        const count = 1;
        return (
            <View>
                <View>{count}</View>
                <Button onClick={this.onClick.bind(this, 'add')}>+1</Button>
                <Button onClick={this.onClick.bind(this, 'reduce')}>-1</Button>
                <View className='themeText'>Im ThemeView Text !</View>
            </View>
        )
    }
}

export default ReduceAdd;