import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authActions from "../actions/userActions";

const initialUserState = {nickname: null};

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload,
  [authActions.loginSuccess]: (_, { payload: { token, ...rest } }) => rest,
  [authActions.logOutSuccess]: () => initialUserState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logOutSuccess]: () => null,
});

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logOutSuccess]: () => false,
});

export default combineReducers({
  user,
  token,
  isAuthenticated,
});