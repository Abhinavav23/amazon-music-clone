import React from "react";
import { Outlet, NavLink, Routes, Route } from "react-router-dom";

export const Library = () => {
  return (
    <section>
      <h2>Library</h2>
      {/* <Outlet /> */}
      <NavLink to="likedSongs">LikedSongs</NavLink>
      <br />
      <NavLink to="downloads">downloads</NavLink>

      <Routes>
        <Route path="likedSongs" element={<h3>Songs liked by you</h3>} />
        <Route path="downloads" element={<h3>Songs downloaded by you</h3>} />
        <Route path="*" element={<h2>Library not supported</h2>}/>
      </Routes>
    </section>
  );
};
