import React,{Component} from 'react'

import {DetailWrapper} from './style'

import {actionCreators} from './store/'

import {connect} from 'react-redux'

class Detail extends Component{
    render(){
        const {title,content} = this.props
        return <DetailWrapper>
            <h3>{title}</h3>
            <div dangerouslySetInnerHTML={{__html: content}} />
        </DetailWrapper>
    }

    componentDidMount(){
        this.props.getDetailInfo()
    }
}

const mapStateToProps = (state) => ({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})

const mapDispatchToProps = (dispatch) => {
    return {
        getDetailInfo(){
            dispatch(actionCreators.getDetailInfoData())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail)