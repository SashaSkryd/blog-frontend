import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import postActions from "../actions/postActions";

const init = [];

const posts = createReducer(init, {
  [postActions.getPostsSuccess]: (_, {payload}) =>payload,
  [postActions.removePostSuccess]: (state, {payload})=> payload,
});

export default combineReducers({
  posts,
});
