import React, { useRef } from "react";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';



import "./Home.scss";
import Slider from "../components/slider/Slider";


function Home() {
  
  const homeBotRef = useRef(null);

 
  const handleButtonClick = () => {
    homeBotRef.current.scrollIntoView({ behavior: 'smooth' }); 
  };

  return (
    <div className="page-div">
      <div className="home-top">
        <p className="home-greeting">Luís Matos</p>
        <p className="home-story">
          The gentle breeze whispered secrets to the trees,
          As the sun cast golden hues across the seas.
          Birds sang melodies, a symphony so fine,
          Marking the harmony of nature, beautifully divine.
          Stars began to twinkle as dusk turned to night,
          The moon's soft glow casting a silvery light.
          Creatures of the night began their enchanted dance,
          In this ever-evolving, wondrous expanse.
        </p>
      </div>
   
  
      <div className="scrollBot-button">
        <ArrowDropDownCircleIcon onClick={handleButtonClick}/>
       
       
      </div>
    
      <div className="home-bot" >
        <p className="home-bot-text" >About my work</p>
      </div>
      <div className="slider-div" ref={homeBotRef}>
        <Slider />
      </div>
    </div>
    
  );
}

export default Home;