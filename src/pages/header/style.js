import styled from "styled-components";

import LogoImage from "../../statics/images/logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  width: 100%;
  border-bottom: 1px solid #eee;
`;

export const Logo = styled.a`
  float: left;
  display: inline-block;
  width: 100px;
  height: 56px;
  background: url(${LogoImage});
  background-size: contain;
`;

export const Nav = styled.div`
  float: left;
  height: 56px;
  width: 840px;
  // background:green;
`;

export const NavItem = styled.a`
  display: block;
  line-height: 56px;
  padding: 0 20px;
  height: 56px;
  color: #969696;
  font-size: 18px;
  // background:red;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    // background:red;
  }
  &.home {
    color: #ea6f5a;
  }
  &.download {
    color: #333;
  }
  &.upperlower {
    .iconfont {
      font-size: 24px;
    }
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  margin-left: 20px;
  // width:160px;
  // height:56px;
  float: left;
  .zoom {
    margin-top: 13px;
    border-radius: 19px;
    position: absolute;
    width: 30px;
    line-height: 30px;
    top: 0;
    right: 5px;
    text-align: center;
    &.focus {
      background: #999;
    }
  }
  // background:red;
`;

export const Search = styled.input.attrs({
  placeholder: "搜索"
})`
  height: 38px;
  width: 180px;
  border-radius: 19px;
  margin-top: 9px;
  padding: 0 15px;
  background: #eee;
  padding: 0 35px 0 20px;
  border: none;
  outline: none;
  &::placeholder {
    color: #999;
  }
  &.focus {
    width: 240px;
  }
  &.slide-enter {
    width: 180px;
  }
  &.slide-enter-active {
    transition: all 0.2s ease-out;
    width: 240px;
  }
  &.slide-exit {
    width: 240px;
  }
  &.slide-exit-active {
    transition: all 0.2s ease-out;
    width: 180px;
  }
`;

export const SearchArea = styled.div`
    position:absolute;
    margin-top:9px;
    left:0,
    top:56px;
    // background:red;
    // height:100px;
    width:250px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfo = styled.div`
  //   float: left;
  margin-top: 15px;
  margin-left: 15px;
  line-height: 20px;
  color: #969696;
  font-size: 14px;
  margin-bottom: 15px;
`;

export const SearchInfoSwitch = styled.a`
  float: right;
  font-size: 13px;
  margin-right: 10px;
  color: #969696;
  cursor:pointer;
  .switch {
    display:block;
    float:left;
    font-size: 12px;
    margin-right: 5px;
    // transiton:all 0.5s ease-in;
    // transform:rotate(50deg);
    // transform-origin:center center;
  }
`;

export const SearchList = styled.div`
  margin-left: 15px;
`;

export const SearchItem = styled.a`
  float: left;
  padding: 2px 6px;
  margin-right: 15px;
  margin-bottom: 10px;
  display: inline-block;
  line-height: 28px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  // float:right;
  width: 220px;
`;

export const Button = styled.div`
  font-size: 15px;
  line-height: 38px;
  width: 80px;
  float: right;
  margin: 0 8px;
  border-radius: 20px;
  margin-top: 9px;
  border: 1px solid #ea6f5a;
  text-align: center;
  color: #ea6f5a;
  &.writting {
    background: #ea6f5a;
    color: #fff;
    width: 90px;
  }
`;
