import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  ///////////////////////////
  // Style Objects
  ///////////////////////////
  const div = {
    textAlign: "center",
    border: "3px solid lightgray",
    margin: "10px auto",
    width: "80%",
  };

  return (
    <div style={div}>
      <Link to={`/post/${post.id}`}>
        <h1>{post.mealname}</h1>
      </Link>
      <img   src={post.image} alt={post.mealname} />
      {/* <h3>Rating: {post.rating}</h3> */}
      <h3>From {post.restname}</h3>
      {/* <h3>Restaurant Address: {post.restaddress}</h3> */}
      {/* <h3>Summary: {post.summary}</h3> */}
    </div>
  );
};

export default Post;