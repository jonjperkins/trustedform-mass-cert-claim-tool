import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.css';

var FontAwesome = require('react-fontawesome');

class ViewFlow extends Component {
	render() {
    	return (
    		<a href="https://next.leadconduit.com/events?source_id=59aec2571486a71874fb82ac&type=source" className="view-flow-div" target="_blank">
    			<div style={{height: "242px"}}>
    				<FontAwesome className={this.props.className} name={this.props.name} size={this.props.size} />
    				<h4 className="view-flow-text">Click here to visit the TrustedForm Resubmission flow</h4>
    			</div>
    		</a>
    	);
    }
}

export default ViewFlow;