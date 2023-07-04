import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useSelector } from "react-redux";

function Home() {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts);

  function clickHandler(id) {
    navigate(`/item/${id}`);
  }

  return (
    <div className="container">
      {posts &&
        posts.map((obj) => {
          return (
            <Card key={obj.id} obj={obj} click={() => clickHandler(obj.id)} />
          );
        })}
    </div>
  );
}

export default Home;
