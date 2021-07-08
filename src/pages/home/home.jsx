import React from "react";
import Profile from "../../components/Profile/Profile";
import EditPosts from "../../components/EditPosts/EditPosts";
import Posts from "../../components/Posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import PostForm from "../../components/PostForm/PostForm";

export default function Home() {
  const [overlay, setOverlay] = useState(false);
  const [filterWord, setFilterWord] = useState("");
  const posts = useSelector((state) => state.posts.posts);

  function filterPosts(word) {
    return [...posts.filter((el) => el.title.includes(word))];
  }

  return (
    <div className="container">
      <Profile />
      <EditPosts
        setOverlay={setOverlay}
        overlay={overlay}
        setFilterWord={setFilterWord}
      />
      {overlay && <PostForm setOverlay={setOverlay} />}
      <Posts posts={filterPosts(filterWord)} />
    </div>
  );
}
