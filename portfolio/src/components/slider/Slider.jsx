  import { useState, useEffect } from "react";
  import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
  import "./Slider.scss";
  import { sliderData } from "./SliderData";

  const Slider = () => {
    const autoScroll = true;
    let slideInterval;
    const intervalTime = 5000;

    const [current, setCurrent] = useState(0);
    const sliderLength = sliderData.length;

    const nextSlider = () => {
      setCurrent((current) => (current === sliderLength - 1 ? 0 : current + 1));
    };

    const previousSlider = () => {
      setCurrent((current) => (current === 0 ? sliderLength - 1 : current - 1));
    };

    function startAutoSlide() {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
      slideInterval = setInterval(nextSlider, intervalTime);
    }

    useEffect(() => {
      setCurrent(0);
    }, []);

    useEffect(() => {
      if (autoScroll) {
        startAutoSlide();
      }
      return () => {
        if (slideInterval) {
          clearInterval(slideInterval);
        }
      };
    }, [current]);

    useEffect(() => {
      const handleVisibilityChange = () => {
        if (document.hidden) {
          clearInterval(slideInterval);  
        } else {
          startAutoSlide();  
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);

      return () => {
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };
    }, []);

    return (
      <div className="slider">
        <AiOutlineArrowLeft className="arrow arrow-left" onClick={previousSlider} />
        <AiOutlineArrowRight className="arrow arrow-right" onClick={nextSlider} />
    
        {sliderData.map((slide, index) => (
          <div className={`slide ${index === current ? 'current' : ''}`} key={index}>
            {index === current && (
              <div className="slide-content">
                <div className="images-div">
                  <img src={slide.img_url} alt="images" />
                </div>
                <div className="content">
                  <p>{slide.heading}</p>
                  <p>{slide.description}</p>
                <button className="slider-button">See it!</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
    
  };

  export default Slider;
