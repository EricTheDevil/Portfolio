import React, { Component } from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TweenMax, TweenLite, SteppedEase, Power3 } from 'gsap';
import { Header, Profile, Timeline, Projects, Footer } from './lib/common.js';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"


class App extends Component {
	constructor(props) {
		super(props);
		// reference to the DOM node
		this.myElement = null;
		// reference to the animation
		this.myTween = null;
	}

	componentDidMount() {
		// use the node ref to create the animation
		/* this.myTween = TweenMax.to(
         this.myElement, 
         0.8, 
         {
           opacity: 1,
           y: -20,
           ease: Power3.easeOut
         }
       );
       

         var i = document.documentElement.offsetHeight;
         TweenLite.to(".box", 10, {y: i , ease:SteppedEase.config(i/2)});

   
       /*if (window.pageYOffset >= this.myRefII.current.clientHeight &&
         Math.round((document.documentElement.scrollTop + window.innerHeight))
         < document.documentElement.scrollHeight - 72) {
           this.setState({ trueOrNot: true });
         } else {
           this.setState({ trueOrNot: false });
         }
       }
       */
		/*TweenMax.to(".box", 1, {
         y: function(index, target) {
           console.log(index, target);
           return (index + 1) * 500 // 100, 200, 300
         }
       })
       */
	}
	render() {

		return (
			<div className="page-container">
				<div className="content-wrap">
					<Header />
					<Profile />
					<Timeline />
					<Footer />
				</div>
			</div>

		);
	}
}

export default App;
