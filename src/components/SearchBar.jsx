import React from "react";

export const SearchBar = () => {
  return (
    <section className="search-container">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="search here..."
      />
    <button>search</button>
    </section>
  );
};
