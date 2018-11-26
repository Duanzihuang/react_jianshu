import axios from "axios";
import * as constants from "./constants";

const changeHomeData = data => ({
  type: constants.CHANGE_HOME_DATA,
  articleList: data.articleList,
  recommendList: data.recommendList
});

const addArticleData = (data, nextPage) => ({
  type: constants.GET_MORE_DATA,
  list: data.list,
  nextPage
});

export const getHomeInfoData = () => {
  return dispatch => {
    axios.get("/api/getHomeInfo.json").then(response => {
      dispatch(changeHomeData(response.data.data));
    });
  };
};

export const getArticleListData = pageIndex => {
  return dispatch => {
    axios.get(`/api/getArticleList.json?page=${pageIndex}`).then(response => {
      dispatch(addArticleData(response.data, pageIndex + 1));
    });
  };
};

export const toggleShowToTop = showToTop => ({
  type: constants.SHOW_TO_TOP,
  showToTop
});
