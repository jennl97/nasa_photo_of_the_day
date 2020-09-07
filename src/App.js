import React from "react";
import "./App.css";

//import components
import Header from "./components/Header.js";
import ImageList from "./components/ImageList";


function App() {
  return (
    <div className="App">
      <Header />
    <div className="imgDiv">
      <ImageList />
      </div>
    </div>
  );
}

export default App;
