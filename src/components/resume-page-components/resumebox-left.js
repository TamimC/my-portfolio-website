import React from 'react'
import {Jumbotron, Image} from 'react-bootstrap'

const ResumeLeftBox = () => {
    return(
        <Jumbotron className = "resumebox-left">
            <div className = "container-item-photo">
                <Image src= {require("./../../images/tamimHead.jpg")} className = "photo" roundedCircle />
            </div>
            <h3><br/>SKILLS</h3><hr/>
            <h5>Languages</h5>
            <p>Java, Python, C, Eiffel, SQL, JavaScript, HTML, CSS, VBA Script</p>
            <h5>Frameworks & Libraries</h5>
            <p>Spring, React JS, JUnit, Bootstrap</p>
            <h5>Tools & IDEs</h5>
            <p>IntelliJ, Git, Eclipse, Visual Studio, Visual Studio Code, Android Studio, Docker, UNIX, Linux, Bash, Virtualization, CLI, Microsoft Excel</p>
            <h5>Databases</h5>
            <p>Postgres, MySQL, MongoDB</p>  

            <h3><br/>PROFILE</h3><hr/>
            <ul>
                <li>
                    Software Developer with over 5 years of
                    experience who has worked with various                     
                    OOP languages, full stack development
                    environments and APIs.
                </li>
                <li>
                    Disciplined and ambitious self-starter who
                    is eager to learn about new languages,
                    tools and technologies.
                </li>
                <li>
                    Great at working on large, open-ended
                    projects and resolving coding issues and
                    conflicts using abstract thinking.
                </li>
                <li>
                    Develops applications using the System
                    Development Life Cycle process.
                </li>
                <li>
                    Appreciates a good challenge, no problem
                    being thrown in deep waters, and is good
                    at working under pressure.
                </li>
            </ul>

            <h3><br/>EDUCATION</h3><hr/>
            <h5>B. Science, Computer Science</h5>
            <p>Lassonde School of Engineering <br/> York University<br/>Jan 2016 - April 2020</p>
        </Jumbotron>
    );
}

export default ResumeLeftBox;