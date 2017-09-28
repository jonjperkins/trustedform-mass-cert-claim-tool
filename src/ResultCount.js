import React, { Component } from 'react';
import './App.css';

class ResultCount extends Component {
	render() {
        var number = this.props.number === "" ? "0" : this.props.number
    	return (
            <div>
				<div className="numerical-count-box">
					<p className={this.props.number === "" ? "gray-numerical-count" : "numerical-count"}>
                        {number}
                    </p>
				</div>
				<h4 className={this.props.className}>{this.props.text}</h4>
            </div>
		);
    }
}

export default ResultCount;