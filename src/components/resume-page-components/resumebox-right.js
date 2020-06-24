import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import workExperience from './workExperience';
import WorkExperienceComponent from './workExperienceComponent';

const ResumeRightBox = () => {
    return(
        <Jumbotron className = "resumebox-right">

            <h2><br/>WORK EXPERIENCE</h2><hr/>
            { 
                workExperience.map(exp => {
                return(
                    <WorkExperienceComponent location = {exp.location} time = {exp.time} jobtitle = {exp.jobtitle} summary = {exp.summary}/> 
                );
            }) }

            <h2><br/>PROJECTS</h2><hr/>
        </Jumbotron>
    );
}

export default ResumeRightBox;