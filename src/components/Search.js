import React, { useState, useEffect } from "react";
import Data from "../data.json";

const Search = ({ filteredResults, setFilteredResults }) => {

  const [items, setItems] = useState([]);
  const [q, setQ] = useState(""); 


  //   const [searchInput, setSearchInput] = useState("");

  //   useEffect(() => {
  //     searchItems(searchInput);
  //   },[searchInput]);

    // const searchItems = (searchValue) => {
    //   console.log()
    //   setSearchInput(searchValue);
    //   if (searchInput !== "") {
    //     const filteredData = Data.filter((item) => {
    //       return Object.values(item)
    //         .join("")
    //         .toLowerCase()
    //         .includes(searchInput.toLowerCase());
    //     });
    //     setFilteredResults(filteredData);
    //   } else {
    //     setFilteredResults(Data);
    //   }
    // };

  //   return (
  //     <div className="field">
  //       <input
  //         className="input is-rounded"
  //         placeholder="Suche..."
  //         onChange={(e) => searchItems(e.target.value)}
  //       />
  //     </div>
  //   );
  // };

  return (
    <div className="field">
      <label htmlFor="search-form">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="input is-rounded"
          placeholder="Search for..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Search;
