import React, { Component, useRef, useState } from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Intro,
	Spinner,
	Header,
	Profile,
	Timeline,
	Projects,
	Main,
	Footer,
} from './lib/common.js';
import { gsap, TimelineLite } from 'gsap';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };

		this.tl = new TimelineLite({});
		this.introRef = null;
		this.headerRef = null;
		this.headerText = null;
	}

	componentDidMount() {
		console.log(this.headerRef);
		this.headerRef.headerText = 'E';
		console.log();

		this.titleTween = gsap.to(this.headerRef, {
			backgroundColor: '#f1efed',
			color: '#111f28',
			z: 0.1,

			scrub: true,
			scrollTrigger: {
				trigger: [this.introRef],
				start: 'bottom 10%', // when the top of the trigger hits the top of the viewport
				end: 'bottom bottom', // end after scrolling 500px beyond the start
				scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
			},
		});
	}
	render() {
		const loading = this.state.loading;
		/*
		if (loading) {
			return <Spinner />;
		}
		*/
		return (
			<div className="page-container">
				<div className="content-wrap">
					<Header ref={(div) => (this.headerRef = div)} />

					<Intro ref={(div) => (this.introRef = div)} />
					<Profile />
					<Timeline />

					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
