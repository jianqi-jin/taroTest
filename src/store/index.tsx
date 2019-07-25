import { createStore } from 'redux'
import counter from '../reducers'

export default function configStore() {
    const store = createStore(counter)
    return store
}