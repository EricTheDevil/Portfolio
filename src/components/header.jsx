import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropDown';


class Header extends Component {
  state = {  }
    render() {
      return (
        <div style={mainContainer}>
          <Container>
            <Row>
              <Col xs={10}></Col>
              <Col xs={2}>
                <Navbar expand="lg">
                <Navbar.Brand href="#home">Eric</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
                </Navbar>
              </Col>
            </Row>
          </Container>
         
         <div style={mainMiniDescript}>
            <h1>Eric</h1>
          </div>

      </div> 
    );
  }
}
const mainMiniDescript = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80%'
}
const mainContainer = {
  margin:0,
  padding:0,
  height:'100vh',
  width: '100%',
  background: '#009FFF',  
  overflow: 'hidden'
  
}

export default Header;