import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft, FaExpandArrowsAlt } from "react-icons/fa";
import "./Carousel.css";

const Carousel = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(slides.length);
  const [images, setImages] = useState([]);
  const [text, setText] = useState({header: '', short: ''});
  const [tags, setTags] = useState([]);

  useEffect(() => {
  }, []);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const updateCurrentImage = (event) => {
    event.preventDefault();
    const {name} = event.target;
    setCurrent(name);
  };

  return (

    <div className="Carousel">

      <div className='carousel-body'>
        <div className='carousel-header'>
          <h4>{slides[current].header}</h4>
        </div>
        <div className='carousel-short'>
          <h5><i>{slides[current].short}</i></h5>
        </div>
        <div className='carousel-img'>
          <a href={slides[current].url} target='_blank'>
            <img
              hidden={false}
              src={slides[current].img} />
          </a>
        </div>
      </div>

      <div className='carousel-controls'>
        <div className="carousel-left-arrow">
          {
          <FaChevronLeft
            onClick={prevSlide}
            size={60}/>
          }
        </div>
        <div className="carousel-right-arrow">
          {
          <FaChevronRight
            onClick={nextSlide}
            size={60}/>
          }
        </div>
      </div>
{/*
      <div className="carousel-indicator-div">
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
