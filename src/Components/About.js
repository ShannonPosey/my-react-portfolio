import React from "react";
import styled from "styled-components";
import aboutMe from "../img/aboutMe.png"
import avataaars from "../img/avataaars.png";

function About() {
    return (
        <StyledAbout id="about">
        <div className="">
            <h3 className="">About Me</h3>
            <img className="" src={avataaars} alt="my avatar"/>
            <p>My passion for web development started when I worked for a hospitality and tourism e-commerce company using just HTML on their CMS website. I enjoyed that aspect of creating web pages people visited every day. Fast forward a few years later, I decide to learn a new skill and scene. I was familiar with HTML, and I decided to learn more about coding to have a challenging and rewarding career as a Web Developer.</p>
        </div>
    </StyledAbout>
    )
};

const StyledAbout = styled.section`
     background-image: url(${aboutMe});
    background-size: contain;
    
    #about {
        height: 550px;
        margin-top: 50px;
    margin-bottom: 50px;
    padding: 15px;
        }

    h3 {
       text-align: center; 
       font-size: 36px;
    font-weight: 500;
    text-align: center;
    }

    p {
        font-size: 24px;
    font-weight: 400;
    line-height: 35px;
    padding: 0 55px 0 15px
    }
`

export default About;