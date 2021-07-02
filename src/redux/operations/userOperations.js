import authActions from "../actions/userActions";
import axios from "axios";

axios.defaults.baseURL = "https://blog-frontend-practice-ne.herokuapp.com/auth";

const axiosToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

class UserAuth {
  register = (credentials) => async (dispatch) => {
    dispatch(authActions.registerRequest());
    try {
      const response = await axios.post("/users/", credentials);
      dispatch(authActions.registerSuccess(response.data));
    } catch (error) {
      dispatch(authActions.loginError(error.message));
    }
  };

  login = (credentials) => async (dispatch) => {
    dispatch(authActions.loginRequest());
    try {
      const response = await axios.put("/users/", credentials);
      dispatch(authActions.loginSuccess(response.data));
    } catch (error) {
      dispatch(authActions.loginError(error.message));
    }
  };

  current = (credentials) => async (dispatch, getState) => {
    const {
      auth: { token: persistedToken },
    } = getState();
    axiosToken.set(persistedToken);
    dispatch(authActions.getCurrentUserRequest());
    try {
      const response = await axios.get("/users/");
      dispatch(authActions.getCurrentUserSuccess(response.data));
    } catch (error) {
      dispatch(authActions.getCurrentUserError(error.message));
    }
  };

  logout = (credentials) => async (dispatch) => {
    dispatch(authActions.logOutRequest());
    try {
      await axios.patch("/users/", credentials);
      dispatch(authActions.logOutSuccess());
      authActions.unset();
    } catch (error) {
      dispatch(authActions.loginError(error.message));
    }
  };
}

export default new UserAuth();
