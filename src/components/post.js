import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  ///////////////////////////
  // Style Objects
  ///////////////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };

  return (
    <div style={div}>
      <Link to={`/post/${post.id}`}>
        <h1>{post.mealname}</h1>
      </Link>
      <h2>{post.image}</h2>
      <h2>{post.rating}</h2>
      <h2>{post.restname}</h2>
      <h2>{post.restaddress}</h2>
      <h2>{post.summary}</h2>
    </div>
  );
};

export default Post;