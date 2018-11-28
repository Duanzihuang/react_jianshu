import axios from 'axios'
import * as constants from './constants'

export const changeLoginStatue = (isLogin) => ({
    type:constants.CHANGE_LOGIN_STATUS,
    isLogin
})

export const loginValidate = (username,password) => {
    return (dispatch) => {
        axios.get('/api/login.json',{username,password}).then(response=>{
            dispatch(changeLoginStatue(response.data.isLogin))
        })                
    }
}