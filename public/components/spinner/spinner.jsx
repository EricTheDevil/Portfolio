import React, { Component, useRef, useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';

import './spinner.css';
class Spinner extends Component {
	render() {
		return (
			<div className="spinner-wrapper">
				<CircularProgress className="spinner-icon" color="secondary" />
			</div>
		);
	}
}
export default Spinner;
