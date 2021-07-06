import { createAction } from "@reduxjs/toolkit";

const addPostRequest  = createAction('posts/addPostRequest');
const addPostSuccess  = createAction('posts/addPostSuccess');
const addPostError  = createAction('posts/addPostError');

const getPostsRequest = createAction('posts/getPostsRequest');
const getPostsSuccess = createAction('posts/getPostsSuccess');
const getPostsError = createAction('posts/getPostsError');

const removePostRequest = createAction('posts/removePostRequest');
const removePostSuccess = createAction('posts/removePostSuccess');
const removePostError = createAction('posts/removePostError');

const editPostRequest = createAction('post/editPostRequest');
const editPostSuccess = createAction('post/editPostSuccess');
const editPostError = createAction('post/editPostError');


const obj = {
    addPostRequest,
    addPostSuccess,
    addPostError,
    getPostsRequest,
    getPostsSuccess,
    getPostsError,
    removePostRequest,
    removePostSuccess,
    removePostError,
    editPostRequest,
    editPostSuccess,
    editPostError,
}
export default obj;
