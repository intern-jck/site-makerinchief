import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft, FaExpandArrowsAlt } from "react-icons/fa";
import "./Carousel.css";

const Carousel = ({header, slides, short}) => {

  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState('');
  const [length, setLength] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides) {
      setImages(slides);
      setCurrentImage(slides[current]);
      setLength(slides.length);
    }
  }, [slides, current]);


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

      {
        currentImage ?
          <div className={"carousel-content"}>
            <div className="carousel-img">
              <img
                hidden={false}
                src={currentImage} />
            </div>
          </div>
          : null
      }

      <div className="carousel-indicator-div">
        { current > 0 ?
          <FaChevronLeft
            className="indicator-left-arrow onclick"
            onClick={prevSlide}
            size={40}/>
          : null
        }
        {
          images ? images.map((slide, index) => {
            // console.log(slide)
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
        { current >= 0 && current != length - 1?
          <FaChevronRight
            className="indicator-right-arrow onclick"
            onClick={nextSlide}
            size={40}/>
          : null
        }
      </div>

    </div>
  );

};

export default Carousel;
