import authActions from "../actions/userActions";
import axios from "axios";
import postOperations from './postOperations';

axios.defaults.baseURL = "https://blog-server-practice.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:5500";

const axiosToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

class UserAuth {
  register = (credentials,history) => async (dispatch) => {
    dispatch(authActions.registerRequest());
    try {
      const response = await axios.post("/users/", credentials);
      dispatch(authActions.registerSuccess(response.data));
      dispatch(postOperations.getPosts(response.data.id))
      history.push('/');
    } catch (error) {
      dispatch(authActions.loginError(error.message));
    }
  };

  login = (credentials,history) => async (dispatch) => {
    dispatch(authActions.loginRequest());
    try {
      const response = await axios.put("/users/", credentials);
      dispatch(authActions.loginSuccess(response.data));
      dispatch(postOperations.getPosts(response.data.id))
      history.push('/');
    } catch (error) {
      dispatch(authActions.loginError(error.message));
    }
  };

  current = (credentials) => async (dispatch, getState) => {
    const {
      auth: { token: persistedToken },
    } = getState();
    if(!persistedToken){
      return
    }
    axiosToken.set(persistedToken);
    dispatch(authActions.getCurrentUserRequest());
    try {
      const response = await axios.get("/users/");
      dispatch(authActions.getCurrentUserSuccess(response.data));
      dispatch(postOperations.getPosts(response.data.id))
    } catch (error) {
      dispatch(authActions.getCurrentUserError(error.message));
    }
  };

  logout = (credentials) => async (dispatch) => {
    dispatch(authActions.logOutRequest());
    try {
      await axios.patch("/users/", credentials);
      dispatch(authActions.logOutSuccess());
      axiosToken.unset();
    } catch (error) {
      dispatch(authActions.loginError(error.message));
    }
  };
}

export default new UserAuth();
