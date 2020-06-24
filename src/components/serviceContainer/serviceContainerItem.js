import React from 'react'
import { Container, Button, Image } from 'react-bootstrap';

const ServiceContainerItem = (props) =>{
    return( 
        <Container className = "container-item">
            <Image src = {props.image} className = "smallImages" />
            <br></br>
            <h5> {props.serviceType} </h5>
            <p>{props.slogan}</p>
            <p>{props.description} </p>
        </Container>
    );
}

export default ServiceContainerItem;