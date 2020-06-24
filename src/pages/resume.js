import React, {Component} from 'react'
import {Container, Col, Row, Jumbotron} from 'react-bootstrap'
import ResumeLeftBox from '../components/resume-page-components/resumebox-left'
import ResumeRightBox from '../components/resume-page-components/resumebox-right';

class Resume extends Component {
    render(){
        return(
            <div className = "cloud">
                <Container fluid = "true" className = "flex-container">
                    <ResumeLeftBox/>
                    <ResumeRightBox/>
                </Container>
            </div>
        );
    }
}

export default Resume;