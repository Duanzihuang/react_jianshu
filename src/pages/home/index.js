import React, { Component } from "react";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

class Home extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderLeft />
        <HeaderRight />
      </HeaderWrapper>
    );
  }
}

export default Home;
