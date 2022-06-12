import React from 'react';
import image from "../images/user.png";
import { Link } from "react-router-dom";
import "../css/Card.css";
const Card = ({ user }) => {
  return (
    <div className="card">
          <img className="image" src={image}  alt="User" />
    <div className="card-body text-center">
      <h2>{user.name}</h2>
      <p>@{user.username}</p>
      <a href={`//${user.website}`} rel="noreferrer" target="_blank">{user.website}</a>
      <br />
      <Link  to={`/user/${user.id}`} className="btn btn-outline-primary ">
          More Details
        </Link>
    </div>
  </div>
  );
};
export default Card;