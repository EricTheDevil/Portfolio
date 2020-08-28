import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class ProfileDescription extends Component {
    state = {  }
    render() { 
        return ( 
            <Card style={{ width: '18rem' }}>
                <Card.Header> <img src={require("../img/background-2.jpg")} width="100" height="50" alt="Smiley face"></img> </Card.Header>
                <ListGroup variant="horizontal">
                    <ListGroup variant="flush">
                        <ListGroup.Item>Name:</ListGroup.Item>
                        <ListGroup.Item>Birthday:</ListGroup.Item>
                        <ListGroup.Item>Education:</ListGroup.Item>
                    </ListGroup>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Eric Ng</ListGroup.Item>
                        <ListGroup.Item>22/06/1997</ListGroup.Item>
                        <ListGroup.Item>Bachelor of Information Technology and Communication</ListGroup.Item>
                    </ListGroup>
                </ListGroup>
            </Card>
        );
    }
}
  const imgBg = {
        maxWidth: '100%',
        height: 'auto',
        width: 'auto'
    }
export default ProfileDescription;