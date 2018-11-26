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
  HeaderRecommond,
  LoadMore,
  BackToTop
} from "./style";

class Home extends Component {
  goToTop(){
    window.scroll(0,0)
  }

  render() {
    const { articleList,pageIndex, recommendList,getArticleList,showToTop } = this.props;
    
    return (
      <HeaderWrapper>
        <HeaderLeft>
          <img
            src="//upload.jianshu.io/admin_banners/web_images/4581/8cfb95afa4ac98683ce1b9ab0f835f425e6a7df5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt="540"
          />
          {articleList.map((article,index) => {
            return (
              // <ListItem key={article.get("id")}>
              <ListItem key={index}>
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
          <LoadMore onClick={()=>{getArticleList(pageIndex)}}>阅读更多</LoadMore>
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
        {
          showToTop ? <BackToTop onClick={()=>{this.goToTop()}}>回到顶部</BackToTop> : null
        }
      </HeaderWrapper>
    );
  }

  componentWillMount() {
    this.props.getHomeInfoData();
  }

  componentDidMount(){
    window.addEventListener('scroll',this.props.scrollToTop)
  }
}

const mapStateToProps = state => ({
  articleList: state.getIn(["home", "articleList"]),
  recommendList: state.getIn(["home", "recommendList"]),
  showToTop:state.getIn(['home','showToTop']),
  pageIndex:state.getIn(['home','pageIndex'])
});

const mapDispatchToProps = dispatch => {
  return {
    getHomeInfoData() {
      dispatch(actionCreators.getHomeInfoData());
    },
    getArticleList(pageIndex){
      dispatch(actionCreators.getArticleListData(pageIndex))
    },
    scrollToTop(){
      if (document.documentElement.scrollTop > 300 ){
        dispatch(actionCreators.toggleShowToTop(true))
      }else{
        dispatch(actionCreators.toggleShowToTop(false))
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
