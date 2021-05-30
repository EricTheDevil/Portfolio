import React, { Component } from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Timeline extends Component {
	state = {};
	render() {
		return (
			<div style={bg}>
				<br></br>
				<br></br>
				<center>
					<h1>Education and work experience.</h1>
				</center>
				<hr></hr>
				<VerticalTimeline>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="June 2016"
						iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>
						<h3 className="vertical-timeline-element-title">
							Highschool diploma in Computer Science
						</h3>
						<br></br>
						<h4 className="vertical-timeline-element-subtitle">
							KTA Dendermonde
						</h4>
						<h2 className="vertical-timeline-element-subtitle">
							Dendermonde, Belgium
						</h2>
						<p>User Experience, Visual Design</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="June 2017 - present"
						iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>
						<h3 className="vertical-timeline-element-title">
							Bachelor of Information Technology and Communication
						</h3>
						<br></br>
						<h4 className="vertical-timeline-element-subtitle">
							Turku University of Applied Sciences
						</h4>
						<h2 className="vertical-timeline-element-subtitle">
							Turku, Finland
						</h2>
						<p>User Experience, Visual Design</p>
					</VerticalTimelineElement>
				</VerticalTimeline>
				<br></br>
				<VerticalTimeline>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						date="Jan 2014 - Jun 2017"
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
						<h3 className="vertical-timeline-element-title">
							Part-time Waiter
						</h3>
						<br></br>
						<h4 className="vertical-timeline-element-subtitle">
							Restaurant Hoi Sing
						</h4>
						<h2 className="vertical-timeline-element-subtitle">
							Lebbeke, Belgium
						</h2>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						date="January 2019 - April 2019"
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
						<h3 className="vertical-timeline-element-title">
							Software-Engineer Intern
						</h3>
						<br></br>
						<h4 className="vertical-timeline-element-subtitle">Pilvia oy</h4>
						<h2 className="vertical-timeline-element-subtitle">
							Turku, Finland
						</h2>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						date="January 2020 - April 2020"
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
						<h3 className="vertical-timeline-element-title bounce-in">
							Student Assistant
						</h3>
						<br></br>
						<h4 className="vertical-timeline-element-subtitle">
							Turku University of Applied Sciences
						</h4>
						<h2 className="vertical-timeline-element-subtitle">
							Turku, Finland
						</h2>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						date="June 2020 - August 2020"
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
						<h3 className="vertical-timeline-element-title">Student Intern</h3>
						<br></br>
						<h4 className="vertical-timeline-element-subtitle">
							Turku University of Applied Sciences
						</h4>
						<h2 className="vertical-timeline-element-subtitle">
							Turku, Finland
						</h2>
					</VerticalTimelineElement>
				</VerticalTimeline>
				<br></br>
			</div>
		);
	}
}
const bg = {
	background: '#f1efed',
};
const test = {
	margin: 0,
	padding: 0,
	maxWidth: '100%',
	height: '100vh',
	width: '100%',
	overflow: 'hidden',
	border: '5px solid black',
};
const imgBg = {
	maxWidth: '100%',
	height: 'auto',
	width: 'auto',
};
export default Timeline;
