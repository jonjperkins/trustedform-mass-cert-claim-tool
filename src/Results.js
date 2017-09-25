import React, { Component } from 'react';
import Icon from './Icon';
import './App.css';
import 'font-awesome/css/font-awesome.css';

import{Row, Col} from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');

class Results extends Component {
	render() {
    	return (
    		<div>
    			<h4>Number of Successful Claims: {this.props.numberSuccessfulResubmits}</h4>
    			<h4>Number of Unsuccessful Claims: {this.props.numberUnsuccessfulResubmits}</h4>
    		</div>

		);
    }
}

export default Results;