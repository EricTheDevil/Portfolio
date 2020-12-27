import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class ProfileDescription extends Component {
	state = {};
	render() {
		return (
			<Card style={{ width: '30rem', height: '100%' }}>
				<Card.Body>
					<Card.Title>About me!</Card.Title>
					<Card.Text>
						I'm a problem solver enthiusiast. Ever since I've been introduced
						into programming, I've been continiously learning and expanding my
						knowledge. I've had good success with learning new technologies.
						During these years I've worked on several industry projects and
						companies. Those projects taught me a great deal, ranging from
						adapting to environments to learning how to use other peoples code.
					</Card.Text>
				</Card.Body>
			</Card>
		);
	}
}
const imgBg = {
	maxWidth: '100%',
	height: '30%',
	width: 'auto',
};
export default ProfileDescription;
