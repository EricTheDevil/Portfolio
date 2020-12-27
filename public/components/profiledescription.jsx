import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class ProfileDescription extends Component {
	state = {};
	render() {
		return (
			<Card style={{ width: '18rem' }}>
				<Card.Header>
					<center>
						<img
							src={require('../img/Eric.jpg')}
							width="150"
							height="200"
							alt="Smiley face"></img>
					</center>
				</Card.Header>
				<ListGroup variant="horizontal">
					<ListGroup variant="flush">
						<ListGroup.Item>Name:</ListGroup.Item>
						<ListGroup.Item>Birthday:</ListGroup.Item>
						<ListGroup.Item>Education:</ListGroup.Item>
					</ListGroup>
					<ListGroup variant="flush">
						<ListGroup.Item>Eric Ng</ListGroup.Item>
						<ListGroup.Item>22/06/1997</ListGroup.Item>
						<ListGroup.Item>
							Bachelor of Information Technology and Communication
						</ListGroup.Item>
					</ListGroup>
				</ListGroup>
			</Card>
		);
	}
}
const imgBg = {
	maxWidth: '100%',
	height: 'auto',
	width: 'auto',
};
export default ProfileDescription;
