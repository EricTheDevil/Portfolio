import React, { Component, useRef, useEffect, useState } from 'react';
import {
	NavDropdown,
	Nav,
	Navbar,
	Col,
	Row,
	Container,
} from 'react-bootstrap/';
import {
	Intro,
	Spinner,
	Header,
	Profile,
	Timeline,
	Projects,
	Footer,
} from '../../lib/common.js';
import { gsap } from 'gsap';
import '../../lib/font.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
if (typeof window !== `undefined`) {
	gsap.registerPlugin(ScrollTrigger);
	gsap.core.globals('ScrollTrigger', ScrollTrigger);
}
const Main = () => {
	const headerRef = useRef(); // Reference to the second role under the names

	const introRef = useRef(); // Reference to the second role under the names
	const profileRef = useRef(); // Reference to the second role under the names
	const timeLineRef = useRef(); // Reference to the second role under the names

	useEffect(() => {
		const tl = gsap.timeline();
		tl.to(
			[headerRef.current],
			{
				backgroundColor: 'white',
				autoAlpha: 1,

				scrollTrigger: {
					trigger: [introRef.current],
					start: 'top top', // when the top of the trigger hits the top of the viewport
					end: 'top bottom', // end after scrolling 500px beyond the start
					scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
				},
			},
			0
		);
	}, []);

	return (
		<div className="page-container">
			<div className="content-wrap">
				<Header ref={headerRef} />

				<Intro ref={introRef} />
				<Profile ref={profileRef} />
				<Timeline ref={timeLineRef} />

				<Footer />
			</div>
		</div>
	);
};

export default Main;
