import React, { Component } from 'react';
import Icon from './Icon';
import ChecklistItem from './ChecklistItem';
import './App.css';
import 'font-awesome/css/font-awesome.css';

import{Row, Col} from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');

class CompletedItems extends Component {
	componentDidMount() {
		console.log(typeof this.props.accountsResubmittedArray);
	}
	render() {
    	return (
    		<div className="list-div"> 
    			
	    		{	this.props.accountsResubmittedArray.map((account) => 				
  						<ChecklistItem account={account} name="check" size="2x" className="checkmarks"/>
  					)
	    		}
	    		
    		</div>
    	);
    }
}

export default CompletedItems;