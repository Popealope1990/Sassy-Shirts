import React from "react";
import Sadie from "../components/images/about/Sadie.png"

function About() {
    return (
        <div className="about">
            <div className="prfpic">
            <img src={Sadie} className="photo" alt="Sadie"/>
            </div>

            <div className="info">
                <h1>Mercedies Pope</h1>
                <br/>
                <h2>About Me</h2>
                <ul>
                    <li>I am a Mom of 4</li>
                    <li>2 Boys, 2 Girls</li>
                    <li>I picked up making shirts in my spare time and I love it!</li>
                    <li>I like watching all different types of shows on Netflix and Hulu</li>
                </ul>
            </div>
        </div>
    )
}

export default About;