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

if (typeof window !== `undefined`) {
	gsap.registerPlugin(ScrollTrigger);
	gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const Main = () => {
	return <div></div>;
};

export default Main;
