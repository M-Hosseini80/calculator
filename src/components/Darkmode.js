import React, { useState } from 'react';
import Dark from './../images/moon.svg'
import Light from './../images/sun.svg'
import './darkmode.css'
export default function Darkmode() {
    // darkmode switch
    const [darkmode, setDarkmode] = useState(false);
    function LightOn() {
        setDarkmode(false)
    }
    function LightOff() {
        setDarkmode(true)
    }
    return (
        <div className="darkmode">

            <img className={darkmode ? "OFF" : "ON"} onClick={LightOn} src={Light} alt="Light" />
            <img className={darkmode ? "ON" : "OFF"} onClick={LightOff} src={Dark} alt="Dark" />

        </div >
    )
}