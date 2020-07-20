import React, {Component} from 'react'
import {Form, Jumbotron} from 'react-bootstrap'

class Technology extends Component {
    render(){
        return(
            <Jumbotron className = "cloud" >
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
            </Jumbotron>
        );
    }
}

export default Technology;