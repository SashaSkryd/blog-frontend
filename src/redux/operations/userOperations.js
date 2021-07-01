import authActions from "../actions/userActions";
import axios from "axios";

axios.defaults.baseURL = "https://blog-server-practice.herokuapp.com";

const token = {
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
          const response = await axios.post("/blog/user", credentials);
          dispatch(authActions.registerSuccess(response.data));
        } catch (error) {
            console.log(error.message);
          dispatch(authActions.loginError(error.message));
        }
      };

      login = (credentials) => async (dispatch) => {
        dispatch(authActions.loginRequest());
        try{
          const response = await axios.put("/blog/user", credentials);
          dispatch(authActions.loginSuccess(response.data));
        }catch(error){
          dispatch(authActions.loginError(error.message));
        }
      };

      current = (credentials) => async (dispatch) => {
        dispatch(authActions.getCurrentUserRequest());
        try{
          const response = await axios.get("/blog/user", credentials);
          dispatch(authActions.getCurrentUserSuccess(response.data))
        }catch(error){
          dispatch(authActions.getCurrentUserError(error.message))
        }
       
      };

      logout = (credentials) => async (dispatch) => {
        dispatch(authActions.logOutRequest());
        try{
          const response = await axios.patch("/blog/user", credentials);
          dispatch(authActions.logOutSuccess());
        }catch(error){
          dispatch(authActions.loginError(error.message));
        }
       
      };
}

export default new UserAuth();