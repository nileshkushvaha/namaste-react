import React from 'react';
import Logo from '../Assets/Images/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [btnText, setButtonText] = useState("Login");

    return (
        <header className="navbar">
            <div className="global-nav">
                <div className="nav">
                    <div className="left">
                        <Link to="/" className="logo">
                            <img src={Logo} alt='Logo' style={{ width: '50px' }} />
                        </Link>
                        <div className="location-div">
                            <span className="other">Other</span>
                            <span className="location">Delhi, India</span>
                            <span className="arrow-down"><i className="fa-solid fa-angle-down"></i></span>
                        </div>
                    </div>
                    <div className="right">
                        <ul className="items">
                            <li>
                                <div className="nav-item">
                                    <Link to="/">
                                        <span>Home</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="nav-item">
                                    <Link to="/about">
                                        <span>About Us</span>
                                    </Link>
                                </div>
                            </li>                            
                            <li>
                                <div className="nav-item">
                                    <Link to="/contact">
                                        <span>Contact</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="nav-item">
                                    <Link to="/help">
                                        <span>Help</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="nav-item">
                                    <Link to="/cart">
                                        <span>Cart</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <button className='Login-button' onClick={() => {
                                    btnText === "Login" ? setButtonText("Logout") : setButtonText("Login");
                                }}>{btnText}</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;