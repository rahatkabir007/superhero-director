import React from 'react';
import "./Slider.css"
import logo from "./images/icon.png"

const Slider = () => {
    return (
        <div className="slider">
                
                    <h2 >Welcome to <span id="web-name">Filmify! <img id="web-pic" src={logo} alt="" /></span></h2>
                    <p>Buy your favourite movies!</p>
                    <p>Total Budget: <span id="web-name">$100</span></p>

        </div>
    );
};

export default Slider;