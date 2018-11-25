// import {combineReducers} from 'redux'
import {combineReducers} from 'redux-immutable'
import {headerReducer} from '../pages/header/store'
import {reducer as homeReducer} from '../pages/home/store/'

const reducers = combineReducers({
    header:headerReducer,
    home:homeReducer
})

export default reducers