import React from "react";
import styled from "styled-components";
import heroBg from "../img/heroBg.png"

function Hero() {
    return(
        <StyledHero>
        <div className="header">
            <h1>Shannon Posey | Full Stack Web Developer</h1>
             <h2>let's <span> code </span> something to cool </h2>
        </div>
        </StyledHero>
    )
};

const StyledHero = styled.section `
    background-image: url(${heroBg});
    background-size: cover;
    
    .header {
        height: 700px;
        margin-top: auto;
    }

    h1 {
        color: #ffffff;
        font-size: 30px;
        font-weight: 400;
        padding: 5px 0 45px;
    }
    
    span {
        color: #fa0075;
    }

    h2 {
        clear: both;
        color: #ffffff;
        font-size: 72px;
        padding: 80px 85px 0 85px;
        width: 1000px;
        display: flex;
        justify-content: center;
        align-item: center;

    }
`

export default Hero;