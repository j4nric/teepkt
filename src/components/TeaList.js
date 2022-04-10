import React, { useState, useEffect } from "react";
import Data from "../data.json";
import TeaItem from "./TeaItem";
import Search from "./Search";

// Search
const filterPosts = (Data, query) => {
  if (query) {
    const filteredData = Data.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    return filteredData;
  } else {
    return Data;
  }
};

const TeaList = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(Data, searchQuery);

  const renderList = () => {
    return filteredPosts.map((item) => {
      return (
        <div className="column flex-basis-item" key={item.id}>
          <TeaItem
            key={item.id}
            id={item.id}
            title={item.title}
            type={item.type}
            description={item.description}
            sessional={item.sessional}
          />
        </div>
      );
    });
  };

  return (
    <div className="notification is-primary">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="columns is-flex-wrap-wrap">{renderList()}</div>
    </div>
  );
};

export default TeaList;
