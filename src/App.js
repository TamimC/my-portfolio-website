import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col, Image, } from 'react-bootstrap'
import CustomNavbar from './components/consistent-components/customNavbar'
import Main from './pages/main'
import Footer from './components/consistent-components/footer/footer'

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
