import React from "react";
import styled from "styled-components";
import avataaars from "../img/avataaars.png";

function About() {
    return (
        <StyledAbout id="about">
        <div className="test">
            <h2 className="">About Me</h2>
            <img className="" src={avataaars} alt="my avatar"/>
            <p>My passion for web development started when I worked for a hospitality and tourism e-commerce company using just HTML on their CMS website. I enjoyed that aspect of creating web pages people visited every day. Fast forward a few years later, I decide to learn a new skill and scene. I was familiar with HTML, and I decided to learn more about coding to have a challenging and rewarding career as a Web Developer.</p>
        </div>
    </StyledAbout>
    )
};

const StyledAbout = styled.section`
    h2 {
       text-align: center; 
    }
`

export default About;