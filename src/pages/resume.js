import React, {Component} from 'react'
import {Container, Col, Row, Jumbotron} from 'react-bootstrap'

class Resume extends Component {
    render(){
        return(
            <div className = "cloud">
                <Container fluid = "true" className = "flex-container">
                    <Jumbotron className = "resumebox-left" />
                    <Jumbotron className = "resumebox-right"/>
                </Container>
            </div>
        );
    }
}

export default Resume;