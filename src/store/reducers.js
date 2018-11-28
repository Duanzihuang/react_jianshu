// import {combineReducers} from 'redux'
import {combineReducers} from 'redux-immutable'
import {headerReducer} from '../pages/header/store'
import {reducer as homeReducer} from '../pages/home/store/'
import {reducer as detailReducer} from '../pages/detail/store/'
import {reducer as loginReducer} from '../pages/login/store/'

const reducers = combineReducers({
    header:headerReducer,
    home:homeReducer,
    detail:detailReducer,
    login:loginReducer
})

export default reducers