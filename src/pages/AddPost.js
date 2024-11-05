import React from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
// import { useState, useContext } from "react";
// import DataContext from "../context/DataContext";
// import api from "../api/posts";
import { useStoreState, useStoreActions } from "easy-peasy";

const AddPost = () => {
  // const { posts, setPosts } = useContext(DataContext);
  // const [postTitle, setPostTitle] = useState("");
  // const [postBody, setPostBody] = useState("");
  const navigate = useNavigate();

  // EASY PEASY
  const posts = useStoreState((state) => state.posts);
  const postTitle = useStoreState((state) => state.postTitle);
  const postBody = useStoreState((state) => state.postBody);

  const savePost = useStoreActions((actions) => actions.savePost);
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle);
  const setPostBody = useStoreActions((actions) => actions.setPostBody);
  //EASY PEASY

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    // EASY PEASY
    savePost(newPost);
    navigate("/");
    // EASY PEASY

    // try {
    //   const response = await api.post("/posts", newPost);
    //   const allPosts = [...posts, response.data];
    //   setPosts(allPosts);
    //   setPostTitle("");
    //   setPostBody("");
    //   navigate("/");
    // } catch (err) {
    //   console.log(`Error: ${err.message}`);
    // }
  };

  return (
    <main className="NewPost">
      <h1>Add Post</h1>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title: </label>
        <input
          type="text"
          id="postTitle"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />

        <label htmlFor="postBody">Body:</label>
        <textarea
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </main>
  );
};

export default AddPost;
