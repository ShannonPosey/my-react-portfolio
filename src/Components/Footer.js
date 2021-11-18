import React from "react";
import styled from "styled-components";
import linkedIn from "../img/LinkedIn.png";
import gitHub from "../img/GitHub.png";


function Footer() {
    return(
        <StyledFooter id="footer">
        <div className="footer">
             <a href="https://www.linkedin.com/in/shannonposey"><img className="social flex-row" id="social-media" src={linkedIn} alt="LinkedIn Logo"/></a>
               <a href="https://github.com/shannonposey"><img className="social git" src={gitHub} alt="GitHub Logo"/></a>
            <h5 className="text-white copyright flex-row">&copy; 2021 | Shannon Posey</h5>
        </div>
        </StyledFooter>
    )
};

const StyledFooter = styled.section`
    .social {
    border-radius: 25px;
}

#social-media {
    margin-top: 100px;
}

footer {
    color: var(--white);
    font-family: "Monsterrat", sans-serif;
    font-size: 18px;
    font-weight: 400;
    padding: 15px 300px;
}

.copyright {
    text-align: center;
    padding: 15px 300px;
    margin-top: 50px;
}

.flex-row {
    display: flex;
}
`

export default Footer;

