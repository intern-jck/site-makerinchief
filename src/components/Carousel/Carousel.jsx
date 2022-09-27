import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft, FaExpandArrowsAlt } from "react-icons/fa";
import "./Carousel.css";

const Carousel = ({slides}) => {
  console.log(slides)

  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(slides.length);

  const [images, setImages] = useState([]);
  const [text, setText] = useState({header: '', short: ''});
  const [tags, setTags] = useState([]);

  useEffect(() => {
  }, []);


  const nextSlide = () => {
    setCurrent(current === length - 1 ? length - 1 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? 0 : current - 1);
  };

  const updateCurrentImage = (event) => {
    event.preventDefault();
    const {name} = event.target;
    setCurrent(name);
  };

  return (

    <div className="Carousel">

      <div className='carousel-content'>
        <div className='carousel-header'>
          <h3>HEADER GOES HERE</h3>
        </div>
        <div className="carousel-img">
          {/* {current} */}
          <img
            hidden={false}
            src={slides[current].img} />
        </div>
        <div className='carousel-short'>
          {slides[current].short}
        </div>
      </div>

      <div className='carousel-controls'>
        <div className="carousel-left-arrow">
          {
            current > 0 ?
            <FaChevronLeft
              onClick={prevSlide}
              size={40}/>
            : null
          }
        </div>
        <div className="carousel-right-arrow">
          {
            current >= 0 && current != length - 1?
            <FaChevronRight
              onClick={nextSlide}
              size={40}/>
            : null
          }
        </div>
      </div>

      {/* <div className="carousel-indicator-div">
        {
          images ? images.map((slide, index) => {
            return (
              <div
                className="carousel-indicator"
                key={index}
                name={index}
                onClick={updateCurrentImage}/>
              )
            })
          : null
        }
      </div> */}

    </div>
  );

};

export default Carousel;
