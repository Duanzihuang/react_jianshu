import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  articleList: [],
  recommendList: [],
  showToTop: false,
  pageIndex: 1
});

const setHomeData = (state, action) => {
  return state.merge({
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  });
};

const setMoreData = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(fromJS(action.list)),
    pageIndex: action.nextPage
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    // case constants.CHANGE_HOME_DATA:
    //   return state.merge({
    //     articleList: fromJS(action.articleList),
    //     recommendList: fromJS(action.recommendList)
    //   });
    // case constants.GET_MORE_DATA:
    //   return state.merge({
    //     articleList: state.get("articleList").concat(fromJS(action.list)),
    //     pageIndex: action.nextPage
    //   });
    case constants.CHANGE_HOME_DATA:
      return setHomeData(state,action);
    case constants.GET_MORE_DATA:
      return setMoreData(state,action);
    case constants.SHOW_TO_TOP:
      return state.set("showToTop", action.showToTop);
    default:
      return state;
  }
};
