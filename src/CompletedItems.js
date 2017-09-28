import React, { Component } from 'react';
import ChecklistItem from './ChecklistItem';
import './App.css';

class CompletedItems extends Component {
	render() {
    return (
      <div className="list-div"> 
        {this.props.accountsResubmittedArray.length >= 1 &&
          this.props.accountsResubmittedArray.map((account) => 				
            <ChecklistItem 
              account={account}
              name="check-circle" 
              size="2x" 
              className={this.props.className} 
              textColor="dark-text" 
            />
          )
        }
        { this.props.accountsResubmittedArray.length < 1 && 
          <ChecklistItem 
            account="No certificates resubmitted yet" 
            name="check-circle" 
            size="2x" 
            className="grayed-out" 
            textColor="grayed-out" 
          />
        }
  	  </div>
    );
  }
}

export default CompletedItems;
