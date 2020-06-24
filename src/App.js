import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col, Image, } from 'react-bootstrap'
import CustomNavbar from './components/customNavbar'
import {Link} from 'react-router-dom'
import Main from './pages/main'
import Footer from './components/footer/footer'

class App extends Component {
  render(){
    return (
      <Container fluid = "true">
          <CustomNavbar/>
          <Main/>
          <Footer/>
      </Container>
    );
}
}

export default App;
