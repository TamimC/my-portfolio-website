import React from 'react'

const ProjectExperienceComponent = (props) => {
    return(
        <div>
            <h6 class="alignleft">{props.project}</h6>
            <h6 class="alignright">{props.language}</h6>
            <div style={{clear: "both"}}> </div>
            <p style={{fontStyle: "italic"}}>{props.blurb}</p>
            <ul>
                {props.summary.map(ListSummary)}
            </ul>
        </div>
    );
}

function ListSummary(exp){
    return(
        <li>{exp}</li>
    );
}

export default ProjectExperienceComponent;
