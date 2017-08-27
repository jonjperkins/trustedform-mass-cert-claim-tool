import React, { Component } from 'react';
import './App.css';
import moment from 'moment';

import { Form, FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";

class Main extends Component {
	constructor() {
		super();
		this.state = {
			tf_object_array: "",
			api_key: "",
			message: "",
			trustedform_resubmission_array: []
		}
		//this.handleUpdateUrl = this.handleUpdateUrl.bind(this);
		this.handleUpdateAPIKey = this.handleUpdateAPIKey.bind(this);
		this.handleFetchLeadsWithTrustedFormErrors = this.handleFetchLeadsWithTrustedFormErrors.bind(this)
		this.handleTrustedFormClaims = this.handleTrustedFormClaims.bind(this)


		// this.handleUpdateBeginDate = this.handleUpdateBeginDate.bind(this);
		// this.handleUpdateEndDate = this.handleUpdateEndDate.bind(this);
	}
	handleUpdateAPIKey(event) {
		this.setState({ api_key: event.target.value });
	}
	handleFetchLeadsWithTrustedFormErrors() {
		//begin date --> moment().subtract(3, 'days').format('YYYY-MM-DD')
		var URL = "https://next.leadconduit.com/events?recipient_id=535e9f8c94149d05b5000002&type=recipient&outcome=error&start=" + "2017-08-01" + "&end=" + moment().format('YYYY-MM-DD') + ""
		var request = new Request("http://localhost:8080/trusted-form-errors", {
			method: "POST",
			headers: new Headers({
				"Accept": "application/json",
				"Content-Type": "application/json"
			}),
			body: JSON.stringify({ URL: URL, api_key: this.state.api_key })
		});
		fetch(request)
		.then((response) => {
			response.text().then(text => {
				console.log(text)
				var tf_object_array = JSON.parse(text)
				console.log(tf_object_array[0].lead_id)
				if (this.state.tf_object_array.response === "none" ) {
					this.setState({ message: "There have been no TrustedForm errors in the " + tf_object_array[0].account + "in the last 3 days."})
				} else {
					var trustedform_resubmission_array = []
					for (var i = 0; i < tf_object_array.length; i++) {
						trustedform_resubmission_array.push(tf_object_array[i].trustedform_cert_url);
						console.log('push: ' + tf_object_array[i].trustedform_cert_url)
					}
					this.setState({trustedform_resubmission_array: trustedform_resubmission_array});
					console.log('trustedform resubmit array: ' + this.state.trustedform_resubmission_array)	
				}			
			});
		});
	}
	handleTrustedFormClaims() {
		console.log('tf resubmit array from another function: ' + this.state.trustedform_resubmission_array);
	}
	// handleTrustedFormClaims() {
	// 	var trustedform_resubmission_array = []
	// 	console.log(this.state.tf_object_array[0].account)
	// 	var tf_object_array = this.state.tf_object_array
	// 	for (var i = 0; i < tf_object_array.length; i++) {
	// 		trustedform_resubmission_array.push(tf_object_array[i].trustedform_cert_url);
	// 		console.log('push: ' + tf_object_array[i].trustedform_cert_url)
	// 	}
	// 	this.setState({trustedform_resubmission_array: trustedform_resubmission_array})
	// 	console.log("hi from resubmit array ids: " + this.state.trustedform_resubmission_array)
	// 	console.log('account: ' + tf_object_array)
	// }
	// handleTrustedFormClaims() {
	// 	var trustedform_resubmission_array = []
	// 	console.log(typeof this.state.tf_object_array)
	// 	var tf_object_array = this.state.tf_object_array
	// 	for (var i = 0; i < tf_object_array.length; i++) {
	// 		trustedform_resubmission_array.push(tf_object_array[i].trustedform_cert_url);
	// 		console.log('push: ' + tf_object_array[i].trustedform_cert_url)
	// 	}
	// 	this.setState({trustedform_resubmission_array: trustedform_resubmission_array})
	// 	console.log("hi from resubmit array ids: " + this.state.trustedform_resubmission_array)
	// 	console.log('account: ' + tf_object_array)
	// }
  	render() {
    	return (
    		<div>
				<div className="App-header">
	          		<img src="https://activeprospect.com/wp-content/themes/activeprospect/assets/images/logo-trustedform--white.svg" className="App-logo" alt="logo" />
	          		<h2>Mass Certificate Claiming Tool</h2>
	          		<h5><em>When there are a ton of errors and you <span className="green">'just can't even'</span>.</em></h5>
	        	</div>
	        	<p className="App-intro">
	          		<Form>
						<FormGroup>
							
							<p>
								<strong>API Key:</strong>
								<FormControl name="api_key" className="input extra-margins" type="text" required onChange={this.handleUpdateAPIKey}></FormControl>
							</p>
							<h6 className="smaller-h6"><em>Find API key by clicking <strong>Account Settings</strong> button in the top right corner of the <a href="https://sso.activeprospect.com/account" target="_blank" rel="noopener noreferrer">account page</a>.</em></h6>
						</FormGroup>
					</Form>
					<button className="test-next-button" style={{ textDecoration: "none" }} disabled={(!this.state.api_key)} onClick={this.handleFetchLeadsWithTrustedFormErrors}>Submit</button>
	        	</p>
	        	{(this.state.trustedform_resubmission_array.length > 0 ) && 
	        		<button className="test-next-button" style={{ textDecoration: "none" }} onClick={this.handleTrustedFormClaims}>Set tf certs array</button>
	        	}
        	</div>
  		)
    }
};

export default Main;