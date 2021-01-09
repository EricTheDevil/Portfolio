import React, { Component } from 'react';
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

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ loading: false });
		}, 2000);
	}

	render() {
		const loading = this.state.loading;
		if (loading) {
			return <Spinner />;
		}
		return <Main />;
	}
}

export default App;
