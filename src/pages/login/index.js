import React from "react";

import { connect } from "react-redux";

import { actionCreators } from "./store";

import { Redirect } from "react-router-dom";

import { LoginWrapper, Main, Input, Button } from "./style";

class Login extends React.Component {
  render() {
    const { login, isLogin } = this.props;
    if (!isLogin) {
      return (
        <LoginWrapper>
          <Main>
            <Input ref="usernameRef" placeholder="手机号或邮箱" />
            <Input ref="passwordRef" placeholder="密码" />
            <Button onClick={() => login(this)}>登录</Button>
          </Main>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = state => ({
  isLogin: state.getIn(["login", "isLogin"])
});

const mapDispatchToProps = dispatch => ({
  login(obj) {
    const username = obj.refs.usernameRef.value;
    const password = obj.refs.passwordRef.value;
    // 发送请求、去登录
    dispatch(actionCreators.loginValidate(username, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
