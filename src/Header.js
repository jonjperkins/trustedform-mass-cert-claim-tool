import React, { Component } from 'react';
import Icon from './Icon';
import './App.css';

class Header extends Component {
	render() {
    	return (
    		<div className={this.props.headerType}>
	    		<div className="icon-position">
	    			<Icon name={this.props.name} className={this.props.className} size={this.props.size} />    					
	    		</div>
	    		<div className={this.props.headerType === "results-header" ? "header-title-results" : "header-title"}>
	    			{ this.props.headerType === "successful-resubmits-header header" &&
	    			 	<h4><span className="number-resubmitted">{this.props.accountsResubmittedArray.length}</span> {this.props.title}</h4>
	    			 }
	    			{ this.props.headerType === "enter-api-header header" &&
	    				<h4>{this.props.title}</h4>
	    			}
	    			{ this.props.headerType === "view-leadconduit-flow header" &&
	    				<h4>{this.props.title}</h4>
	    			}
	    			{ this.props.headerType === "results-header results-header-adjustment" &&
	    				<h4>Results for <span style={{color: "#f58025"}}>{this.props.title}</span></h4>
	    			}
	    		</div>
    		</div>
    	);
    }
}

export default Header;