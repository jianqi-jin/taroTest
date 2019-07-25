//reducers是纯函数，它的功能是区分传入的action，并保证动作的执行

import { ADD, MINUS } from '../constants/counter'

const INITIAL_STATE = {
    num: 0
}

export default function counter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                num: state.num + 1
            }
        case MINUS: return {
            ...state,
            num: state.num - 1
        }
        default:
            return state
    }
}