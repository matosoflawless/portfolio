import React from "react";

import "./Home.scss"


function Home() {


    return (
        <div className="page-div">

            <div className="home-top">
                <p className="home-greeting">Luís Matos</p>
                <p className="home-story">The gentle breeze whispered secrets to the trees,
                    As the sun cast golden hues across the seas.
                    Birds sang melodies, a symphony so fine,
                    Marking the harmony of nature, beautifully divine.
                    Stars began to twinkle as dusk turned to night,
                    The moon's soft glow casting a silvery light.
                    Creatures of the night began their enchanted dance,
                    In this ever-evolving, wondrous expanse.
                </p>
                <input className="scrollBot-button" type="button" value={"SCROLL FOR MORE"} onClick="document.getElementById('home-bottom').scrollIntoView();" />
            </div>



        </div>
    )
}

export default Home