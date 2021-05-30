import React, { Component, useRef, useEffect, useState } from 'react';
import {
	NavDropdown,
	Nav,
	Navbar,
	Col,
	Row,
	Container,
} from 'react-bootstrap/';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Canvas, useFrame } from 'react-three-fiber';
import Profile from '../profile';
import { gsap } from 'gsap';
import dragonImg from '../../img/dragon.png';
import { useSpring, a } from 'react-spring/three';
import '../../lib/font.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
if (typeof window !== `undefined`) {
	gsap.registerPlugin(ScrollTrigger);
	gsap.core.globals('ScrollTrigger', ScrollTrigger);
	gsap.registerPlugin(TextPlugin);
}

const Intro = React.forwardRef((props, ref) => {
	const SpinningMesh = ({ position, color, speed, args }) => {
		//ref to target the mesh
		const mesh = useRef();

		//useFrame allows us to re-render/update rotation on each frame
		useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

		//Basic expand state
		const [expand, setExpand] = useState(false);
		// React spring expand animation
		const props = useSpring({
			scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
		});
		return (
			<a.mesh
				position={position}
				ref={mesh}
				onClick={() => setExpand(!expand)}
				scale={props.scale}
				castShadow>
				<boxBufferGeometry args={[4, 4, 4]} />
				<meshStandardMaterial color={'#ACD1E9'} />
			</a.mesh>
			//Using Drei box if you want
			// <Box {...props} ref={mesh} castShadow>
			//   <MeshWobbleMaterial
			//     {...props}
			//     attach='material'
			//     factor={0.6}
			//     Speed={1}
			//   />
			// </Box>
		);
	};

	// Effect for moving name
	/*
	useEffect(() => {
		const tl = gsap.timeline();
		gsap.set([nameHolder.current], { autoAlpha: 0 });
		tl.to([nameHolder.current], { autoAlpha: 1, duration: 1 });
		tl.to([nameHolder.current], {
			scrambleText: { text: 'Eric Ng', revealDelay: 0.7, duration: 5 },
		});
		tl.to([nameHolder.current], { top: '-=20', autoAlpha: 0, duration: 2.5 });
		tl.staggerTo([nameHolder.current], 1, {
			left: '-=150',
			autoAlpha: 0,
			ease: 'Elastic.easeIn',
			duration: 2,
		});
    }, []);
    */

	const nameHolder = useRef(); // Reference to the wrapper for names
	const firstRole = useRef(); // Reference to the first role under the names
	const secondRole = useRef(); // Reference to the second role under the names

	useEffect(() => {
		const tl = gsap.timeline();
		gsap.set([nameHolder.current], {
			autoAlpha: 1,
			scaleY: 0,
			transformOrigin: '0% 50%',
		});
		tl.to(
			[nameHolder.current],
			{
				autoAlpha: 1,
				scale: 1,
				transformOrigin: '50% bottom',
				z: 0.1,
				duration: 1,
				scrub: true,
			},
			0
		);
		tl.to(
			[firstRole.current],
			{
				duration: 2,
				text: 'Programmer',
				delay: 1,
				scrub: true,
			},
			0.2
		);
		tl.to([nameHolder.current], {
			autoAlpha: 0,
			transformOrigin: 'center -160px',
			rotation: 170,
			z: 0.1,
			scrub: true,

			scrollTrigger: {
				trigger: [nameHolder.current],
				start: 'top top', // when the top of the trigger hits the top of the viewport
				end: '+=500', // end after scrolling 500px beyond the start
				scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
			},
		});
	}, []);

	return (
		<div>
			<Container style={mainContainer} fluid ref={ref}>
				<Row style={full}>
					<div className="w-50 p-3">
						<Canvas
							colorManagement
							shadowMap
							camera={{ position: [-5, 5, 10], fov: 60 }}>
							{/* This light makes things look pretty */}
							<ambientLight intensity={0.3} />
							{/* Our main source of light, also casting our shadow */}
							<directionalLight
								castShadow
								position={[0, 10, 0]}
								intensity={1.5}
								shadow-mapSize-width={1024}
								shadow-mapSize-height={1024}
								shadow-camera-far={50}
								shadow-camera-left={-10}
								shadow-camera-right={10}
								shadow-camera-top={10}
								shadow-camera-bottom={-10}
							/>
							{/* A light to help illumnate the spinning boxes */}
							<pointLight position={[-10, 0, -20]} intensity={0.5} />
							<pointLight position={[0, -10, 0]} intensity={1.5} />
							<group>
								{/* This mesh is the plane (The floor) */}
								<mesh
									rotation={[-Math.PI / 2, 0, 0]}
									position={[-1, -5, 0]}
									receiveShadow>
									<planeBufferGeometry attach="geometry" args={[100, 100]} />
									<shadowMaterial attach="material" opacity={0.3} />
								</mesh>
								<SpinningMesh
									position={[-1, 0, 0]}
									color="lightblue"
									args={[3, 2, 1]}
									speed={2}
								/>
							</group>
						</Canvas>
					</div>

					<div style={rightContainerWrap}>
						<div style={mainMiniDescript}>
							<div className="namesHolder" ref={nameHolder}>
								<span className="firstName">Eric </span>
								<span className="lastName"> Ng </span>

								<h1 className="firstRole" ref={firstRole}>
									MRMRAORPEG
								</h1>
								<h1 className="secondRole" ref={secondRole}>
									Designer
								</h1>
							</div>
							<KeyboardArrowDownIcon />
						</div>
					</div>
				</Row>
			</Container>
		</div>
	);
});
function animateAnything() {
	/*
	var tl = gsap.timeline(),
		anything = document.getElementById('anything'),
		icon = document.getElementById('anythingIcon'),
		sub = document.getElementById('anythingSub');
	gsap.set([anything, icon], { autoAlpha: 0 });
	tl.to([anything, icon], 0.9, { autoAlpha: 1 });
	tl.to(
		anything,
		2.5,
		{ scrambleText: { text: 'Animate anything', revealDelay: 0.7 } },
		0
	);
	tl.from(sub, 0.5, { top: '-=20', autoAlpha: 0 }, 2.5);
	tl.staggerTo(
		[anything, sub, icon],
		0.6,
		{ left: '-=150', autoAlpha: 0, ease: Power1.easeIn },
		0.1,
		6
	);
    return tl;
    */
}
function Box(props) {
	// This reference will give us direct access to the mesh
	const mesh = useRef();

	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);

	// Rotate mesh every frame, this is outside of React without overhead
	useFrame(() => {
		mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
	});

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={[1, 1, 1]}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}>
			<boxBufferGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	);
}
const full = {
	height: '100%',
};
const nameFont = {
	fontFamily: 'EB Garamond',
};
const mainMiniDescript = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	height: '80%',
};
const mainContainer = {
	margin: 0,
	padding: 0,
	height: '100vh',
	width: '100%',
	background: '#f1efed',
	overflow: 'hidden',
};
const leftContainerWrap = {
	height: '80%',
	width: '60%',
};
const rightContainerWrap = {
	width: 'auto',
};
const dragonWrapper = {
	width: '80%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};
export default Intro;
