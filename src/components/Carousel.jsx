import "./Carousel.css";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React,{useState} from 'react'

function Carousel({ImgData}) {

  const [activeIndex, setActiveIndex] = useState(0)

  function nextHandler() {
    if (activeIndex < ImgData.length - 1) {
      setActiveIndex(activeIndex + 1)
    } else {
      setActiveIndex(0)
    }
    console.log(activeIndex)
  }

  function backHandler(){
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    } else {
      setActiveIndex(2)
    }
    console.log(activeIndex)
  }

  return (
    <>
        <div className="carousel">
          <div onClick={backHandler} className="arrowHolder">
            <ArrowBackIosIcon className="left-arrow" />
          </div>
          <div className="carousel-inner">
            {ImgData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    index === activeIndex
                      ? "carousel-item active"
                      : "carousel-item"
                  }
                >
                  <h1 className="absoluteText top">{ImgData[index].title}</h1> 
                  <h1 className="absoluteText bottom">{ImgData[index].subtitle}</h1>  
                  <img src={item.img} alt="carousel-image" />
                </div>
              );
            })}
          </div>
          <div onClick={nextHandler} className="arrowHolder">
            <ArrowForwardIosIcon className="right-arrow" />
          </div>
        </div>
      </>
  )
}

export default Carousel