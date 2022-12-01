import React from "react";
import FetchData from "./components/FetchData";
import StarRating from "./components/StarRating";
import InputForm from "./components/InputForm";
import "./App.css";

function App() {
  return (
    <div>
      <InputForm />
      <StarRating />
      <FetchData />
    </div>
  );
}

export default App;
