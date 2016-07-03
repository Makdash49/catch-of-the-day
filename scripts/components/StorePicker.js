/*
	StorePicker
	This will let us make <StorePicker/>
*/
import React from 'react';
import { Navigation } from 'react-router'
import h from '../helpers';
import reactMixin from 'react-mixin';

class StorePicker extends React.Component {

	goToStore(event) {
		event.preventDefault();
		// get the data from the input
		console.log(this);
		var storeId = this.refs.storeId.value;
		//this.history.pushState(null, '/store/' + storeId);
		this.transitionTo('/store/' + storeId);
	}
	render() {
		console.log(this);
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input type="text" ref="storeId" defaultValue={h.getFunName()} required />
				<input type="Submit"/>
			</form>
		)
	}	
}

reactMixin.onClass(StorePicker, Navigation);

export default StorePicker; 