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
	    		<div className="header-title">
	    			<h4>{this.props.title}</h4>
	    		</div>
    		</div>
    	);
    }
}

export default Header;