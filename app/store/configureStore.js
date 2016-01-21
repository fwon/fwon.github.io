import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(
    createLogger()
)(createStore)

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState)
    return store
}