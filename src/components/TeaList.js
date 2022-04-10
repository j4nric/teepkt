import React, { useState, useEffect } from "react";
import Data from "../data.json";
import TeaItem from "./TeaItem";
import Search from "./Search";

const TeaList = () => {
  const [filteredResults, setFilteredResults] = useState(Data);

  useEffect(() => {
    setFilteredResults(filteredResults);
  }, [filteredResults, setFilteredResults]);

  const renderList = () => {
    if (!filteredResults) {
      return;
    }
    return filteredResults.map((item) => {
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
      <Search
        filteredResults={filteredResults}
        setFilteredResults={setFilteredResults}
      />
      <div className="columns is-flex-wrap-wrap">{renderList()}</div>
    </div>
  );
};

export default TeaList;
