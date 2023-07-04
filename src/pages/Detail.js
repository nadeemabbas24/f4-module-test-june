import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detial() {
  const param = useParams();
  const posts = useSelector((state) => state.posts);
  console.log("location and id", param.id);

  const post = posts.filter((item) => {
    return item.id == param.id;
  });
  console.log(post);

  return (
    <div className="detail">
      <h2>Details Page For Post With ID {param.id}</h2>

      <img src={`https://picsum.photos/200?random=${param.id}`} alt=" " />

      <p>User ID: {post[0].id}</p>
      <p>Title: {post[0].title}</p>
      <p>Post: {post[0].body}</p>
    </div>
  );
}

export default Detial;
