import React from "react";
// import { useState, useEffect, useContext } from "react";
// import api from "../api/posts";
// import DataContext from "../context/DataContext";
import { useParams, Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect } from "react";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const { posts, setPosts } = useContext(DataContext);
  // const [editTitle, setEditTitle] = useState("");
  // const [editBody, setEditBody] = useState("");
  // const post = posts.find((post) => post.id.toString() === id);

  // EASY PEASY
  const editTitle = useStoreState((state) => state.editTitle);
  const editBody = useStoreState((state) => state.editBody);

  const editPost = useStoreActions((actions) => actions.editPost);
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const setEditBody = useStoreActions((actions) => actions.setEditBody);

  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id);
  // EASY PEASY

  const handleEdit = (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };

    // EASY PEASY
    editPost(updatedPost);
    navigate(`/post/${id}`);

    // EASY PEASY

    // try {
    //   const response = await api.put(`/posts/${id}`, updatedPost);
    //   setPosts(
    //     posts.map((post) => (post.id === id ? { ...response.data } : post))
    //   );
    //   setEditTitle("");
    //   setEditBody("");
    //   navigate("/");
    // } catch (err) {
    //   console.log(`Error: ${err.message}`);
    // }
  };

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main className="EditPost">
      {editTitle && (
        <>
          <h1>Add Post</h1>
          <form className="editPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="editTitle">Title: </label>
            <input
              type="text"
              id="editTitle"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />

            <label htmlFor="editBody">Body:</label>
            <textarea
              id="editBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button
              type="submit"
              onClick={() => handleEdit(post.id)}
              className="btn btn-primary"
            >
              Edit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to="/">Visit Our Homepage</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;
