import React, { Component } from 'react';
import Icon from './Icon';
import './App.css';
import 'font-awesome/css/font-awesome.css';

import{Row, Col} from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');

class ResultCount extends Component {
	render() {
        var number = this.props.number === "" ? "0" : this.props.number
    	return (
            <div>
				<div className="numerical-count-box">
					<p className={this.props.number === "" ? "gray-numerical-count" : "numerical-count"}>
                        {number}
                    </p>
				</div>
				<h4 className={this.props.className}>{this.props.text}</h4>
            </div>

		);
    }
}

export default ResultCount;