import React, { Component } from "react";

import { connect } from "react-redux";

import { actionCreators } from "./store/";

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight,
  ListItem,
  ListItemLeft,
  ListItemRight,
  HeaderRecommond
} from "./style";

class Home extends Component {
  render() {
    const { articleList, recommendList } = this.props;

    return (
      <HeaderWrapper>
        <HeaderLeft>
          <img
            src="//upload.jianshu.io/admin_banners/web_images/4581/8cfb95afa4ac98683ce1b9ab0f835f425e6a7df5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt="540"
          />
          {articleList.map(article => {
            return (
              <ListItem key={article.get("id")}>
                <ListItemLeft>
                  <h3>{article.get("title")}</h3>
                  <p>{article.get("content")}</p>
                </ListItemLeft>
                <ListItemRight>
                  <img src={article.get("imgUrl")} alt="" />
                </ListItemRight>
              </ListItem>
            );
          })}
        </HeaderLeft>
        <HeaderRight>
          {recommendList.map(recommend => {
            return (
              <HeaderRecommond key={recommend.get("id")}>
                <img src={recommend.get("imgUrl")} alt="" />
              </HeaderRecommond>
            );
          })}
        </HeaderRight>
      </HeaderWrapper>
    );
  }

  componentWillMount() {
    this.props.getHomeInfoData();
  }
}

const mapStateToProps = state => ({
  articleList: state.getIn(["home", "articleList"]),
  recommendList: state.getIn(["home", "recommendList"])
});

const mapDispatchToProps = dispatch => {
  return {
    getHomeInfoData() {
      dispatch(actionCreators.getHomeInfoData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
