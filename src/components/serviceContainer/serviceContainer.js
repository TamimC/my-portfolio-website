import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap'
import ServiceContainerItem from './serviceContainerItem';
import serviceDescriptions from './serviceDescriptions/service-descriptions';

const ServiceJumbotron = () =>
{
    return(
        <div className = "left-right-padding">
            <Jumbotron className = "cloud">
            <h1 className = "text-center"> Services</h1>
                <Container fluid = "true" className = "flex-container">
                    { serviceDescriptions.map(service => {
                        return(
                            <ServiceContainerItem image = {service.image} serviceType = {service.serviceType} slogan = {service.slogan} description = {service.description}/> 
                        )
                    }) }

                </Container>
            </Jumbotron>
        </div>
    );
}


export default ServiceJumbotron;