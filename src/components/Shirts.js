import React from "react";
import touch from "./images/shirts/donottouch.jpg"
import gaming from "./images/shirts/kidsgaming.jpg"
import mamasaur from "./images/shirts/mamasaur.jpg"
import heifer from "./images/shirts/mommaheirfer.jpg"



function Shirts() {
    return (
        <div className="container2">
            <h1>Shirts</h1>
        <div className="container">
            <div className="shirts">
                <img src={touch} className="shirtphoto" alt="shirt"/>
                <img src={gaming} className="shirtphoto" alt="shirt" />
                <img src={mamasaur} className="shirtphoto" alt="shirt" />
                <img src={heifer} className="shirtphoto" alt="shirt" />
            </div>
        </div>
        </div>
    )
}

export default Shirts;