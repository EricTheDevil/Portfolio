import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Footer extends Component {
	state = {};
	render() {
		return (
			<footer className="main-footer">
				<br></br>
				<div className="container">
					<center>
						<span>Keep in touch with me!</span>
					</center>
				</div>
				<br></br>
			</footer>
		);
	}
}
const imgBg = {
	height: 'auto',
	width: 'auto',
};
export default Footer;
