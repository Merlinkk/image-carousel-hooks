import React, { Component } from "react";
import Carousel from "./components/Carousel";
// import "./App.css";
import ImageData from "./data/CarouselData";


function App() {
  return (
    <div className="App">
        <Carousel ImgData={ImageData} />
      </div>
  )
}

export default App