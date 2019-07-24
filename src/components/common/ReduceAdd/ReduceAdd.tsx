import { View, Button } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import ThemeView from '../ThemeView/ThemeView';
require('./ReduceAdd.scss')

export interface IProps {
    number: number,
    onAction: Function
}

export interface IState {
    number: number
}

class ReduceAdd extends Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    static options = {
        addGlobalClass: true
    }

    onClick = (type: string) => {
        console.log(type)
        this.props.onAction(type)
    }

    render() {
        const count = this.props.number;
        return (
            <View>
                <View>{count}</View>
                <Button onClick={this.onClick.bind(this, 'add')}>+1</Button>
                <Button onClick={this.onClick.bind(this, 'reduce')}>-1</Button>
                <ThemeView>
                    <View className='themeText'>Im ThemeView Text !</View>
                </ThemeView>
            </View>
        )
    }
}

export default ReduceAdd;