import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

import UIActions from '../actions/UIAction';
import GroupStore from '../stores/GroupStore';
import GroupMember from './groupmember.jsx!';

export default class Group extends React.Component {
	constructor(props) {
		super(props);
		this.state = { open: this.props.focus };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log('Group handleClick');
		UIActions.setFocusGroup(this.props.group.gid);
		this.setState( { open : !this.state.open } );
	}

	componentWillReceiveProps(props) {
		if( ! props.focus && this.state.open ) {
			this.setState( { open: false } );
		}
	}

	shouldComponentUpdate(nextProps,nextState) {
		return ( nextProps.focus != this.props.focus || nextState['open'] != this.state.open);
	}

	render() {
		if( this.state.open) {
			var rows = [];
			var members = GroupStore.getGroupMembers(this.props.group.gid);
			if( members != null ) {
				console.log('Group has ' + members.length + ' members');
				members.forEach(function(member){
					rows.push(<li className="list-group-item" style={GroupStyles.item} key={member.uid}><GroupMember member={member} /></li>)
				});
			} else {
				rows.push(<li className="list-group-item" style={GroupStyles.item}><span>...</span></li>);
			}
			return(
				<div style={GroupStyles.wrapper}>
					<a href="#" className="btn btn-block btn-primary" role="button" style={GroupStyles.active} onClick={this.handleClick}>
						<i className="fa fa-users fa-fw"></i> {this.props.group.name}<i className="fa fa-caret-square-o-up fa-fw pull-right" style={GroupStyles.signal}></i>
					</a>
					<ul className="list-group">
					{ rows }
					</ul>
				</div>
			);
		} else if( this.props.focus ) {
			return(
				<div style={GroupStyles.wrapper}>
					<a href="#" className="btn btn-block btn-primary" role="button" style={GroupStyles.active} onClick={this.handleClick}>
						<i className="fa fa-users fa-fw"></i> {this.props.group.name}<i className="fa fa-caret-square-o-right fa-fw pull-right" style={GroupStyles.signal}></i>
					</a>
				</div>
			);
		} else {
			return(
				<div style={GroupStyles.wrapper}>
					<a href="#" className="btn btn-block" role="button" style={GroupStyles.normal} onClick={this.handleClick}>
						<i className="fa fa-users fa-fw"></i> {this.props.group.name}<i className="fa fa-caret-square-o-right fa-fw pull-right" style={GroupStyles.signal}></i>
					</a>
				</div>
			);
		}
	}
}

var GroupStyles = {
	wrapper: {
		margin: 0,
		padding: 0,
	},
	normal: {
		textAlign: 'left',
		paddingLeft: '15px',
		fontSize: '100%',
	},
	active: {
		textAlign: 'left',
		paddingLeft: '15px',
		fontSize: '125%',
	},
	signal: {
	},
	item: {
		margin: 0,
		padding: 0,
	},
};


