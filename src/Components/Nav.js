import React from "react";
import styled from "styled-components";

function Nav() {
    return(
        <StyledNav>
        <div className="">
            <nav className="nav-link">
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
background: black;
.nav-link {
    border: 2px solid transparent;
}

.nav-link:hover {   
    text-decoration: none;
    border-bottom: 2px solid #fa0075;
}
    ul, li, a {
        text-decoration: none;
           display: flex;
        justify-content: center;
        align-item: center;
        color: #ffffff;
   }
`

export default Nav;