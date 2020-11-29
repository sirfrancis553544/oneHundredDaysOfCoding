import React from "react";
import load from "./loader.gif"

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <img src={load} alt="Loading..." />;
  }
  return (
    <ul>
      {posts.map((post) => (
          <li key={post.id}>
              <hr/>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
