import * as constants from "./constants";
import axios from "axios";

const getList = list => {
  const totalPage = Math.ceil(list.length / 10);
  return {
    type: constants.GET_LIST,
    list,
    totalPage
  };
};

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const getSearchList = () => {
  return dispatch => {
    axios.get("api/getSearchList.json").then(res => {
      dispatch(getList(res.data.data));
    });
  };
};

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});

export const changePage = pageIndex => ({
  type: constants.CHANGE_PAGE,
  pageIndex
});
