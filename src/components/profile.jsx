import React, { Component } from 'react';
import { ProfileDescription } from '../lib/common.js'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
class Profile extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={test} className="rounded">
                <Container style={imgBg}>     
                <Row>
                    <Col md={{ span: 4, offset: 8 }}>
                        <ProfileDescription />
                    </Col>
                </Row>
            </Container>
          </div>
        );
    }
}
 const test = {
    margin: 0,
    padding: 0,
    maxWidth: '100%',
    height: '100vh',
    width: 'auto',
    border: '2px solid black',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',  
    backgroundSize: 'cover',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
 }
  const imgBg = {
    border : '2px solid black',
    }
export default Profile;