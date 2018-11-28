import Loadable from "react-loadable";
import React from 'react'

const LoadableComponent = Loadable({
  loader: () => import("./index"),
  loading: () => {
      return <div style={{width:300,height:300,marginTop:200,marginLeft:'auto',marginRight:'auto',textAlign:'center'}}>
          正在加载中...
      </div>
  }
});

export default () => <LoadableComponent/>  