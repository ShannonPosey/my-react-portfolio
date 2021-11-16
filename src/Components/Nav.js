import React from "react";
import styled from "styled-components";

function Nav() {
    return(
        <StyledNav>
        <div className="">
            <nav>
                <ul className="">
                    <li><a href="#about" className="about">About Me</a></li>
                    <li><a href="#projects" className="projects">Projects</a></li>
                    <li><a href="#contact" className="contact">Contact Me</a></li>
                </ul>
            </nav>
        </div>
     </StyledNav>
    )
};

const StyledNav = styled.section `
    ul, li, a {
        text-decoration: none;
        padding-right: 25px;
         display: flex;
        justify-content: center;
        align-item: center;
        color: black;
   }
`

export default Nav;