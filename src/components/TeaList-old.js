import React, { useState } from "react";
import Data from "../data.json";
import TeaItem from "./TeaItem";
import Search from "./Search";
import { useEffect } from "react";

const TeaList = () => {
  const [isActive, setActive] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
 

  useEffect(() => {
    renderTeaList(filteredResults);
  }, [filteredResults]);

  const toggleTeaType = (value) => {
    setActive(!isActive);
    if (isActive) {
      filterByTeatype(value);
    }
  };

  const filterByTeatype = (teaType) => {
    if (teaType) {
      const filteredData = Data.filter((item) => item.type === teaType);
      return setFilteredResults(filteredData);
    }
    return setFilteredResults(Data);
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = Data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Data);
    }
  };

  const renderTypeButtons = () => {
    return (
      <div className="buttons are-small">
        <button
          className={
            isActive ? "button is-link is-rounded" : "button is-rounded"
          }
          onClick={() => toggleTeaType("Früchtetee")}
        >
          Früchtetee
        </button>
      </div>
    );
  };

  const renderTeaList = (filteredResults) => {

    if (filteredResults) {
      filteredResults.map((item) => {
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
      })
    }
    else {
      Data.map((item) => {
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
      })
    }
  };
  // const renderTeaList = () => {
  //   return (
  //     <div className="columns is-flex-wrap-wrap">
  //       {searchInput.length > 1
  //         ? filteredResults.map((item) => {
  //             return (
  //               <div className="column flex-basis-item" key={item.id}>
  //                 <TeaItem
  //                   key={item.id}
  //                   id={item.id}
  //                   title={item.title}
  //                   type={item.type}
  //                   description={item.description}
  //                   sessional={item.sessional}
  //                 />
  //               </div>
  //             );
  //           })
  //         : Data.map((item) => {
  //             return (
  //               <div className="column flex-basis-item" key={item.id}>
  //                 <TeaItem
  //                   id={item.id}
  //                   title={item.title}
  //                   type={item.type}
  //                   description={item.description}
  //                   sessional={item.sessional}
  //                 />
  //               </div>
  //             );
  //           })}
  //     </div>
  //   );
  // };

  const renderSearchField = () => {
    return (
      <div className="field">
        <input
          className="input is-rounded"
          placeholder="Suche..."
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
    );
  };

  return (
    <div>
      {renderTypeButtons()}
      {renderSearchField()}
      {renderTeaList(filteredResults)}
    </div>
  );
};

export default TeaList;
