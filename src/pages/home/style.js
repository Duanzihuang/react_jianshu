import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 960px;
  margin: 20px auto;
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
