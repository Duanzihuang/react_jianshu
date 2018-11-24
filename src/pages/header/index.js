import React from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  Search,
  SearchArea,
  SearchInfo,
  SearchInfoSwitch,
  SearchList,
  SearchItem,
  ButtonWrapper,
  Button
} from "./style";

import { CSSTransition } from "react-transition-group";

import { connect } from "react-redux";
import { actionCreators } from "./store";

/** 
export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocus: false //是否聚焦
    };
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left home">首页</NavItem>
          <NavItem className="left download">下载App</NavItem>
          <NavItem className="right upperlower">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <NavItem className="right">登录</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.state.isFocus}
              classNames="slide"
              timeout={200}
            >
              <Search
                onBlur={() => {
                  this.setState({ isFocus: false });
                }}
                onFocus={() => {
                  this.setState({ isFocus: true });
                }}
                className={this.state.isFocus ? "focus" : ""}
              />
            </CSSTransition>
            <i className={this.state.isFocus ? "iconfont focus" : "iconfont"}>
              &#xe64d;
            </i>
          </SearchWrapper>
        </Nav>
        <ButtonWrapper>
          <Button className="writting">
            <i className="iconfont">&#xe624;</i> 写文章
          </Button>
          <Button>注册</Button>
        </ButtonWrapper>
      </HeaderWrapper>
    );
  }
}
*/

const getSearchArea = props => {
  const {
    focus,
    pageIndex,
    totalPage,
    changePage,
    mouseEnter,
    list,
    onMouseEnter,
    onMouseLeave
  } = props;

  const searchList = [];
  if (list.length > 0) {
    for (var i = (pageIndex - 1) * 10; i < pageIndex * 10; i++) {
      searchList.push(list[i]);
    }
  }

  // console.log(focus,mouseEnter)

  if (focus || mouseEnter) {
    return (
      <SearchArea onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <SearchInfo>
          热门搜索
          <SearchInfoSwitch
            onClick={() => {
              changePage(pageIndex, totalPage);
            }}
          >
            <i id="spinId" className="iconfont switch">&#xe851;</i>换一批
          </SearchInfoSwitch>
        </SearchInfo>
        <SearchList>
          {searchList.map(item => {
            if (item) {
              return <SearchItem key={item}>{item}</SearchItem>;
            }else{
              return null
            }
          })}
        </SearchList>
      </SearchArea>
    );
  } else {
    return null;
  }
};

const Header = props => {
  const { focus, searchFocus, list , searchBlur } = props;
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left home">首页</NavItem>
        <NavItem className="left download">下载App</NavItem>
        <NavItem className="right upperlower">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <NavItem className="right">登录</NavItem>
        <SearchWrapper>
          <CSSTransition in={focus} classNames="slide" timeout={200}>
            <Search
              onBlur={searchBlur}
              onFocus={()=>{searchFocus(list)}}
              className={focus ? "focus" : ""}
            />
          </CSSTransition>
          <i className={focus ? "iconfont focus zoom" : "iconfont zoom"}>&#xe64d;</i>
          {getSearchArea(props)}
        </SearchWrapper>
      </Nav>
      <ButtonWrapper>
        <Button className="writting">
          <i className="iconfont">&#xe624;</i> 写文章
        </Button>
        <Button>注册</Button>
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

const mapStateToProps = state => {
  return {
    // focus:state.header.focus

    // 单纯的使用 immutable 这个第三方包
    // focus:state.header.get('focus')

    // 使用 redux-immutable这个包
    // focus:state.get('header').get('focus')
    focus: state.getIn(["header", "focus"]),
    mouseEnter: state.getIn(["header", "mouseEnter"]),
    list: state.getIn(["header", "list"]),
    pageIndex: state.getIn(["header", "pageIndex"]),
    totalPage: state.getIn(["header", "totalPage"])
  };
};

const mapDispatchToProps = dispatch => ({
  searchFocus(list) {
    if(list.size === 0) {
      dispatch(actionCreators.getSearchList());
    }
    dispatch(actionCreators.searchFocus());
  },
  searchBlur() {
    dispatch(actionCreators.searchBlur());
  },
  onMouseEnter() {
    dispatch(actionCreators.mouseEnter());
  },
  onMouseLeave() {
    // console.log("onMouseLeave")
    dispatch(actionCreators.mouseLeave());
  },
  changePage(pageIndex, totalPage) {
    const spinDom = document.getElementById("spinId")
    //获取之前的transform
    let originAngle = spinDom.style.transform.replace(/[^0-9]/ig,'')
  
    if(originAngle){
      originAngle = parseInt(originAngle)
    }else{
      originAngle = 0
    }

    spinDom.style = `transform:rotate(${originAngle+360}deg);transition:all .5s;transform-origin:center center;`

    // console.log(pageIndex,totalPage)
    if (pageIndex < totalPage) {
      dispatch(actionCreators.changePage(pageIndex + 1));
    } else {
      dispatch(actionCreators.changePage(1));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
