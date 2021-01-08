import React, { Component } from 'react';
import { ProfileDescription, ProfileImage } from '../../lib/common.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

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
								src={require('../../img/background-2.jpg')}
								width="100%"
								height="100%"
								alt="Smiley face"></img>
						</Col>
						<Col style={CardName} xs={{ offset: 1 }}>
							<center> AA</center>
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

	overflow: 'hidden',
	background: '#111f28',
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
	background: '#111f28',
	display: 'flex',
	flexDirection: 'row',
};
const cardImg = {
	borderBottomLeftRadius: '5em',
	borderBottomRightRadius: '5em',
	borderTopLeftRadius: '50em',
	borderTopRightRadius: '50em',
	border: '5px solid white',
};
const CardName = {
	borderRadius: '5em',
	background: '#f1efed',
};

export default Profile;
