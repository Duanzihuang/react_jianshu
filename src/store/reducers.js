// import {combineReducers} from 'redux'
import {combineReducers} from 'redux-immutable'
import {headerReducer} from '../pages/header/store'

const reducers = combineReducers({
    header:headerReducer
})

export default reducers