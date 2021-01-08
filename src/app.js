import React, { Component } from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TweenMax, TweenLite, SteppedEase, Power3 } from 'gsap';
import {
	Intro,
	Spinner,
	Header,
	Profile,
	Timeline,
	Projects,
	Footer,
} from './lib/common.js';
import { gsap } from 'gsap';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { loading: true, stopSpinAngle: null, stopSpin: false };
		this.spinTween = null;
		this.wheel = null;
	}
	startSpinHandler = () => {
		this.setState({ stopSpin: false });
		this.loopIteration = 0;
		gsap.to(this.spinTween, {
			ease: 'none',
			duration: 0.75,
			timeScale: 1,
		});
	};
	componentDidMount() {
		setTimeout(() => {
			this.setState({ loading: false });
		}, 2000);

		this.spinTween = gsap
			.to(this.wheel, {
				rotation: 360,
				ease: 'none',
				duration: 0.875,
				onRepeat: () => {
					const { stopSpin, stopSpinAngle } = this.state;
					if (this.loopIteration >= 5 && stopSpin) {
						gsap.to(this.spinTween, {
							ease: 'power1.inOut',
							duration: 2 + 360 / stopSpinAngle,
							timeScale: 0,
						});
					}
					this.loopIteration++;
				},
				repeat: -1,
				paused: true,
			})
			.timeScale(0)
			.play();
	}
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

	render() {
		const loading = this.state.loading;
		if (loading) {
			return <Spinner />;
		}
		return (
			<div className="page-container">
				<div className="content-wrap">
					<Header />

					<Intro />
					<Profile />
					<Timeline />

					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
