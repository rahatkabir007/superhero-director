import React from 'react';
import logo from './images/logo.png'
import './Header.css';
import Slider from '../slider/Slider';
const Header = (props) => {

    return (
        <div >
            <div className="d-flex justify-content-between align-items-center heading">
                <div className="logo-area">
                    <img className="w-25 h-25 ms-4 mt-1" src={logo} alt="" />
                </div>
                <nav className="navbar navbar-expand-lg nav-area">
                    <div className="container-fluid ">
                        <button className="navbar-toggler toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon toggler"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#link1">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#link1">Genre</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#link1">Our Recommendation</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#link2">About Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    <form className="d-flex flex-fill mx-5">
                        <input onChange={props.handleSearch} className="form-control me-2" type="search" placeholder="Enter movie name" aria-label="Search"></input>
                        <button className="btn btn-warning" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <Slider></Slider>


        </div>
    );
};

export default Header;