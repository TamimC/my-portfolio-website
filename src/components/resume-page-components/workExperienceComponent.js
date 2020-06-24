import React from 'react'

const WorkExperienceComponent = (props) => {
    return(
        <div>
            <h6 class="alignleft">{props.location}</h6>
            <h6 class="alignright">{props.time}</h6>
            <div style={{clear: "both"}}> </div>
            <p style={{fontStyle: "italic"}}>{props.jobtitle}</p>
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

export default WorkExperienceComponent;
