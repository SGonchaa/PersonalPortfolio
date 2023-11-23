import React from "react";
import './Spinner.css';
import { IoSettingsSharp } from "react-icons/io5";

function Spinner () {
    return(
        <div className="spin-icon-background">
            <IoSettingsSharp className="spin-icon"></IoSettingsSharp>
        </div>
    )
}

export default Spinner