import React, { useState } from 'react';
import Dark from './../images/moon.svg'
import Light from './../images/sun.svg'
import './darkmode.css'
import Cookies from 'universal-cookie';
const cookies = new Cookies();


export default function Darkmode() {
    // darkmode switch
    const [darkmode, setDarkmode] = useState(cookies.get('darkmode') === 'false' ? false : true);
    cookies.set('darkmode', darkmode, { path: '/' });

    function LightOn() {
        setDarkmode(false);
    }
    function LightOff() {
        setDarkmode(true)
    }
    try {
        var bodyTag = document.getElementById("body")
        darkmode === true ? bodyTag.classList.remove("darkmodeDeAct") : bodyTag.classList.add("darkmodeDeAct")
    } catch (err) { }
    return (
        <div className="darkmode">


            <img className={darkmode ? "ON" : "OFF"} onClick={LightOff} src={Dark} alt="Dark" />
            <img className={darkmode ? "OFF" : "ON"} onClick={LightOn} src={Light} alt="Light" />

        </div >
    )
}