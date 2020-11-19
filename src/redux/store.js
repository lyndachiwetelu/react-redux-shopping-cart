import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { saveState, loadState } from '../localStorage/localStorage'
import rootReducer from './rootReducer'
import throttle from 'lodash/throttle'

const store = createStore(rootReducer, loadState(), composeWithDevTools())

store.subscribe(throttle(() => {
    saveState({
        shop: store.getState().shop
    })
  }, 1000))

export default store