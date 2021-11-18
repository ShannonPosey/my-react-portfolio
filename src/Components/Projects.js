import React from "react";
import styled from "styled-components";
import createDate from "../img/createDate.png";
import noteTaker from "../img/noteTaker.png";
import passwordGenerator from "../img/passwordGenerator.png";
import workDayScheduler from "../img/workDayScheduler.png";
import workScheduler from "../img/workScheduler.png";

function Projects() {
    return(
        <StyledProjects id="projects">
        <article>
            <div className="projects">
                <h3 className="">My Projects</h3>
            </div>
            <div className="">
                <div className="">
                    <a className="" href="https://shannonposey.github.io/Create-a-date/" target="_blank" rel="noreferrer"><img scr={createDate} className="picture" alt="create a date"/>
                        <div>
                            <p>Create A Date</p>
                        </div>
                    </a>
                    <a className="" href="https://project-two-scheduler.herokuapp.com/" target="_blank" rel="noreferrer"><img scr={workDayScheduler} className="picture" alt="day planner"/>
                        <div>
                            <p>Work Day Scheduler</p>
                        </div>
                    </a>
                    <a className="" href="https://secret-reaches-78088.herokuapp.com/" target="_blank" rel="noreferrer"><img scr={noteTaker} className="picture" alt="note taking app"/>
                        <div>
                            <p>Note Taker</p>
                        </div>
                    </a>
                    <a className="" href="https://shannonposey.github.io/password-generator/" target="_blank" rel="noreferrer"><img scr={passwordGenerator} className="picture" alt="password generating app"/>
                        <div>
                            <p>Password Generator</p>
                        </div>
                    </a>
                    <a className="" href="https://shannonposey.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer"><img scr={workScheduler} className="picture" alt="work scheduler"/>
                        <div>
                            <p>Work Scheduler</p>
                        </div>
                    </a>
                </div>
            </div>
        </article>
    </StyledProjects >
    )
};

const StyledProjects = styled.article`
#portfolio {
    margin: 0 auto;
    text-align: center;
    height: 1500px;
}

h3 {
    
    font-size: 36px;
    font-weight: 500;
    text-align: center;
}

p {
    color: var(--white);
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 400;
}

.picture {
    border: 15px solid #b7b7b7;
    height: 300px;
    width: 550px;
   margin: 50px 0 50px 0;
}

.picture:hover {
    opacity: 0.5;
} 
`

export default Projects;

 