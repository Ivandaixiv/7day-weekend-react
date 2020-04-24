import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/podcast">Podcast</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/vlog">Vlog</Link>
        </li>
        <li>
          <Link to="/webinar">Webinar</Link>
        </li>
        <li>
          <Link to="/media">Media</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
