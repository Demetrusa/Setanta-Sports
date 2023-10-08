import React from "react";
import "./Navbar.scss";


const Navbar = ({navPd}) =>{ 
    return (
        <div className="navbar">
            <div className={navPd ? "navPd" : "navbar__container"}>
                <div className="navbar__container-navigation">
                <div className="nav-logo"></div>
                    <p>ALL</p>
                    <p>FOOTBALL</p>
                    <p>MMA</p>
                    <p>BASKETBALL</p>
                    <p>RACING</p>
                    <p>TENNIS</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;