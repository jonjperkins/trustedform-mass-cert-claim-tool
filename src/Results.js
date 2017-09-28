import React, { Component } from 'react';
import ResultCount from './ResultCount';
import './App.css';

import{Row, Col} from 'react-bootstrap';

class Results extends Component {
	render() {
    	return (
    		<Row>
    			<Col md={6} style={{textAlign: "center"}}>
    				<ResultCount
                    className="successful" 
                    number={this.props.numberSuccessfulResubmits} 
                    text="Successful Claims" 
                    />
    			</Col>
    			<Col md={6} style={{textAlign: "center"}}>
    				<ResultCount 
                    className="unsuccessful" 
                    number={this.props.numberUnsuccessfulResubmits} 
                    text="Unsuccessful Claims"
                    />
    			</Col>
    		</Row>
		);
    }
}

export default Results;