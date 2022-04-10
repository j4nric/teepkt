import React from "react";

const Searchbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <form className="field" action="/" method="get">
      <label htmlFor="search-form">
        <input
          type="search"
          name="s"
          id="search-form"
          className="input is-rounded"
          placeholder="Search for..."
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
        />
      </label>
    </form>
  );
};

export default Searchbar;
