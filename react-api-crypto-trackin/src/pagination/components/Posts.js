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
              {/* <hr/> */}
          {post.market_cap_rank}
          {post.name}
          {post.symbol}
         
        </li>
      ))}
    </ul>
  );
};

export default Posts;
