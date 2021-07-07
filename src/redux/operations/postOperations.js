import postActions from "../actions/postActions";
import axios from "axios";

const axiosToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

class UserPost {
  addPost = (credentials) => async (dispatch, getState) => {
    dispatch(postActions.addPostRequest());
    try {
      const token = getState().auth.token;
      const post = await axios.post("/posts", credentials);
      dispatch(postActions.addPostSuccess(post.data));
    } catch (error) {
      dispatch(postActions.addPostError(error.message));
    }
  };

  removePost = (id) => async (dispatch, getState) => {
    dispatch(postActions.removePostRequest());
    try {
      const token = getState().auth.token;
      const response = await axios.delete(`/posts/${id}`);
      dispatch(postActions.removePostSuccess(response.data));
    } catch (error) {
      dispatch(postActions.removePostError(error.message));
    }
  };
  editPost = (id) => async (dispatch, getState) => {
    dispatch(postActions.editPostRequest());
    try {
      const token = getState().auth.token;
      const post = await axios.patch(`/${id}`);
      dispatch(postActions.editPostSuccess(post.data));
    } catch (error) {
      dispatch(postActions.editPostError(error.message));
    }
  };

  getPosts = (id) => async (dispatch, getState) => {
    dispatch(postActions.getPostsRequest());
    try { 
      const post = await axios.get(`/posts/${id}`);
      dispatch(postActions.getPostsSuccess(post.data));
    } catch (error) {
      dispatch(postActions.getPostsError(error.message));
    }
  };
}
export default new UserPost();
