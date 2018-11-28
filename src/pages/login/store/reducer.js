import {fromJS} from 'immutable'

import * as constants from './constants'

const defaultState = fromJS({
    isLogin:false
})

export default (state = defaultState,action) => {
    switch (action.type) {
        case constants.CHANGE_LOGIN_STATUS:
            return state.set('isLogin',action.isLogin)
        default:
            return state
    }
}