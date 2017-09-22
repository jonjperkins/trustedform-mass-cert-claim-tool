import React, { Component } from 'react';
import Icon from './Icon';
import './App.css';
import 'font-awesome/css/font-awesome.css';

import{Row, Col} from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');

class CompletedItems extends Component {
	render() {
    	return (
    		<div style={{textOverflow: "clip", overflowY: "scroll", overflowX: "hidden", height: "242px", marginLeft: "-2px", paddingLeft: "10px"}}>
    			
	    		{	

	    			this.props.accountsResubmittedArray.map((account) =>	    				
  						<Row>
  							<Col md={2}>
	    						 <Icon name={this.props.name} className={this.props.className} size={this.props.size} />    					
	    					</Col>
	    					<Col md={10}>
	    						<div>
	    							<h5 className="dark-text">{account}</h5>
	    						</div>
	    					</Col>
  						</Row>
	    					// <div className="icon-position">
	    					// 	<Icon name={this.props.name} className={this.props.className} size={this.props.size} />    					
	    					// </div>
	    					// <div className="account-name-checklist">
	    					// 	<h4>{account}</h4>
	    					// </div>
    						
				




  					)
	    		}
	    		
    		</div>
    	);
    }
}

export default CompletedItems;