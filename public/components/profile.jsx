import React, { Component } from 'react';
import { ProfileDescription, ProfileImage } from '../lib/common.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { gsap } from 'gsap';

class Profile extends Component {
	state = {};

	render() {
		return (
			<Container className="rounded" style={mainWrapper} fluid="md">
				<Container style={title}>
					<h1>Who am I?</h1>
					<hr></hr>
				</Container>

				<Container style={test} fluid="md" className="rounded">
					<Row>
						<Col style={cardImg} xs={4} className="rounded">
							<img
								src={require('../img/background-2.jpg')}
								width="100%"
								height="100%"
								alt="Smiley face"></img>
						</Col>
						<Col style={CardName} xs={{ offset: 1 }}>
							<p> AA</p>
						</Col>
					</Row>
				</Container>
			</Container>
		);
	}
}
const title = {
	textAlign: 'center',
};
const mainWrapper = {
	margin: 0,
	padding: '5vh',
	paddingLeft: '10vh',
	paddingRight: '10vh',
	maxWidth: '100%',
	height: '100vh',
	width: 'auto',
	border: '2px solid black',
	overflow: 'hidden',
	background: '#f1efed',
	display: 'flex',
	flexDirection: 'column',
};
const test = {
	margin: 0,
	padding: '5vh',
	paddingLeft: '10vh',
	paddingRight: '10vh',
	maxWidth: '100%',
	height: '100vh',
	width: 'auto',
	overflow: 'hidden',
	background: '#f1efed',
	display: 'flex',
	flexDirection: 'row',
};
const cardImg = {
	border: '2px solid black',
};
const CardName = {
	border: '2px solid black',
};

export default Profile;
