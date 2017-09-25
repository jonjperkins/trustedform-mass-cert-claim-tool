import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.css';

var FontAwesome = require('react-fontawesome');

class ViewFlow extends Component {
	render() {
    	return (
    		<a href={this.props.url} className="view-flow-div" target="_blank">
    			<div style={{height: "100%"}}>
    				<FontAwesome className={this.props.className} name={this.props.name} size={this.props.size}/>
    				<h4 className="view-flow-text">{this.props.text}</h4>
    			</div>
    		</a>
    	);
    }
}

export default ViewFlow;