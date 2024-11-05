import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
// import api from "../api/posts";
// import { useContext } from "react";
// import DataContext from "../context/DataContext";
import { useStoreState, useStoreActions } from "easy-peasy";

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const { posts, setPosts } = useContext(DataContext);
  // const post = posts.find((post) => post.id.toString() === id);

  // EASY PEASY
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id);
  // EASY PEASY

  const handleDelete = (id) => {
    // EASY PEASY
    deletePost(id);
    navigate("/");
    // EASY PEASY

    // try {
    //   await api.delete(`/posts/${id}`);
    //   const postsList = posts.filter((post) => post.id !== id);
    //   setPosts(postsList);
    //   navigate("/");
    // } catch (err) {
    //   console.log(`Error: ${err.message}`);
    // }
  };

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate"> {post.datetime} </p>
            <p className="postBody"> {post.body} </p>
            <Link to={`/edit/${post.id}`}>
              {" "}
              <button className="btn btn-secondary btnEdit">
                Edit Post
              </button>{" "}
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found D:</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Visit Our Homepage!</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
