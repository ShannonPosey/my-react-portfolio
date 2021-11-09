import React from "react";

function Nav() {
    return(
        <div className="bg-light-green ">
            <nav>
                <ul className="dib nest-list-rest ul">
                    <li><a href="#about" className="no-underline ttn-l">About Me</a></li>
                    <li><a href="#projects" className="no-underline">Projects</a></li>
                    <li><a href="#contact" className="no-underline">Contact Me</a></li>
                </ul>
            </nav>
        </div>
    )
};

export default Nav;