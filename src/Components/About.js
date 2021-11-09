import React from "react";
import avataaars from "../img/avataaars.png";

function About() {
    return (
        <div className="bg-light-green" id="about">
            <h2 className="">About Me</h2>
            <img className="" src={avataaars} alt="image of avatar"/>
            <p>My passion for web development started when I worked for a hospitality and tourism e-commerce company using just HTML on their CMS website. I enjoyed that aspect of creating web pages people visited every day. Fast forward a few years later, I decide to learn a new skill and scene. I was familiar with HTML, and I decided to learn more about coding to have a challenging and rewarding career as a Web Developer.</p>

        </div>
    )
};

export default About;