import React from "react";
import Profile from "../../components/Profile/Profile";
import EditPosts from "../../components/EditPosts/EditPosts";
import Posts from "../../components/Posts/Posts";
import postOperations from "../../redux/operations/postOperations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Home() {

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const name = useSelector((state) => state.auth.user.name);
  useEffect(() => {
    dispatch(postOperations.getPosts(name));
  });

  return (
    <div className="container">
      <Profile />
      <EditPosts />
      <Posts posts={posts} />
    </div>
  );
}
