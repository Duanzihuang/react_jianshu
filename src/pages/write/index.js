import React from "react";

import { WriteWrapper,Main } from "./style.js";

import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

class Write extends React.Component {
  render() {
    const {isLogin} = this.props
    
    if (isLogin) {
      return <WriteWrapper>
            <Main>写文章呀...</Main>
        </WriteWrapper>;
    }else{
        return <Redirect to="/login"/>
    }
  }
}

const mapStateToProps = state => ({
  isLogin: state.getIn(["login", "isLogin"])
});

export default connect(
  mapStateToProps,
  null
)(Write);
