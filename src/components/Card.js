import React from "react";

function Card(props) {
  let title = props.obj.title.substring(0, 20) + "....";
  let body = props.obj.body.substring(0, 60) + " Read more" + "....";
  return (
    <div className="card" onClick={props.click}>
      <img src={`https://picsum.photos/200?random=${props.obj.id}`} alt="" />
      <div>User ID: {props.obj.id}</div>
      <div>Title: {title}</div>
      <p style={{ textAlign: "left" }}>Body: {body}</p>
    </div>
  );
}

export default Card;
