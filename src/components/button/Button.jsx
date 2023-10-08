import React from "react";
import "./Button.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';

const Button  = () =>{
    return (
        <div className="button">
            <div className="button__container">
                <FontAwesomeIcon icon={faTv} className="watch-icon" />
                <p>button</p>
            </div>
        </div>
    )
}

export default Button;