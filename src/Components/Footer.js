import React from "react";
import linkedIn from "../img/LinkedIn.png";
import gitHub from "../img/GitHub.png";


function Footer() {
    return(
        <div className="footer">
             <a href="https://www.linkedin.com/in/shannonposey"><img className="social" src={linkedIn} alt="LinkedIn Logo"/></a>
               <a href="https://github.com/shannonposey"><img className="social git" src={gitHub} alt="GitHub Logo"/></a>
            <h5 className="text-white">&copy; 2021 Shannon Posey</h5>
        </div>
    )
};

export default Footer;