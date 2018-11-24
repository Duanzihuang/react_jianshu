import * as constants from "./constants";

import { fromJS } from "immutable";

const defaultState = fromJS({
  focus: false,
  list: [], // 获取的搜索结果
  pageIndex: 1, //当前页码
  totalPage: 1, //总页码
  mouseEnter: false //是否鼠标正处在上面
});

export const headerReducer = (state = defaultState, action) => {
  /**
    if(action.type===constants.SEARCH_FOCUS){
        return state.set('focus',true)
        // return {
        //     focus:true
        // }
    }

    if(action.type===constants.SEARCH_BLUR){
        // return {
        //     focus:false
        // }
        return state.set('focus',false)
    }

    return state
     */

  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set("focus", true);
    case constants.SEARCH_BLUR:
      return state.set("focus", false);
    case constants.GET_LIST:
      return state.merge({
        list: action.list,
        totalPage: action.totalPage
      });
    case constants.CHANGE_PAGE:
      // console.log("---CHANGE_PAGE---")
      return state.set("pageIndex", action.pageIndex);
    case constants.MOUSE_ENTER:
      return state.set("mouseEnter", true);
    case constants.MOUSE_LEAVE:
      // console.log("---MOUSE_LEAVE---")
      return state.set("mouseEnter", false);
    default:
      return state;
  }
};
