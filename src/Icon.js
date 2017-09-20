import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.css';
var FontAwesome = require('react-fontawesome');

class Icon extends Component {
	render() {
    	return (
    		<FontAwesome className={this.props.className} name={this.props.name} size={this.props.size} />
    	);
    }
}

export default Icon;