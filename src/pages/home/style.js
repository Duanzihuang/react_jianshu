import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 960px;
  margin: 20px auto;
  margin-top:76px;
  background: green;
`;

export const HeaderLeft = styled.div`
  width: 640px;
  //   height: 300px;
  //   background: green;
  float: left;
  img {
    width: 100%;
    height: 270px;
  }
  a:link,a:visited{color:#444;text-decoration:none;}
  a:hover{color:#ff0000;}
`;

export const ListItem = styled.div`
  margin-top: 20px;
  border-bottom: 1px solid #eee;
  // overflow:hidden;
  // background:red;
  display: flex;
  padding: 10px 0px;
`;
export const ListItemLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h3 {
    font-size: 16px;
    font-weight: bold;
  }
  p {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const ListItemRight = styled.div`
  width: 150px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const LoadMore = styled.div`
  width:95%;
  height:40px;
  line-height:40px;
  border-radius:20px;
  border:1px solid #ccc;
  color:#fff;
  background:#a5a5a5;
  text-align:center;
  font-size:12px;
  margin:30px 0px;
  cursor:pointer;
`

export const HeaderRecommond = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 10px;
  img {
    wdith: 100%;
    height: 100%;
  }
`;

export const HeaderRight = styled.div`
  margin-top: -4px;
  width: 280px;
  //   height: 400px;
  //   background: purple;
  float: right;
`;

export const BackToTop = styled.div`
  width:60px;
  height:60px;
  line-height:60px;
  border:1px solid #ccc;
  position:fixed;
  right:100px;
  bottom:100px;
  font-size:12px;
  text-align:center;
`
