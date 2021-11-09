import React from "react";
import createDate from "../img/createDate.png";
import noteTaker from "../img/noteTaker.png";
import passwordGenerator from "../img/passwordGenerator.png";
import workDayScheduler from "../img/workDayScheduler.png";
import workScheduler from "../img/workScheduler.png";

function Projects() {
    return(
        <article>
            <div className="" id="projects">
                <h2 className="">My Projects</h2>
            </div>
            <div className="">
                <div className="">
                    <a className="" href="https://shannonposey.github.io/Create-a-date/" target="_blank" rel="noreferrer"><img scr={createDate} alt="create a date"/>
                        <div>
                            <p>Create A Date</p>
                        </div>
                    </a>
                    <a className="" href="https://project-two-scheduler.herokuapp.com/" target="_blank" rel="noreferrer"><img scr={workDayScheduler} alt="day planner"/>
                        <div>
                            <p>Work Day Scheduler</p>
                        </div>
                    </a>
                    <a className="" href="https://secret-reaches-78088.herokuapp.com/" target="_blank" rel="noreferrer"><img scr={noteTaker} alt="note taking app"/>
                        <div>
                            <p>Note Taker</p>
                        </div>
                    </a>
                    <a className="" href="https://shannonposey.github.io/password-generator/" target="_blank" rel="noreferrer"><img scr={passwordGenerator} alt="password generating app"/>
                        <div>
                            <p>Password Generator</p>
                        </div>
                    </a>
                    <a className="" href="https://shannonposey.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer"><img scr={workScheduler} alt="work scheduler"/>
                        <div>
                            <p>Work Scheduler</p>
                        </div>
                    </a>
                </div>
            </div>
        </article>
    )
};

export default Projects;

 