import React from "react";
import { AppLogo } from "../AppLogo";
import { NavLink } from "react-router-dom";
import { SearchBar } from "../SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphones,
  faHouse,
  faPodcast,
} from "@fortawesome/free-solid-svg-icons";
import { Profile } from "../Profile";

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <AppLogo />
      <ul className="link-container">
        <li>
          <FontAwesomeIcon icon={faHouse} />
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <FontAwesomeIcon icon={faPodcast} />
          <NavLink to="/social">Social</NavLink>
        </li>
        <li>
          <FontAwesomeIcon icon={faHeadphones} />
          <NavLink to="/library">Library</NavLink>
        </li>
      </ul>
      <SearchBar />
      <Profile/>
    </nav>
  );
};
