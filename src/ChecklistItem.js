import React, { Component } from 'react';
import Icon from './Icon';
import './App.css';

import{Row, Col} from 'react-bootstrap';

class CompletedItems extends Component {
	render() {
    	return (				
			<Row>
				<Col md={2}>
					<Icon name={this.props.name} className={this.props.className} size={this.props.size} />    					
				</Col>
				<Col md={10}>
					<div>
						<h5 className={this.props.textColor}>{this.props.account}</h5>
					</div>
				</Col>
			</Row>
    	);
    }
}

export default CompletedItems;