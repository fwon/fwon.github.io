import {combineReducers} from 'redux'
import {
    CLICK_MENU
} from '../actions'

function slideState(state=false, action) {
    switch(action.type) {
        case CLICK_MENU:
            return action.slideState
        default:
            return state
    }
}

const rootReducer = combineReducers({
    slideState
})

export default rootReducer