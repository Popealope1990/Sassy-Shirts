import React from "react";
import Sadie from "../components/images/about/Sadie.png"

function About() {
    return (
        <div className="container">
            <div className="prfpic">
            <img src={Sadie} className="photo" alt="Sadie"/>
            </div>

            <div className="infobox">
                <h1>Hi! I'm Mercedies!</h1>
                <h2>It is nice to meet you!</h2>
                <h2>About Me</h2>
                <ul>
                    <li>I am a stay at home Mom of 4 and love trying to design new things.</li>
                    <li>I picked up making shirts in my spare time and I love it!</li>
                    <li>I like watching all different types of shows on Netflix and Hulu.</li>
                </ul>
            </div>
        </div>
    )
}

export default About;