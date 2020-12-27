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
import './header.css';
function Header() {
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
	// Effect for moving dragon
	useEffect(() => {
		const tl = gsap.timeline({ repeat: 50, repeatDelay: 1 });
		tl.to('.dragon', {
			yPercent: 50,
			top: '50%',
			ease: 'slow',
			duration: 1,
		});
		tl.to('.dragon', {
			yPercent: 0,
			top: '0%',
			ease: 'slow',
			duration: 1,
		});
		tl.to('.dragon', {
			xPercent: 20,
			left: '20%',
			ease: 'slow',
			duration: 1,
		});
		tl.to('.dragon', {
			xPercent: 0,
			left: '0%',
			ease: 'slow',
			duration: 1,
		});
	}, []);

	// Effect for moving name
	useEffect(() => {
		const tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });
		tl.to('.firstName', {
			xPercent: 0,
			yPercent: 0,
			left: '50%',
			top: '50%',
			ease: 'slow',
			duration: 1,
		});
	}, []);

	return (
		<Router>
			<Container style={mainContainer} fluid>
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
						<Container>
							<Row>
								<Col xs={10}></Col>
								<Col xs={2}>
									<Navbar expand="lg">
										<Navbar.Brand Link to="/">
											1
										</Navbar.Brand>
										<Navbar.Toggle aria-controls="basic-navbar-nav" />
										<Navbar.Collapse id="basic-navbar-nav">
											<Nav className="mr-auto">
												<Nav.Link href="#home">Home</Nav.Link>
												<Nav.Link href="#link">Link</Nav.Link>
												<NavDropdown title="Dropdown" id="basic-nav-dropdown">
													<NavDropdown.Item href="#link">2</NavDropdown.Item>
													<NavDropdown.Item href="#action/3.2">
														3 action
													</NavDropdown.Item>
													<NavDropdown.Item href="#action/3.3">
														Something
													</NavDropdown.Item>
													<NavDropdown.Divider />
													<NavDropdown.Item href="#action/3.4">
														Separated link
													</NavDropdown.Item>
												</NavDropdown>
											</Nav>
										</Navbar.Collapse>
									</Navbar>
								</Col>
							</Row>
						</Container>
						<div style={mainMiniDescript}>
							<span className="firstName">Eric </span>{' '}
							<span className="lastName"> Ng </span>
						</div>
					</div>
					<div>
						<Link to="/">home</Link>
						<Link to="/profile">notes</Link>
						<Link to="/time">users</Link>
					</div>
				</Row>
			</Container>
			<Switch>
				<Route path="/home">
					<Profile />
				</Route>
				<Route path="/users">
					<Header />
				</Route>
			</Switch>
		</Router>
	);
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
export default Header;
