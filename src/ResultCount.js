import React, { Component } from 'react';
import Icon from './Icon';
import './App.css';
import 'font-awesome/css/font-awesome.css';

import{Row, Col} from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');

class ResultCount extends Component {
	render() {
    	return (
            <div>
				<div className="numerical-count-box">
					<p className="numerical-count">{this.props.number}</p>
				</div>
				<h4 className={this.props.className}>{this.props.text}</h4>
            </div>

		);
    }
}

export default ResultCount;