import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft, FaExpandArrowsAlt } from "react-icons/fa";
import "./KitCarousel.css";

const KitCarousel = ({ slides }) => {
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
    const target = event.target;
    const name = target.name;
    setCurrent(name);
  };

  return (

    <div className="KitCarousel">

      {
        currentImage ?
          <div className={"kit-carousel-content"}>
            <div className="kit-carousel-img">
              <img
                hidden={false}
                src={currentImage} />
            </div>
          </div>
          : null
      }

      <div className="kit-carousel-indicator-div">
        { current > 0 ?
          <FaChevronLeft
            className="indicator-left-arrow onclick"
            onClick={prevSlide}
            size={60}/>
          : null
        }
        {
          images ? images.map((slide, index) => {
            // console.log(slide)
            return (
              <div
                className="kit-carousel-indicator"
                key={index}
                name={index}
                // onClick={updateCurrentImage}
                />
              )
            })
          : null
        }
        { current >= 0 && current != length - 1?
          <FaChevronRight
            className="indicator-right-arrow onclick"
            onClick={nextSlide}
            size={60}/>
          : null
        }
      </div>

    </div>
  );

};

export default KitCarousel;
