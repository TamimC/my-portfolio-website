import React from 'react'
import {Jumbotron, Button, Container, Row, Col, Image} from 'react-bootstrap'
import CustomGlider from './customGlider/customGlider'

const IntroJumbotron = () => {
    return(
    <div className = "cloud">   
        <Jumbotron >
            <Container fluid = "true" className = "flex-container">
                <div className = "container-item-photo">
                    <Image src= {require("./../images/tamimHead.jpg")} className = "photo" roundedCircle />
                </div>
                <Container className = "container-item-intro">
                    <h1>Welcome to Tamim Technologies!</h1>
                    <h5>
                        My name is Tamim Chowdhury, and I am a full-stack and complete software solution developer.
                        Whether it is a web, desktop or mobile application, I focus on providing a fully-fledged software experience.
                        In order to achieve this, I ensure well-written, functional, responsive and secure software that can aid you in operating your business with both elegance and intuitivity.
                    </h5>
                    <h5>I am experienced in the following:</h5>
                    <Container className = "fit-well">
                        <CustomGlider/>
                    </Container>
                </Container>
            </Container>
        </Jumbotron>
    </div> 
    );
}

export default IntroJumbotron;