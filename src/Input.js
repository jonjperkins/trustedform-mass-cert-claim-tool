import React, { Component } from 'react';
import './App.css';

import{Col, Row, FormControl, Button} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.css';
var FontAwesome = require('react-fontawesome');

class Input extends Component {
	render() {
    	return (
    			<div style={{height: "100%"}}>
                    <Row>
                        <Col xs={8} xsOffset={2}>
                            <h5 style={{textAlign: "center", marginTop: "90px"}} className="dark-text">Enter the API Key for the Relevant Account and Click Resubmit Below.</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} xsOffset={3}>
    				        <FormControl autoFocus name="api_key" className="input" type="text" required onChange={this.props.handleUpdateAPIKey}></FormControl>
                            <p style={{color: "#FE2533"}}>{this.props.errorMessage}</p>
                        </Col>
                    </Row>
                    <Row> 
                        <Col xs={6} xsOffset={3} style={{textAlign: "center", marginTop: "20px"}}>
                            <Button disabled={!this.props.api_key} onClick={this.props.handleFetchLeadsWithTrustedFormErrors}>Resubmit</Button>
                        </Col>
                    </Row>
                </div>
    	);
    }
}

export default Input;