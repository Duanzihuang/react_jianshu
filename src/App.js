import React, { Component } from "react";
import { GlobalStyle1 } from "./statics/global/style";
import { GlobalStyle2 } from "./statics/global/iconfont/iconfont";
import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./pages/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from './pages/login/loadable.js'
import Write from './pages/write'

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle1 />
        <GlobalStyle2 />
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={Home} />
              <Route path="/detail/:id" exact component={Detail} />
              <Route path="/login" exact component={Login} />
              <Route path="/write" exact component={Write} />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
