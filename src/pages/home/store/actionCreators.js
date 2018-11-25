import axios from "axios";
import * as constants from "./constants";

const changeHomeData = data => ({
  type: constants.CHANGE_HOME_DATA,
  articleList: data.articleList,
  recommendList: data.recommendList
});

export const getHomeInfoData = () => {
  return dispatch => {
    axios.get("/api/getHomeInfo.json").then(response => {
      dispatch(changeHomeData(response.data.data));
    });
  };
};
