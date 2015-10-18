import React from 'react';
import ReactDOM from 'react-dom';

var MapTrackMulti = React.createClass({
	getDefaultProps: function() {
		return {
			name : 'MapTrackMulti'
		};
	},
	getInitialState : function() {
		return { loading : true };
	},
	componentDidMount : function() {
    	//AppStore.addChangeListener(this._onChange.bind(this));
  	},
	componentWillUnmount : function(){
    	//AppStore.removeChangeListener(this._onChange);
  	},
	render : function() {
		return (
			<div><h1>This is {this.props.name}</h1></div> 
		);
	}
});

