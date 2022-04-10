import React, { useState } from "react";
import TeaList from "./TeaList";
import Header from "./Header";
import Search from "./Search";
import Data from "../data.json";

const App = () => {
  return (
    <div className="container">
      <Header />

      <TeaList />
    </div>
  );
};

export default App;
