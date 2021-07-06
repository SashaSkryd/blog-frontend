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
      axiosToken.unset();
    } catch (error) {
      dispatch(postActions.addPostError(error.message));
    }
  };

  removePost = (id) => async (dispatch, getState) => {
    dispatch(postActions.removePostRequest());
    try {
      const token = getState().auth.token;
      const post = await axios.delete(`/${id}`);
      dispatch(postActions.removePostSuccess(post.data));
      axiosToken.unset();
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
      axiosToken.unset();
    } catch (error) {
      dispatch(postActions.editPostError(error.message));
    }
  };

  getPosts = (author) => async (dispatch, getState) => {
    dispatch(postActions.getPostsRequest());
    try {
      const token = getState().auth.token;
      const post = await axios.get(`/posts/${author}`);
      console.log('post.data :>> ', post.data);
      dispatch(postActions.getPostsSuccess(post.data));
      axiosToken.unset();
    } catch (error) {
      dispatch(postActions.getPostsError(error.message));
    }
  };
}
export default new UserPost();
