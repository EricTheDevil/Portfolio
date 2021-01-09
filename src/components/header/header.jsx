import React, { Component, useRef, useEffect, useState } from 'react';
import {
	NavDropdown,
	Nav,
	Navbar,
	Col,
	Row,
	Container,
} from 'react-bootstrap/';
import { gsap } from 'gsap';
import '../../lib/font.css';
import './header.css';
import ComputerIcon from '@material-ui/icons/Computer';

const Header = () => {
	const fixedText = ' ';
	const whenNotFixed = 'Introduction';
	const [headerText, setHeaderText] = useState(whenNotFixed);

	useEffect(() => {
		const header = document.getElementById('myHeader');
		header.classList.add('sticky');
		const sticky = header.offsetTop;
		const scrollCallBack = window.addEventListener('scroll', () => {
			if (window.pageYOffset > sticky) {
				if (headerText !== fixedText) {
					setHeaderText(fixedText);
				}
			}
			/* else {
				//header.classList.remove('sticky');
				if (headerText !== whenNotFixed) {
				}
			}
			*/
		});
		/*
		return () => {
			window.removeEventListener('scroll', scrollCallBack);
		};
		*/
	}, []);

	const [button, setButton] = useState('');

	const [blogPosts, setBlogPosts] = useState([
		{ title: 'Introduction', id: 1 },
		{ title: 'Timeline', id: 2 },
	]);

	useEffect(() => {
		console.log('useEffect has been called!', button);
	}, [button]);

	useEffect(() => {
		console.log('useEffect has been called!', blogPosts);
	}, [blogPosts]);

	const onYesPress = () => {
		setButton('Yes');
	};
	const onAddPosts = () => {
		setHeaderText(fixedText);
	};

	return (
		<header id="myHeader" className="header">
			<Container>
				<Row>
					<Col xs={3}>
						<center>
							<ComputerIcon />
							<span> Time</span>
						</center>
					</Col>
					<Col xs={6}>
						<center>
							<span> Title{headerText}</span>
						</center>
					</Col>
					<Col xs={3}>
						<center>
							<span>Location</span>
						</center>
					</Col>
				</Row>
				<Row></Row>
			</Container>
		</header>
	);
};
export default Header;
