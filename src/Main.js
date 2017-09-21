import React, { Component } from 'react';
import Icon from './Icon';
import Header from './Header';
import CompletedItems from './CompletedItems';
import './App.css';

import moment from 'moment';
import{Grid, Row, Col} from 'react-bootstrap';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			tf_object_array: "",
			api_key: "",
			message: "",
			trustedform_resubmission_array: "",
			account_name: "test",
			number_successful_resubmits: "",
			number_unsuccessful_resubmits: "",
			accounts_resubmitted_array: ['ActiveProspect Internal Sandbox', 'test a very large and long account name a little longer', 'next', 'third', 'fourth', 'fifth', 'sixth', 'seven', 'eight']
		}
		this.handleUpdateAPIKey = this.handleUpdateAPIKey.bind(this);
		this.handleFetchLeadsWithTrustedFormErrors = this.handleFetchLeadsWithTrustedFormErrors.bind(this)
	}
	handleUpdateAPIKey(event) {
		this.setState({ api_key: event.target.value });
	}
	handleFetchLeadsWithTrustedFormErrors() {
		//begin date --> moment().subtract(3, 'days').format('YYYY-MM-DD')
		var URL = "https://next.leadconduit.com/events?recipient_id=535e9f8c94149d05b5000002&type=recipient&outcome=error&start=" + "2017-09-10" + "&end=" + moment().format('YYYY-MM-DD') + ""
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
				console.log('this ' + text)
				var tf_object_array = JSON.parse(text)
				console.log(tf_object_array[0])
				if (this.state.tf_object_array.response === "none" ) {
					this.setState({ message: "There have been no TrustedForm errors in the " + tf_object_array[0].account + "in the last 3 days."})
				} else {
					var trustedform_array = []
					for (var i = 0; i < tf_object_array.length; i++) {
						trustedform_array.push(tf_object_array[i]);
						console.log('push: ' + tf_object_array[i])
					}
					this.setState({trustedform_resubmission_array: trustedform_array});
					var number_successful_resubmits = 0;
					var number_unsuccessful_resubmits = 0;
    				this.state.trustedform_resubmission_array.forEach(function(element) {
    					if (element.outcome === "success") {
    						number_successful_resubmits += 1;
    					} else {
    						number_unsuccessful_resubmits += 1;
    					}
    				})
    				this.setState({number_successful_resubmits: number_successful_resubmits});
    				this.setState({number_unsuccessful_resubmits: number_unsuccessful_resubmits});
				}			
			});
		});
	}
  	render() {
    	return (
    		<Grid fluid style={{ paddingLeft: "2px", paddingRight: "2px", marginTop: "30px" }}>
    			<Row>
    				<Col xs={12} md={3} style={{ paddingRight: "2px"}} className="left">
						<Header name="list" className="icons" size="3x" headerType="successful-resubmits-header header" accountsResubmittedArray={this.state.accounts_resubmitted_array} title="Resubmitted" />
    					{ this.state.accounts_resubmitted_array.length > 0 &&
    						<CompletedItems accountsResubmittedArray={this.state.accounts_resubmitted_array} name="check" size="2x" className="checkmarks"/>
    					}
    				</Col>
    				<Col xs={12} md={6} style={{ paddingRight: "5px", paddingLeft: "5px"}} className="center">
    					<Header name="code" className="icons" size="3x" headerType="enter-api-header header" title="Resubmit TrustedForm Certificates"/>
    				</Col>
    				<Col xs={12} md={3} style={{ paddingLeft: "2px"}} className="right">
    					<Header name="code-fork" className="icons" size="3x" headerType="view-leadconduit-flow header" title="Resubmission Flow" />
    				</Col>
    			</Row>
    			<Row>
    				<Col xs={12} style={{ paddingRight: "5px", paddingLeft: "5px"}}>
    					<Header name="file" className="icons" size="3x" headerType="results-header results-header-adjustment" title={this.state.account_name}/>
    				</Col>
    			</Row>
    		</Grid>



    		/* <div>
				<div className="App-header">
	          		<img src="https://activeprospect.com/wp-content/themes/activeprospect/assets/images/logo-trustedform--white.svg" className="App-logo" alt="logo" />
	          		<h2>Mass Certificate Claiming Tool</h2>
	          		<h5><em>When there are a ton of errors and you <span className="green">"just can't even"</span>.</em></h5>
	        	</div>
	        	<p className="App-intro">
	          		<Form>
						<FormGroup>
							
							<p>
								<strong>API Key:</strong>
								<FormControl name="api_key" className="input extra-margins" type="text" required onChange={this.handleUpdateAPIKey}></FormControl>
							</p>
						</FormGroup>
					</Form>
				</p>
				{(this.state.trustedform_resubmission_array.length === 0 ) && 
					<button className="test-next-button" style={{ textDecoration: "none" }} disabled={(!this.state.api_key)} onClick={this.handleFetchLeadsWithTrustedFormErrors}>Submit</button>
	        	}

	        	{(this.state.trustedform_resubmission_array.length > 0 ) && 
	        		<div>
		        		<div>
		        			<p>There were <strong>{this.state.trustedform_resubmission_array.length}</strong> TrustedForm errors in this <strong>{this.state.account_name}</strong> account in the last 3 days.</p>
		        		</div>
		        		<div>
		        			<h3>TF server responses counter</h3>
			        		<p>Number of successful resubmits: {this.state.number_successful_resubmits}</p>
			        		<p>Number of unsuccessful resubmits: {this.state.number_unsuccessful_resubmits}</p>
		        		</div>

		        	</div>
		        }
        	</div> */

  		)
    }
};

export default Main;