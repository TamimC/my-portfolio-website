import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import workExperience from './workExperience';
import WorkExperienceComponent from './workExperienceComponent';
import projectExperience from './projectExperience';
import ProjectExperienceComponent from './projectExperienceComponent'

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
            { 
                projectExperience.map(exp => {
                return(
                    <ProjectExperienceComponent project = {exp.project} language = {exp.language} blurb = {exp.blurb} summary = {exp.summary}/> 
                );
            }) }
        </Jumbotron>
    );
}

export default ResumeRightBox;