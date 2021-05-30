import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Row, Container } from 'react-bootstrap/';
import './footer.css';

class Footer extends Component {
	state = {};
	render() {
		return (
			<footer className="main-footer">
				<br></br>
				<Container>
					<center>
						<span>Keep in touch with me!</span>
					</center>
				</Container>
				<br></br>
			</footer>
		);
	}
}

export default Footer;
