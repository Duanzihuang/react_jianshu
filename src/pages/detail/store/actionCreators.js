import axios from 'axios'
import * as constants from './constants'

const changeDetailInfo = data => ({
    type:constants.CHANGE_DETAIL_INFO,
    title:data.title,
    content:data.content
})

export const getDetailInfoData = () => {
    return (dispatch) => {
        axios.get('/api/getDetailInfo.json').then(response=>{
            dispatch(changeDetailInfo(response.data.data))
        })
    }
}